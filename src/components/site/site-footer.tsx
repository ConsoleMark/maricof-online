import Link from "next/link";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer id="footer" className="bg-[#020817] px-5 py-14 text-white sm:py-16">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12">
        <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
          <Link
            href="/"
            className="text-2xl leading-none"
            aria-label={`${siteConfig.name} home`}
          >
            {siteConfig.name}
          </Link>

          <div className="grid gap-8 sm:grid-cols-2">
            {siteConfig.footerColumns.map((column) => (
              <div key={column.title} className="space-y-5">
                <h2 className="text-lg leading-none">{column.title}</h2>
                <ul className="space-y-4">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-base leading-none transition-opacity hover:opacity-70"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-white/20 border-t pt-8 text-sm">
          © 2026 {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
