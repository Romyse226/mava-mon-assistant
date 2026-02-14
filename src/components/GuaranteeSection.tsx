import { Shield } from 'lucide-react';

export default function GuaranteeSection() {
  return (
    <section className="bg-black px-4 py-10 max-w-4xl mx-auto">
      <div className="slide-up bg-white rounded-3xl p-6 md:p-8 text-[#700E03] shadow-2xl">
        <div className="flex items-center justify-center gap-4 mb-6">
          <Shield size={40} strokeWidth={2.5} className="flex-shrink-0" />
          <h2 className="text-3xl md:text-4xl font-black uppercase leading-none">
            GARANTIE RÉSULTATS
          </h2>
        </div>

        <div className="space-y-2 text-base md:text-lg text-center leading-tight">
          <p className="font-semibold text-xl">Teste MAVA pendant 14 jours.</p>
          <p>Si ton business n'est pas plus clair, plus fluide, plus rentable,</p>
          <p>on coupe tout et on te rembourse.</p>
          <p className="font-bold text-2xl uppercase mt-2">Sans discussion.</p>
        </div>
      </div>
    </section>
  );
}
