import Link from "next/link";
import { MKMonogram } from "../global/MKMonogram";
import { NAV_LINKS, LINKS, COPYRIGHT, PERSONAL } from "@/lib/constants";
import { Mail } from "lucide-react";
import { GithubIcon } from "../icons/GithubIcon";
import { LinkedinIcon } from "../icons/LinkedinIcon";

export function Footer() {
  return (
    <footer className="border-t border-crimson/10 bg-void">
      <div className="container-cinematic py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <MKMonogram size={48} />
            <p className="mt-4 text-sm text-text-body max-w-xs">
              {PERSONAL.tagline}
            </p>
          </div>

          <div>
            <h3 className="mono-caps mb-4">Navigate</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((l) => (
                <li key={l.id}>
                  <Link href={l.href} className="text-text-body hover:text-crimson transition-colors text-sm">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mono-caps mb-4">Connect</h3>
            <div className="flex gap-4">
              <a href={LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-text-body hover:text-crimson transition-colors">
                <GithubIcon className="h-5 w-5" />
              </a>
              <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-text-body hover:text-crimson transition-colors">
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a href={LINKS.email} aria-label="Email" className="text-text-body hover:text-crimson transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-crimson/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-dim">{COPYRIGHT.text}</p>
          <p className="text-xs text-text-dim font-mono">{COPYRIGHT.builtWith}</p>
        </div>
      </div>
    </footer>
  );
}