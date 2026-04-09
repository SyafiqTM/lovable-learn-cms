import { useState } from "react";
import { CourseCard } from "@/components/CourseCard";
import { useCourseProgress } from "@/hooks/useCourseProgress";
import { courses } from "@/data/courses";
import { GraduationCap, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const categories = ["All", ...Array.from(new Set(courses.map((c) => c.category)))];

const Index = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const { getCourseProgress } = useCourseProgress();

  const filtered = courses.filter((c) => {
    const matchSearch = c.title.toLowerCase().includes(search.toLowerCase()) || c.description.toLowerCase().includes(search.toLowerCase());
    const matchCategory = activeCategory === "All" || c.category === activeCategory;
    return matchSearch && matchCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <header className="gradient-hero py-20 px-6">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm text-primary-foreground">
            <GraduationCap className="h-4 w-4" />
            Learn at your own pace
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground leading-tight">
            Level up your<br />dev skills
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-lg mx-auto">
            Structured courses with free videos, progress tracking, and hands-on learning paths.
          </p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-6 -mt-8">
        {/* Search & Filter */}
        <div className="bg-card rounded-xl border border-border p-4 shadow-sm flex flex-col sm:flex-row gap-4 items-center">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search courses..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="focus:outline-none"
              >
                <Badge
                  variant={activeCategory === cat ? "default" : "outline"}
                  className="cursor-pointer transition-colors"
                >
                  {cat}
                </Badge>
              </button>
            ))}
          </div>
        </div>

        {/* Course Grid */}
        <section className="py-10">
          <h2 className="font-heading text-2xl font-semibold mb-6">
            {activeCategory === "All" ? "All Courses" : activeCategory}
            <span className="text-muted-foreground font-normal text-base ml-2">({filtered.length})</span>
          </h2>
          {filtered.length === 0 ? (
            <div className="text-center py-16 text-muted-foreground">
              <p className="text-lg">No courses found</p>
              <p className="text-sm mt-1">Try a different search or filter</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((course) => (
                <CourseCard key={course.id} {...course} progress={getCourseProgress(course.id)} />
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default Index;
