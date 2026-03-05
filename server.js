import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// HuggingFace API configuration
const HF_API_TOKEN = process.env.HUGGINGFACE_API_TOKEN;
const HF_API_URL = 'https://api-inference.huggingface.co/models/LiquidAI/LFM2.5-1.2B-Instruct';

// Chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Call HuggingFace API using fetch
    const response = await fetch(HF_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${HF_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        inputs: message,
      }),
    });

    const data = await response.json();

    // Check if model is still loading
    if (data.error && data.error.includes('currently loading')) {
      const estimatedTime = data.estimated_time || 20;
      return res.status(503).json({
        error: 'Model is loading',
        message: `The AI model is currently loading. Please try again in ${Math.ceil(estimatedTime)} seconds.`,
        estimated_time: estimatedTime,
      });
    }

    // Check for other errors
    if (!response.ok || data.error) {
      console.error('HuggingFace API error:', data);
      return res.status(500).json({
        error: 'Failed to get response from AI model',
        details: data.error || 'Unknown error',
      });
    }

    // Extract the generated text from the response
    let aiResponse = '';
    if (Array.isArray(data) && data.length > 0) {
      aiResponse = data[0].generated_text || '';
    } else if (data.generated_text) {
      aiResponse = data.generated_text;
    } else if (typeof data === 'string') {
      aiResponse = data;
    } else {
      aiResponse = 'I apologize, but I could not generate a response at this time.';
    }

    res.json({ response: aiResponse });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: error.message,
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`API available at http://localhost:${PORT}/api/chat`);
});
