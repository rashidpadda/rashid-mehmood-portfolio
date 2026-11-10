interface SectionHeadingProps {
  eyebrow: string;
  title: string;
}

export default function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="mb-12 text-center sm:mb-14">
      <p className="mb-2 text-sm font-semibold text-accent">{eyebrow}</p>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      <span className="section-rule mx-auto mt-4 block h-1 w-12 rounded-full bg-accent" />
    </div>
  );
}
