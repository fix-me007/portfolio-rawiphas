import { skillsData } from "@/data/skills";
import SkillBadge from "./SkillBadge";

export default function SkillsList() {
  return (
    <div className="flex flex-wrap gap-4">
      {skillsData.map((skill) => (
        <SkillBadge key={skill.name} {...skill} />
      ))}
    </div>
  );
}