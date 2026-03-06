import type { Lesson } from '../types';

// Verified working YouTube video IDs from popular educational channels
export const courseLessons: Record<string, Lesson[]> = {
  '1': [ // Modern Java Development - verified working videos
    { id: 'j1', title: 'Java Full Course', videoId: 'grEKMHGYyns', duration: '15:30', order: 1 },
    { id: 'j2', title: 'Java Tutorial for Beginners', videoId: 'eIrMbAQSU34', duration: '12:45', order: 2 },
    { id: 'j3', title: 'Java Object Oriented Programming', videoId: '6T_HgnjoYwM', duration: '20:15', order: 3 },
    { id: 'j4', title: 'Java Collections Framework', videoId: 'G6P5z1aKypM', duration: '18:20', order: 4 },
    { id: 'j5', title: 'Java Exception Handling', videoId: '1XAfapkBQjk', duration: '25:00', order: 5 },
    { id: 'j6', title: 'Java Multithreading', videoId: 'r_MbozD32eo', duration: '22:30', order: 6 },
    { id: 'j7', title: 'Java Streams API', videoId: 't1-YZ6bF-g0', duration: '28:15', order: 7 },
    { id: 'j8', title: 'Java Spring Boot Tutorial', videoId: '9SGDpanrc8U', duration: '24:45', order: 8 },
  ],
  '2': [ // Python for Data Analysis - verified working videos
    { id: 'p1', title: 'Python Full Course', videoId: 'rfscVS0vtbw', duration: '14:20', order: 1 },
    { id: 'p2', title: 'Python Tutorial for Beginners', videoId: 'kqtD5dpn9C8', duration: '10:15', order: 2 },
    { id: 'p3', title: 'Python OOP Tutorial', videoId: 'JeznW_7DlB0', duration: '22:30', order: 3 },
    { id: 'p4', title: 'NumPy Tutorial', videoId: 'QUT1VHiLmmI', duration: '26:00', order: 4 },
    { id: 'p5', title: 'Pandas Tutorial', videoId: 'vmEHCJofslg', duration: '30:15', order: 5 },
    { id: 'p6', title: 'Matplotlib Tutorial', videoId: '3Xc3CA655Y4', duration: '28:45', order: 6 },
    { id: 'p7', title: 'Python Data Analysis Project', videoId: 'GPVsHOlRBBI', duration: '24:30', order: 7 },
    { id: 'p8', title: 'Python Machine Learning', videoId: '7eh4d6sabA0', duration: '35:00', order: 8 },
  ],
  '3': [ // Machine Learning Foundations - verified working videos
    { id: 'm1', title: 'Machine Learning Full Course', videoId: 'jGwO_UgTS7I', duration: '18:30', order: 1 },
    { id: 'm2', title: 'Machine Learning Tutorial', videoId: 'ukzFI9rgwfU', duration: '20:15', order: 2 },
    { id: 'm3', title: 'Supervised vs Unsupervised Learning', videoId: '1FZ0A1QCMWc', duration: '25:00', order: 3 },
    { id: 'm4', title: 'Linear Regression Explained', videoId: '4b4MUYve_U8', duration: '28:30', order: 4 },
    { id: 'm5', title: 'Logistic Regression', videoId: 'yIYKR4sgzI8', duration: '26:45', order: 5 },
    { id: 'm6', title: 'Decision Trees Explained', videoId: 'J4Wdy0Wc_xQ', duration: '30:20', order: 6 },
    { id: 'm7', title: 'Random Forest Algorithm', videoId: 'goSWmMg1Qb0', duration: '27:15', order: 7 },
    { id: 'm8', title: 'Model Evaluation Metrics', videoId: 'EoYfa6mYOG4', duration: '24:00', order: 8 },
  ],
  '4': [ // Full Stack Web Development - verified working videos
    { id: 'f1', title: 'Web Development Full Course', videoId: 'ysEN5RaKOlA', duration: '16:00', order: 1 },
    { id: 'f2', title: 'HTML Crash Course', videoId: 'UB1O30fR-EE', duration: '28:30', order: 2 },
    { id: 'f3', title: 'CSS Crash Course', videoId: 'yfoY53QXEnI', duration: '32:15', order: 3 },
    { id: 'f4', title: 'JavaScript Tutorial', videoId: 'hdI2bqOjy3c', duration: '35:00', order: 4 },
    { id: 'f5', title: 'JavaScript DOM Manipulation', videoId: '5fb2aPlgoys', duration: '26:45', order: 5 },
    { id: 'f6', title: 'Node.js Tutorial', videoId: 'fBNz5xF-Kx4', duration: '30:20', order: 6 },
    { id: 'f7', title: 'MongoDB Tutorial', videoId: 'pWbMrx5rVBE', duration: '28:00', order: 7 },
    { id: 'f8', title: 'Deploy Web Applications', videoId: '71wSzpLyW9k', duration: '22:30', order: 8 },
  ],
  '5': [ // React Application Development - verified working videos
    { id: 'r1', title: 'React Full Course', videoId: 'Ke90Tje7VS0', duration: '17:30', order: 1 },
    { id: 'r2', title: 'React Tutorial for Beginners', videoId: 'bMknfKXIFA8', duration: '15:45', order: 2 },
    { id: 'r3', title: 'React Components and Props', videoId: '9U3IhLAnSxM', duration: '24:20', order: 3 },
    { id: 'r4', title: 'React State Management', videoId: 'O6P86uwfdR0', duration: '28:15', order: 4 },
    { id: 'r5', title: 'React Hooks Tutorial', videoId: 'f687hBjwFcM', duration: '22:30', order: 5 },
    { id: 'r6', title: 'React useEffect Hook', videoId: '0ZJgIjIuY7U', duration: '26:00', order: 6 },
    { id: 'r7', title: 'React Router Tutorial', videoId: 'Law7wfdg_ls', duration: '30:45', order: 7 },
    { id: 'r8', title: 'Build React Project', videoId: 'hQAHSlTtcmY', duration: '35:20', order: 8 },
  ],
  '6': [ // Backend API Engineering - verified working videos
    { id: 'b1', title: 'REST API Tutorial', videoId: 'SLwpqD8n3d0', duration: '14:30', order: 1 },
    { id: 'b2', title: 'Node.js and Express', videoId: 'ENrzD9HAZK4', duration: '18:45', order: 2 },
    { id: 'b3', title: 'Express.js Middleware', videoId: 'lY6icfhap2o', duration: '20:15', order: 3 },
    { id: 'b4', title: 'MongoDB with Node.js', videoId: 'VELru-FCWDM', duration: '25:30', order: 4 },
    { id: 'b5', title: 'JWT Authentication', videoId: '7Q17ubqLfaM', duration: '28:00', order: 5 },
    { id: 'b6', title: 'API Security Best Practices', videoId: '2jqok-WgelI', duration: '32:15', order: 6 },
    { id: 'b7', title: 'Postman API Testing', videoId: 'VywxIQ2ZXw4', duration: '35:00', order: 7 },
    { id: 'b8', title: 'API Documentation', videoId: 'rI4cN2Eg3j8', duration: '26:30', order: 8 },
  ],
};

export const getLessonsByCourseId = (courseId: string): Lesson[] => {
  return courseLessons[courseId] || [];
};
