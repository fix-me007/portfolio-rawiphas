import { IconType } from "react-icons";
import {
    SiNextdotjs, SiReact, SiNodedotjs, SiTailwindcss,
    SiFastapi, SiExpress, SiMongodb, SiVercel, SiGit, SiPostman,
} from "react-icons/si"

export interface Skill {
  name: string;
  Icon: IconType;
  color: string;
}

export const skillsData:Skill[] = [
    { name: "Next.js", Icon: SiNextdotjs, color: "text-black dark:text-white" },
    { name: "React", Icon: SiReact, color: "text-cyan-400" },
    { name: "Node.js", Icon: SiNodedotjs, color: "text-green-600" },
    { name: "TailwindCSS", Icon: SiTailwindcss, color: "text-sky-400" },
    { name: "FastAPI", Icon: SiFastapi, color: "text-teal-500" },
    { name: "Express", Icon: SiExpress, color: "text-gray-500" },
    { name: "MongoDB", Icon: SiMongodb, color: "text-green-500" },
    { name: "Vercel", Icon: SiVercel, color: "text-black dark:text-white" },
    { name: "Git", Icon: SiGit, color: "text-orange-600" },
    { name: "Postman", Icon: SiPostman, color: "text-orange-500" },
];