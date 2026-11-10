export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface px-6 py-8 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 sm:flex-row">
        <p className="font-display text-sm font-semibold tracking-tight text-ink">Rashid Mehmood</p>
        <p className="text-sm text-ink-faint">Senior Full Stack Software Engineer</p>
        <p className="text-sm text-ink-faint">© {currentYear}</p>
      </div>
    </footer>
  );
}
