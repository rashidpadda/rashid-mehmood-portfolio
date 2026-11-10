import { Project } from '@/lib/supabase';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import QiosSlider from '@/components/QiosSlider';
import { PreviewImage } from '@/components/ImagePreview';

interface ProjectsProps {
  projects: Project[];
}

function hostLabel(link: string) {
  try {
    return new URL(link).host.replace(/^www\./, '');
  } catch {
    return link;
  }
}

function isCustomerPortal(project: Project) {
  return project.id === 'ibanera-customer' || project.link?.includes('customer.ibanera.com') || /customer portal/i.test(project.name);
}

function isErp(project: Project) {
  return project.id === 'erp' || project.name === 'ERP';
}

function isPeptiva(project: Project) {
  return project.id === 'peptiva' || /peptiva/i.test(project.name);
}

function isHomnifi(project: Project) {
  return project.id === 'homnifi' || /homnifi/i.test(project.name);
}

function isAqary(project: Project) {
  return project.id === 'aqarydash' || /aqary/i.test(project.name) || Boolean(project.link?.includes('aqary'));
}

function isIntVue(project: Project) {
  return project.id === 'intvue' || /intvue/i.test(project.name);
}

function isAdmin(project: Project) {
  return project.id === 'ibanera-admin' || /admin/i.test(project.name) || Boolean(project.link?.includes('admin.ibanera.com'));
}

function isQuickBuy(project: Project) {
  return project.id === 'quickbuy' || /quickbuy/i.test(project.name) || Boolean(project.link?.includes('portl.ibanera.com'));
}

function resultFor(project: Project) {
  const name = project.name.toLowerCase();
  if (isCustomerPortal(project)) return 'The rest of the portal stays closed until the identity check finishes.';
  if (isQuickBuy(project)) return 'Card, Apple Pay, and Google Pay finish inside the same widget.';
  if (isAdmin(project)) return 'Review, approval, and frozen transactions sit in one desk.';
  if (name.includes('peptiva')) return 'The widget keeps updating while a manual review is still open.';
  if (isHomnifi(project)) return 'Redis and RabbitMQ carry the high-volume staking and licensing paths.';
  if (name.includes('intvue')) return 'Chat and notifications cut response time by about 60%.';
  if (isErp(project)) return 'HR, finance, manufacturing, and logistics open from one sign-in.';
  return undefined;
}

function PortalSketch() {
  const steps = ['Sign in', 'Jumio', 'Portal'];
  return (
    <div className="border border-line bg-bg p-5 sm:p-6">
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-faint">How a sign-in moves</p>
      <div className="mt-4 flex flex-wrap items-center gap-2 text-sm font-medium text-ink">
        {steps.map((step, index) => (
          <span key={step} className="flex items-center gap-2">
            <span className="border border-line bg-surface px-3 py-2">{step}</span>
            {index < steps.length - 1 && <span className="text-ink-faint">→</span>}
          </span>
        ))}
      </div>
      <p className="mt-3 text-sm text-ink-soft">Accounts, cards, wallets, and transfers open only after Jumio.</p>
      <p className="mt-2 text-sm text-ink-soft">SignalR pushes verification and balance changes into Redux, so the screen matches the server without a reload.</p>
    </div>
  );
}

function ProductShot({
  src,
  alt,
  caption,
  width,
  height,
  className = 'mx-auto w-full max-w-[340px] shrink-0 border border-line bg-bg md:mx-0 lg:max-w-[480px]',
  imageClassName = 'h-auto w-full',
  sizes = '(min-width: 1024px) 480px, 340px',
}: {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  className?: string;
  imageClassName?: string;
  sizes?: string;
}) {
  return (
    <figure className={className}>
      <PreviewImage
        src={src}
        alt={alt}
        caption={caption}
        width={width}
        height={height}
        sizes={sizes}
        className={imageClassName}
      />
      <figcaption className="mt-auto border-t border-line px-4 py-3 text-sm text-ink-soft">{caption}</figcaption>
    </figure>
  );
}

function ModuleGrid({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 grid list-none gap-2 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => {
        const [name, detail] = item.split(' — ');
        return (
          <li key={item} className="border border-line px-3 py-2.5">
            <p className="text-sm font-medium text-ink">{name}</p>
            {detail && <p className="mt-0.5 text-xs leading-relaxed text-ink-faint">{detail}</p>}
          </li>
        );
      })}
    </ul>
  );
}

function ProjectLink({ project }: { project: Project }) {
  if (!project.link) {
    return <p className="mt-auto pt-6 text-sm text-ink-faint">Private</p>;
  }
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-auto inline-flex w-fit pt-6 text-sm font-medium text-ink underline decoration-line underline-offset-4 hover:decoration-ink"
    >
      {hostLabel(project.link)}
    </a>
  );
}

export default function Projects({ projects }: ProjectsProps) {
  const ordered = [...projects].sort((a, b) => a.order_index - b.order_index);
  const portal = ordered.find(isCustomerPortal);
  const detailed = ordered.filter((project) => !isCustomerPortal(project) && project.highlights.length > 2);
  const rest = ordered.filter((project) => !isCustomerPortal(project) && project.highlights.length <= 2);
  const featured = rest.slice(0, 4);
  const earlier = rest.slice(4);

  return (
    <section id="work" className="px-6 pb-20 pt-10 sm:px-10 sm:pb-28 sm:pt-14">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="Selected work"
            title="Open the product."
            lede="Live products. Under each name is the part I owned, and what changed."
          />
        </Reveal>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {featured.map((project, i) => {
            const peptiva = isPeptiva(project);
            const homnifi = isHomnifi(project);
            const quickbuy = isQuickBuy(project);
            const admin = isAdmin(project);
            const withShot = peptiva || quickbuy || homnifi || admin;
            return (
              <Reveal key={project.id} delay={(i % 2) * 60} className={withShot ? 'md:col-span-2' : undefined}>
                <article className="flex h-full flex-col border border-line bg-surface p-6 sm:p-8">
                  <div className={withShot ? 'grid items-start gap-8 md:grid-cols-[minmax(0,1fr)_340px] lg:grid-cols-[minmax(0,1fr)_480px]' : 'contents'}>
                    <div className="flex h-full flex-col">
                      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-faint">
                        {project.technologies.slice(0, 3).join(' · ')}
                      </p>
                      <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-ink">
                        {project.name}
                      </h3>
                      <p className="mt-3 max-w-3xl text-base leading-relaxed text-ink-soft">
                        {project.description}
                      </p>
                      {project.highlights?.[0] && (
                        <p className="mt-4 text-[15px] leading-relaxed text-ink">
                          {project.highlights.join(' ')}
                        </p>
                      )}
                      {resultFor(project) && (
                        <p className="mt-4 text-sm leading-relaxed text-ink">
                          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-faint">Result </span>
                          {resultFor(project)}
                        </p>
                      )}
                      <ProjectLink project={project} />
                    </div>
                    {peptiva && (
                      <ProductShot
                        src="/peptiva-checkout.jpg"
                        alt="Peptiva checkout pay step, with Google Pay and a saved card, processed by Ibanera"
                        caption="The pay step, after identity. Google Pay or a saved card."
                        width={773}
                        height={1024}
                      />
                    )}
                    {quickbuy && (
                      <ProductShot
                        src="/quickbuy-portl.jpg"
                        alt="PORTL buy screen, spending USD for a crypto asset with network and processing fees"
                        caption="Buy. Choose the amount and the asset. Fees show before you continue."
                        width={1024}
                        height={947}
                      />
                    )}
                    {homnifi && (
                      <ProductShot
                        src="/homnifi-signin.jpg"
                        alt="Homnifi sign-in, with username, password, and a Cloudflare check"
                        caption="Sign-in to the account."
                        width={1024}
                        height={613}
                      />
                    )}
                    {admin && (
                      <ProductShot
                        src="/ibanera-admin.jpg"
                        alt="Ibanera admin desk, with treasury accounts and verified business and personal users"
                        caption="The desk for accounts, approvals, and customer totals."
                        width={1024}
                        height={587}
                      />
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {portal && (
          <Reveal className="mt-4">
            <article className="border border-line bg-surface p-6 sm:p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-faint">
                {portal.technologies.slice(0, 4).join(' · ')}
              </p>
              <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink">
                {portal.name}
              </h3>
              <div className="mt-8 grid gap-8 md:grid-cols-2">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-faint">Problem</p>
                  <p className="mt-2 text-base leading-relaxed text-ink-soft">
                    A customer has to prove who they are before they can see accounts, cards, or transfers.
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-faint">What I owned</p>
                  <p className="mt-2 text-base leading-relaxed text-ink-soft">
                    The Next.js portal, account state in Redux, and the Jumio identity step.
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-faint">What changed</p>
                  <p className="mt-2 text-base leading-relaxed text-ink">
                    {resultFor(portal)}
                  </p>
                </div>
                <ProjectLink project={portal} />
              </div>
              <div className="mt-8 grid gap-8">
                <PortalSketch />
                <div className="flex flex-row items-stretch gap-4 sm:gap-6">
                  <ProductShot
                    className="flex min-w-0 flex-1 flex-col border border-line bg-bg"
                    imageClassName="aspect-[1024/920] w-full bg-white object-contain"
                    sizes="(min-width: 1024px) 360px, 33vw"
                    src="/customer-portal-login.jpg"
                    alt="Ibanera customer portal sign-in, with email and password"
                    caption="Sign in. Email and password."
                    width={1024}
                    height={593}
                  />
                  <ProductShot
                    className="flex min-w-0 flex-1 flex-col border border-line bg-bg"
                    imageClassName="aspect-[1024/920] w-full bg-white object-contain"
                    sizes="(min-width: 1024px) 360px, 33vw"
                    src="/jumio-verification.jpg"
                    alt="PORTL identity verification powered by Jumio, asking for a government document before the portal opens"
                    caption="Jumio. A government document, then the rest of the portal can open."
                    width={1024}
                    height={920}
                  />
                  <ProductShot
                    className="flex min-w-0 flex-1 flex-col border border-line bg-bg"
                    imageClassName="aspect-[1024/920] w-full bg-white object-contain"
                    sizes="(min-width: 1024px) 360px, 33vw"
                    src="/customer-portal.jpg"
                    alt="Ibanera customer portal after sign-in, with accounts, cards, and the transaction list"
                    caption="The portal after the identity check. Accounts, cards, and transactions."
                    width={1024}
                    height={593}
                  />
                </div>
              </div>
            </article>
          </Reveal>
        )}

        {detailed.map((project) => (
          <div key={project.id} className="mt-20 border-t border-line pt-16">
            <Reveal>
              <SectionHeading
                eyebrow="Own product"
                title={project.name}
                lede={project.description}
              />
            </Reveal>
            <Reveal>
              {isErp(project) && (
                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-faint">Problem</p>
                    <p className="mt-2 text-base leading-relaxed text-ink-soft">
                      HR, finance, manufacturing, and logistics were separate jobs for the same company.
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-faint">What I owned</p>
                    <p className="mt-2 text-base leading-relaxed text-ink-soft">
                      The workspace people sign into, with an employee ID or a passkey.
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-faint">What changed</p>
                    <p className="mt-2 text-base leading-relaxed text-ink">{resultFor(project)}</p>
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="self-end text-sm font-medium text-ink underline decoration-line underline-offset-4 hover:decoration-ink"
                    >
                      {hostLabel(project.link)}
                    </a>
                  )}
                </div>
              )}
              {isErp(project) && <QiosSlider />}
              <ModuleGrid items={project.highlights} />
            </Reveal>
          </div>
        ))}

        {earlier.length > 0 && (
          <div className="mt-16">
            <Reveal>
              <h3 className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-ink-faint">
                Earlier products
              </h3>
            </Reveal>
            <div className="mt-4 border-t border-line">
              {earlier.map((project) => {
                const aqary = isAqary(project);
                const intvue = isIntVue(project);
                const withShot = aqary || intvue;
                return (
                <Reveal key={project.id}>
                  <article
                    className={
                      withShot
                        ? 'grid items-start gap-8 border-b border-line py-5 md:grid-cols-[minmax(0,1fr)_340px] sm:py-6 lg:grid-cols-[minmax(0,1fr)_480px]'
                        : 'grid gap-2 border-b border-line py-5 sm:grid-cols-[160px_1fr] sm:gap-8 sm:py-6'
                    }
                  >
                    {withShot ? (
                      <div>
                        <h4 className="font-display text-lg font-semibold tracking-tight text-ink">
                          {project.link ? (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline decoration-line underline-offset-4 hover:decoration-ink"
                            >
                              {project.name}
                            </a>
                          ) : (
                            project.name
                          )}
                        </h4>
                        <p className="mt-3 text-sm leading-relaxed text-ink-soft sm:text-base">{project.description}</p>
                        {resultFor(project) && (
                          <p className="mt-2 text-sm leading-relaxed text-ink">{resultFor(project)}</p>
                        )}
                      </div>
                    ) : (
                      <>
                        <h4 className="font-display text-lg font-semibold tracking-tight text-ink">
                          {project.link ? (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline decoration-line underline-offset-4 hover:decoration-ink"
                            >
                              {project.name}
                            </a>
                          ) : (
                            project.name
                          )}
                        </h4>
                        <div>
                          <p className="text-sm leading-relaxed text-ink-soft sm:text-base">{project.description}</p>
                          {resultFor(project) && (
                            <p className="mt-2 text-sm leading-relaxed text-ink">{resultFor(project)}</p>
                          )}
                          {!project.link && <p className="mt-2 text-sm text-ink-faint">Private</p>}
                        </div>
                      </>
                    )}
                    {aqary && (
                      <ProductShot
                        src="/aqary-home.jpg"
                        alt="Aqary homepage, with property search across projects, units, and areas in the UAE"
                        caption="The listing site. Search by area, project, property, or unit."
                        width={1024}
                        height={593}
                      />
                    )}
                    {intvue && (
                      <ProductShot
                        src="/intvue-home.jpg"
                        alt="IntVue homepage, with a ranked shortlist of sample interviews and an answer being scored"
                        caption="The screening site. Candidates record answers, and the shortlist is ranked."
                        width={1024}
                        height={575}
                      />
                    )}
                  </article>
                </Reveal>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
