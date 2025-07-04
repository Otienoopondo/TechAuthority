// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-center text-gray-400 text-sm py-6 border-t border-zinc-800">
      <p>&copy; {new Date().getFullYear()} TechAuthority. Crafted with passion.</p>
    </footer>
  );
}
