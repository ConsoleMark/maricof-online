type SimplePageProps = {
  title: string;
};

export function SimplePage({ title }: SimplePageProps) {
  return (
    <main className="flex min-h-screen flex-1 items-center justify-center bg-white px-5 py-28 text-center text-black">
      <h1 className="text-5xl leading-none sm:text-7xl">{title}</h1>
    </main>
  );
}
