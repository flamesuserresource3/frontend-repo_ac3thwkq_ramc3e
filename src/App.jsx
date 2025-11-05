import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-transparent bg-white/70 backdrop-blur dark:bg-gray-950/50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#" className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">Branding Anda</a>
        <nav className="hidden gap-6 text-sm text-gray-700 md:flex dark:text-gray-300">
          <a href="#about" className="hover:text-gray-900 dark:hover:text-white">Tentang</a>
          <a href="#projects" className="hover:text-gray-900 dark:hover:text-white">Proyek</a>
          <a href="#contact" className="hover:text-gray-900 dark:hover:text-white">Kontak</a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gray-200 py-10 text-center text-sm text-gray-600 dark:border-gray-800 dark:text-gray-300">
      <p>© {new Date().getFullYear()} Personal Branding • Dibuat dengan cinta.</p>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased dark:bg-gray-950 dark:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
