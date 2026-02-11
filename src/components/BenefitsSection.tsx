import { XCircle, CheckCircle2, TrendingUp } from 'lucide-react';

export default function BenefitsSection() {
  return (
    <section className="bg-red-950/40 p-4 md:p-8 rounded-3xl border border-red-900/50">
      <div className="slide-up">
        <h2 className="text-3xl md:text-5xl font-black mb-8 text-center uppercase tracking-tighter">
          CE QUE TU GAGNES <br className="md:hidden" /> AVEC MAVA
        </h2>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {/* Bloc SANS MAVA - Fond Noir, Cadre fin, Icône Rouge */}
          <div className="bg-black/60 rounded-2xl p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-4 text-red-600">
              <XCircle size={24} />
              <h3 className="text-xl font-bold uppercase italic">SANS MAVA</h3>
            </div>
            <ul className="space-y-3 text-base text-gray-300">
              <li className="flex items-start gap-2"><span>•</span> tu es esclave de ce qui devrait travailler pour toi</li>
              <li className="flex items-start gap-2"><span>•</span> tu passes plus de temps à répondre qu'à développer ton business</li>
              <li className="flex items-start gap-2"><span>•</span> tu rates des ventes comme si c'était normal</li>
            </ul>
          </div>

          {/* Bloc AVEC MAVA - Fond Noir, Cadre fin, Icône Verte */}
          <div className="bg-black/60 rounded-2xl p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-4 text-green-500">
              <CheckCircle2 size={24} />
              <h3 className="text-xl font-bold uppercase italic text-white">AVEC MAVA</h3>
            </div>
            <ul className="space-y-3 text-base text-gray-200 font-medium">
              <li className="flex items-start gap-2">
                <CheckCircle2 size={18} className="flex-shrink-0 mt-1 text-green-500" />
                <span>le tri est fait pour toi (seules les vraies ventes arrivent à toi)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={18} className="flex-shrink-0 mt-1 text-green-500" />
                <span>ton business tourne même quand tu dors</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={18} className="flex-shrink-0 mt-1 text-green-500" />
                <span>tu vois plus clair, tu grandis en travaillant moins</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bloc RÉSUMÉ - Ultra compact et plus horizontal */}
        <div className="bg-white rounded-2xl p-4 md:p-5 text-[#700E03] flex items-center justify-center gap-4 max-w-3xl mx-auto shadow-xl">
          <TrendingUp size={28} className="flex-shrink-0" />
          <div className="text-left md:flex md:items-center md:gap-2">
            <span className="font-black text-lg md:text-xl uppercase block md:inline">En résumé :</span>
            <span className="font-bold text-base md:text-lg block md:inline leading-none">
              moins de bruit, plus d'argent, plus de contrôle.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
