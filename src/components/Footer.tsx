/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <Logo className="w-10 h-9" />
              <div className="flex flex-col leading-tight">
                <span className="font-headline text-lg tracking-wide uppercase text-primary">Bitencourt & Dias</span>
                <span className="text-[9px] tracking-[0.2em] uppercase text-secondary font-medium">Advogados Associados</span>
              </div>
            </Link>
            <p className="text-on-surface-variant text-sm leading-relaxed max-w-xs">
              Especialistas em direito civil, empresarial e sucessões, focados em soluções jurídicas de alto impacto.
            </p>
          </div>

          <div>
            <h4 className="text-primary font-headline text-lg mb-6">Links Rápidos</h4>
            <ul className="space-y-4">
              {['Home', 'Áreas de Atuação', 'O Escritório', 'Blog', 'Contato'].map((item) => (
                <li key={item}>
                  <Link to="/" className="text-on-surface-variant text-sm hover:text-secondary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-primary font-headline text-lg mb-6">Contato</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-3 text-on-surface-variant text-xs">
                <MapPin size={18} className="text-secondary shrink-0" />
                <div>
                  <p className="font-bold text-primary mb-1 uppercase tracking-tighter">Teófilo Otoni - MG</p>
                  <span>Rua Epamonondas Otoni, 891, Sl. 205, Centro</span>
                </div>
              </li>
              <li className="flex items-start gap-3 text-on-surface-variant text-xs">
                <MapPin size={18} className="text-secondary shrink-0" />
                <div>
                  <p className="font-bold text-primary mb-1 uppercase tracking-tighter">Vitória da Conquista - BA</p>
                  <span>Rua Quatro, n° 13 - URBIS I, Candeias</span>
                </div>
              </li>
              <li className="flex items-center gap-3 text-on-surface-variant text-sm">
                <Mail size={18} className="text-secondary shrink-0" />
                <span>contato@bdadv.com.br</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-primary font-headline text-lg mb-6">Redes Sociais</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-on-surface-variant hover:border-secondary hover:text-secondary transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-on-surface-variant hover:border-secondary hover:text-secondary transition-all">
                <Linkedin size={20} />
              </a>
            </div>
            <div className="mt-8">
              <button className="w-full py-3 border border-secondary text-secondary rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-secondary hover:text-surface transition-all">
                Trabalhe Conosco
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="footer-label">© 2024 Bitencourt & Dias Advogados. MG — BA — BR</p>
          <div className="flex gap-6">
            <a href="#" className="footer-label hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="footer-label hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
