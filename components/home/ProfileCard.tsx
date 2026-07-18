import SocialLinks from "@/components/SocialLinks";
import TimeCount from "@/components/TimeCount";
import OpenResumeButton from "@/components/OpenResumeButton";

import { MapPin } from "lucide-react"
import Image from "next/image"

export default function ProfileCard() {
    return (
        <div className="grid space-y-4 mb-6 md:0">
            <div>
                <Image
                    src="/stdempimg.jpg"
                    alt="profile"
                    height={400}
                    width={400}
                    className="mx-auto max-w-48 rounded-full border"
                />
            </div>
            <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Bangkok, Thailand</span>
                <TimeCount />
            </div>
            <div className="flex space-x-2">
                <SocialLinks />
            </div>
            <OpenResumeButton />
        </div>
    )
}