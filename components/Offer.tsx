import React from 'react';
import { Flame, Clock, Gift, ShieldCheck } from 'lucide-react';

export const Offer: React.FC = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto bg-gradient-to-br from-yellow-600/20 to-orange-600/10 border border-yellow-500/30 rounded-3xl p-8 md:p-12 relative overflow-hidden">
        
        {/* Badge */}
        <div className="absolute top-6 right-6 inline-flex items-center gap-2 bg-yellow-500 text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider animate-pulse">
           <Flame className="w-4 h-4 fill-black" />
           Vagas Limitadas
        </div>

        <div className="relative z-10 text-center">
           <h2 className="text-3xl font-bold text-white mb-2">Oferta Irrecusável</h2>
           <p className="text-yellow-400 font-semibold mb-8">Oferta Exclusiva para novos clientes</p>

           <div className="grid md:grid-cols-3 gap-6 mb-10 text-left">
              <div className="bg-slate-900/60 p-6 rounded-xl border border-yellow-500/20">
                <Gift className="w-8 h-8 text-yellow-500 mb-4" />
                <h3 className="font-bold text-white mb-2">Auditoria Gratuita</h3>
                <p className="text-sm text-slate-400">Análise completa do seu tráfego atual.</p>
              </div>
              <div className="bg-slate-900/60 p-6 rounded-xl border border-yellow-500/20">
                <Clock className="w-8 h-8 text-yellow-500 mb-4" />
                <h3 className="font-bold text-white mb-2">Plano de 30 dias</h3>
                <p className="text-sm text-slate-400">Um roadmap claro para o próximo mês.</p>
              </div>
              <div className="bg-slate-900/60 p-6 rounded-xl border border-yellow-500/20">
                <ShieldCheck className="w-8 h-8 text-yellow-500 mb-4" />
                <h3 className="font-bold text-white mb-2">Sugestões Práticas</h3>
                <p className="text-sm text-slate-400">Para aplicar imediatamente.</p>
              </div>
           </div>

           <a 
             href="https://wa.me/5513991472036"
             target="_blank"
             rel="noopener noreferrer"
             className="inline-block w-full md:w-auto px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-extrabold rounded-lg text-lg transition-transform hover:scale-105 shadow-[0_0_20px_rgba(234,179,8,0.4)]"
           >
             Quero garantir minha Auditoria
           </a>
           <p className="text-sm text-slate-500 mt-4">Vagas limitadas para manter a qualidade.</p>
        </div>
      </div>
    </section>
  );
};