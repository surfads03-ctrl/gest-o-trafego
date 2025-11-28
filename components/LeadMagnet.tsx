import React from 'react';
import { Download, Check } from 'lucide-react';

export const LeadMagnet: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-blue-900 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 space-y-6">
          <div className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-bold border border-blue-500/30">
            Material Gratuito
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Baixe gratuitamente: <br/>
            <span className="text-blue-400">Checklist dos Anúncios que Mais Vendem</span>
          </h2>
          <p className="text-blue-100 text-lg">
            Descubra os elementos presentes em criativos que convertem todos os dias.
          </p>
          
          <ul className="space-y-3">
            {[
              "Título vencedor",
              "Call to action poderosa",
              "Ângulo persuasivo",
              "Estrutura visual que retém atenção",
              "Exemplos reais"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <div className="bg-blue-500 rounded-full p-1">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <button className="mt-6 inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-transform hover:scale-105 shadow-lg">
            <Download className="w-5 h-5 mr-2" />
            Quero baixar agora
          </button>
        </div>

        <div className="md:w-1/2 flex justify-center">
          {/* Placeholder for E-book cover */}
          <div className="w-72 h-96 bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 rounded-r-xl shadow-2xl flex items-center justify-center relative rotate-3 transform hover:rotate-0 transition-all duration-500">
             <div className="absolute inset-y-0 left-0 w-4 bg-slate-900/50"></div>
             <div className="text-center p-8">
               <div className="text-5xl mb-4">📘</div>
               <h3 className="font-bold text-2xl mb-2">Checklist</h3>
               <p className="text-sm opacity-70">Anúncios de Alta Conversão</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};