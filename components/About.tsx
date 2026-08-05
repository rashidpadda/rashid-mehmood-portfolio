import { Profile } from '@/lib/supabase';

interface AboutProps {
  profile: Profile;
}

export default function About({ profile }: AboutProps) {
  return (
    <section id="about" className="py-24 px-6 sm:px-10">
      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-accent-soft text-accent text-sm font-semibold mb-6">
          About Me
        </span>
        <p className="text-lg sm:text-xl text-ink-soft leading-relaxed whitespace-pre-line">
          {profile.summary}
        </p>
      </div>
    </section>
  );
}
