import { useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { courses } from "@/data/courses";
import { useCourseProgress } from "@/hooks/useCourseProgress";
import { LessonSidebar } from "@/components/LessonSidebar";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, ChevronLeft, ChevronRight, Menu, X } from "lucide-react";

const CoursePage = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const { toggleLesson, getCourseProgress, getCoursesWithProgress } = useCourseProgress();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const coursesWithProgress = getCoursesWithProgress();
  const course = coursesWithProgress.find((c) => c.id === courseId);

  const allLessons = useMemo(() => {
    if (!course) return [];
    return course.modules.flatMap((m) => m.lessons.map((l) => ({ ...l, moduleId: m.id })));
  }, [course]);

  const [activeLessonId, setActiveLessonId] = useState(allLessons[0]?.id || "");

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <p className="text-2xl font-heading font-semibold">Course not found</p>
          <Button onClick={() => navigate("/")} variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to courses
          </Button>
        </div>
      </div>
    );
  }

  const activeIdx = allLessons.findIndex((l) => l.id === activeLessonId);
  const activeLesson = allLessons[activeIdx];
  const progress = getCourseProgress(course.id);

  const goTo = (idx: number) => {
    if (idx >= 0 && idx < allLessons.length) {
      setActiveLessonId(allLessons[idx].id);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top bar */}
      <header className="h-14 border-b border-border bg-card flex items-center px-4 gap-3 shrink-0">
        <Button variant="ghost" size="icon" onClick={() => navigate("/")} className="shrink-0">
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="lg:hidden p-1.5 rounded-md hover:bg-muted transition-colors"
        >
          {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
        <span className="font-heading font-semibold text-sm truncate">{course.title}</span>
        <span className="ml-auto text-xs text-muted-foreground">{progress}% complete</span>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className={`${sidebarOpen ? "block" : "hidden"} lg:block`}>
          <LessonSidebar
            course={course}
            activeLessonId={activeLessonId}
            onSelectLesson={(_modId, lessonId) => setActiveLessonId(lessonId)}
            progress={progress}
          />
        </div>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto">
          {activeLesson && (
            <div className="max-w-4xl mx-auto p-6 space-y-6">
              {/* Video Player */}
              {activeLesson.videoUrl && (
                <div className="aspect-video rounded-xl overflow-hidden bg-foreground/5 border border-border shadow-sm">
                  <iframe
                    src={activeLesson.videoUrl}
                    title={activeLesson.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}

              {/* Lesson Info */}
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                      Lesson {activeIdx + 1} of {allLessons.length}
                    </p>
                    <h1 className="font-heading text-2xl font-bold text-foreground">{activeLesson.title}</h1>
                  </div>
                  <Button
                    onClick={() => toggleLesson(course.id, activeLesson.id)}
                    variant={activeLesson.completed ? "outline" : "default"}
                    className="shrink-0"
                  >
                    <CheckCircle2 className="mr-2 h-4 w-4" />
                    {activeLesson.completed ? "Completed" : "Mark Complete"}
                  </Button>
                </div>

                <p className="text-muted-foreground leading-relaxed">{activeLesson.description}</p>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <Button
                  variant="outline"
                  disabled={activeIdx === 0}
                  onClick={() => goTo(activeIdx - 1)}
                >
                  <ChevronLeft className="mr-1 h-4 w-4" /> Previous
                </Button>
                <Button
                  disabled={activeIdx === allLessons.length - 1}
                  onClick={() => goTo(activeIdx + 1)}
                >
                  Next <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default CoursePage;
