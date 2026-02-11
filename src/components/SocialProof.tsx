import { Star } from 'lucide-react';

export default function SocialProof() {
  const screenshots = [
    "capture 1.jpeg",
    "capture 2.jpeg",
    "capture 3.jpeg",
    "capture 4.jpeg",
    "capture 5.jpeg",
    "capture 6.jpeg",
    "capture 7.jpeg"
  ];

  return (
    <section className="dark-section px-4 py-24 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black mb-16 text-center uppercase tracking-tighter">
          ILS ONT ACTIVÉ MAVA
        </h2>

        {/* On utilise overflow-x-auto et on cache la scrollbar proprement */}
        <div 
          className="flex gap-6 overflow-x-auto pb-12 snap-x items-start"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {screenshots.map((imgName, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[280px] md:w-[320px] bg-white rounded-[2.5rem] p-3 shadow-2xl snap-center border-4 border-white/5 flex flex-col h-auto"
            >
              {/* Étoiles centrées */}
              <div className="flex items-center gap-1 mb-4 justify-center py-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#700E03" color="#700E03" />
                ))}
              </div>

              {/* Cadre dynamique pour tes captures WhatsApp */}
              <div className="relative w-full rounded-[1.8rem] overflow-hidden bg-gray-50 shadow-inner">
                <img 
                  src={`/${imgName}`} 
                  alt={`Témoignage ${index + 1}`}
                  className="w-full h-auto block"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = "https://placehold.co";
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Ton texte Pulse */}
        <p className="text-center text-gray-300 mt-8 text-sm font-medium tracking-widest uppercase animate-pulse">
          ⬅ Faites glisser pour voir plus de témoignages ➡
        </p>
      </div>
    </section>
  );
}
