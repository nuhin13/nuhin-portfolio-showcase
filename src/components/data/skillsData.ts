import { Code, Globe, Cpu } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface Skill {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon | "briefcase"; // Using "briefcase" as string identifier for custom SVG
}

export const skills: Skill[] = [
  {
    id: 1,
    title: " Development",
    description: "Expert in Android, Flutter, React Native & iOS native development with 6+ years of experience delivering production-ready apps.",
    icon: Code
  },
  {
    id: 2,
    title: "Backend Development",
    description: "Building scalable microservices and robust APIs using Spring Boot with Java/Kotlin and TypeScript across cross-functional teams.",
    icon: Globe
  },
  {
    id: 3,
    title: "System Design & DevOps",
    description: "Designing robust architectures and handling CI/CD, containerization, and deployment pipelines for complex applications.",
    icon: Cpu
  },
  {
    id: 4,
    title: "Technical Leadership",
    description: "Leading multi-disciplinary teams, mentoring engineers, and driving delivery, growth, and innovation through ownership and collaboration.",
    icon: "briefcase"
  }
];