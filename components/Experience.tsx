import { Experience as ExperienceType } from '@/lib/supabase';

interface ExperienceProps {
  experiences: ExperienceType[];
}

export default function Experience({ experiences }: ExperienceProps) {
  return (
    <section id="experience" className="py-24 px-6 sm:px-10 relative">
      <div className="absolute inset-0 -z-10 bg-bg-soft dot-grid opacity-60" />
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-soft text-accent text-sm font-semibold mb-4">
            Experience
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink">
            Where I&apos;ve worked
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="card p-7 sm:p-8 relative overflow-hidden"
            >
              <span className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-2xl gradient-brand" />
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-1">
                <div>
                  <h3 className="font-display text-xl font-bold text-ink">{exp.title}</h3>
                  <div className="flex flex-wrap items-baseline gap-x-3 mt-1">
                    <span className="text-accent font-semibold">{exp.company}</span>
                    {exp.location && <span className="text-ink-faint text-sm">{exp.location}</span>}
                  </div>
                </div>
                <span className="tabular font-mono text-xs px-3 py-1.5 rounded-full bg-accent-soft text-accent whitespace-nowrap">
                  {exp.start_date} – {exp.end_date || 'Present'}
                </span>
              </div>

              {exp.description && (
                <p className="text-ink-soft text-sm italic my-4 leading-relaxed">{exp.description}</p>
              )}

              {exp.achievements && exp.achievements.length > 0 && (
                <ul className="bullet-list space-y-2.5 mt-4">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-ink text-[15px] leading-relaxed">
                      {achievement}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
