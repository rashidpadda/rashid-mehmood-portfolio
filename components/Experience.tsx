import { Experience as ExperienceType } from '@/lib/supabase';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

interface ExperienceProps {
  experiences: ExperienceType[];
}

export default function Experience({ experiences }: ExperienceProps) {
  return (
    <section id="experience" className="px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading eyebrow="My Experience" title="Where I've worked" />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {experiences.map((exp, i) => (
            <Reveal key={exp.id} className={i === 0 ? 'md:col-span-2' : undefined} delay={Math.min(i, 4) * 60}>
              <article className="card h-full p-7 sm:p-8">
                <div className="mb-1">
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-sm font-semibold text-accent">{exp.company}</p>
                    <span className="tabular shrink-0 whitespace-nowrap text-sm font-medium text-ink-faint">
                      {exp.start_date} – {exp.end_date || 'Present'}
                    </span>
                  </div>
                  <h3 className="mt-1 font-display text-xl font-semibold tracking-tight text-ink">{exp.title}</h3>
                  {exp.location && <p className="mt-1 text-sm text-ink-faint">{exp.location}</p>}
                </div>

                {exp.description && (
                  <p className="my-4 text-sm leading-relaxed text-ink-soft">{exp.description}</p>
                )}

                {exp.achievements && exp.achievements.length > 0 && (
                  <ul className="bullet-list mt-4 space-y-2.5">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-[15px] leading-relaxed text-ink-soft">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
