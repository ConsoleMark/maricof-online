import { siteConfig } from "@/config/site";

export default function ContactPage() {
  return (
    <main
      className="relative flex min-h-screen flex-1 overflow-hidden bg-white bg-cover bg-center bg-no-repeat px-5 py-32 text-center text-black"
      style={{ backgroundImage: `url(${siteConfig.assets.contactBackground})` }}
    >
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center">
        <h1 className="text-[clamp(4rem,8vw,7.5rem)] leading-none">
          Get in touch.
        </h1>
        <p className="mt-10 text-3xl leading-none sm:text-4xl">
          We'd love to hear from you.
        </p>

        <section className="mt-16 w-full max-w-3xl rounded-2xl bg-[#021b10] px-6 py-12 text-white shadow-2xl sm:px-12">
          <h2 className="text-4xl leading-none sm:text-5xl">
            Contact Information
          </h2>
          <div className="mx-auto mt-7 h-1 w-24 rounded-full bg-[#22ff91]" />

          <div className="mt-10 flex flex-col items-center gap-4">
            <p className="text-sm uppercase tracking-wide">Email</p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="rounded-full bg-white px-8 py-4 text-2xl leading-none text-black transition-transform hover:scale-105 sm:text-3xl"
            >
              {siteConfig.email}
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
