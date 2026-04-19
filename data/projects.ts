export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
  featured: boolean;
  category: string;
}

export const projectsData: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with advanced features",
    longDescription: "A comprehensive e-commerce platform built with MERN stack featuring product catalog, shopping cart, payment integration with Stripe, user authentication, order management, and an admin dashboard for inventory control. Includes real-time notifications and responsive design.",
    image: "/projects/ecommerce.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
    category: "Full Stack",
  },
  {
    id: "2",
    title: "Task Management App",
    description: "Collaborative task management with real-time updates",
    longDescription: "A modern task management application built with React and Firebase, featuring real-time updates, user collaboration, drag-and-drop interface, task prioritization, and team management. Includes dark mode, notifications, and mobile-responsive design.",
    image: "/projects/taskmanager.jpg",
    technologies: ["React", "Firebase", "TypeScript", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
    category: "Frontend",
  },
  {
    id: "3",
    title: "Blog Platform",
    description: "Modern blogging platform with CMS features",
    longDescription: "A full-featured blogging platform built with Next.js and Laravel, featuring a rich text editor, markdown support, SEO optimization, comment system, category management, and analytics dashboard. Backend handles user management and content moderation.",
    image: "/projects/blog.jpg",
    technologies: ["Next.js", "Laravel", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
    category: "Full Stack",
  },
  {
    id: "4",
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media management",
    longDescription: "A comprehensive dashboard for managing multiple social media accounts, featuring real-time analytics, post scheduling, engagement metrics, audience insights, and performance reports. Built with React and integrated with major social platforms' APIs.",
    image: "/projects/dashboard.jpg",
    technologies: ["React", "Chart.js", "REST APIs", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
    category: "Frontend",
  },
  {
    id: "5",
    title: "Real Estate Platform",
    description: "Property listing and management platform",
    longDescription: "A complete real estate solution featuring advanced property search, filtering, virtual tours, appointment booking, and landlord management. Includes map integration, property analytics, and a notification system for new listings.",
    image: "/projects/realestate.jpg",
    technologies: ["MERN Stack", "Google Maps API", "Cloudinary", "Stripe"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
    category: "Full Stack",
  },
  {
    id: "6",
    title: "Chat Application",
    description: "Real-time messaging application with encryption",
    longDescription: "A secure real-time chat application built with Socket.io, featuring one-on-one messaging, group chats, file sharing, end-to-end encryption, user authentication, and typing indicators. Responsive design works on desktop and mobile.",
    image: "/projects/chat.jpg",
    technologies: ["React", "Socket.io", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
    category: "Full Stack",
  },
];
