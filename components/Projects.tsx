import { Project } from '@/lib/supabase';

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="py-24 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-soft text-accent text-sm font-semibold mb-4">
            Projects
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink">
            Featured work
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="card overflow-hidden">
              <div className="h-1.5 bg-accent" />
              <div className="p-7">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-display text-lg font-bold text-ink">{project.name}</h3>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-bg-soft flex items-center justify-center text-ink-faint hover:text-accent transition-colors shrink-0"
                      aria-label="View project"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>

                <p className="text-ink-soft text-sm leading-relaxed mb-4">{project.description}</p>

                {project.technologies && project.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-accent-soft text-accent"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {project.highlights && project.highlights.length > 0 && (
                  <ul className="bullet-list space-y-1.5">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-ink-soft text-[13.5px] leading-relaxed">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
