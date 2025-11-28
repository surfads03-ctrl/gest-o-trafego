import React, { useState, useMemo } from 'react';
import { Calculator, BarChart2 } from 'lucide-react';

export const RoiCalculator: React.FC = () => {
  const [investment, setInvestment] = useState(5000);
  const [cpc, setCpc] = useState(2.50);
  const [convRate, setConvRate] = useState(1.5);
  const [ticket, setTicket] = useState(150);

  const results = useMemo(() => {
    const clicks = investment / cpc;
    const sales = clicks * (convRate / 100);
    const revenue = sales * ticket;
    const roas = revenue / investment;
    
    return {
      clicks: Math.floor(clicks),
      sales: Math.floor(sales),
      revenue: revenue,
      roas: roas.toFixed(2)
    };
  }, [investment, cpc, convRate, ticket]);

  return (
    <section className="py-24 bg-slate-950 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Calculadora de ROI</h2>
        <p className="text-slate-400 text-lg">Quanto seu negócio pode faturar investindo em tráfego?</p>
        <p className="text-slate-500 text-sm mt-2">Digite seu investimento mensal e veja o potencial de faturamento com base em dados reais.</p>
      </div>

      <div className="max-w-6xl mx-auto bg-slate-800/50 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl flex flex-col lg:flex-row">
        
        {/* Inputs */}
        <div className="p-8 lg:p-12 lg:w-1/2 space-y-8">
          <div className="flex items-center gap-3 mb-6 text-blue-400">
            <Calculator className="w-6 h-6" />
            <span className="font-bold">Parâmetros do Negócio</span>
          </div>

          <div className="space-y-6">
            <div>
              <label className="flex justify-between text-sm font-medium mb-2">
                <span>Investimento Mensal (R$)</span>
                <span className="text-blue-400 font-bold">{investment.toLocaleString('pt-BR')}</span>
              </label>
              <input 
                type="range" min="1000" max="100000" step="500" 
                value={investment} onChange={e => setInvestment(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
               <div>
                <label className="block text-sm font-medium mb-2 text-slate-300">CPC Médio (R$)</label>
                <input 
                  type="number" step="0.10"
                  value={cpc} onChange={e => setCpc(Number(e.target.value))}
                  className="w-full bg-slate-900 border border-slate-600 rounded-lg p-3 text-white focus:border-blue-500 outline-none"
                />
               </div>
               <div>
                <label className="block text-sm font-medium mb-2 text-slate-300">Taxa Conv. (%)</label>
                <input 
                  type="number" step="0.1"
                  value={convRate} onChange={e => setConvRate(Number(e.target.value))}
                  className="w-full bg-slate-900 border border-slate-600 rounded-lg p-3 text-white focus:border-blue-500 outline-none"
                />
               </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-slate-300">Ticket Médio (R$)</label>
              <input 
                type="number"
                value={ticket} onChange={e => setTicket(Number(e.target.value))}
                className="w-full bg-slate-900 border border-slate-600 rounded-lg p-3 text-white focus:border-blue-500 outline-none"
              />
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="lg:w-1/2 bg-blue-600 p-8 lg:p-12 flex flex-col justify-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          
          <h3 className="text-lg font-medium opacity-90 mb-6">Faturamento Potencial</h3>
          
          <div className="text-5xl lg:text-6xl font-extrabold mb-2 tracking-tight">
            R$ {results.revenue.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}
          </div>
          <div className="text-blue-200 mb-8 font-medium text-lg">
            ROAS Estimado: {results.roas}x
          </div>

          <button className="w-full py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-slate-100 transition-colors flex items-center justify-center gap-2">
            <BarChart2 className="w-5 h-5" />
            Calcular meu ROI
          </button>
        </div>

      </div>
    </section>
  );
};