export default function Footer() {
  return (
    <footer className="w-full py-6 border-t border-gray-700 mt-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center text-sm text-gray-400">
        {/* Copyright */}
        <p className="mb-4 md:mb-0">
          © {new Date().getFullYear()} Achmad Risky. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
