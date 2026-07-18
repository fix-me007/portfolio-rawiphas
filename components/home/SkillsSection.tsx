import SkillsList from "@/components/SkillsList";

export default function SkillsSection() {
    return (
        <div>
            <h1 className="text-2xl">Skill</h1>
            <div className="flex flex-wrap gap-4 mt-4">
                <SkillsList />
            </div>
        </div>
    )
}