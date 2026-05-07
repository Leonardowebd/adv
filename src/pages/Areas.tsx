/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Scale, Gavel, ShieldCheck, FileText, Landmark, Users, Briefcase, HeartHandshake } from 'lucide-react';

const AREAS = [
  {
    icon: <Users />,
    title: "Direito do Trabalho",
    details: "Assessoria preventiva e contenciosa especializada em relações de trabalho, compliance e defesa administrativa.",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=800"
  },
  {
    icon: <Scale />,
    title: "Direito Cível",
    details: "Atuação em contratos, responsabilidade civil, direitos reais e resolução de conflitos complexos no âmbito civil.",
    image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=800"
  },
  {
    icon: <FileText />,
    title: "Direito Tributário",
    details: "Planejamento tributário estratégico, consultoria fiscal e defesas em processos administrativos e judiciais.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800"
  },
  {
    icon: <Gavel />,
    title: "Direito Penal",
    details: "Assessoria jurídica altamente qualificada, pautada na análise minuciosa de cada caso e na construção de soluções defensivas consistentes, sempre orientadas pelo devido processo legal, pelo contraditório e pela ampla defesa.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800"
  },
  {
    icon: <ShieldCheck />,
    title: "Consultoria",
    details: "Orientação jurídica estratégica para tomada de decisões seguras em negócios e gestão de patrimônio familiar.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Areas() {
  return (
    <main className="pt-40 pb-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-24">
        <span className="text-secondary uppercase tracking-[0.4em] text-xs font-bold mb-4 block">Especialidades</span>
        <h1 className="font-headline text-5xl md:text-7xl text-on-surface mb-6 italic">Áreas de Atuação</h1>
        <p className="text-on-surface-variant max-w-2xl mx-auto text-lg leading-relaxed">
          Atendemos diversas vertentes do direito com foco em resultados precisos e atendimento humanizado.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {AREAS.map((area, i) => (
          <div key={i} className="card group hover:border-secondary transition-all overflow-hidden p-0! flex flex-col">
            <div className="relative h-64 overflow-hidden">
                <img 
                    src={area.image} 
                    alt={area.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/40 to-transparent" />
                <div className="absolute top-6 left-6 text-2xl accent serif italic opacity-50">
                    0{i+1}
                </div>
            </div>
            <div className="p-10 flex-1 flex flex-col">
                <h3 className="text-xl uppercase tracking-widest mb-4 font-bold text-primary group-hover:text-secondary transition-colors italic">{area.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-8 flex-1">
                    {area.details}
                </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
