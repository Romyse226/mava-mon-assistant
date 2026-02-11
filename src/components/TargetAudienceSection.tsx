import { XCircle, CheckCircle2 } from 'lucide-react';

export default function TargetAudienceSection() {
  return (
    <section className="dark-section px-4 py-12 max-w-5xl mx-auto">
      <div className="slide-up">
        {/* 1. Titre avec cassure forcée pour éviter le "?" seul sur mobile */}
        <h2 className="text-3xl md:text-5xl font-black mb-6 text-center uppercase tracking-tighter leading-tight">
          À QUI MAVA <br className="md:hidden" /> EST DESTINÉ ?
        </h2>

        {/* 2. Sous-titre : Taille corps, Rouge, Majuscule, Italique */}
        <div className="space-y-1 text-center mb-8">
          <p className="text-base text-red-600 font-bold uppercase italic italic">Soyons clairs.</p>
          <p className="text-base text-red-600 font-bold uppercase italic italic">MAVA n'est pas pour tout le monde.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 items-stretch">
          {/* Bloc PAS POUR */}
          <div className="bg-red-900/20 rounded-2xl p-6 border border-red-800/40 text-white">
            <div className="flex items-center gap-3 mb-4 text-red-500">
              <XCircle size={24} />
              <h3 className="text-xl font-bold uppercase">Pas pour :</h3>
            </div>
            <ul className="space-y-2 ml-4 text-base">
              <li>• ceux qui vendent rarement,</li>
              <li>• ceux dont le WhatsApp est encore calme,</li>
              <li>• qui veulent tout gérer eux-mêmes sans savoir qu'ils confondent contrôle et agitation.</li>
            </ul>
          </div>

          {/* Bloc POUR */}
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10 text-white">
            <div className="flex items-center gap-3 mb-4 text-green-500">
              <CheckCircle2 size={24} />
              <h3 className="text-xl font-bold uppercase">MAVA est pour les business qui :</h3>
            </div>
            <ul className="space-y-2 ml-4 text-base">
              <li>• vendent déjà,</li>
              <li>• veulent vendre mieux et plus,</li>
              <li>• reçoivent constamment des messages,</li>
              {/* 3. Texte intégré sans point, même style que les puces */}
              <li className="list-none -ml-4 pt-1">
                et pour qui ces messages font perdre du temps, de l'énergie et des ventes.
              </li>
            </ul>
          </div>
        </div>

        {/* Dernier bloc compressé */}
        <div className="mt-6 bg-white/5 rounded-2xl p-6 border border-white/10 text-center max-w-3xl mx-auto text-white">
          <CheckCircle2 size={28} className="mx-auto text-green-500 mb-3" />
          <div className="space-y-1">
            <p className="font-bold text-lg leading-tight">Si ton business s'arrête quand ton WhatsApp s'arrête,</p>
            <p className="font-bold text-lg leading-tight">et que répondre à tes clients te bloque plus que cela ne te fait grandir,</p>
            <p className="font-black text-xl uppercase pt-2 tracking-tight">MAVA est fait pour toi.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
