import type { Skill } from "@/data/skills";

export default function SkillBadge({ name, Icon, color }: Skill) {
  return (
    <div className="border w-fit p-2 rounded-md flex items-center gap-2 dark:hover:border-gray-600 hover:border-red-500">
      <Icon className={`w-6 h-6 ${color}`} aria-label={`${name} Logo`} />
      <p>{name}</p>
    </div>
  );
}