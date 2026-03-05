import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { LoginPromptModal } from '../components/LoginPromptModal';
import { courses, features } from '../data/courses';
import { useAuthStore } from '../store/authStore';

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthStore();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCourseClick = () => {
    if (isAuthenticated) {
      navigate('/dashboard');
    } else {
      setIsModalOpen(true);
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'difficulty-beginner';
      case 'Intermediate':
        return 'difficulty-intermediate';
      case 'Advanced':
        return 'difficulty-advanced';
      default:
        return 'difficulty-beginner';
    }
  };

  return (
    <div className="landing-page">
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Upgrade Your Skills With<br />
            <span className="gradient-text">Industry Level Courses</span>
          </h1>
          <p className="hero-description">
            Master programming and technology skills through structured courses designed by industry experts. 
            Learn at your own pace with hands-on projects and real-world applications.
          </p>
          <div className="hero-actions">
            <button 
              className="btn btn-primary btn-large"
              onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Browse Courses
            </button>
            {!isAuthenticated && (
              <button 
                className="btn btn-outline btn-large"
                onClick={() => navigate('/register')}
              >
                Get Started Free
              </button>
            )}
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-card">
            <div className="hero-card-icon">💻</div>
            <div className="hero-card-text">
              <span>Learn Coding</span>
              <small>Start your journey</small>
            </div>
          </div>
          <div className="hero-card hero-card-2">
            <div className="hero-card-icon">🚀</div>
            <div className="hero-card-text">
              <span>Build Projects</span>
              <small>Hands-on experience</small>
            </div>
          </div>
          <div className="hero-card hero-card-3">
            <div className="hero-card-icon">🏆</div>
            <div className="hero-card-text">
              <span>Get Certified</span>
              <small>Showcase skills</small>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose SkillForge?</h2>
            <p>Everything you need to accelerate your learning journey</p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section id="courses" className="courses-section">
        <div className="container">
          <div className="section-header">
            <h2>Popular Courses</h2>
            <p>Explore our most in-demand courses taught by industry experts</p>
          </div>
          <div className="courses-grid">
            {courses.map((course) => (
              <div 
                key={course.id} 
                className="course-card"
                onClick={handleCourseClick}
              >
                <div className="course-thumbnail">
                  <img src={course.thumbnail} alt={course.title} />
                  <span className={`course-difficulty ${getDifficultyColor(course.difficulty)}`}>
                    {course.difficulty}
                  </span>
                </div>
                <div className="course-content">
                  <span className="course-category">{course.category}</span>
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                  <div className="course-meta">
                    <span className="meta-item">
                      <span className="meta-icon">👤</span>
                      {course.instructor}
                    </span>
                    <span className="meta-item">
                      <span className="meta-icon">⏱️</span>
                      {course.duration}
                    </span>
                    <span className="meta-item">
                      <span className="meta-icon">📚</span>
                      {course.lessons} lessons
                    </span>
                  </div>
                  <button className="btn btn-primary btn-full">
                    View Course
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Start Your Learning Journey Today</h2>
            <p>Join thousands of learners who have transformed their careers with SkillForge</p>
            {!isAuthenticated && (
              <button 
                className="btn btn-primary btn-large"
                onClick={() => navigate('/register')}
              >
                Create Free Account
              </button>
            )}
          </div>
        </div>
      </section>

      <Footer />

      {/* Login Prompt Modal */}
      <LoginPromptModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};
