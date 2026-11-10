export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-line px-6 py-8 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-display text-sm font-semibold tracking-tight text-ink">Rashid Mehmood</p>
        <p className="text-sm text-ink-faint">© {currentYear}</p>
      </div>
    </footer>
  );
}
