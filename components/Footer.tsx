import React from 'react';
import { MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8 px-6 text-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
        <div className="text-center md:text-left">
          <img 
            src="https://nandosilvapro.site/wp-content/uploads/2025/07/logo-nando.png" 
            alt="NS Performance Logo" 
            className="h-16 w-auto mb-4 mx-auto md:mx-0 rounded-xl"
          />
          <div className="flex gap-6 text-slate-400 justify-center md:justify-start">
             <a href="#" className="hover:text-blue-400 transition-colors">Política de Privacidade</a>
             <a href="#" className="hover:text-blue-400 transition-colors">Termos de Uso</a>
             <a href="#" className="hover:text-blue-400 transition-colors">Links para redes sociais</a>
          </div>
        </div>
        
        <div>
          <a 
            href="https://wa.me/5513991472036" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-full transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Botão de WhatsApp fixo
          </a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto border-t border-slate-800 pt-8 text-center text-slate-600">
        &copy; {new Date().getFullYear()} ScaleAds. Todos os direitos reservados.
      </div>
    </footer>
  );
};