import Link from "next/link";
import { socialLinks, SocialLink } from "@/data/social-links";

export default function SocialLinks() {
    return (
        <div className="flex space-x-2">
            {socialLinks.map(({ Icon, url, label }: SocialLink) => (
                <Link
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                >
                    <Icon className="w-6 h-6" />
                </Link>
            ))}
        </div>
    );
}