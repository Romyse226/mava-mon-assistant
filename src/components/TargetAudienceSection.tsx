import { XCircle, CheckCircle2 } from 'lucide-react';

export default function TargetAudienceSection() {
  return (
    <section className="dark-section px-4 py-16 max-w-6xl mx-auto">
      <div className="slide-up">
        <h2 className="text-3xl md:text-5xl font-black mb-10 text-center uppercase">À QUI MAVA EST DESTINÉ ?</h2>

        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          {/* Bloc PAS POUR */}
          <div className="bg-red-950/30 rounded-3xl p-8 border border-red-900/50">
            <div className="flex items-center gap-3 mb-6 text-red-500">
              <XCircle size={28} />
              <h3 className="text-xl font-bold uppercase">Pas pour :</h3>
            </div>
            <ul className="space-y-4 text-gray-300">
              <li className="flex gap-2"><span>•</span> Ceux qui vendent rarement</li>
              <li className="flex gap-2"><span>•</span> Ceux dont le WhatsApp est encore calme</li>
              <li className="flex gap-2"><span>•</span> Ceux qui veulent tout gérer eux-mêmes et qui confondent contrôle et agitation</li>
            </ul>
          </div>

          {/* Bloc POUR */}
          <div className="bg-white/5 rounded-3xl p-8 border border-white/10">
            <div className="flex items-center gap-3 mb-6 text-green-500">
              <CheckCircle2 size={28} />
              <h3 className="text-xl font-bold uppercase text-white">Idéal pour les business qui :</h3>
            </div>
            <ul className="space-y-4 text-gray-200 font-medium">
              <li className="flex gap-2"><CheckCircle2 size={18} className="text-green-500 flex-shrink-0 mt-1" /> Vendent déjà activement</li>
              <li className="flex gap-2"><CheckCircle2 size={18} className="text-green-500 flex-shrink-0 mt-1" /> Veulent vendre mieux et plus</li>
              <li className="flex gap-2"><CheckCircle2 size={18} className="text-green-500 flex-shrink-0 mt-1" /> Reçoivent constamment des messages</li>
            </ul>
          </div>
        </div>

        {/* Conclusion Impactante */}
        <div className="text-center mt-10 bg-white/10 rounded-3xl p-8 border border-white/20">
          <p className="font-bold text-xl md:text-2xl mb-4">
            Si ton business s'arrête quand ton WhatsApp s'arrête, et que répondre à tes clients te bloque plus que cela ne te fait grandir...
          </p>
          <p className="font-black text-2xl md:text-4xl text-white uppercase tracking-widest">
            MAVA EST FAIT POUR TOI.
          </p>
        </div>
      </div>
    </section>
  );
}
