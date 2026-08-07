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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 md:items-start">
          <div className="card col-span-2 row-span-2 p-7 sm:p-9 flex items-center">
            <p className="text-lg sm:text-xl text-ink-soft leading-relaxed whitespace-pre-line">
              {profile.summary}
            </p>
          </div>

          <div className="card p-6 sm:p-7">
            <span className="w-9 h-9 rounded-lg bg-accent-soft text-accent flex items-center justify-center mb-4">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </span>
            <h3 className="font-display text-sm font-bold text-ink-faint uppercase tracking-wide mb-1.5">
              Focus
            </h3>
            <p className="font-display text-lg font-bold text-ink">Full-Stack &amp; Web3</p>
          </div>

          <div className="card p-6 sm:p-7">
            <span className="w-9 h-9 rounded-lg bg-accent-soft text-accent flex items-center justify-center mb-4">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 10-4-4 4 4 0 004 4zm6 0a4 4 0 10-4-4" />
              </svg>
            </span>
            <h3 className="font-display text-sm font-bold text-ink-faint uppercase tracking-wide mb-1.5">
              Team style
            </h3>
            <p className="font-display text-lg font-bold text-ink">Agile / Scrum</p>
          </div>

          <div className="card col-span-2 p-6 sm:p-7 flex items-center gap-4">
            <span className="w-9 h-9 rounded-lg bg-accent-soft text-accent flex items-center justify-center shrink-0">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            <div>
              <h3 className="font-display text-sm font-bold text-ink-faint uppercase tracking-wide mb-1">
                Availability
              </h3>
              <p className="font-display text-lg font-bold text-ink">Open to Remote &amp; Relocation Worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
