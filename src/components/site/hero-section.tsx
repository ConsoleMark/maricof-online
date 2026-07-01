import Image from "next/image";
import { siteConfig } from "@/config/site";

export function HeroSection() {
  return (
    <section
      className="relative flex min-h-screen overflow-hidden bg-white bg-cover bg-center bg-no-repeat px-5 text-black"
      style={{ backgroundImage: `url(${siteConfig.assets.heroBackground})` }}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center pb-24 pt-28 text-center">
        <h1 className="text-[clamp(4rem,12vw,11rem)] leading-none">
          {siteConfig.name}
        </h1>
      </div>

      <a
        href="#footer"
        className="absolute bottom-12 left-1/2 flex -translate-x-1/2 flex-col items-center transition-transform hover:translate-y-1"
        aria-label="Scroll down"
      >
        <span className="relative block aspect-square w-20 sm:w-24">
          <Image
            src={siteConfig.assets.scrollIndicator}
            alt="Scroll down"
            fill
            sizes="(min-width: 640px) 96px, 80px"
            className="object-contain"
          />
        </span>
      </a>
    </section>
  );
}
