import type { IconType } from "react-icons";
import { SiGithub, SiFacebook } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";

export type SocialLink = {
    Icon: IconType;
    url: string;
    label: string;
};

export const socialLinks: SocialLink[] = [
    { Icon: SiGithub, url: "https://github.com/fix-me007", label: "GitHub" },
    { Icon: FaLinkedin, url: "https://www.linkedin.com/in/rawiphas-tadkaew", label: "LinkedIn" },
    { Icon: SiFacebook, url: "https://www.facebook.com/rawiphas.tadkaew", label: "Facebook" },
];