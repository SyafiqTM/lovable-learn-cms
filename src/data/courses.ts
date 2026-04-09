export interface Lesson {
  id: string;
  title: string;
  duration: string;
  videoUrl?: string;
  description: string;
  completed: boolean;
}

export interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  totalLessons: number;
  duration: string;
  modules: Module[];
  image: string;
  color: string;
}

export const courses: Course[] = [
  {
    id: "react-fundamentals",
    title: "React Fundamentals",
    description: "Master the core concepts of React including components, hooks, state management, and building modern user interfaces.",
    category: "Frontend",
    level: "Beginner",
    totalLessons: 8,
    duration: "4h 30m",
    image: "⚛️",
    color: "from-cyan-500 to-blue-600",
    modules: [
      {
        id: "m1",
        title: "Getting Started",
        lessons: [
          { id: "l1", title: "What is React?", duration: "12:00", videoUrl: "https://www.youtube.com/embed/Tn6-PIqc4UM", description: "An introduction to React and why it's so popular.", completed: false },
          { id: "l2", title: "Setting Up Your Environment", duration: "18:00", videoUrl: "https://www.youtube.com/embed/SqcY0GlETPk", description: "Install Node.js, create a React app, and explore the project structure.", completed: false },
          { id: "l3", title: "JSX Deep Dive", duration: "15:00", videoUrl: "https://www.youtube.com/embed/9GtB5PIfxJk", description: "Understand JSX syntax and how it compiles to JavaScript.", completed: false },
        ],
      },
      {
        id: "m2",
        title: "Components & Props",
        lessons: [
          { id: "l4", title: "Functional Components", duration: "20:00", videoUrl: "https://www.youtube.com/embed/Cla1WwguArA", description: "Build reusable functional components.", completed: false },
          { id: "l5", title: "Props & Data Flow", duration: "22:00", videoUrl: "https://www.youtube.com/embed/PHaECbrKgs0", description: "Pass data between components using props.", completed: false },
        ],
      },
      {
        id: "m3",
        title: "State & Hooks",
        lessons: [
          { id: "l6", title: "useState Hook", duration: "25:00", videoUrl: "https://www.youtube.com/embed/O6P86uwfdR0", description: "Manage component state with useState.", completed: false },
          { id: "l7", title: "useEffect Hook", duration: "28:00", videoUrl: "https://www.youtube.com/embed/0ZJgIjIuY7U", description: "Handle side effects in your components.", completed: false },
          { id: "l8", title: "Custom Hooks", duration: "20:00", videoUrl: "https://www.youtube.com/embed/J-g9ZJha8FE", description: "Create reusable logic with custom hooks.", completed: false },
        ],
      },
    ],
  },
  {
    id: "typescript-essentials",
    title: "TypeScript Essentials",
    description: "Learn TypeScript from scratch — types, interfaces, generics, and how to use it effectively in real projects.",
    category: "Languages",
    level: "Beginner",
    totalLessons: 6,
    duration: "3h 15m",
    image: "🔷",
    color: "from-blue-500 to-indigo-600",
    modules: [
      {
        id: "m1",
        title: "TypeScript Basics",
        lessons: [
          { id: "l1", title: "Why TypeScript?", duration: "10:00", videoUrl: "https://www.youtube.com/embed/zQnBQ4tB3ZA", description: "Understand the benefits of TypeScript.", completed: false },
          { id: "l2", title: "Basic Types", duration: "20:00", videoUrl: "https://www.youtube.com/embed/d56mG7DezGs", description: "Strings, numbers, booleans, arrays, and more.", completed: false },
          { id: "l3", title: "Interfaces & Type Aliases", duration: "25:00", videoUrl: "https://www.youtube.com/embed/crjIq7LEAYw", description: "Define shapes of data with interfaces.", completed: false },
        ],
      },
      {
        id: "m2",
        title: "Advanced TypeScript",
        lessons: [
          { id: "l4", title: "Generics", duration: "30:00", videoUrl: "https://www.youtube.com/embed/nViEqpgwxHE", description: "Write flexible, reusable code with generics.", completed: false },
          { id: "l5", title: "Utility Types", duration: "20:00", videoUrl: "https://www.youtube.com/embed/jXMDANkzgAo", description: "Partial, Pick, Omit, Record, and more.", completed: false },
          { id: "l6", title: "TypeScript with React", duration: "35:00", videoUrl: "https://www.youtube.com/embed/TPACABQTHvM", description: "Typing React components, hooks, and events.", completed: false },
        ],
      },
    ],
  },
  {
    id: "fullstack-development",
    title: "Full-Stack Web Development",
    description: "Build complete web applications from frontend to backend, including databases, APIs, and deployment.",
    category: "Full-Stack",
    level: "Intermediate",
    totalLessons: 7,
    duration: "5h 45m",
    image: "🚀",
    color: "from-emerald-500 to-teal-600",
    modules: [
      {
        id: "m1",
        title: "Backend Fundamentals",
        lessons: [
          { id: "l1", title: "REST API Design", duration: "25:00", videoUrl: "https://www.youtube.com/embed/-MTSQjw5DrM", description: "Design clean, RESTful APIs.", completed: false },
          { id: "l2", title: "Database Design", duration: "30:00", videoUrl: "https://www.youtube.com/embed/ztHopE5Wnpc", description: "Model your data with relational databases.", completed: false },
          { id: "l3", title: "Authentication & Security", duration: "35:00", videoUrl: "https://www.youtube.com/embed/2PPSXonhIck", description: "Implement secure auth flows.", completed: false },
        ],
      },
      {
        id: "m2",
        title: "Deployment & DevOps",
        lessons: [
          { id: "l4", title: "Docker Basics", duration: "28:00", videoUrl: "https://www.youtube.com/embed/fqMOX6JJhGo", description: "Containerize your applications.", completed: false },
          { id: "l5", title: "CI/CD Pipelines", duration: "22:00", videoUrl: "https://www.youtube.com/embed/scEDHsr3APg", description: "Automate testing and deployment.", completed: false },
          { id: "l6", title: "Cloud Deployment", duration: "30:00", videoUrl: "https://www.youtube.com/embed/l134cBAJCuc", description: "Deploy to production on cloud platforms.", completed: false },
          { id: "l7", title: "Monitoring & Logging", duration: "20:00", videoUrl: "https://www.youtube.com/embed/5CzVaeJnmiE", description: "Keep your apps healthy in production.", completed: false },
        ],
      },
    ],
  },
  {
    id: "css-mastery",
    title: "CSS & Tailwind Mastery",
    description: "From CSS fundamentals to advanced Tailwind CSS — build beautiful, responsive layouts with confidence.",
    category: "Frontend",
    level: "Beginner",
    totalLessons: 6,
    duration: "3h 50m",
    image: "🎨",
    color: "from-pink-500 to-rose-600",
    modules: [
      {
        id: "m1",
        title: "CSS Fundamentals",
        lessons: [
          { id: "l1", title: "Box Model & Layout", duration: "20:00", videoUrl: "https://www.youtube.com/embed/rIO5326FgPE", description: "Master the CSS box model.", completed: false },
          { id: "l2", title: "Flexbox", duration: "25:00", videoUrl: "https://www.youtube.com/embed/u044iM9xsWU", description: "Build flexible layouts with Flexbox.", completed: false },
          { id: "l3", title: "CSS Grid", duration: "30:00", videoUrl: "https://www.youtube.com/embed/EiNiSFIPIQE", description: "Create complex grid layouts.", completed: false },
        ],
      },
      {
        id: "m2",
        title: "Tailwind CSS",
        lessons: [
          { id: "l4", title: "Tailwind Basics", duration: "22:00", videoUrl: "https://www.youtube.com/embed/UBOj6rqRUME", description: "Utility-first CSS with Tailwind.", completed: false },
          { id: "l5", title: "Responsive Design", duration: "28:00", videoUrl: "https://www.youtube.com/embed/hX_3cX0gMiY", description: "Build for every screen size.", completed: false },
          { id: "l6", title: "Animations & Transitions", duration: "25:00", videoUrl: "https://www.youtube.com/embed/GjkVDHNOcnY", description: "Add motion to your UI.", completed: false },
        ],
      },
    ],
  },
  {
    id: "git-version-control",
    title: "Git & Version Control",
    description: "Master Git workflows, branching strategies, and collaboration techniques for professional development.",
    category: "Tools",
    level: "Beginner",
    totalLessons: 5,
    duration: "2h 40m",
    image: "🔀",
    color: "from-orange-500 to-amber-600",
    modules: [
      {
        id: "m1",
        title: "Git Essentials",
        lessons: [
          { id: "l1", title: "Git Basics", duration: "18:00", videoUrl: "https://www.youtube.com/embed/HVsySz-h9r4", description: "Init, add, commit, push — the fundamentals.", completed: false },
          { id: "l2", title: "Branching & Merging", duration: "22:00", videoUrl: "https://www.youtube.com/embed/S2TUommS3O0", description: "Work with branches effectively.", completed: false },
          { id: "l3", title: "Resolving Conflicts", duration: "20:00", videoUrl: "https://www.youtube.com/embed/xNVM5UxlFSA", description: "Handle merge conflicts like a pro.", completed: false },
          { id: "l4", title: "Git Workflows", duration: "25:00", videoUrl: "https://www.youtube.com/embed/aJnFGMclhU8", description: "Gitflow, trunk-based, and more.", completed: false },
          { id: "l5", title: "GitHub Collaboration", duration: "30:00", videoUrl: "https://www.youtube.com/embed/MnUd31TvBoU", description: "PRs, code reviews, and team workflows.", completed: false },
        ],
      },
    ],
  },
];
