import { Profile } from '@/lib/supabase';

interface AboutProps {
  profile: Profile;
}

export default function About({ profile }: AboutProps) {
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
          <div className="card col-span-2 row-span-2 p-7 sm:p-9 flex items-center">
            <p className="text-lg sm:text-xl text-ink-soft leading-relaxed whitespace-pre-line">
              {profile.summary}
            </p>
          </div>

          <div className="card p-6 sm:p-7 flex flex-col justify-between">
            <h3 className="font-display text-sm font-bold text-ink-faint uppercase tracking-wide mb-4">
              Focus
            </h3>
            <p className="font-display text-lg font-bold text-ink">Full-Stack &amp; Web3</p>
          </div>

          <div className="card p-6 sm:p-7 flex flex-col justify-between">
            <h3 className="font-display text-sm font-bold text-ink-faint uppercase tracking-wide mb-4">
              Team style
            </h3>
            <p className="font-display text-lg font-bold text-ink">Agile / Scrum</p>
          </div>

          <div className="card col-span-2 p-6 sm:p-7 flex flex-col justify-between">
            <h3 className="font-display text-sm font-bold text-ink-faint uppercase tracking-wide mb-4">
              Availability
            </h3>
            <p className="font-display text-lg font-bold text-ink">Open to Remote &amp; Relocation Worldwide</p>
          </div>
        </div>
      </div>
    </section>
  );
}
