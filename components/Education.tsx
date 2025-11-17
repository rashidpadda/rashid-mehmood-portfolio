import { Education as EducationType } from '@/lib/supabase';

interface EducationProps {
  education: EducationType[];
}

export default function Education({ education }: EducationProps) {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Education
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-primary dark:text-accent font-semibold mb-1">
                    {edu.institution}
                  </p>
                  {edu.location && (
                    <p className="text-gray-600 dark:text-gray-400">
                      {edu.location}
                    </p>
                  )}
                </div>
                {edu.start_date && edu.end_date && (
                  <div className="text-gray-600 dark:text-gray-400 font-medium">
                    {edu.start_date} - {edu.end_date}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
