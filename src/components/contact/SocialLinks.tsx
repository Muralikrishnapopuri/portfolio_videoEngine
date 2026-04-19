import { Mail } from "lucide-react";
import { GithubIcon } from "../icons/GithubIcon";
import { LinkedinIcon } from "../icons/LinkedinIcon";
import { LINKS } from "@/lib/constants";

export function SocialLinks() {
  const items = [
    { icon: GithubIcon, href: LINKS.github, label: "GitHub" },
    { icon: LinkedinIcon, href: LINKS.linkedin, label: "LinkedIn" },
    { icon: Mail, href: LINKS.email, label: "Email" },
  ];

  return (
    <div className="space-y-4">
      {items.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="flex items-center gap-4 p-6 bg-surface border border-crimson/20 rounded-lg hover:border-crimson hover:shadow-glow-crimson transition-all group"
        >
          <Icon className="h-8 w-8 text-crimson group-hover:text-crimson-glow transition-colors" />
          <div>
            <div className="font-display text-xl text-text-primary">{label}</div>
            <div className="text-sm text-text-dim font-mono">
              {label === "Email" ? "popurimurali16@gmail.com" : `@Muralikrishnapopuri`}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}