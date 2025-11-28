import React, { useState } from 'react';
import { TrendingUp, Users, ShoppingBag, Rocket } from 'lucide-react';
import { ServiceType } from '../types';

const services = [
  {
    id: ServiceType.SALES,
    icon: TrendingUp,
    title: "Quero aumentar minhas vendas",
    color: "bg-blue-500", // Cor sólida para o ponto conforme PDF
    gradient: "from-blue-500 to-blue-700",
    description: "Identifico oportunidades rápidas de escala e construo campanhas voltadas a conversão imediata.",
  },
  {
    id: ServiceType.CPL,
    icon: Users,
    title: "Quero reduzir meu custo por lead",
    color: "bg-green-500",
    gradient: "from-green-500 to-green-700",
    description: "Otimização profunda da segmentação, criativos e oferta para baixar seu CPL sem perder qualidade.",
  },
  {
    id: ServiceType.SCALE,
    icon: ShoppingBag,
    title: "Quero escalar meu e-commerce",
    color: "bg-purple-500",
    gradient: "from-purple-500 to-purple-700",
    description: "Estrutura de campanhas com foco em CAC saudável, LTV e aumento de ROAS.",
  },
  {
    id: ServiceType.START,
    icon: Rocket,
    title: "Quero começar a anunciar",
    color: "bg-red-500",
    gradient: "from-red-500 to-red-700",
    description: "Configuro tudo do zero — pixel, eventos, criativos e campanhas — para você começar o certo e rápido.",
  }
];

export const ServiceSelector: React.FC = () => {
  const [activeService, setActiveService] = useState<string | null>(null);

  return (
    <section className="py-20 bg-slate-900 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Qual é o seu objetivo agora?</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div 
              key={service.id}
              onClick={() => setActiveService(activeService === service.id ? null : service.id)}
              className={`
                relative cursor-pointer rounded-2xl p-8 transition-all duration-300 border hover:bg-slate-800
                ${activeService === service.id ? 'bg-slate-800 border-slate-600 ring-1 ring-slate-500' : 'bg-slate-800/50 border-slate-700'}
              `}
            >
              <div className="flex items-start gap-4">
                <div className={`w-4 h-4 rounded-full mt-2 ${service.color} shadow-[0_0_10px_currentColor]`} />
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 text-white flex items-center gap-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-300 text-lg leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};