import { Project } from '@/lib/supabase';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading eyebrow="My Portfolio" title="Featured work" />
        </Reveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal
              key={project.id}
              className={project.id === 'ibanera-customer' ? 'md:col-span-2' : undefined}
              delay={(i % 2) * 80}
            >
              <article className="card h-full overflow-hidden">
                {project.id === 'ibanera-customer' && (
                  <div className="flex items-center justify-between border-b border-line bg-accent-soft px-7 py-3.5">
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                      Current
                    </span>
                    <span className="text-sm font-medium text-ink">Ibanera · US digital bank</span>
                  </div>
                )}
                <div className="p-7">
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <div>
                      <span className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-ink">
                        {i + 1}
                      </span>
                      <h3 className="font-display text-lg font-semibold tracking-tight text-ink">{project.name}</h3>
                    </div>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-line text-ink-faint transition-colors hover:border-ink hover:text-ink"
                        aria-label={`View ${project.name}`}
                      >
                        <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>

                  <p className="mb-4 text-sm leading-relaxed text-ink-soft">{project.description}</p>

                  {project.technologies && project.technologies.length > 0 && (
                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-ink"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {project.highlights && project.highlights.length > 0 && (
                    <ul className="bullet-list space-y-1.5">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-[13.5px] leading-relaxed text-ink-soft">
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
