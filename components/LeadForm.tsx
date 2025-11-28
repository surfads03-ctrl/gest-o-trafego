import React, { useState } from 'react';
import { Lock, Send, Star, TrendingUp } from 'lucide-react';

export const LeadForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    niche: '',
    budget: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Formata a mensagem para o WhatsApp
    const message = `🚀 *Nova Solicitação de Auditoria*
    
👤 *Nome:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *WhatsApp:* ${formData.whatsapp}
🏢 *Nicho:* ${formData.niche}
💰 *Orçamento:* ${formData.budget}

--------------------------------
_Enviado via Landing Page_`;

    const phoneNumber = "5513991472036";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Abre o WhatsApp em nova aba
    window.open(whatsappUrl, '_blank');

    // Limpa o formulário
    setFormData({ name: '', email: '', whatsapp: '', niche: '', budget: '' });
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 relative">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl grid md:grid-cols-5">
          
          <div className="bg-blue-600 p-8 md:col-span-2 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4">Formulário Final</h3>
              <p className="opacity-90 text-sm mb-6">Preencha para receber sua Auditoria Gratuita.</p>
              
              <div className="space-y-4 mt-8">
                 <div className="flex items-center gap-3">
                    <div className="bg-blue-500 p-2 rounded-lg"><Lock className="w-4 h-4" /></div>
                    <span className="text-sm font-medium">Seus dados estão seguros</span>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="bg-blue-500 p-2 rounded-lg"><Star className="w-4 h-4" /></div>
                    <span className="text-sm font-medium">+100 clientes atendidos</span>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="bg-blue-500 p-2 rounded-lg"><TrendingUp className="w-4 h-4" /></div>
                    <span className="text-sm font-medium">Resultados reais todos os meses</span>
                 </div>
              </div>
            </div>
          </div>

          <div className="p-8 md:col-span-3 bg-slate-50">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Nome</label>
                <input 
                  required
                  type="text"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full p-3 bg-white border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">WhatsApp</label>
                <input 
                  required
                  type="tel"
                  value={formData.whatsapp}
                  onChange={e => setFormData({...formData, whatsapp: e.target.value})}
                  className="w-full p-3 bg-white border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Email</label>
                <input 
                  required
                  type="email"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className="w-full p-3 bg-white border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Nicho</label>
                  <input 
                    required
                    type="text"
                    value={formData.niche}
                    onChange={e => setFormData({...formData, niche: e.target.value})}
                    className="w-full p-3 bg-white border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Orçamento atual</label>
                  <input 
                    type="text"
                    value={formData.budget}
                    onChange={e => setFormData({...formData, budget: e.target.value})}
                    className="w-full p-3 bg-white border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
              </div>
              
              <button type="submit" className="w-full py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg transition-all shadow-lg flex justify-center items-center gap-2 mt-4">
                Solicitar Minha Auditoria Agora <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};