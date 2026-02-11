import CTAButton from './CTAButton';

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center px-6 py-12 text-center relative overflow-hidden">
      <div className="absolute top-6 right-6 z-10">
        <img src="/WhatsApp_Image_2026-02-09_at_18.50.24.jpeg" alt="MAVA Logo" className="w-12 h-12 md:w-16 md:h-16 object-contain opacity-80" />
      </div>

      <div className="max-w-4xl mx-auto">
        <img src="/gomo.jpeg" alt="MAVA Robot" className="w-40 h-40 md:w-56 md:h-56 mx-auto mb-8 object-contain drop-shadow-2xl" />

        <h1 className="text-3xl md:text-6xl font-black mb-4 leading-tight uppercase tracking-tighter">
          TON BUSINESS DOIT T'ENRICHIR. <span className="text-red-600">PAS T'ENCHAÎNER.</span>
        </h1>

        <div className="mb-8 space-y-4">
          <p className="font-bold text-lg md:text-2xl uppercase">MAVA EST TON ASSISTANT COMMERCIAL WHATSAPP.</p>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Il vend, prend les commandes et t'alerte quand l'argent est prêt. 24h/24. Sans que tu interviennes.
          </p>
        </div>

        <CTAButton
          text="Obtenir MAVA"
          message="Bonjour, je veux activer MAVA..."
          variant="light"
        />
      </div>
    </section>
  );
}