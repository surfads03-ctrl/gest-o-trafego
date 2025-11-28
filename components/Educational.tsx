import React from 'react';
import { X, Check } from 'lucide-react';

export const Educational: React.FC = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Por que a maioria dos anúncios <span className="text-red-500">falha?</span></h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Problems */}
        <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-8 space-y-6">
          <h3 className="text-xl font-bold text-red-400 mb-6">Onde os amadores erram:</h3>
          {[
            "Segmentação errada",
            "Criativos fracos",
            "Mensagem desconectada da oferta",
            "Falta de testes",
            "Funil desalinhado"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 text-slate-300">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                <X className="w-5 h-5 text-red-500" />
              </div>
              <span className="font-medium">{item}</span>
            </div>
          ))}
        </div>

        {/* Solutions */}
        <div className="bg-green-500/5 border border-green-500/20 rounded-2xl p-8 space-y-6">
          <h3 className="text-xl font-bold text-green-400 mb-6">Como eu resolvo esses problemas:</h3>
          {[
            "Crio campanhas com fundamento estratégico",
            "Produzo criativos orientados ao comportamento do cliente",
            "Testo tudo o que pode aumentar resultado",
            "Acompanhamento diário das métricas",
            "Ajustes rápidos para manter o ROI alto"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 text-slate-300">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                <Check className="w-5 h-5 text-green-500" />
              </div>
              <span className="font-medium">{item}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};