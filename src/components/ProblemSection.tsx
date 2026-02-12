import { AlertCircle, Clock, Users, Battery, TrendingDown, LayoutList } from 'lucide-react';

export default function ProblemSection() {
  return (
    <section className="dark-section px-6 py-12 max-w-4xl mx-auto">
      <div className="slide-up">
        <h2 className="text-3xl md:text-5xl font-black mb-10 text-center uppercase tracking-tighter">
          CE QUI TUE EN SILENCE BEAUCOUP DE BUSINESS ICI
        </h2>

        <div className="space-y-6 text-lg md:text-xl leading-relaxed">
          {/* Bloc WhatsApp compressé (space-y-1) */}
          <div className="space-y-1">
            <p className="font-semibold text-red-600 uppercase italic">Tout se passe sur WhatsApp :</p>
            <p>Répondre. Expliquer. Noter les commandes... Même Encaisser.</p>
          </div>

          <div className="my-8">
            <div className="flex items-center gap-3 mb-4 text-red-600">
              <AlertCircle size={28} className="flex-shrink-0" />
              <span className="font-semibold text-2xl uppercase italic">Et pendant ce temps :</span>
            </div>

            {/* Liste éléments compressée (space-y-2) */}
            <ul className="space-y-2 ml-4 md:ml-10">
              <li className="flex items-start gap-3">
                <Clock size={20} className="flex-shrink-0 mt-1 text-red-600" />
                <span>les mêmes choses expliquées toute la journée. Tous les jours.</span>
              </li>
              <li className="flex items-start gap-3">
                <Users size={20} className="flex-shrink-0 mt-1 text-red-600" />
                <span>Tu gères 20 discussions pour 1 vraie vente,</span>
              </li>
              <li className="flex items-start gap-3">
                <Battery size={20} className="flex-shrink-0 mt-1 text-red-600" />
                <span>tu es scotché à ton téléphone</span>
              </li>
            </ul>
          </div>

          <div className="my-8">
            <div className="flex items-center gap-3 mb-4 text-red-600">
              <LayoutList size={28} className="flex-shrink-0" />
              <p className="font-semibold text-2xl uppercase italic">Résultat :</p>
            </div>

            {/* Liste résultats compressée (space-y-1.5) */}
            <ul className="space-y-1.5 ml-4 md:ml-10">
              <li className="flex items-start gap-3">
                <TrendingDown size={18} className="flex-shrink-0 mt-1 text-red-600" />
                <span>réponses lentes</span>
              </li>
              <li className="flex items-start gap-3">
                <TrendingDown size={18} className="flex-shrink-0 mt-1 text-red-600" />
                <span>temps et énergie gaspillés</span>
              </li>
              <li className="flex items-start gap-3">
                <TrendingDown size={18} className="flex-shrink-0 mt-1 text-red-600" />
                <span>ventes ratées</span>
              </li>
              <li className="flex items-start gap-3">
                <TrendingDown size={18} className="flex-shrink-0 mt-1 text-red-600" />
                <span>fatigue mentale</span>
              </li>
              <li className="flex items-start gap-3">
                <TrendingDown size={18} className="flex-shrink-0 mt-1 text-red-600" />
                <span>croissance bloquée</span>
              </li>
            </ul>
          </div>

          {/* Conclusion compressée (space-y-1) */}
          <div className="text-center space-y-1 mt-12 pt-6 border-t border-white/5">
            <p className="font-bold text-2xl text-red-600 uppercase italic">Ce n'est pas normal.</p>
            <p className="text-xl font-medium">C'est juste devenu habituel.</p>
            <p className="text-xl font-medium text-white">Mais une habitude qui tue en silence.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
