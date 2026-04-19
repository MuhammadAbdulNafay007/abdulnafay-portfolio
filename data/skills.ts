export interface SkillCategory {
  category: string;
  skills: string[];
  color?: string;
}

export const skillsData: SkillCategory[] = [
  {
    category: "Frontend",
    skills: ["HTML5", "CSS3", "Bootstrap", "Tailwind CSS", "JavaScript", "React", "Next.js", "TypeScript", "Framer Motion"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "PHP", "Laravel", "REST APIs", "Authentication", "Server-side Rendering"],
    color: "from-green-500 to-emerald-500",
  },
  {
    category: "Databases",
    skills: ["MySQL", "MongoDB", "PostgreSQL", "Supabase", "Firebase", "Database Design", "Query Optimization"],
    color: "from-purple-500 to-pink-500",
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Docker", "AWS", "Vercel", "Linux"],
    color: "from-orange-500 to-red-500",
  },
  {
    category: "Other Skills",
    skills: ["CRUD Operations", "MVC Architecture", "ERP Systems", "Responsive Design", "SEO", "Web Performance", "SOLID Principles"],
    color: "from-indigo-500 to-blue-500",
  },
];
