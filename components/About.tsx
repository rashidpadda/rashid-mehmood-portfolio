import { Profile } from '@/lib/supabase';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

interface AboutProps {
  profile: Profile;
}

export default function About({ profile }: AboutProps) {
  return (
    <section id="practice" className="bg-surface px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="Practice"
            title="Both sides of the product."
            lede="I stay long enough to own the interface and the service behind it — the part a person sees, and the part that has to stay correct."
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <p className="max-w-prose text-base leading-relaxed text-ink-soft sm:text-lg">
              Right now that is Ibanera, a US digital bank{profile.location ? `, and I work on it from ${profile.location}` : ''}. Accounts, cards, checkout, and crypto purchase. ERP is a separate product: one system for HR, finance, manufacturing, and logistics. Before that, staking and licensing platforms, a property marketplace, and an NFT exchange.
            </p>
            <div>
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-ink-faint">
                Usually in the stack
              </p>
              <p className="mt-3 text-base leading-relaxed text-ink">
                React, Next.js, and React Native on the client. Node, NestJS,
                and .NET on the service. SQL Server when the data has to be
                exact. Gateways, queues, and real-time updates when more than
                one product shares it.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
