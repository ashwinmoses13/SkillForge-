import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { useEnrollmentStore } from '../store/enrollmentStore';
import { courses } from '../data/courses';
import { getLessonsByCourseId } from '../data/lessons';
import type { Course } from '../types';

export const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const { currentUser, logout } = useAuthStore();
  const { enrollInCourse, isEnrolled, getCourseProgress } = useEnrollmentStore();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  // Get enrolled and available courses
  const enrolledCourses = courses.filter(course => isEnrolled(course.id));
  const availableCourses = courses.filter(course => !isEnrolled(course.id));

  const handleEnroll = (courseId: string) => {
    enrollInCourse(courseId);
  };

  const handleStartLearning = (courseId: string) => {
    navigate(`/learn/${courseId}`);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'difficulty-beginner';
      case 'Intermediate': return 'difficulty-intermediate';
      case 'Advanced': return 'difficulty-advanced';
      default: return 'difficulty-beginner';
    }
  };

  const renderCourseCard = (course: Course, isEnrolledCourse: boolean) => {
    const lessons = getLessonsByCourseId(course.id);
    const progress = getCourseProgress(course.id, lessons.length);

    return (
      <div key={course.id} className="dashboard-course-card">
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
          
          {isEnrolledCourse && (
            <div className="course-progress">
              <div className="progress-bar-small">
                <div className="progress-fill-small" style={{ width: `${progress}%` }} />
              </div>
              <span className="progress-text">{progress}% complete</span>
            </div>
          )}

          {isEnrolledCourse ? (
            <button 
              className="btn btn-primary btn-full"
              onClick={() => handleStartLearning(course.id)}
            >
              {progress > 0 ? 'Continue Learning' : 'Start Learning'}
            </button>
          ) : (
            <button 
              className="btn btn-primary btn-full"
              onClick={() => handleEnroll(course.id)}
            >
              Enroll Now
            </button>
          )}
        </div>
      </div>
    );
  };

  const hasEnrollments = enrolledCourses.length > 0;

  return (
    <div className="dashboard-container">
      {/* Header */}
      <nav className="dashboard-nav">
        <div className="nav-brand">
          <h1>SkillForge</h1>
        </div>
        <div className="nav-user">
          <span className="user-name">Welcome back, {currentUser?.fullName}!</span>
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </div>
      </nav>

      <main className="dashboard-main">
        {/* Welcome Section */}
        <div className="dashboard-welcome">
          <h2>Your Learning Dashboard</h2>
          <p>Continue your learning journey and track your progress.</p>
        </div>

        {/* Empty State - No Enrollments */}
        {!hasEnrollments && (
          <div className="empty-state">
            <div className="empty-state-icon">📚</div>
            <h3>You have not enrolled in any course yet.</h3>
            <p>Start learning by enrolling in one of our courses below.</p>
            <button 
              className="btn btn-primary btn-large"
              onClick={() => document.getElementById('available-courses')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Browse Courses
            </button>
          </div>
        )}

        {/* My Courses Section */}
        {hasEnrollments && (
          <section className="dashboard-section">
            <div className="section-header">
              <h3>My Courses</h3>
              <p>Continue where you left off</p>
            </div>
            <div className="courses-grid">
              {enrolledCourses.map(course => renderCourseCard(course, true))}
            </div>
          </section>
        )}

        {/* Available Courses Section */}
        <section id="available-courses" className="dashboard-section">
          <div className="section-header">
            <h3>Available Courses</h3>
            <p>Explore new courses to expand your skills</p>
          </div>
          <div className="courses-grid">
            {availableCourses.map(course => renderCourseCard(course, false))}
          </div>
        </section>

        {/* Account Info */}
        <section className="dashboard-info-section">
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
              <span className="info-label">Enrolled Courses:</span>
              <span className="info-value">{enrolledCourses.length}</span>
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
        </section>
      </main>
    </div>
  );
};
