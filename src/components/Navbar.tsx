/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './Logo';

const NAV_LINKS = [
  { name: 'Início', path: '/' },
  { name: 'Áreas de Atuação', path: '/areas' },
  { name: 'O Escritório', path: '/escritorio' },
  { name: 'Contato', path: '/contato' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const navLight = isHome || scrolled;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-obsidian py-3 border-b border-white/5' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <Logo className="w-12 h-11 transform group-hover:scale-105 transition-transform" />
          <div className="flex flex-col leading-tight">
            <span className={`font-headline text-lg tracking-wide uppercase ${navLight ? 'text-white' : 'text-on-surface'}`}>Bitencourt & Dias</span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-secondary font-medium">Advogados Associados</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${
                location.pathname === link.path
                  ? 'text-secondary'
                  : navLight ? 'text-white' : 'text-on-surface'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="https://wa.me/5511999999999" 
            className="flex items-center gap-2 px-8 py-3 bg-secondary text-black font-semibold text-xs rounded-none uppercase tracking-widest hover:bg-white transition-all shadow-lg"
          >
            <Phone size={14} />
            Agendar Consulta
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 ${navLight ? 'text-white' : 'text-on-surface'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass-obsidian border-b border-white/5 md:hidden"
          >
            <div className="flex flex-col py-8 px-6 gap-6">
              {NAV_LINKS.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path}
                  className={`text-sm uppercase tracking-[0.2em] font-medium ${
                    location.pathname === link.path ? 'text-secondary' : 'text-on-surface'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a 
                href="https://wa.me/5511999999999" 
                className="flex items-center justify-center gap-3 py-4 bg-secondary text-surface font-bold text-sm rounded-lg uppercase tracking-widest"
              >
                <Phone size={18} />
                Falar no WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
