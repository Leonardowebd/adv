/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function Escritorio() {
  return (
    <main className="pt-40 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <span className="text-secondary uppercase tracking-[0.4em] text-xs font-bold mb-4 block">Sobre Nós</span>
            <h1 className="font-headline text-5xl md:text-7xl text-on-surface mb-8 italic">Tradição & Modernidade</h1>
            <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
              <p>
                O Bitencourt & Dias Advogados nasceu da união de profissionais com vasta experiência na advocacia estratégica, com o propósito de oferecer segurança jurídica e proteção patrimonial de alta performance.
              </p>
              <p>
                Com unidades em Minas Gerais e Bahia, atuamos de forma próxima e personalizada, unindo o rigor técnico da advocacia tradicional com a agilidade e inovação que o mercado atual exige. Nosso compromisso é com o resultado e a tranquilidade de nossos clientes.
              </p>
            </div>
          </div>
          <div className="relative">
             <div className="aspect-square overflow-hidden border border-white/10 p-2 bg-surface-container-high rounded-none shadow-2xl">
                <img 
                    src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1000" 
                    alt="Ambiente Bitencourt & Dias" 
                    className="w-full h-full object-cover grayscale opacity-80"
                    referrerPolicy="no-referrer"
                />
             </div>
             {/* Decorative element */}
             <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-secondary/5 rounded-none blur-3xl -z-10" />
          </div>
        </div>

        {/* Professional Team Section */}
        <div className="mb-32">
            <div className="text-center mb-20">
                <span className="text-accent uppercase tracking-[0.4em] text-xs font-bold mb-4 block underline underline-offset-8 decoration-accent/30">Liderança Especializada</span>
                <h2 className="font-headline text-4xl md:text-6xl text-primary italic">Corpo Jurídico</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    { 
                        name: "Dr. Flávio Prates Bitencourt", 
                        role: "Sócio Sênior | Fundador", 
                        image: "/uploads/Flavio.jpeg",
                        bio: "Especialista em Direito do Trabalho, com atuação na defesa de interesses de empresas e seus sócios, além de atuar na área Cível e na liderança de ações estratégicas."
                    },
                    { 
                        name: "Dr. Caymmi Gomes Botelho", 
                        role: "Sócio | Diretor Jurídico", 
                        oab: "OAB/MG 171.105",
                        image: "/uploads/caymmi.jpeg",
                        bio: "Especialista na atuação em Tribunal do Júri e Direito Penal, com atuação em Minas Gerais."
                    },
                    { 
                        name: "Dra. Tayara Magalhães Amaral", 
                        role: "Sócia | Direito Civil", 
                        oab: "OAB/BA 20.576",
                        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
                        bio: "Mestre em Direito Tributário, com atuação na unidade Bahia voltada para o planejamento previdenciário e defesa do consumidor."
                    },
                ].map((member, i) => (
                    <div key={i} className="card group p-0! overflow-hidden flex flex-col border-white/5">
                        <div className="aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 relative">
                            <img 
                                src={member.image} 
                                alt={member.name} 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div className="p-8 border-t border-white/5 bg-surface-container-low flex-1">
                            <h3 className="text-secondary font-headline text-2xl italic mb-1">{member.name}</h3>
                            <div className="flex flex-col gap-1 mb-4">
                                <p className="text-[10px] uppercase tracking-widest text-primary/60 font-bold">{member.role}</p>
                                {member.oab && <p className="text-[9px] text-accent font-mono tracking-wider">{member.oab}</p>}
                            </div>
                            <p className="text-on-surface-variant text-xs leading-relaxed">{member.bio}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
                { title: "Missão", desc: "Fornecer segurança jurídica de excelência, transformando desafios complexos em oportunidades seguras." },
                { title: "Visão", desc: "Ser reconhecido como referência nacional em advocacia estratégica e proteção patrimonial." },
                { title: "Valores", desc: "Integridade inquestionável, foco absoluto no cliente e busca constante pela inovação jurídica." }
            ].map((item, i) => (
                <div key={i} className="p-12 glass-obsidian border border-white/5 rounded-3xl">
                    <h3 className="font-headline text-3xl text-secondary mb-6 italic">{item.title}</h3>
                    <p className="text-on-surface-variant leading-relaxed">{item.desc}</p>
                </div>
            ))}
        </div>
      </div>
    </main>
  );
}
