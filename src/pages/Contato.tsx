/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contato() {
  const [activeUnit, setActiveUnit] = useState<'MG' | 'BA'>('MG');

  const mapUrls = {
    MG: "https://www.google.com/maps?q=Rua+Epamonondas+Otoni,+891,+Teófilo+Otoni+-+MG&output=embed",
    BA: "https://www.google.com/maps?q=Rua+Quatro,+n°+13+-+URBIS+I,+Vitória+da+Conquista+-+BA&output=embed"
  };

  return (
    <main className="pt-40 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
            <span className="text-secondary uppercase tracking-[0.4em] text-xs font-bold mb-4 block">Fale Conosco</span>
            <h1 className="font-headline text-5xl md:text-7xl text-on-surface mb-6 italic">Inicie sua Consulta</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="flex flex-col gap-10">
                {/* Unit 1 */}
                <button 
                    onClick={() => setActiveUnit('MG')}
                    className={`card border-white/5 p-8 bg-surface-container-low text-left transition-all ${activeUnit === 'MG' ? 'border-secondary shadow-lg shadow-secondary/5 ring-1 ring-secondary/20' : 'hover:border-white/20'}`}
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${activeUnit === 'MG' ? 'bg-secondary text-surface' : 'bg-secondary/10 text-secondary'}`}>
                            <MapPin size={24} />
                        </div>
                        <div>
                            <h3 className="text-accent uppercase tracking-widest text-xs font-bold">Unidade Minas Gerais</h3>
                            <p className="font-headline text-2xl text-primary italic">Teófilo Otoni</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <p className="text-on-surface-variant text-sm border-l-2 border-secondary/30 pl-4 py-1">
                            Rua Epamonondas Otoni, 891, Sl. 205, Centro<br />
                            CEP: 39.800-913 — Teófilo Otoni - MG
                        </p>
                        <div className="flex items-center gap-3 text-primary text-sm font-bold">
                            <Phone size={16} className="text-secondary" />
                            <span>(33) 3521-0872</span>
                        </div>
                    </div>
                </button>

                {/* Unit 2 */}
                <button 
                    onClick={() => setActiveUnit('BA')}
                    className={`card border-white/5 p-8 bg-surface-container-low text-left transition-all ${activeUnit === 'BA' ? 'border-secondary shadow-lg shadow-secondary/5 ring-1 ring-secondary/20' : 'hover:border-white/20'}`}
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${activeUnit === 'BA' ? 'bg-secondary text-surface' : 'bg-secondary/10 text-secondary'}`}>
                            <MapPin size={24} />
                        </div>
                        <div>
                            <h3 className="text-accent uppercase tracking-widest text-xs font-bold">Unidade Bahia</h3>
                            <p className="font-headline text-2xl text-primary italic">Vitória da Conquista</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <p className="text-on-surface-variant text-sm border-l-2 border-secondary/30 pl-4 py-1">
                            Rua Quatro, n° 13 - URBIS I, Candeias<br />
                            CEP: 45.028-315 — Vitória da Conquista - BA
                        </p>
                        <div className="flex items-center gap-3 text-primary text-sm font-bold">
                            <Phone size={16} className="text-secondary" />
                            <span>(77) 30828-1475</span>
                        </div>
                    </div>
                </button>

                <div className="flex items-center gap-4 p-6 glass-obsidian border border-white/10 rounded-xl justify-center">
                    <Mail size={20} className="text-secondary" />
                    <span className="text-sm font-bold tracking-widest text-primary uppercase">contato@bdadv.com.br</span>
                </div>
            </div>

            <div className="space-y-6">
                <div className="aspect-video rounded-3xl overflow-hidden border border-white/5 grayscale hover:grayscale-0 transition-all duration-500">
                    <iframe 
                        src={mapUrls[activeUnit]} 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div className="p-6 bg-surface-container-low border border-white/5 rounded-2xl">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-outline font-bold mb-2">Localização Selecionada</p>
                    <p className="text-primary text-sm font-medium italic">
                        {activeUnit === 'MG' ? 'Minas Gerais — Centro, Teófilo Otoni' : 'Bahia — Candeias, Vitória da Conquista'}
                    </p>
                </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-surface-container-low p-10 md:p-16 rounded-[2rem] border border-white/5 h-fit">
            <h3 className="font-headline text-3xl text-primary mb-8 italic">Envie uma mensagem</h3>
            <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-outline font-bold px-1">Nome Completo</label>
                        <input type="text" className="w-full bg-surface-container-high border border-white/5 rounded-xl px-5 py-4 text-on-surface focus:outline-none focus:border-secondary transition-colors" placeholder="Ex: João Silva" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-outline font-bold px-1">E-mail</label>
                        <input type="email" className="w-full bg-surface-container-high border border-white/5 rounded-xl px-5 py-4 text-on-surface focus:outline-none focus:border-secondary transition-colors" placeholder="Ex: joao@email.com" />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-outline font-bold px-1">Assunto</label>
                    <select className="w-full bg-surface-container-high border border-white/5 rounded-xl px-5 py-4 text-on-surface focus:outline-none focus:border-secondary transition-colors appearance-none">
                        <option>Direito Civil</option>
                        <option>Empresarial</option>
                        <option>Sucessões</option>
                        <option>Outros</option>
                    </select>
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-outline font-bold px-1">Mensagem</label>
                    <textarea rows={4} className="w-full bg-surface-container-high border border-white/5 rounded-xl px-5 py-4 text-on-surface focus:outline-none focus:border-secondary transition-colors" placeholder="Como podemos ajudar?"></textarea>
                </div>
                <button className="w-full py-5 bg-secondary text-surface font-bold rounded-xl uppercase tracking-[0.2em] hover:brightness-110 transition-all shadow-xl shadow-secondary/10">
                    Enviar Mensagem
                </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
