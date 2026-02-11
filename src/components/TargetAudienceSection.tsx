import { XCircle, CheckCircle2 } from 'lucide-react';

export default function TargetAudienceSection() {
  return (
    <section className="bg-red-950/40 px-6 py-20 max-w-5xl mx-auto rounded-3xl border border-red-900/50">
      <div className="slide-up">
        <h2 className="text-3xl md:text-5xl font-black mb-12 text-center uppercase leading-tight text-white">
          À QUI MAVA <br className="md:hidden" /> EST DESTINÉ ?
        </h2>

        {/* Sous-titre Rouge Italique Majuscule */}
        <div className="space-y-1 text-center mb-12">
          <p className="text-base text-red-600 font-bold uppercase italic">Soyons clairs.</p>
          <p className="text-base text-red-600 font-bold uppercase italic">MAVA n'est pas pour tout le monde.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Bloc PAS POUR - Noir */}
          <div className="bg-black/60 rounded-2xl p-8 border border-white/10">
            <div className="flex items-center gap-3 mb-6 text-red-600">
              <XCircle size={28} />
              <h3 className="text-2xl font-bold uppercase italic">Pas pour :</h3>
            </div>
            <ul className="space-y-3 ml-6 text-white">
              <li>• ceux qui vendent rarement,</li>
              <li>• ceux dont le WhatsApp est encore calme,</li>
              <li>• qui veulent tout gérer eux-mêmes sans savoir qu'ils confondent contrôle et agitation.</li>
            </ul>
          </div>

          {/* Bloc POUR - Noir */}
          <div className="bg-black/60 rounded-2xl p-8 border border-white/10">
            <div className="flex items-center gap-3 mb-6 text-green-500">
              <CheckCircle2 size={28} />
              <h3 className="text-2xl font-bold uppercase italic text-white">MAVA est pour les business qui :</h3>
            </div>
            <ul className="space-y-3 ml-6 text-white">
              <li>• vendent déjà,</li>
              <li>• veulent vendre mieux et plus,</li>
              <li>• reçoivent constamment des messages,</li>
              <li className="list-none -ml-6 pt-2">
                et pour qui ces messages font perdre du temps, de l'énergie et des ventes.
              </li>
            </ul>
          </div>
        </div>

        {/* Bloc Conclusion Blanc - Structure large qui ne coupe jamais */}
        <div className="text-center space-y-6 mt-12 bg-white rounded-2xl p-8 text-[#700E03] shadow-2xl">
          <CheckCircle2 size={32} className="mx-auto text-green-600" />
          <p className="font-bold text-xl md:text-2xl leading-relaxed">
            Si ton business s'arrête quand ton WhatsApp s'arrête,
            <br />
            et que répondre à tes clients te bloque plus que cela ne te fait grandir,
          </p>
          <p className="font-black text-2xl md:text-3xl uppercase tracking-tighter">
            MAVA est fait pour toi.
          </p>
        </div>
      </div>
    </section>
  );
}
