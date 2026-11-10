import { Skill } from '@/lib/supabase';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

interface SkillsProps {
  skills: Skill[];
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className="bg-surface px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading eyebrow="My Skills" title="Tools & technologies" />
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skillGroup, i) => (
            <Reveal key={skillGroup.id} delay={(i % 3) * 70}>
              <article className="card h-full p-6 text-center sm:p-7">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-[6px] border-accent/25">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-semibold text-accent-ink">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="font-display font-semibold tracking-tight text-ink">{skillGroup.category}</h3>
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {skillGroup.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-accent-soft px-3 py-1 text-[13px] font-medium text-ink"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
