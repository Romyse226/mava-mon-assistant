export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center px-6 py-12 text-center fade-in relative overflow-hidden">
      <div className="absolute top-4 right-4 z-10">
        <img src="/WhatsApp_Image_2026-02-09_at_18.50.24.jpeg" alt="MAVA Logo" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="mb-6 slide-up"> {/* Réduit de mb-16 à mb-6 */}
          <img src="/gomo.jpeg" alt="MAVA Robot" className="w-40 h-40 md:w-60 md:h-60 mx-auto object-contain drop-shadow-2xl" />
        </div>

        <h1 className="text-3xl md:text-5xl font-black mb-2 leading-tight uppercase">TON BUSINESS DOIT JUSTE T'ENRICHIR.</h1>
        <h2 className="text-2xl md:text-4xl font-bold mb-8 leading-tight uppercase text-red-600">PAS T'ENCHAÎNER À TON WHATSAPP.</h2>

        <div className="mb-8 space-y-2 text-base md:text-lg"> {/* Réduit space-y-6 à 2 */}
          <p className="font-bold text-lg">MAVA EST TON ASSISTANT COMMERCIAL.</p>
          <p className="text-gray-300">Il répond, prend les commandes et t'alerte quand l'argent est prêt.</p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-4 text-sm font-bold uppercase tracking-widest text-gray-400">
          <p>24h/24</p><span>•</span><p>Sans fatigue</p><span>•</span><p>Sans stress</p>
        </div>

        <CTAButton text="Obtenir MAVA Maintenant" variant="light" />
      </div>
    </section>
  );
}