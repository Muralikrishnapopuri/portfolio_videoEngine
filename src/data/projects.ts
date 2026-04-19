import type { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    id: "pixelpolish",
    title: "Pixel Polish",
    date: "Dec 2024",
    description: "Online photo editor with real-time filters, saturation, brightness, greyscale, and inversion controls.",
    stack: ["React.js", "JavaScript", "HTML5", "CSS3", "Multer", "Cloudinary"],
    liveUrl: "https://pixelpolish.vercel.app",
    image: "/assets/images/projects/pixelpolish.jpg",
  },
  {
    id: "social",
    title: "Real-Time Social Media App",
    date: "Nov 2024",
    description: "Full-stack social platform with real-time frontend-backend integration.",
    stack: ["React.js", "Redux", "Node.js", "Express", "Mongoose", "Axios"],
    liveUrl: "https://social-media-chat.vercel.app",
    image: "/assets/images/projects/social-media.jpg",
  },
  {
    id: "ems",
    title: "Employee Management System",
    date: "Sep 2024",
    description: "CRUD app with REST API and form validation.",
    stack: ["React.js", "Express.js", "Node.js", "MongoDB", "Formik", "Axios"],
    liveUrl: "https://employee-management-system-krish.netlify.app",
    image: "/assets/images/projects/ems.jpg",
  },
];