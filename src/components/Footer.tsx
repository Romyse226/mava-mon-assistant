import { Mail, Facebook, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="px-6 py-6 border-t border-white/20" style={{ backgroundColor: '#700E03' }}>
      <div className="max-w-6xl mx-auto text-white">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo et Branding - Plus compact */}
          <div className="flex items-center gap-3">
            <img
              src="/WhatsApp_Image_2026-02-09_at_18.50.24.jpeg"
              alt="MAVA Logo"
              className="w-10 h-10 object-contain"
            />
            <div>
              <span className="font-black text-xl block">MAVA</span>
              <p className="text-[10px] text-white/80 uppercase tracking-widest font-medium">Machine À Vendre Automatiquement</p>
            </div>
          </div>

          {/* Coordonnées - Organisation horizontale */}
          <div className="flex flex-col items-center md:items-end gap-3">
            
            {/* Ligne Email + Facebook */}
            <div className="flex flex-wrap justify-center gap-4 text-sm font-bold">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:mavaci@ik.me" className="hover:underline">mavaci@ik.me</a>
              </div>
              <div className="flex items-center gap-2 border-l border-white/20 pl-4">
                <Facebook size={16} />
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:underline"
                >
                  Système MAVA
                </a>
              </div>
            </div>

            {/* Ligne Téléphone - En bas des deux autres */}
            <div className="flex items-center gap-2 text-sm font-bold bg-black/10 px-3 py-1 rounded-full">
              <Phone size={16} />
              <a href="https://wa.me" target="_blank" className="hover:underline">
                +225 07 59 92 78 33
              </a>
            </div>
          </div>
        </div>

        {/* Copyright - Collé au reste */}
        <div className="mt-6 pt-4 border-t border-white/10 text-center text-[10px] text-white/60 font-medium uppercase tracking-widest">
          <p>&copy; 2024 MAVA. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

