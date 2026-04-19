export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  type: "work" | "education";
  startDate: string;
  endDate: string;
  description: string;
  skills?: string[];
  location?: string;
}

export const experienceData: ExperienceItem[] = [
  {
    id: "1",
    title: "Laravel Developer",
    company: "DevFor",
    type: "work",
    startDate: "Jan 2025",
    endDate: "Apr 2025",
    location: "Remote",
    description: "Developed and maintained Laravel-based web applications. Implemented RESTful APIs, database migrations, and user authentication systems. Collaborated with frontend developers to create seamless user experiences.",
    skills: ["Laravel", "PHP", "MySQL", "REST APIs", "MVC", "Authentication"],
  },
  {
    id: "2",
    title: "Laravel Developer Intern",
    company: "Solutions Wave",
    type: "work",
    startDate: "Sep 2024",
    endDate: "Jan 2025",
    location: "Remote",
    description: "Worked on Laravel framework fundamentals. Developed backend services, implemented database schemas, and created CRUD operations. Gained expertise in Laravel routing, middleware, and database management.",
    skills: ["Laravel", "PHP", "MySQL", "MVC Pattern", "CRUD Operations"],
  },
  {
    id: "3",
    title: "Full Stack Web Developer Intern",
    company: "Btech Training Institute",
    type: "work",
    startDate: "Jul 2023",
    endDate: "Jul 2024",
    location: "Islamabad, Pakistan",
    description: "Started journey as a developer learning both frontend and backend technologies. Built projects using MERN stack, learned responsive design, and implemented modern JavaScript practices. Completed multiple capstone projects.",
    skills: ["MERN Stack", "React", "Node.js", "MongoDB", "HTML/CSS", "JavaScript"],
  },
  {
    id: "4",
    title: "Bachelor of Science in Computer Science",
    company: "University/Institute Name",
    type: "education",
    startDate: "2021",
    endDate: "2025",
    location: "Pakistan",
    description: "Pursuing degree in Computer Science with focus on web development and software engineering. Strong foundation in data structures, algorithms, and database management systems.",
  },
];
