import type { Course } from '../types';

export const courses: Course[] = [
  {
    id: '1',
    title: 'Modern Java Development',
    description: 'Master Java programming with modern practices, Spring Boot, and enterprise application development.',
    instructor: 'Sarah Johnson',
    duration: '24 hours',
    lessons: 8,
    difficulty: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=250&fit=crop',
    category: 'Programming',
    playlistId: 'PLWW_Zsgwoul7mz7dNjUunrgfwX7_vSZ9i'
  },
  {
    id: '2',
    title: 'Python for Data Analysis',
    description: 'Learn Python programming focused on data manipulation, analysis, and visualization techniques.',
    instructor: 'Michael Chen',
    duration: '18 hours',
    lessons: 8,
    difficulty: 'Beginner',
    thumbnail: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop',
    category: 'Data Science',
    playlistId: 'PLiC1doDIe9rCYWmH9wIEYEXXaJ4KAi3jc'
  },
  {
    id: '3',
    title: 'Machine Learning Foundations',
    description: 'Build a solid foundation in ML concepts, algorithms, and practical implementations.',
    instructor: 'Dr. Emily Rodriguez',
    duration: '32 hours',
    lessons: 8,
    difficulty: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop',
    category: 'AI & ML',
    playlistId: 'PLZd_9NahuB3HXelMlJvpMBy9LEqzpJALa'
  },
  {
    id: '4',
    title: 'Full Stack Web Development',
    description: 'Complete web development course covering frontend, backend, databases, and deployment.',
    instructor: 'James Wilson',
    duration: '40 hours',
    lessons: 8,
    difficulty: 'Beginner',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop',
    category: 'Web Development',
    playlistId: 'PLbtI3_MArDOkxh7XzixN2G4NAGIVqTFon'
  },
  {
    id: '5',
    title: 'React Application Development',
    description: 'Master React.js with hooks, context, routing, and modern state management patterns.',
    instructor: 'Alex Thompson',
    duration: '20 hours',
    lessons: 8,
    difficulty: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop',
    category: 'Frontend',
    playlistId: 'PL6QREj8te1P6wX9m5KnicnDVEucbOPsqR'
  },
  {
    id: '6',
    title: 'Backend API Engineering',
    description: 'Design and build scalable RESTful APIs with Node.js, authentication, and database integration.',
    instructor: 'David Park',
    duration: '28 hours',
    lessons: 8,
    difficulty: 'Advanced',
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop',
    category: 'Backend',
    playlistId: 'PL_c9BZzLwBRIHUNeoywVJXViXGEsk6PDr'
  }
];

export const features = [
  {
    icon: '📚',
    title: 'Structured Learning Paths',
    description: 'Courses are organized step by step for easier learning and skill progression.'
  },
  {
    icon: '🎥',
    title: 'Video Based Lessons',
    description: 'Learn through guided video lessons with hands-on coding exercises.'
  },
  {
    icon: '📊',
    title: 'Progress Tracking',
    description: 'Track your course completion and monitor your learning journey.'
  },
  {
    icon: '⏰',
    title: 'Learn at Your Own Pace',
    description: 'Access lessons anytime, anywhere. No deadlines, learn on your schedule.'
  }
];
