import { Profile } from '@/lib/supabase';

interface AboutProps {
  profile: Profile;
}

export default function About({ profile }: AboutProps) {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          About Me
        </h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
            {profile.summary}
          </p>
        </div>
      </div>
    </section>
  );
}
