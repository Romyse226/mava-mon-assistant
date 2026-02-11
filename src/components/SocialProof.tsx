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

        {/* Le slider horizontal sans barre de défilement moche */}
        <div className="flex gap-8 overflow-x-auto pb-12 snap-x no-scrollbar">
          {screenshots.map((imgName, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[280px] md:w-[320px] bg-white rounded-[2rem] p-4 shadow-2xl snap-center border-4 border-white/10"
            >
              {/* Étoiles centrées */}
              <div className="flex items-center gap-1 mb-5 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={22} fill="#700E03" color="#700E03" />
                ))}
              </div>

              {/* Cadre de l'image (Format Smartphone WhatsApp) */}
              <div className="relative w-full h-[450px] md:h-[550px] rounded-2xl overflow-hidden bg-gray-50 shadow-inner">
                <img 
                  src={`/${imgName}`} 
                  alt={`Témoignage ${index + 1}`}
                  className="w-full h-full object-contain bg-gray-50"
                  onError={(e) => {
                    e.currentTarget.src = "https://placehold.co";
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Ton texte original qui bouge (animate-pulse) */}
        <p className="text-center text-gray-300 mt-8 text-sm font-medium tracking-widest uppercase animate-pulse">
          ⬅ Faites glisser pour voir plus de témoignages ➡
        </p>
      </div>
    </section>
  );
}

