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

        {/* Le Slider avec barre de défilement réactivée et stylisée */}
        <div className="flex gap-6 overflow-x-auto pb-6 snap-x items-start custom-scrollbar">
          {screenshots.map((imgName, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[280px] md:w-[320px] bg-white rounded-2xl p-1.5 shadow-2xl snap-center border border-white/5 flex flex-col h-auto"
            >
              {/* Étoiles discrètes */}
              <div className="flex items-center gap-1 mb-2 justify-center py-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#700E03" color="#700E03" />
                ))}
              </div>

              {/* Cadre ultra-fin : p-0.5 pour que l'image respire */}
              <div className="relative w-full rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
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

      {/* CSS pour styliser la barre sans faire planter le code */}
      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar {
          height: 6px;
          display: block;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 10px;
        }
      `}} />
    </section>
  );
}
