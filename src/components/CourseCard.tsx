import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Clock } from "lucide-react";

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  level: string;
  totalLessons: number;
  duration: string;
  image: string;
  color: string;
  progress: number;
}

export function CourseCard({ id, title, description, category, level, totalLessons, duration, image, color, progress }: CourseCardProps) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`/course/${id}`)}
      className="group text-left rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-ring"
    >
      <div className={`h-36 bg-gradient-to-br ${color} flex items-center justify-center`}>
        <span className="text-5xl group-hover:scale-110 transition-transform duration-300">{image}</span>
      </div>
      <div className="p-5 space-y-3">
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="text-xs font-medium">{category}</Badge>
          <Badge variant="outline" className="text-xs">{level}</Badge>
        </div>
        <h3 className="font-heading text-lg font-semibold leading-tight text-card-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1"><BookOpen className="h-3.5 w-3.5" />{totalLessons} lessons</span>
          <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{duration}</span>
        </div>
        {progress > 0 && (
          <div className="space-y-1">
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">Progress</span>
              <span className="font-medium text-primary">{progress}%</span>
            </div>
            <Progress value={progress} className="h-1.5" />
          </div>
        )}
      </div>
    </button>
  );
}
