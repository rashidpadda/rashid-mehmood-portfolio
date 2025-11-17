import { Experience as ExperienceType } from '@/lib/supabase';

interface ExperienceProps {
  experiences: ExperienceType[];
}

export default function Experience({ experiences }: ExperienceProps) {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Work Experience
        </h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="relative pl-8 md:pl-12 border-l-2 border-gray-300 dark:border-gray-700 hover:border-primary dark:hover:border-accent transition-colors duration-300"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary dark:bg-accent border-4 border-white dark:border-gray-900"></div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-primary dark:text-accent font-semibold">
                      {exp.company}
                    </p>
                  </div>
                  <div className="mt-2 md:mt-0 flex flex-col items-start md:items-end text-gray-600 dark:text-gray-400">
                    <span className="text-sm font-medium">
                      {exp.start_date} - {exp.end_date || 'Present'}
                    </span>
                    {exp.location && (
                      <span className="text-sm">{exp.location}</span>
                    )}
                  </div>
                </div>

                {exp.description && (
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                )}

                {exp.achievements && exp.achievements.length > 0 && (
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-gray-700 dark:text-gray-300"
                      >
                        <svg
                          className="w-5 h-5 text-primary dark:text-accent mr-2 mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="leading-relaxed">{achievement}</span>
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
