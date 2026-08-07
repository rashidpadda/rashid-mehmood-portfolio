import { Profile } from '@/lib/supabase';

interface AboutProps {
  profile: Profile;
}

const facts = [
  { label: 'Experience', value: '6+ Years' },
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
    <section id="about" className="py-24 px-6 sm:px-10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-soft text-accent text-sm font-semibold mb-4">
            About Me
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink">
            The short version
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1.6fr_1fr] gap-10 lg:gap-16 items-start">
          <div className="max-w-[62ch]">
            <p className="font-display text-xl sm:text-2xl font-semibold text-ink leading-snug mb-5">
              {lead}
            </p>
            {rest && (
              <p className="text-base sm:text-lg text-ink-soft leading-relaxed">
                {rest}
              </p>
            )}
          </div>

          <div className="card divide-y divide-line">
            {facts.map((fact) => (
              <div key={fact.label} className="p-5 sm:p-6 flex items-center justify-between gap-6">
                <span className="text-sm text-ink-faint shrink-0">{fact.label}</span>
                <span className="font-display font-bold text-ink text-right">{fact.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
