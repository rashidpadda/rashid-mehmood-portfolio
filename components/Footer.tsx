export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-400">
          © {currentYear} Rashid Mehmood. All rights reserved.
        </p>
        {/* <p className="text-gray-500 text-sm mt-2">
          Built with Next.js and Tailwind CSS
        </p> */}
      </div>
    </footer>
  );
}
