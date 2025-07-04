import './globals.css'; // Correct path
import Navbar from '../components/Navbar'; // From root-level components
import Footer from '../components/Footer';

export const metadata = {
  title: 'TechAuthority',
  description: 'Portfolio for premium tech services, custom software projects, and consulting.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-zinc-950 text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
