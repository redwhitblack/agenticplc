export function PageHeader({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: string;
  lede: string;
}) {
  return (
    <header className="mx-auto max-w-7xl px-5 pb-12 pt-16 md:px-8 md:pt-24">
      <p className="kicker">{kicker}</p>
      <h1 className="mt-4 max-w-4xl text-[clamp(2.5rem,6vw,5.2rem)] text-ivory">{title}</h1>
      <p className="lede mt-6 max-w-2xl">{lede}</p>
    </header>
  );
}
