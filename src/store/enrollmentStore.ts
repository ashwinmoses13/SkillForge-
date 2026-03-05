import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { EnrollmentState, Enrollment } from '../types';

const ENROLLMENTS_STORAGE_KEY = 'skillforge_enrollments';

export const useEnrollmentStore = create<EnrollmentState>()(
  persist(
    (set, get) => ({
      enrollments: [],

      enrollInCourse: (courseId: string): void => {
        const { enrollments } = get();
        const existingEnrollment = enrollments.find(e => e.courseId === courseId);
        
        if (existingEnrollment) return;

        const newEnrollment: Enrollment = {
          courseId,
          enrolledAt: new Date().toISOString(),
          completedLessons: [],
          lastAccessedLesson: null,
        };

        set({
          enrollments: [...enrollments, newEnrollment],
        });
      },

      unenrollFromCourse: (courseId: string): void => {
        const { enrollments } = get();
        set({
          enrollments: enrollments.filter(e => e.courseId !== courseId),
        });
      },

      isEnrolled: (courseId: string): boolean => {
        const { enrollments } = get();
        return enrollments.some(e => e.courseId === courseId);
      },

      markLessonComplete: (courseId: string, lessonId: string): void => {
        const { enrollments } = get();
        set({
          enrollments: enrollments.map(enrollment => {
            if (enrollment.courseId === courseId) {
              const alreadyCompleted = enrollment.completedLessons.includes(lessonId);
              if (alreadyCompleted) return enrollment;
              
              return {
                ...enrollment,
                completedLessons: [...enrollment.completedLessons, lessonId],
              };
            }
            return enrollment;
          }),
        });
      },

      isLessonComplete: (courseId: string, lessonId: string): boolean => {
        const { enrollments } = get();
        const enrollment = enrollments.find(e => e.courseId === courseId);
        return enrollment?.completedLessons.includes(lessonId) || false;
      },

      getCourseProgress: (courseId: string, totalLessons: number): number => {
        const { enrollments } = get();
        const enrollment = enrollments.find(e => e.courseId === courseId);
        
        if (!enrollment || totalLessons === 0) return 0;
        
        return Math.round((enrollment.completedLessons.length / totalLessons) * 100);
      },

      getLastAccessedLesson: (courseId: string): string | null => {
        const { enrollments } = get();
        const enrollment = enrollments.find(e => e.courseId === courseId);
        return enrollment?.lastAccessedLesson || null;
      },

      setLastAccessedLesson: (courseId: string, lessonId: string): void => {
        const { enrollments } = get();
        set({
          enrollments: enrollments.map(enrollment => {
            if (enrollment.courseId === courseId) {
              return {
                ...enrollment,
                lastAccessedLesson: lessonId,
              };
            }
            return enrollment;
          }),
        });
      },
    }),
    {
      name: ENROLLMENTS_STORAGE_KEY,
    }
  )
);
