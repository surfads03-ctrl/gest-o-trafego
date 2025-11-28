import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, Target, ShoppingBag } from 'lucide-react';

const data = [
  { name: 'Dia 0', roas: 2.1 },
  { name: 'Dia 15', roas: 3.5 },
  { name: 'Dia 30', roas: 5.2 },
  { name: 'Dia 45', roas: 7.2 },
];

export const SocialProof: React.FC = () => {
  return (
    <section id="social-proof" className="py-20 bg-slate-900/50 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">Resultados que falam por si</h3>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Chart Section - Representing Case 3 */}
          <div className="bg-slate-800/30 p-6 rounded-2xl border border-slate-700 backdrop-blur-sm order-2 lg:order-1">
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <span className="w-2 h-6 bg-green-500 rounded-sm"></span>
              Case 3: Ecommerce Nacional
            </h3>
            <p className="text-sm text-slate-400 mb-6">Resultado: ROAS de 7,2x em 45 dias</p>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorRoas" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#4ade80" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#4ade80" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="name" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#f8fafc' }}
                    itemStyle={{ color: '#4ade80' }}
                  />
                  <Area type="monotone" dataKey="roas" stroke="#4ade80" fillOpacity={1} fill="url(#colorRoas)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Cases List */}
          <div className="space-y-6 order-1 lg:order-2">
            
            {/* Case 1 */}
            <div className="p-6 bg-slate-800/40 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <ShoppingBag className="text-blue-400 w-6 h-6" />
                <h4 className="text-xl font-bold text-white">Loja de Roupas Feminina</h4>
              </div>
              <div className="space-y-2 text-sm">
                <p><span className="text-red-400 font-bold">🎯 Desafio:</span> CAC alto e anúncios sem conversão</p>
                <p><span className="text-yellow-400 font-bold">🔥 Estratégia:</span> Novo funil + criativos dinâmicos</p>
                <p><span className="text-green-400 font-bold">📈 Resultado:</span> +328% em vendas em 60 dias</p>
              </div>
            </div>

            {/* Case 2 */}
            <div className="p-6 bg-slate-800/40 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <Target className="text-blue-400 w-6 h-6" />
                <h4 className="text-xl font-bold text-white">Clínica Estética</h4>
              </div>
              <div className="space-y-2 text-sm">
                <p><span className="text-red-400 font-bold">🎯 Desafio:</span> Leads caros e improdutivos</p>
                <p><span className="text-yellow-400 font-bold">🔥 Estratégia:</span> Segmentação local + copy emocional</p>
                <p><span className="text-green-400 font-bold">📉 Resultado:</span> CPL reduzido de R$18 para R$4,57</p>
              </div>
            </div>

             {/* Case 3 Text Summary */}
             <div className="p-6 bg-slate-800/40 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp className="text-blue-400 w-6 h-6" />
                <h4 className="text-xl font-bold text-white">Ecommerce Nacional</h4>
              </div>
              <div className="space-y-2 text-sm">
                <p><span className="text-red-400 font-bold">🎯 Desafio:</span> Baixa margem em tráfego frio</p>
                <p><span className="text-yellow-400 font-bold">🔥 Estratégia:</span> Otimização de público + remarketing avançado</p>
                <p><span className="text-green-400 font-bold">🚀 Resultado:</span> ROAS de 7,2x em 45 dias</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};