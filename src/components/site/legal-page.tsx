type LegalSection = {
  title: string;
  body: string[];
};

type LegalPageProps = {
  title: string;
  intro: string;
  sections: LegalSection[];
};

export function LegalPage({ title, intro, sections }: LegalPageProps) {
  return (
    <main className="flex-1 bg-white px-5 pb-24 pt-32 text-black">
      <article className="mx-auto max-w-5xl">
        <header className="border-black/15 border-b pb-10">
          <p className="mb-4 text-base">Last updated: June 8, 2026</p>
          <h1 className="text-[clamp(3.5rem,8vw,7rem)] leading-none">
            {title}
          </h1>
          <p className="mt-8 max-w-4xl text-2xl leading-tight">{intro}</p>
        </header>

        <div className="mt-12 space-y-12">
          {sections.map((section) => (
            <section key={section.title} className="space-y-4">
              <h2 className="text-3xl leading-none sm:text-4xl">
                {section.title}
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-black/80">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
