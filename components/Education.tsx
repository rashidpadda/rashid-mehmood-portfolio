import { Education as EducationType } from '@/lib/supabase';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

interface EducationProps {
  education: EducationType[];
}

export default function Education({ education }: EducationProps) {
  return (
    <section id="education" className="bg-surface px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading eyebrow="My Education" title="Academic background" />
        </Reveal>

        <div className="flex flex-col gap-4">
          {education.map((edu, i) => (
            <Reveal key={edu.id} delay={i * 70}>
            <article className="card flex flex-col gap-3 p-7 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="mb-1 font-display text-lg font-semibold tracking-tight text-ink">{edu.degree}</h3>
                <p className="font-medium text-ink-soft">{edu.institution}</p>
                {edu.location && <p className="mt-0.5 text-sm text-ink-faint">{edu.location}</p>}
              </div>
              {edu.start_date && edu.end_date && (
                <span className="tabular self-start whitespace-nowrap text-sm font-medium text-accent sm:self-center">
                  {edu.start_date} – {edu.end_date}
                </span>
              )}
            </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
