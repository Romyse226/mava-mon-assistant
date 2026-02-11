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
        <div className="flex gap-6 overflow-x-auto pb-12 snap-x no-scrollbar">
          {screenshots.map((imgName, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[280px] md:w-[320px] bg-white rounded-[2.5rem] p-3 shadow-2xl snap-center border-4 border-white/5"
            >
              {/* Étoiles centrées */}
              <div className="flex items-center gap-1 mb-4 justify-center py-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="#700E03" color="#700E03" />
                ))}
              </div>

              {/* Cadre de l'image ajusté pour une visibilité totale */}
              <div className="relative w-full h-[500px] md:h-[580px] rounded-[1.8rem] overflow-hidden bg-black shadow-inner">
                <img 
                  src={`/${imgName}`} // Assure-toi de mettre les images à la racine du dossier "public"
                  alt={`Témoignage ${index + 1}`}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = "https://placehold.co/400x800?text=Capture+Introuvable";
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
      
      {/* Style CSS pour cacher la scrollbar tout en gardant le défilement */}
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

