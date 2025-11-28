import React, { useState } from 'react';
import { Brain, ArrowRight, Loader2, Check, MessageCircle } from 'lucide-react';
import { generateDiagnosis } from '../services/ai';
import { DiagnosisAnswers, DiagnosisResult } from '../types';

const steps = [
  { key: 'segment', question: "Qual é o seu segmento de atuação?", options: ["E-commerce", "Infoproduto", "Negócio Local", "Serviços B2B", "Outro"] },
  { key: 'investment', question: "Qual seu investimento mensal em média?", options: ["Ainda não anuncio", "Até R$ 5.000", "R$ 5.000 a R$ 20.000", "Acima de R$ 20.000"] },
  { key: 'platform', question: "Onde você anuncia atualmente?", options: ["Apenas Instagram/Facebook", "Apenas Google", "Multicanal (Meta + Google)", "TikTok / Outros"] },
  { key: 'goal', question: "Qual seu objetivo principal?", options: ["Escalar Vendas", "Captar Leads (CPL)", "Branding/Reconhecimento", "Lançamento"] },
  { key: 'painPoint', question: "Qual sua maior dificuldade hoje?", options: ["Custo por lead alto", "Poucas vendas", "Bloqueios nas contas", "Falta de previsibilidade"] }
];

export const DiagnosisTool: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<DiagnosisAnswers>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<DiagnosisResult | null>(null);
  const [userInfo, setUserInfo] = useState({ name: '', whatsapp: '' });
  const [showForm, setShowForm] = useState(false);

  const handleOptionSelect = (option: string) => {
    const key = steps[currentStep].key;
    setAnswers(prev => ({ ...prev, [key]: option }));

    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setShowForm(true);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const diagnosis = await generateDiagnosis(answers as DiagnosisAnswers);
      setResult(diagnosis);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendToWhatsApp = () => {
    if (!result) return;

    const message = `🚀 *Resultado do Diagnóstico - ScaleAds*
    
👤 *Cliente:* ${userInfo.name}
📱 *WhatsApp:* ${userInfo.whatsapp}

📊 *Dados do Negócio:*
• Segmento: ${answers.segment}
• Investimento: ${answers.investment}
• Plataforma: ${answers.platform}
• Objetivo: ${answers.goal}
• Dor Principal: ${answers.painPoint}

🎯 *Diagnóstico da IA:*
• Score: ${result.score}/100
• Recomendação: "${result.recommendation}"

Gostaria de agendar a consultoria para implementar este plano.`;

    const phoneNumber = "5513991472036";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="diagnosis" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Abstract bg */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/20 blur-[100px] -translate-y-1/2 rounded-full -z-10" />

      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-400 text-sm font-medium mb-4">
            <Brain className="w-4 h-4" />
            IA Powered Diagnosis
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Diagnóstico Instantâneo</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Descubra agora o que está travando o crescimento do seu negócio. 
            Responda algumas perguntas e receba uma análise personalizada com pontos fracos, oportunidades ocultas e sugestões práticas.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl relative min-h-[400px] flex flex-col justify-center">
          
          {isLoading ? (
            <div className="text-center space-y-4 animate-in fade-in zoom-in duration-500">
              <Loader2 className="w-16 h-16 text-blue-500 animate-spin mx-auto" />
              <p className="text-xl font-semibold">Analisando seus dados...</p>
              <p className="text-sm text-slate-500">Identificando oportunidades de escala...</p>
            </div>
          ) : result ? (
            <div className="space-y-8 animate-in slide-in-from-bottom duration-500">
               <div className="flex items-center justify-between border-b border-slate-800 pb-6">
                  <div>
                    <p className="text-slate-400 text-sm">Score de Performance</p>
                    <div className="text-5xl font-bold text-white">{result.score}<span className="text-2xl text-slate-500">/100</span></div>
                  </div>
                  <div className={`px-4 py-2 rounded-lg font-bold ${result.score > 70 ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                    {result.score > 70 ? 'Alto Potencial' : 'Atenção Necessária'}
                  </div>
               </div>
               
               <div className="grid md:grid-cols-2 gap-8">
                 <div>
                   <h4 className="font-semibold text-green-400 mb-2 flex items-center gap-2"><Check className="w-4 h-4" /> Pontos Fortes</h4>
                   <ul className="list-disc list-inside text-slate-300 text-sm space-y-1">
                     {result.strengths.map((s, i) => <li key={i}>{s}</li>)}
                   </ul>
                 </div>
                 <div>
                   <h4 className="font-semibold text-red-400 mb-2 flex items-center gap-2">⚠️ Oportunidades Ocultas</h4>
                   <ul className="list-disc list-inside text-slate-300 text-sm space-y-1">
                     {result.weaknesses.map((w, i) => <li key={i}>{w}</li>)}
                   </ul>
                 </div>
               </div>

               <div className="bg-blue-900/20 border border-blue-500/20 p-4 rounded-lg">
                 <p className="text-blue-200 text-sm font-medium">💡 Sugestão Prática:</p>
                 <p className="text-white mt-1 italic">"{result.recommendation}"</p>
               </div>

               <button 
                onClick={handleSendToWhatsApp}
                className="w-full py-4 bg-green-500 hover:bg-green-600 text-slate-900 font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
               >
                 <MessageCircle className="w-5 h-5" />
                 Agendar Consultoria para Implementar Plano
               </button>
            </div>
          ) : showForm ? (
            <form onSubmit={handleSubmit} className="space-y-6 animate-in slide-in-from-right duration-300">
               <div className="text-center">
                 <h3 className="text-2xl font-bold">Análise Pronta!</h3>
                 <p className="text-slate-400">Onde devemos enviar seu relatório completo?</p>
               </div>
               <div className="space-y-4">
                 <div>
                   <label className="block text-sm font-medium text-slate-400 mb-1">Seu Nome</label>
                   <input 
                    required
                    type="text" 
                    value={userInfo.name}
                    onChange={e => setUserInfo({...userInfo, name: e.target.value})}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="Nome"
                   />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-slate-400 mb-1">WhatsApp</label>
                   <input 
                    required
                    type="tel" 
                    value={userInfo.whatsapp}
                    onChange={e => setUserInfo({...userInfo, whatsapp: e.target.value})}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="(DD) 99999-9999"
                   />
                 </div>
               </div>
               <button type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2">
                 Fazer meu Diagnóstico Agora <ArrowRight className="w-5 h-5" />
               </button>
            </form>
          ) : (
            <div className="space-y-8 animate-in fade-in duration-300">
              <div>
                <span className="text-sm font-medium text-blue-500">Questão {currentStep + 1} de {steps.length}</span>
                <div className="w-full bg-slate-800 h-2 rounded-full mt-2">
                  <div className="bg-blue-500 h-2 rounded-full transition-all duration-500" style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}></div>
                </div>
              </div>
              
              <h3 className="text-2xl font-semibold text-white">{steps[currentStep].question}</h3>
              
              <div className="grid gap-3">
                {steps[currentStep].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleOptionSelect(option)}
                    className="w-full text-left p-4 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-blue-500 transition-all text-slate-300 hover:text-white flex items-center justify-between group"
                  >
                    {option}
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};