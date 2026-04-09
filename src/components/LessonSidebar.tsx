import { CheckCircle2, Circle, PlayCircle } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import type { Course } from "@/data/courses";

interface LessonSidebarProps {
  course: Course;
  activeLessonId: string;
  onSelectLesson: (moduleId: string, lessonId: string) => void;
  progress: number;
}

export function LessonSidebar({ course, activeLessonId, onSelectLesson, progress }: LessonSidebarProps) {
  return (
    <aside className="w-80 shrink-0 border-r border-border bg-card overflow-y-auto h-[calc(100vh-3.5rem)]">
      <div className="p-5 border-b border-border space-y-3">
        <h2 className="font-heading text-lg font-semibold text-card-foreground">{course.title}</h2>
        <div className="space-y-1">
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">Progress</span>
            <span className="font-medium text-primary">{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </div>

      <nav className="p-3 space-y-4">
        {course.modules.map((mod) => (
          <div key={mod.id}>
            <h3 className="px-2 mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {mod.title}
            </h3>
            <ul className="space-y-0.5">
              {mod.lessons.map((lesson) => {
                const active = lesson.id === activeLessonId;
                return (
                  <li key={lesson.id}>
                    <button
                      onClick={() => onSelectLesson(mod.id, lesson.id)}
                      className={cn(
                        "w-full flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm transition-colors text-left",
                        active
                          ? "bg-primary/10 text-primary font-medium"
                          : "text-card-foreground hover:bg-muted"
                      )}
                    >
                      {lesson.completed ? (
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                      ) : active ? (
                        <PlayCircle className="h-4 w-4 shrink-0 text-primary" />
                      ) : (
                        <Circle className="h-4 w-4 shrink-0 text-muted-foreground" />
                      )}
                      <span className="truncate">{lesson.title}</span>
                      <span className="ml-auto text-xs text-muted-foreground shrink-0">{lesson.duration}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
