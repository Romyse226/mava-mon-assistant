import { XCircle, CheckCircle2 } from 'lucide-react';

export default function TargetAudienceSection() {
  return (
    <section className="dark-section px-4 py-20 max-w-5xl mx-auto">
      <div className="slide-up">
        <h2 className="text-3xl md:text-5xl font-black mb-12 text-center uppercase tracking-tighter">
          À QUI MAVA EST DESTINÉ ?
        </h2>

        <div className="space-y-6 text-lg md:text-xl leading-relaxed">
          <p className="text-center font-bold text-2xl md:text-3xl uppercase italic">Soyons clairs.</p>
          <p className="text-center font-medium text-xl md:text-2xl text-gray-300">MAVA n'est pas pour tout le monde.</p>

          {/* Section PAS POUR */}
          <div className="my-10 bg-red-950/40 rounded-3xl p-8 border border-red-900/50 shadow-2xl">
            <div className="flex items-center gap-4 mb-8 text-red-500">
              <XCircle size={32} />
              <h3 className="text-2xl font-black uppercase italic">Pas pour :</h3>
            </div>

            <ul className="space-y-4">
              {[
                "Ceux qui vendent rarement",
                "Ceux dont le WhatsApp est encore calme",
                "Ceux qui confondent Contrôle et Agitation"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-200">
                  <span className="text-red-500 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section POUR */}
          <div className="my-10 bg-white/5 rounded-3xl p-8 border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="flex items-center gap-4 mb-8 text-green-500">
              <CheckCircle2 size={32} />
              <h3 className="text-2xl font-black uppercase italic text-white">MAVA est pour les business qui :</h3>
            </div>

            <ul className="space-y-4">
              {[
                "Vendent déjà activement",
                "Veulent vendre mieux et plus",
                "Reçoivent constamment des messages"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-200 font-medium">
                  <CheckCircle2 size={18} className="text-green-500 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-gray-400 italic border-l-2 border-green-500 pl-4">
              ...et pour qui ces messages font perdre du temps, de l'énergie et des ventes.
            </p>
          </div>

          {/* Conclusion Flash */}
          <div className="text-center space-y-6 mt-16 bg-gradient-to-b from-white/10 to-transparent rounded-3xl p-10 border border-white/20 shadow-[0_0_50px_rgba(255,255,255,0.05)]">
            <CheckCircle2 size={40} className="mx-auto text-green-500 mb-4 animate-bounce" />
            <p className="font-bold text-xl md:text-2xl leading-tight">
              Si ton business s'arrête quand ton WhatsApp s'arrête,
            </p>
            <p className="font-bold text-xl md:text-2xl leading-tight text-gray-300">
              et que répondre à tes clients te bloque plus que ça ne te fait grandir,
            </p>
            <p className="font-black text-3xl md:text-4xl text-white uppercase tracking-widest pt-4">
              MAVA est fait pour toi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
