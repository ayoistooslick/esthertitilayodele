import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../contexts/ThemeContext';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Sales', path: '/sales' },
  { name: 'Marketing', path: '/marketing' },
  { name: 'CV', path: '/cv' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { isDark, toggle } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/90 backdrop-blur-md border-b border-primary/20 py-3 shadow-sm'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="group">
            <span className="text-2xl font-black tracking-tight text-primary group-hover:opacity-80 transition-opacity cursor-pointer">
              AET.
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-7 items-center">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <span
                  className={`text-sm font-semibold tracking-wide uppercase transition-all duration-200 cursor-pointer relative pb-0.5 ${
                    location === link.path
                      ? 'text-primary'
                      : 'text-foreground/70 hover:text-primary'
                  }`}
                >
                  {link.name}
                  {location === link.path && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-primary rounded-full"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </span>
              </Link>
            ))}

            {/* Theme toggle */}
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="ml-2 w-9 h-9 rounded-full flex items-center justify-center border border-foreground/15 text-foreground/70 hover:text-primary hover:border-primary transition-colors duration-200"
            >
              {isDark ? <FiSun size={16} /> : <FiMoon size={16} />}
            </button>
          </nav>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-3 z-[60]">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="w-9 h-9 rounded-full flex items-center justify-center border border-foreground/15 text-foreground/70"
            >
              {isDark ? <FiSun size={15} /> : <FiMoon size={15} />}
            </button>
            <button
              className="text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed inset-0 z-[55] bg-background flex flex-col items-center justify-center gap-9"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + i * 0.05 }}
              >
                <Link href={link.path} onClick={() => setMobileMenuOpen(false)}>
                  <span
                    className={`text-4xl font-black tracking-tight cursor-pointer ${
                      location === link.path ? 'text-primary' : 'text-foreground'
                    }`}
                  >
                    {link.name}
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
