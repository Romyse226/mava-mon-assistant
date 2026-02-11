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

        {/* Slider horizontal - Alignement haut */}
        <div className="flex gap-6 overflow-x-auto pb-12 snap-x no-scrollbar items-start">
          {screenshots.map((imgName, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[280px] md:w-[320px] bg-white rounded-[2rem] p-1.5 shadow-2xl snap-center border border-white/10 flex flex-col h-auto"
            >
              {/* Étoiles plus discrètes en haut */}
              <div className="flex items-center gap-1 my-3 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#700E03" color="#700E03" />
                ))}
              </div>

              {/* Cadre ultra-fin : l'image remplit quasiment tout l'espace du card */}
              <div className="relative w-full rounded-[1.6rem] overflow-hidden bg-white">
                <img 
                  src={`/${imgName}`} 
                  alt={`Témoignage ${index + 1}`}
                  className="w-full h-auto block object-top"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = "https://placehold.co/400x600?text=Capture+Introuvable";
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-300 mt-8 text-sm font-medium tracking-widest uppercase animate-pulse">
          ⬅ Faites glisser pour voir plus de témoignages ➡
        </p>
      </div>
      
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
