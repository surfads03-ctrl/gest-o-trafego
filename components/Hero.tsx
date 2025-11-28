import React from 'react';
import { ArrowRight, CheckCircle, MessageCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-500/20 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 z-10">
          
          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            Multiplique suas vendas com uma Gestão de Tráfego focada em <span className="gradient-text">performance real</span>
          </h1>
          
          <p className="text-xl text-slate-300 max-w-lg">
            Acelere seu faturamento com estratégias personalizadas, dados precisos e otimização diária — sem desperdício de verba.
          </p>

          <div className="space-y-3">
            {[
              "Gestão profissional com foco em ROI",
              "Testes A/B contínuos",
              "Metodologia própria de escala",
              "Resultados comprovados"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-slate-200">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href="https://wa.me/5513991472036"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-900 bg-blue-500 hover:bg-blue-400 rounded-lg transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(59,130,246,0.5)]"
            >
              Quero uma Auditoria Gratuita
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a 
              href="https://wa.me/5513991472036"
              target="_blank"
              rel="noreferrer" 
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white border border-slate-700 hover:bg-slate-800 rounded-lg transition-all gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </a>
          </div>
        </div>

        {/* Image / Visual Representation */}
        <div className="relative">
           {/* Abstract Gradient Blob behind */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/10 blur-3xl rounded-full -z-10"></div>
           
           <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl group">
              {/* Image with gradient mask effect */}
              <div className="relative aspect-[4/3] md:aspect-square lg:aspect-[4/3]">
                 <img 
                   src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80" 
                   alt="Gestor de Tráfego analisando métricas em múltiplos monitores" 
                   className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                 />
                 
                 {/* Gradient Overlays for "Transparency" feel */}
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                 <div className="absolute inset-0 bg-gradient-to-l from-slate-950/60 via-transparent to-transparent"></div>
                 
                 {/* Floating UI Elements to reinforce "Working" vibe */}
                 <div className="absolute bottom-8 left-6 right-6 animate-in fade-in slide-in-from-bottom duration-1000">
                    <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700 p-4 rounded-xl shadow-lg flex items-center gap-4">
                       <div className="bg-green-500/20 p-3 rounded-lg">
                          <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                       </div>
                       <div>
                          <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">Otimização Diária</p>
                          <p className="text-lg font-bold text-white leading-none mt-1">ROAS: 12.4x <span className="text-green-500 text-sm font-normal ml-1">▲ 24%</span></p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};