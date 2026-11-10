import { Education as EducationType, Experience as ExperienceType } from '@/lib/supabase';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

interface ExperienceProps {
  experiences: ExperienceType[];
  education: EducationType[];
}

export default function Experience({ experiences, education }: ExperienceProps) {
  return (
    <section id="background" className="px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="Background"
            title="Where it was built."
            lede="Dates and places only. The products are in the section above."
          />
        </Reveal>

        <div className="border-t border-line">
          {experiences.map((exp, i) => (
            <Reveal key={exp.id} delay={(i % 4) * 40}>
              <article className="grid gap-2 border-b border-line py-6 sm:grid-cols-[160px_1fr] sm:gap-10 sm:py-7">
                <p className="tabular text-sm text-ink-faint">
                  {exp.start_date} – {exp.end_date || 'Now'}
                </p>
                <div>
                  <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
                    {exp.company}
                  </h3>
                  <p className="mt-1 text-sm text-ink-soft">
                    {exp.title}
                    {exp.location ? ` · ${exp.location}` : ''}
                  </p>
                  {exp.description && (
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft">
                      {exp.description}
                    </p>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {education.length > 0 && (
          <Reveal delay={80}>
            <p className="mt-8 text-sm text-ink-faint">
              {education.map((edu) => `${edu.degree}, ${edu.institution}`).join(' · ')}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
