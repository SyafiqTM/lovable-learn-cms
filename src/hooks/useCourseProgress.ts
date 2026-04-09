import { useState, useCallback } from "react";
import { courses as initialCourses, Course } from "@/data/courses";

const STORAGE_KEY = "learning-platform-progress";

function loadProgress(): Record<string, string[]> {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

function saveProgress(progress: Record<string, string[]>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function useCourseProgress() {
  const [progress, setProgress] = useState<Record<string, string[]>>(loadProgress);

  const toggleLesson = useCallback((courseId: string, lessonId: string) => {
    setProgress((prev) => {
      const completed = prev[courseId] || [];
      const updated = completed.includes(lessonId)
        ? completed.filter((id) => id !== lessonId)
        : [...completed, lessonId];
      const next = { ...prev, [courseId]: updated };
      saveProgress(next);
      return next;
    });
  }, []);

  const isCompleted = useCallback(
    (courseId: string, lessonId: string) => {
      return (progress[courseId] || []).includes(lessonId);
    },
    [progress]
  );

  const getCourseProgress = useCallback(
    (courseId: string) => {
      const course = initialCourses.find((c) => c.id === courseId);
      if (!course) return 0;
      const total = course.modules.reduce((sum, m) => sum + m.lessons.length, 0);
      const completed = (progress[courseId] || []).length;
      return total > 0 ? Math.round((completed / total) * 100) : 0;
    },
    [progress]
  );

  const getCoursesWithProgress = useCallback((): Course[] => {
    return initialCourses.map((course) => ({
      ...course,
      modules: course.modules.map((mod) => ({
        ...mod,
        lessons: mod.lessons.map((lesson) => ({
          ...lesson,
          completed: (progress[course.id] || []).includes(lesson.id),
        })),
      })),
    }));
  }, [progress]);

  return { toggleLesson, isCompleted, getCourseProgress, getCoursesWithProgress };
}
