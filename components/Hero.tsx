import Image from 'next/image';
import { Profile } from '@/lib/supabase';

interface HeroProps {
  profile: Profile;
}

export default function Hero({ profile }: HeroProps) {
  return (
    <section id="home" className="px-6 pb-2 pt-24 sm:px-10 sm:pt-28">
      <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-[minmax(0,1fr)_260px] md:gap-12 lg:gap-16">
        <div className="reveal">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-ink-faint">
            {profile.title}
            {profile.location ? ` · ${profile.location}` : ''}
          </p>
          <h1 className="mt-5 max-w-2xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-[3.25rem]">
            I build the product people use, and the system that has to hold.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
            Banking portals, checkout, and on-chain platforms. The screen, the
            API, and the data between them.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a href="#work" className="btn-primary px-5 py-3 text-sm">
              See the work
            </a>
            <a href="#contact" className="btn-ghost px-5 py-3 text-sm">
              Start a conversation
            </a>
          </div>
        </div>

        <div className="reveal w-[220px] justify-self-center md:w-full md:justify-self-end" style={{ animationDelay: '80ms' }}>
          <Image
            src="/portrait.png"
            alt={profile.name}
            width={864}
            height={1152}
            priority
            unoptimized
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
