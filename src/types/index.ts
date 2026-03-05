// User Types
export interface User {
  id: string;
  fullName: string;
  email: string;
  passwordHash: string;
  createdAt: string;
}

export interface RegisterFormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface LoginFormData {
  email: string;
  password: string;
}

// Validation Types
export interface ValidationError {
  field: string;
  message: string;
}

export interface RegisterErrors {
  fullName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

export interface LoginErrors {
  email?: string;
  password?: string;
  general?: string;
}

// Auth Store Types
export interface AuthState {
  currentUser: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (userData: RegisterFormData) => Promise<boolean>;
  logout: () => void;
  checkAuth: () => void;
}

// Course Types
export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  lessons: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  thumbnail: string;
  category: string;
  playlistId: string;
}

// Lesson Types
export interface Lesson {
  id: string;
  title: string;
  videoId: string;
  duration: string;
  order: number;
}

export interface CourseLessons {
  courseId: string;
  lessons: Lesson[];
}

// Enrollment Types
export interface Enrollment {
  courseId: string;
  enrolledAt: string;
  completedLessons: string[];
  lastAccessedLesson: string | null;
}

export interface EnrollmentState {
  enrollments: Enrollment[];
  enrollInCourse: (courseId: string) => void;
  unenrollFromCourse: (courseId: string) => void;
  isEnrolled: (courseId: string) => boolean;
  markLessonComplete: (courseId: string, lessonId: string) => void;
  isLessonComplete: (courseId: string, lessonId: string) => boolean;
  getCourseProgress: (courseId: string, totalLessons: number) => number;
  getLastAccessedLesson: (courseId: string) => string | null;
  setLastAccessedLesson: (courseId: string, lessonId: string) => void;
}
