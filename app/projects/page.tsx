import { Separator } from "@/components/ui/separator"

export default function ProjectPage() {
  return (
    <div>
      <h1 className="text-5xl font-bold mb-4">Projects</h1>
      <div>
        <Separator />
        <div className="grid md:flex items-center justify-between gap-4 my-6">
          <div>2025</div>
          <div>
            <h1 className="text-2xl">Title</h1>
            <p>short description</p>
          </div>
          <div>
            <p>Frontend Developer</p>
            <p>Aug 2026</p>
          </div>
        </div>
        <Separator />
      </div>
    </div>
  )
}
