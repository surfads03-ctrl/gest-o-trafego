import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "Qual o valor mínimo para investir em anúncios?",
    answer: "Recomendamos iniciar com uma verba média de R$ 1.000 a R$ 1.500/mês nas plataformas (Google/Meta). Esse valor é pago diretamente para as ferramentas e é necessário para gerar dados suficientes para otimização nas primeiras semanas. A taxa de gestão é cobrada à parte."
  },
  {
    question: "Em quanto tempo começo a ver resultados?",
    answer: "O tráfego pago gera fluxo imediato. Geralmente, leads e vendas começam a chegar nos primeiros dias. Porém, a consistência e a escala do ROI (Retorno sobre Investimento) acontecem após o período de maturação e testes, que leva em média de 30 a 60 dias."
  },
  {
    question: "Você cria as imagens e vídeos dos anúncios?",
    answer: "Minha parte é a estratégia e direção criativa. Eu oriento quais tipos de criativos performam melhor, passo roteiros e exemplos. A produção (design/gravação) é do cliente, mas posso indicar designers parceiros caso você não tenha equipe interna."
  },
  {
    question: "Existe fidelidade ou multa de cancelamento?",
    answer: "Não acredito em prender clientes por contrato, mas sim pelo resultado. Trabalhamos com ciclos mensais renováveis. Você pode cancelar a qualquer momento com aviso prévio de 15 dias, sem multas abusivas."
  },
  {
    question: "Como saberei se está dando lucro?",
    answer: "Transparência total. Você terá acesso a relatórios periódicos onde mostramos exatamente quanto foi investido, qual foi o custo por venda/lead e o ROAS (Retorno sobre Investimento). Focamos nas métricas que colocam dinheiro no seu bolso."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6 bg-slate-950 border-t border-slate-900">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
            <HelpCircle className="text-blue-500 w-8 h-8" />
            Perguntas Frequentes
          </h2>
          <p className="text-slate-400">Tire suas dúvidas sobre o funcionamento da gestão.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden transition-all hover:border-blue-500/30"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="font-semibold text-white text-lg pr-4">{faq.question}</span>
                {openIndex === idx ? (
                  <Minus className="w-5 h-5 text-blue-500 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-slate-500 flex-shrink-0" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === idx ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-slate-400 leading-relaxed border-t border-slate-800/50">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};