
import ProfileCard from "@/components/home/ProfileCard";
import IntroSection from "@/components/home/IntroSection";
import SkillsSection from "@/components/home/SkillsSection";

export default function Page() {
  return (
    <>
      <div className="grid md:grid-cols-[30%_70%] grid-cols-1 mb-12">
        <ProfileCard />
        <IntroSection />
      </div>
      <SkillsSection />
    </>
  )
}