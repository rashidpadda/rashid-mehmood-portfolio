import { Skill } from '@/lib/supabase';
import { getCategoryColor } from '@/lib/theme';

interface SkillsProps {
  skills: Skill[];
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className="py-24 px-6 sm:px-10 relative">
      <div className="absolute inset-0 -z-10 bg-bg-soft dot-grid opacity-60" />
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-soft text-accent text-sm font-semibold mb-4">
            Skills
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink">
            Tools &amp; technologies
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skillGroup, i) => {
            const color = getCategoryColor(skillGroup.category, i);
            const isLarge = skillGroup.skills.length >= 12;
            return (
              <div
                key={skillGroup.id}
                className={`card p-6 sm:p-7 ${isLarge ? 'sm:col-span-2' : ''}`}
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <span className={`w-2.5 h-2.5 rounded-full ${color.dot}`} />
                  <h3 className="font-display font-bold text-ink">{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill, index) => (
                    <span
                      key={index}
                      className={`text-xs font-medium px-3 py-1.5 rounded-full ${color.badge}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
