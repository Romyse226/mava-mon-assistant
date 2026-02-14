import { AlertTriangle, Clock } from 'lucide-react';
import CTAButton from './CTAButton';

export default function FinalSections() {
  return (
    <div className="bg-black space-y-6">
      {/* Section 1 : CAPACITÉ LIMITÉE */}
      <section className="px-4 py-6 max-w-4xl mx-auto">
        <div className="slide-up bg-red-950/20 rounded-3xl p-6 md:p-8 border border-red-900/50 shadow-xl">
          <div className="flex items-center justify-center gap-4 mb-6 text-red-600">
            <AlertTriangle size={32} />
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">
              CAPACITÉ LIMITÉE
            </h2>
          </div>

          <div className="space-y-4 text-base md:text-lg text-center leading-relaxed">
            <p className="text-gray-200">
              Chaque déploiement de MAVA nécessite un paramétrage spécifique en vue d'assurer un niveau de performance élevé pour chacun de nos clients.
            </p>
            <p className="font-semibold text-white">
              Les prix actuels s'appliquent uniquement dans la limite de notre capacité mensuelle.
            </p>
            <p className="text-gray-300">
              Au-delà, les nouveaux déploiements seront proposés à des tarifs réajustés.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 : DERNIER POINT */}
      <section className="px-4 py-6 max-w-4xl mx-auto">
        <div className="slide-up bg-red-950/20 rounded-3xl p-6 md:p-8 border border-red-900/50 shadow-xl">
          <div className="flex items-center justify-center gap-4 mb-6 text-red-600">
            <Clock size={32} />
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">
              DERNIER POINT
            </h2>
          </div>

          <div className="space-y-6 text-base md:text-lg text-center leading-relaxed">
            <div className="space-y-1">
              <p className="text-lg md:text-xl font-bold text-white tracking-tight">
                Chaque jour qui passe sans MAVA,
              </p>
              <p className="text-lg md:text-xl font-bold text-red-600 tracking-tight">
                c’est continuer à vendre à ta capacité humaine, et pas à la capacité de ton marché.
              </p>
            </div>

            <p className="text-gray-200">
              Tu peux continuer à répondre toute la journée et à bricoler avec fatigue mentale, ou installer un système et passer au niveau supérieur dès aujourd’hui.
            </p>

            <div className="pt-4 flex flex-col items-center gap-6">
              <p className="font-black text-xl md:text-2xl uppercase tracking-widest text-white italic">
                Rejoins ceux qui gagnent en silence.
              </p>
              
              <CTAButton
                text="Activer MAVA Maintenant"
                message="Bonjour, je veux activer MAVA pour mon business. Quel pack me conseillez-vous ?"
                variant="light"
              />
            </div>
          </div>
        </div>
      </section>
    </div> /* <--- LA FERMETURE MANQUANTE ÉTAIT ICI */
  );
}
