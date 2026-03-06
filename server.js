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

// Simple rule-based responses for demo purposes
const getAIResponse = (message) => {
  const lowerMsg = message.toLowerCase();
  
  if (lowerMsg.includes('java')) {
    return 'Java is a popular object-oriented programming language known for its "write once, run anywhere" capability. It is widely used for building enterprise applications, Android apps, and web services. Key features include strong typing, automatic memory management, and a vast ecosystem of libraries.';
  }
  if (lowerMsg.includes('python')) {
    return 'Python is a versatile, high-level programming language known for its readability and simplicity. It is widely used in data science, web development, automation, and AI/ML. Python has a rich ecosystem of libraries like NumPy, Pandas, and TensorFlow.';
  }
  if (lowerMsg.includes('react') || lowerMsg.includes('javascript')) {
    return 'React is a JavaScript library for building user interfaces, developed by Facebook. It uses a component-based architecture and virtual DOM for efficient rendering. JavaScript is the language of the web, essential for frontend development.';
  }
  if (lowerMsg.includes('data structure') || lowerMsg.includes('algorithm')) {
    return 'Data structures (arrays, linked lists, trees, graphs) and algorithms are fundamental to computer science. They help organize data efficiently and solve problems optimally. Common topics include sorting, searching, and dynamic programming.';
  }
  if (lowerMsg.includes('hello') || lowerMsg.includes('hi')) {
    return 'Hello! I am siscode.ai, your AI learning assistant. I can help you with programming questions, explain concepts, and guide you through your learning journey. What would you like to learn today?';
  }
  if (lowerMsg.includes('api')) {
    return 'APIs (Application Programming Interfaces) allow different software systems to communicate. REST APIs use HTTP methods (GET, POST, PUT, DELETE) and JSON data format. They are essential for building modern web and mobile applications.';
  }
  if (lowerMsg.includes('database') || lowerMsg.includes('sql')) {
    return 'Databases store and manage data. SQL databases (MySQL, PostgreSQL) use structured tables and relationships. NoSQL databases (MongoDB) offer flexibility for unstructured data. Understanding both is valuable for full-stack development.';
  }
  if (lowerMsg.includes('help')) {
    return 'I can help you with:\n- Programming languages (Java, Python, JavaScript)\n- Web development (React, HTML, CSS)\n- Data structures and algorithms\n- Database concepts\n- API development\nWhat topic would you like to explore?';
  }
  
  return `That's an interesting question about "${message}". As your AI learning assistant, I'm here to help you understand programming and technology concepts. Could you provide more details about what specific aspect you'd like to learn?`;
};

// Chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    console.log('Received message:', message);

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Get AI response
    const aiResponse = getAIResponse(message);

    console.log('AI Response:', aiResponse);
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
