import { Button } from "@/components/ui/button"
import { ExternalLink, MapPin } from "lucide-react"
import Image from "next/image"

export default function Page() {
  return (
    <div className="grid grid-cols-[30%_70%]">
      <div className="mx-auto grid space-y-4">
        <div>
          <Image
            src="/stdempimg.jpg"
            alt="profile"
            height={400}
            width={400}
            className="max-w-48 rounded-full border"
          />
        </div>
        <div className="grid text-sm text-gray-700">
          <span>You Cant Fix People,</span>
          <span>You Can Only Fix Yourself</span>
        </div>
        <div>
          <div className="flex items-center space-x-2">
            <MapPin size={16} />
            <span>bangkok, thailand</span>
          </div>
          <div className="flex space-x-2">
            <span>Github</span>
            <span>LinkedIn</span>
            <span>Facebook</span>
          </div>
        </div>
        <Button className="p-4 w-fit">Resume <ExternalLink size={16} /></Button>
      </div>
      <div className="grid">
        <h1 className="text-5xl font-bold">Rawiphas Tadkaew</h1>
        <span className="text-xl text-gray-400">
          Full Stack Developer | Next.js, React, Node.js
        </span>
        <p className="text-lg text-gray-200">
          Hello i am a novice web developer interested in becoming a full stack
          dev, but currently, I am learning front end. The projects I have
          worked on do not have any commercial purposes whatsoever. I simply aim
          to accumulate experience and enhance skills
        </p>
      </div>
    </div>
  )
}
