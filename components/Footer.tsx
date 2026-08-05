export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-6 sm:px-10 py-8 border-t border-line">
      <p className="text-center text-sm text-ink-faint">
        © {currentYear} Rashid Mehmood
      </p>
    </footer>
  );
}
