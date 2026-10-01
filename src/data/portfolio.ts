export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  // Add your real projects here. Each entry will automatically appear on the site.
  // Example structure (replace with your actual projects):
  //
  // {
  //   id: "project-1",
  //   number: "01",
  //   title: "Project Name",
  //   category: "Web Application",
  //   description: "Brief description of what the project does and the problem it solves.",
  //   technologies: ["React", "JavaScript", "PHP", "MySQL"],
  //   image: "/projects/project-1.jpg",   // place images in /public/projects/
  //   liveUrl: "https://your-project-url.com",
  //   githubUrl: "https://github.com/yourusername/repo"
  // },

  {
    id: "placeholder-1",
    number: "01",
    title: "Project Name",
    category: "Web Application",
    description: "Add your project description here. Explain what the project does, the problem it solves, and what makes it interesting.",
    technologies: ["React", "JavaScript", "PHP", "MySQL"],
    image: "",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "placeholder-2",
    number: "02",
    title: "Project Name",
    category: "App Development",
    description: "Add your project description here. Explain what the project does, the problem it solves, and what makes it interesting.",
    technologies: ["React", "Firebase", "JavaScript"],
    image: "",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "placeholder-3",
    number: "03",
    title: "Project Name",
    category: "Frontend Development",
    description: "Add your project description here. Explain what the project does, the problem it solves, and what makes it interesting.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "",
    liveUrl: "#",
    githubUrl: "#",
  },
];

export const timelineItems = [
  {
    year: "Foundation",
    title: "Computer Science Education",
    description: "Began ADP Computer Science at Superior University Lahore, building a strong theoretical and practical foundation in software development.",
  },
  {
    year: "Learning",
    title: "Web & App Development",
    description: "Developed proficiency in React, JavaScript, PHP and MySQL — learning by building real projects and solving practical problems.",
  },
  {
    year: "Building",
    title: "Hands-On Project Work",
    description: "Began creating full-stack applications, combining frontend interfaces with backend logic and database architecture.",
  },
  {
    year: "Present",
    title: "Real-World Digital Solutions",
    description: "Focused on building digital products that are practical, responsive and ready for real-world use across web and app platforms.",
  },
  {
    year: "Always",
    title: "Continuous Improvement",
    description: "Constantly learning and expanding expertise across modern web technologies, design systems and development best practices.",
  },
];

export const capabilities = [
  {
    number: "01",
    title: "Web Development",
    description: "Modern responsive websites and web applications designed for real-world use. From concept to deployment.",
  },
  {
    number: "02",
    title: "App Development",
    description: "Interactive applications with clean interfaces and practical functionality that users actually enjoy.",
  },
  {
    number: "03",
    title: "Frontend Development",
    description: "React and JavaScript interfaces focused on performance, usability and responsive design across all devices.",
  },
  {
    number: "04",
    title: "Backend & Database",
    description: "PHP, MySQL and backend systems for data-driven applications with reliable architecture.",
  },
];

export const technologies = [
  { name: "JavaScript", icon: "JS" },
  { name: "React", icon: "Re" },
  { name: "PHP", icon: "PH" },
  { name: "MySQL", icon: "MY" },
  { name: "Firebase", icon: "Fi" },
  { name: "HTML", icon: "HT" },
  { name: "CSS", icon: "CS" },
  { name: "Git", icon: "Gi" },
  { name: "Figma", icon: "Fg" },
];

export const availability = {
  status: "Open to Opportunities",
  types: ["On-site", "Hybrid", "Remote"],
};

export const personal = {
  name: "Muhammad Afzaal",
  title: "App Developer | Web Developer",
  subtitle: "React & JavaScript | PHP & MySQL",
  tagline: "App & Web Developer building real-world digital solutions.",
  location: "Pattoki, Punjab, Pakistan",
  linkedin: "https://www.linkedin.com/in/muhammad-afzaal-39377529b/",
  github: "https://github.com/",
  email: "", // Add your email here if you want to display it
};
