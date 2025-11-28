import React from 'react';
import { Search, PenTool, Settings, BarChart, FileText, TrendingUp } from 'lucide-react';

const steps = [
  { 
    icon: Search, 
    title: "1. Diagnóstico Profundo", 
    desc: "Entendo seu funil, métricas, público e potencial de escala." 
  },
  { 
    icon: PenTool, 
    title: "2. Planejamento Estratégico", 
    desc: "Desenho o plano de ação com as campanhas certas para o seu cenário." 
  },
  { 
    icon: Settings, 
    title: "3. Setup Profissional", 
    desc: "Estruturo tudo: pixel, eventos, criativos, segmentações e testes." 
  },
  { 
    icon: BarChart, 
    title: "4. Execução + Testes A/B", 
    desc: "Campanhas otimizadas diariamente com foco em custo e performance." 
  },
  { 
    icon: FileText, 
    title: "5. Relatórios Claros", 
    desc: "Nada de confusão: você recebe relatórios objetivos e traduzidos para o seu negócio." 
  },
  { 
    icon: TrendingUp, 
    title: "6. Escala Controlada", 
    desc: "Quando a campanha performa, aumentamos sem perder lucratividade." 
  }
];

export const Methodology: React.FC = () => {
  return (
    <section id="method" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Meu Método de Gestão</h2>
        <p className="text-slate-400">Minha metodologia: simples, direta e focada em resultado.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((step, idx) => (
          <div key={idx} className="bg-slate-800/30 p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-colors">
            <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center mb-6">
              <step.icon className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
            <p className="text-slate-400 leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};