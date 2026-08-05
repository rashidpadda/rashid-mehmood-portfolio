import { Education as EducationType } from '@/lib/supabase';

interface EducationProps {
  education: EducationType[];
}

export default function Education({ education }: EducationProps) {
  return (
    <section id="education" className="py-24 px-6 sm:px-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-soft text-accent text-sm font-semibold mb-4">
            Education
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink">
            Academic background
          </h2>
        </div>

        <div className="flex flex-col gap-5">
          {education.map((edu) => (
            <div key={edu.id} className="card p-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <h3 className="font-display text-lg font-bold text-ink mb-1">{edu.degree}</h3>
                <p className="text-accent font-semibold">{edu.institution}</p>
                {edu.location && <p className="text-ink-faint text-sm mt-0.5">{edu.location}</p>}
              </div>
              {edu.start_date && edu.end_date && (
                <span className="tabular font-mono text-xs px-3 py-1.5 rounded-full bg-bg-soft border border-line text-ink-faint whitespace-nowrap self-start sm:self-center">
                  {edu.start_date} – {edu.end_date}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
