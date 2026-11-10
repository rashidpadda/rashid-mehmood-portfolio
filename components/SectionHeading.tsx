interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  lede?: string;
}

export default function SectionHeading({ eyebrow, title, lede }: SectionHeadingProps) {
  return (
    <div className="mb-12 max-w-2xl sm:mb-16">
      <p className="mb-3 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-ink-faint">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {lede && (
        <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">{lede}</p>
      )}
    </div>
  );
}
