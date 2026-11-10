import { Profile } from '@/lib/supabase';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

interface AboutProps {
  profile: Profile;
}

const facts = [
  { label: 'Experience', value: '7+ Years' },
  { label: 'Focus', value: 'Full-Stack & Web3' },
  { label: 'Team style', value: 'Agile / Scrum' },
  { label: 'Availability', value: 'Remote & Relocation Worldwide' },
];

export default function About({ profile }: AboutProps) {
  const summary = profile.summary ?? '';
  const splitAt = summary.indexOf('. ');
  const lead = splitAt > -1 ? summary.slice(0, splitAt + 1) : summary;
  const rest = splitAt > -1 ? summary.slice(splitAt + 2) : '';

  return (
    <section id="about" className="bg-surface px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading eyebrow="About Me" title="The short version" />
        </Reveal>

        <div className="grid items-start gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
          <Reveal className="max-w-[62ch]" delay={80}>
            <p className="mb-5 font-display text-xl font-medium leading-snug tracking-tight text-ink sm:text-2xl">
              {lead}
            </p>
            {rest && (
              <p className="text-base leading-relaxed text-ink-soft sm:text-lg">
                {rest}
              </p>
            )}
          </Reveal>

          <Reveal delay={160}>
          <div className="card divide-y divide-line">
            {facts.map((fact) => (
              <div key={fact.label} className="flex items-center justify-between gap-6 p-5 sm:px-6">
                <span className="shrink-0 text-sm text-ink-faint">{fact.label}</span>
                <span className="text-right font-display text-sm font-semibold text-ink">{fact.value}</span>
              </div>
            ))}
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
