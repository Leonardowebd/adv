/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight, Scale, Gavel, ShieldCheck, FileText, ChevronRight, Briefcase, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const SERVICES = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "Direito do Trabalho",
    desc: "Assessoria estratégica preventiva e contenciosa para empresas e executivos.",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=800"
  },
  {
    icon: <Scale className="w-6 h-6" />,
    title: "Direito Cível",
    desc: "Contratos de alta complexidade, responsabilidade civil e conflitos societários.",
    image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=800"
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Direito Tributário",
    desc: "Planejamento fiscal estratégico para otimização de resultados empresariais.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800"
  },
  {
    icon: <Gavel className="w-6 h-6" />,
    title: "Direito Penal",
    desc: "Defesa criminal estratégica, pautada no contraditório e na ampla defesa.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800"
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Consultoria",
    desc: "Orientação jurídica estratégica para decisões seguras em negócios.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center pt-20 px-6">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000" 
            alt="Law Office Background" 
            className="w-full h-full object-cover brightness-[0.3]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-secondary uppercase tracking-[0.4em] text-xs font-bold mb-6 block">
              Excelência & Estratégia
            </span>
            <h1 className="font-headline text-5xl md:text-8xl text-primary leading-[1.1] mb-8 tracking-tight">
              Defesa Inabalável do seu <br />
              <span className="italic text-secondary">Patrimônio</span>
            </h1>
            <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
              Escritório de advocacia premium focado em resultados estratégicos e na preservação de legado familiar e empresarial.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center uppercase tracking-widest text-xs font-bold">
              <Link to="/contato" className="px-8 py-4 bg-secondary text-black rounded-none flex items-center justify-center gap-3 hover:bg-white transition-all shadow-xl shadow-secondary/10">
                Falar com Especialista
                <ArrowRight size={18} />
              </Link>
              <Link to="/escritorio" className="px-8 py-4 border border-white/20 text-primary rounded-none hover:bg-white/10 transition-all font-semibold">
                Conheça o Escritório
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.3em] text-outline opacity-60">Scroll</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-secondary to-transparent" />
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6 bg-surface-container-low">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative z-10">
                <img 
                    src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=1000" 
                    alt="Law Practice" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                />
            </div>
            {/* Artistic border */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-secondary/30 rounded-2xl -z-0" />
            
            <div className="absolute bottom-10 -left-10 bg-surface-container-highest p-8 rounded-xl border border-white/5 shadow-2xl hidden lg:block">
                <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl font-headline text-secondary">20+</span>
                    <span className="text-[10px] uppercase tracking-widest leading-tight text-on-surface-variant font-bold">Anos de <br/>Experiência</span>
                </div>
                <div className="w-full h-[1px] bg-white/10" />
                <p className="text-[10px] uppercase tracking-widest text-secondary mt-4 font-bold">Selo de Qualidade OAB Premium</p>
            </div>
          </div>

          <div>
            <span className="text-secondary uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Nossa Proposta</span>
            <h2 className="font-headline text-4xl md:text-5xl text-primary mb-8 leading-tight">
              Compromisso ético com <br />
              <span className="italic font-light">soluções eficientes</span>
            </h2>
            <div className="space-y-6 text-on-surface-variant leading-relaxed">
              <p>
                No Bitencourt & Dias, não apenas representamos nossos clientes; nós construímos parcerias baseadas na confiança mútua e na excelência técnica.
              </p>
              <p>
                Nossa atuação é marcada por uma abordagem personalizada, onde cada detalhe é analisado sob óticas estratégicas para garantir a proteção jurídica necessária em um cenário complexo.
              </p>
            </div>

            <div className="mt-12 space-y-8">
              {[
                { label: "Atendimento Personalizado", desc: "Cada caso é tratado com exclusividade total." },
                { label: "Visão Sistêmica", desc: "Análise multidisciplinar para resultados seguros." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shadow-[0_0_10px_#dfc0b4]" />
                  <div>
                    <h4 className="text-primary font-bold text-sm uppercase tracking-widest mb-1">{item.label}</h4>
                    <p className="text-xs text-outline">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Areas Section */}
      <section className="py-32 px-6 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          
          <div className="max-w-7xl mx-auto text-center mb-20">
            <span className="text-secondary uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Especialidades</span>
            <h2 className="font-headline text-4xl md:text-6xl text-primary">Nossas Áreas de Atuação</h2>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((item, i) => (
               <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="card group hover:border-secondary/50 transition-all cursor-default p-0! overflow-hidden flex flex-col"
               >
                 <div className="relative h-48 overflow-hidden">
                    <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 text-xl accent serif italic opacity-50">
                        0{i+1}
                    </div>
                 </div>
                 <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-sm uppercase tracking-widest mb-4 font-bold text-primary group-hover:text-secondary transition-colors">{item.title}</h3>
                    <p className="text-on-surface-variant text-xs leading-relaxed mb-6 flex-1">
                        {item.desc}
                    </p>
                    <Link to="/areas" className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-secondary underline underline-offset-4">
                        Saiba Mais
                        <ChevronRight size={14} />
                    </Link>
                 </div>
               </motion.div>
            ))}
          </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto relative rounded-3xl overflow-hidden bg-surface-container-lowest border border-white/5">
            <div className="absolute inset-0 opacity-20">
                <img 
                    src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1500" 
                    alt="Consultation" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                />
            </div>
            <div className="relative z-10 p-12 md:p-24 flex flex-col items-center text-center">
                <h2 className="font-headline text-4xl md:text-6xl text-primary mb-8 max-w-3xl font-light">Vamos discutir a melhor estratégia para o seu caso</h2>
                <p className="text-on-surface-variant text-lg mb-12 max-w-xl">Agende uma consulta confidencial com nossos advogados seniores e garanta a segurança jurídica que você merece.</p>
                <Link to="/contato" className="px-12 py-5 bg-secondary text-surface font-bold rounded-lg text-lg hover:scale-105 transition-all shadow-2xl">
                    Agende sua Reunião
                </Link>
            </div>
          </div>
      </section>
    </main>
  );
}
