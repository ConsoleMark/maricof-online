import Link from "next/link";
import { siteConfig } from "@/config/site";

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-7 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="text-xl leading-none text-black sm:text-2xl"
          aria-label={`${siteConfig.name} home`}
        >
          {siteConfig.name}
        </Link>

        <div className="flex items-center gap-4 text-sm text-black sm:gap-8 sm:text-base">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="leading-none transition-opacity hover:opacity-65"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
