import { Profile } from '@/lib/supabase';
import Reveal from '@/components/Reveal';

interface ContactProps {
  profile: Profile;
}

export default function Contact({ profile }: ContactProps) {
  return (
    <section id="contact" className="px-6 py-24 sm:px-10">
      <Reveal>
      <div className="card relative mx-auto max-w-5xl px-8 py-16 text-center sm:px-16">
        <p className="relative mb-2 text-sm font-semibold text-accent">Contact</p>
        <h2 className="relative mb-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Let&apos;s build something together
        </h2>
        <p className="relative mx-auto mb-10 max-w-[52ch] text-ink-soft">
          Open to full-stack, mobile, and Web3 roles worldwide, remote or on-site.
          Reach out directly or connect below.
        </p>

        <div className="relative mx-auto mb-8 grid max-w-xl gap-3 text-left sm:grid-cols-2">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-2xl border border-line bg-bg-soft p-5 transition-colors hover:border-accent"
          >
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.14em] text-accent">Email</p>
            <p className="break-all text-sm font-medium text-ink">{profile.email}</p>
          </a>
          {profile.phone && (
            <a
              href={`tel:${profile.phone}`}
              className="rounded-2xl border border-line bg-bg-soft p-5 transition-colors hover:border-accent"
            >
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.14em] text-accent">Phone</p>
              <p className="font-medium text-ink">{profile.phone}</p>
            </a>
          )}
        </div>

        <div className="relative flex items-center justify-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="btn-primary px-5 py-3 text-sm"
          >
            Email me
          </a>
          {profile.linkedin && (
            <a
              href={`https://${profile.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink-soft transition-colors hover:border-accent hover:text-accent"
              aria-label="LinkedIn"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          )}
          {profile.github && (
            <a
              href={`https://${profile.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink-soft transition-colors hover:border-accent hover:text-accent"
              aria-label="GitHub"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          )}
        </div>
      </div>
      </Reveal>
    </section>
  );
}
