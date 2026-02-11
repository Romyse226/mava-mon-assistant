import { XCircle, CheckCircle2 } from 'lucide-react';

export default function TargetAudienceSection() {
  return (
    <section className="bg-red-950/40 p-4 md:p-8 rounded-3xl border border-red-900/50 max-w-5xl mx-auto">
      <div className="slide-up">
        {/* Titre avec cassure forcée mobile */}
        <h2 className="text-3xl md:text-5xl font-black mb-6 text-center uppercase tracking-tighter leading-tight text-white">
          À QUI MAVA <br className="md:hidden" /> EST DESTINÉ ?
        </h2>

        {/* Sous-titre : Rouge avec Brillance (Shadow Glow) */}
        <div className="space-y-1 text-center mb-8">
          <p className="text-base text-red-500 font-bold uppercase italic drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
            Soyons clairs.
          </p>
          <p className="text-base text-red-500 font-bold uppercase italic drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
            MAVA n'est pas pour tout le monde.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 items-stretch">
          {/* Bloc PAS POUR - Fond Noir, Bordure fine */}
          <div className="bg-black/60 rounded-2xl p-6 border border-white/10 text-white">
            <div className="flex items-center gap-3 mb-4 text-red-600">
              <XCircle size={24} />
              <h3 className="text-xl font-bold uppercase italic">Pas pour :</h3>
            </div>
            <ul className="space-y-2 ml-4 text-base text-gray-300">
              <li>• ceux qui vendent rarement,</li>
              <li>• ceux dont le WhatsApp est encore calme,</li>
              <li>• qui veulent tout gérer eux-mêmes sans savoir qu'ils confondent contrôle et agitation.</li>
            </ul>
          </div>

          {/* Bloc POUR - Fond Noir, Bordure fine */}
          <div className="bg-black/60 rounded-2xl p-6 border border-white/10 text-white">
            <div className="flex items-center gap-3 mb-4 text-green-500">
              <CheckCircle2 size={24} />
              <h3 className="text-xl font-bold uppercase italic">MAVA est pour les business qui :</h3>
            </div>
            <ul className="space-y-2 ml-4 text-base text-gray-200">
              <li>• vendent déjà,</li>
              <li>• veulent vendre mieux et plus,</li>
              <li>• reçoivent constamment des messages,</li>
              <li className="list-none -ml-4 pt-1">
                et pour qui ces messages font perdre du temps, de l'énergie et des ventes.
              </li>
            </ul>
          </div>
        </div>

        {/* Dernier bloc Conclusion - Ultra compact et horizontal */}
        <div className="mt-6 bg-white rounded-2xl p-4 md:p-5 text-[#700E03] flex items-center justify-center gap-4 max-w-3xl mx-auto shadow-xl">
          <CheckCircle2 size={28} className="flex-shrink-0 text-green-600" />
          <div className="text-left">
            <p className="font-bold text-sm md:text-base leading-tight">Si ton business s'arrête quand ton WhatsApp s'arrête, et que répondre te bloque...</p>
            <p className="font-black text-lg md:text-xl uppercase tracking-tight">MAVA est fait pour toi.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
