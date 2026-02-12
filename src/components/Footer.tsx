import { MessageSquare, Mail, Facebook, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="px-6 py-12 border-t border-white/20" style={{ backgroundColor: '#700E03' }}>
      <div className="max-w-6xl mx-auto text-white">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10">
          
          {/* Logo et Branding */}
          <div className="flex items-center gap-3">
            <img
              src="/WhatsApp_Image_2026-02-09_at_18.50.24.jpeg"
              alt="MAVA Logo"
              className="w-14 h-14 object-contain"
            />
            <div>
              <span className="font-black text-2xl block">MAVA</span>
              <p className="text-xs text-white/80 uppercase tracking-widest font-medium">Machine À Vendre Automatiquement</p>
            </div>
          </div>

          {/* Coordonnées */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full md:w-auto">
            
            {/* Contact Direct */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-white">
                <div className="flex gap-2">
                   <Phone size={20} />
                   <MessageSquare size={20} />
                </div>
                <a href="https://wa.me" target="_blank" className="text-sm font-bold hover:underline">+225 07 59 92 78 33</a>
              </div>
              
              <div className="flex items-center gap-3 text-white">
                <Mail size={20} />
                <a href="mailto:mavaci@ik.me" className="text-sm font-bold hover:underline">mavaci@ik.me</a>
              </div>
            </div>

            {/* Réseaux Sociaux */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-white">
                <Facebook size={20} />
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm font-bold hover:underline"
                >
                  Système MAVA
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Fixé à 2024 */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/60 font-medium">
          <p>&copy; 2024 MAVA. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

