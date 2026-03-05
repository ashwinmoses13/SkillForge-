import type { Lesson } from '../types';

export const courseLessons: Record<string, Lesson[]> = {
  '1': [ // Modern Java Development
    { id: 'j1', title: 'Introduction to Java', videoId: 'j0lBrYSlYaU', duration: '15:30', order: 1 },
    { id: 'j2', title: 'Setting Up Java Environment', videoId: 'WRghh1vKkQ8', duration: '12:45', order: 2 },
    { id: 'j3', title: 'Java Basics - Variables and Data Types', videoId: 'W9Xj1Dz8J8I', duration: '20:15', order: 3 },
    { id: 'j4', title: 'Control Flow Statements', videoId: 'L1Z1lDZ8K8I', duration: '18:20', order: 4 },
    { id: 'j5', title: 'Object-Oriented Programming', videoId: 'M1Z1lDZ8K8I', duration: '25:00', order: 5 },
    { id: 'j6', title: 'Classes and Objects', videoId: 'N1Z1lDZ8K8I', duration: '22:30', order: 6 },
    { id: 'j7', title: 'Inheritance and Polymorphism', videoId: 'O1Z1lDZ8K8I', duration: '28:15', order: 7 },
    { id: 'j8', title: 'Abstract Classes and Interfaces', videoId: 'P1Z1lDZ8K8I', duration: '24:45', order: 8 },
  ],
  '2': [ // Python for Data Analysis
    { id: 'p1', title: 'Introduction to Python', videoId: '2_6O39UdFi0', duration: '14:20', order: 1 },
    { id: 'p2', title: 'Python Setup and Installation', videoId: '3_6O39UdFi0', duration: '10:15', order: 2 },
    { id: 'p3', title: 'Python Basics', videoId: '4_6O39UdFi0', duration: '22:30', order: 3 },
    { id: 'p4', title: 'NumPy Fundamentals', videoId: '5_6O39UdFi0', duration: '26:00', order: 4 },
    { id: 'p5', title: 'Pandas Introduction', videoId: '6_6O39UdFi0', duration: '30:15', order: 5 },
    { id: 'p6', title: 'Data Cleaning with Pandas', videoId: '7_6O39UdFi0', duration: '28:45', order: 6 },
    { id: 'p7', title: 'Data Visualization with Matplotlib', videoId: '8_6O39UdFi0', duration: '24:30', order: 7 },
    { id: 'p8', title: 'Real-world Data Analysis Project', videoId: '9_6O39UdFi0', duration: '35:00', order: 8 },
  ],
  '3': [ // Machine Learning Foundations
    { id: 'm1', title: 'Introduction to Machine Learning', videoId: 'MtJsiO-pj1s', duration: '18:30', order: 1 },
    { id: 'm2', title: 'Types of Machine Learning', videoId: 'NtJsiO-pj1s', duration: '20:15', order: 2 },
    { id: 'm3', title: 'Data Preprocessing', videoId: 'OtJsiO-pj1s', duration: '25:00', order: 3 },
    { id: 'm4', title: 'Linear Regression', videoId: 'PtJsiO-pj1s', duration: '28:30', order: 4 },
    { id: 'm5', title: 'Logistic Regression', videoId: 'QtJsiO-pj1s', duration: '26:45', order: 5 },
    { id: 'm6', title: 'Decision Trees', videoId: 'RtJsiO-pj1s', duration: '30:20', order: 6 },
    { id: 'm7', title: 'Random Forest', videoId: 'StJsiO-pj1s', duration: '27:15', order: 7 },
    { id: 'm8', title: 'Model Evaluation', videoId: 'TtJsiO-pj1s', duration: '24:00', order: 8 },
  ],
  '4': [ // Full Stack Web Development
    { id: 'f1', title: 'Web Development Overview', videoId: '4dprtEzunIk', duration: '16:00', order: 1 },
    { id: 'f2', title: 'HTML5 Fundamentals', videoId: '5dprtEzunIk', duration: '28:30', order: 2 },
    { id: 'f3', title: 'CSS3 Styling', videoId: '6dprtEzunIk', duration: '32:15', order: 3 },
    { id: 'f4', title: 'JavaScript Basics', videoId: '7dprtEzunIk', duration: '35:00', order: 4 },
    { id: 'f5', title: 'DOM Manipulation', videoId: '8dprtEzunIk', duration: '26:45', order: 5 },
    { id: 'f6', title: 'Backend with Node.js', videoId: '9dprtEzunIk', duration: '30:20', order: 6 },
    { id: 'f7', title: 'Database with MongoDB', videoId: '1eprtEzunIk', duration: '28:00', order: 7 },
    { id: 'f8', title: 'Deploying Your Application', videoId: '2eprtEzunIk', duration: '22:30', order: 8 },
  ],
  '5': [ // React Application Development
    { id: 'r1', title: 'Introduction to React', videoId: 'iYOz165wGkQ', duration: '17:30', order: 1 },
    { id: 'r2', title: 'Setting Up React Project', videoId: 'jYOz165wGkQ', duration: '15:45', order: 2 },
    { id: 'r3', title: 'Components and JSX', videoId: 'kYOz165wGkQ', duration: '24:20', order: 3 },
    { id: 'r4', title: 'Props and State', videoId: 'lYOz165wGkQ', duration: '28:15', order: 4 },
    { id: 'r5', title: 'React Hooks - useState', videoId: 'mYOz165wGkQ', duration: '22:30', order: 5 },
    { id: 'r6', title: 'React Hooks - useEffect', videoId: 'nYOz165wGkQ', duration: '26:00', order: 6 },
    { id: 'r7', title: 'React Router', videoId: 'oYOz165wGkQ', duration: '30:45', order: 7 },
    { id: 'r8', title: 'Building a Complete React App', videoId: 'pYOz165wGkQ', duration: '35:20', order: 8 },
  ],
  '6': [ // Backend API Engineering
    { id: 'b1', title: 'Introduction to APIs', videoId: 'XvFmUE-36Kc', duration: '14:30', order: 1 },
    { id: 'b2', title: 'REST API Principles', videoId: 'YvFmUE-36Kc', duration: '18:45', order: 2 },
    { id: 'b3', title: 'Setting Up Node.js Server', videoId: 'ZvFmUE-36Kc', duration: '20:15', order: 3 },
    { id: 'b4', title: 'Express.js Framework', videoId: '1wFmUE-36Kc', duration: '25:30', order: 4 },
    { id: 'b5', title: 'Routing and Middleware', videoId: '2wFmUE-36Kc', duration: '28:00', order: 5 },
    { id: 'b6', title: 'Database Integration', videoId: '3wFmUE-36Kc', duration: '32:15', order: 6 },
    { id: 'b7', title: 'Authentication & Authorization', videoId: '4wFmUE-36Kc', duration: '35:00', order: 7 },
    { id: 'b8', title: 'API Testing and Documentation', videoId: '5wFmUE-36Kc', duration: '26:30', order: 8 },
  ],
};

export const getLessonsByCourseId = (courseId: string): Lesson[] => {
  return courseLessons[courseId] || [];
};
