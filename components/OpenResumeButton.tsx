import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { RESUME_FILE } from "@/data/site-config"

interface OpenResumeButtonProps {
    href?: string
    label?: string
}

export default function OpenResumeButton({ href = RESUME_FILE, label = "Resume" }: OpenResumeButtonProps) {

    return (
        <Button
            render={<a href={href} target="_blank" rel="noopener noreferrer" />}
            className="p-4 w-fit"
            nativeButton={false}

        >
            {label} <ExternalLink size={16} />
        </Button>
    )
}