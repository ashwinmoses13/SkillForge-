import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { useEnrollmentStore } from '../store/enrollmentStore';
import { courses } from '../data/courses';
import { getLessonsByCourseId } from '../data/lessons';
import { FloatingChatButton } from '../components/chat/FloatingChatButton';
import type { Lesson } from '../types';

export const LearningPage: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthStore();
  const { 
    isEnrolled, 
    markLessonComplete, 
    isLessonComplete, 
    getCourseProgress,
    setLastAccessedLesson,
    getLastAccessedLesson
  } = useEnrollmentStore();

  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null);
  const [progress, setProgress] = useState(0);

  const course = courses.find(c => c.id === courseId);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    if (!courseId || !course) {
      navigate('/dashboard');
      return;
    }

    if (!isEnrolled(courseId)) {
      navigate('/dashboard');
      return;
    }

    const courseLessons = getLessonsByCourseId(courseId);
    setLessons(courseLessons);

    // Get last accessed lesson or first lesson
    const lastLessonId = getLastAccessedLesson(courseId);
    const initialLesson = lastLessonId 
      ? courseLessons.find(l => l.id === lastLessonId) || courseLessons[0]
      : courseLessons[0];
    
    setCurrentLesson(initialLesson || null);
    setProgress(getCourseProgress(courseId, courseLessons.length));
  }, [courseId, course, isAuthenticated, isEnrolled, navigate, getLastAccessedLesson, getCourseProgress]);

  const handleLessonClick = (lesson: Lesson) => {
    setCurrentLesson(lesson);
    if (courseId) {
      setLastAccessedLesson(courseId, lesson.id);
    }
  };

  const handleMarkComplete = () => {
    if (courseId && currentLesson) {
      markLessonComplete(courseId, currentLesson.id);
      setProgress(getCourseProgress(courseId, lessons.length));
    }
  };

  const handleNextLesson = () => {
    if (!currentLesson) return;
    const currentIndex = lessons.findIndex(l => l.id === currentLesson.id);
    if (currentIndex < lessons.length - 1) {
      const nextLesson = lessons[currentIndex + 1];
      handleLessonClick(nextLesson);
    }
  };

  const handlePreviousLesson = () => {
    if (!currentLesson) return;
    const currentIndex = lessons.findIndex(l => l.id === currentLesson.id);
    if (currentIndex > 0) {
      const prevLesson = lessons[currentIndex - 1];
      handleLessonClick(prevLesson);
    }
  };

  const getYouTubeEmbedUrl = (videoId: string): string => {
    return `https://www.youtube.com/embed/${videoId}`;
  };

  if (!course || !currentLesson) {
    return <div className="learning-page loading">Loading...</div>;
  }

  const currentIndex = lessons.findIndex(l => l.id === currentLesson.id);
  const isFirstLesson = currentIndex === 0;
  const isLastLesson = currentIndex === lessons.length - 1;
  const lessonCompleted = isLessonComplete(course.id, currentLesson.id);

  return (
    <div className="learning-page">
      {/* Header */}
      <header className="learning-header">
        <div className="learning-header-content">
          <button 
            className="back-button"
            onClick={() => navigate('/dashboard')}
          >
            ← Back to Dashboard
          </button>
          <h1>{course.title}</h1>
          <div className="progress-info">
            <span>Progress: {progress}%</span>
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </header>

      <div className="learning-container">
        {/* Sidebar */}
        <aside className="lesson-sidebar">
          <h3>Course Content</h3>
          <div className="lessons-list">
            {lessons.map((lesson, index) => {
              const completed = isLessonComplete(course.id, lesson.id);
              const isActive = lesson.id === currentLesson.id;
              
              return (
                <button
                  key={lesson.id}
                  className={`lesson-item ${isActive ? 'active' : ''} ${completed ? 'completed' : ''}`}
                  onClick={() => handleLessonClick(lesson)}
                >
                  <span className="lesson-number">{index + 1}</span>
                  <div className="lesson-info">
                    <span className="lesson-title">{lesson.title}</span>
                    <span className="lesson-duration">{lesson.duration}</span>
                  </div>
                  {completed && <span className="completion-check">✓</span>}
                </button>
              );
            })}
          </div>
        </aside>

        {/* Main Content */}
        <main className="lesson-content">
          {/* Video Player */}
          <div className="video-container">
            <iframe
              src={getYouTubeEmbedUrl(currentLesson.videoId)}
              title={currentLesson.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Lesson Info */}
          <div className="lesson-details">
            <h2>{currentLesson.title}</h2>
            <div className="lesson-meta">
              <span>Lesson {currentIndex + 1} of {lessons.length}</span>
              <span>•</span>
              <span>{currentLesson.duration}</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="lesson-navigation">
            <button
              className="btn btn-outline"
              onClick={handlePreviousLesson}
              disabled={isFirstLesson}
            >
              ← Previous Lesson
            </button>

            {!lessonCompleted ? (
              <button
                className="btn btn-primary"
                onClick={handleMarkComplete}
              >
                Mark as Complete
              </button>
            ) : (
              <span className="completed-badge">✓ Completed</span>
            )}

            <button
              className="btn btn-outline"
              onClick={handleNextLesson}
              disabled={isLastLesson}
            >
              Next Lesson →
            </button>
          </div>
        </main>
      </div>

      {/* AI Chatbot */}
      <FloatingChatButton />
    </div>
  );
};
