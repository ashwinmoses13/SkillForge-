import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

export const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const { currentUser, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <nav className="dashboard-nav">
        <div className="nav-brand">
          <h1>LMS Dashboard</h1>
        </div>
        <div className="nav-user">
          <span className="user-name">Welcome, {currentUser?.fullName}!</span>
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </div>
      </nav>

      <main className="dashboard-main">
        <div className="dashboard-header">
          <h2>Your Learning Journey</h2>
          <p>Access your courses, track your progress, and continue learning.</p>
        </div>

        <div className="dashboard-grid">
          <div className="dashboard-card">
            <div className="card-icon">📚</div>
            <h3>My Courses</h3>
            <p>View and continue your enrolled courses</p>
            <button className="card-button">View Courses</button>
          </div>

          <div className="dashboard-card">
            <div className="card-icon">📊</div>
            <h3>Progress</h3>
            <p>Track your learning progress and achievements</p>
            <button className="card-button">View Progress</button>
          </div>

          <div className="dashboard-card">
            <div className="card-icon">📝</div>
            <h3>Assignments</h3>
            <p>Check pending assignments and due dates</p>
            <button className="card-button">View Assignments</button>
          </div>

          <div className="dashboard-card">
            <div className="card-icon">🏆</div>
            <h3>Certificates</h3>
            <p>View and download your earned certificates</p>
            <button className="card-button">View Certificates</button>
          </div>
        </div>

        <div className="dashboard-info">
          <h3>Account Information</h3>
          <div className="info-grid">
            <div className="info-item">
              <span className="info-label">Full Name:</span>
              <span className="info-value">{currentUser?.fullName}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Email:</span>
              <span className="info-value">{currentUser?.email}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Member Since:</span>
              <span className="info-value">
                {currentUser?.createdAt
                  ? new Date(currentUser.createdAt).toLocaleDateString()
                  : 'N/A'}
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
