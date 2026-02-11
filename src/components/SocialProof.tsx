import { Star } from 'lucide-react';

export default function SocialProof() {
  // Liste de tes 7 images avec encodage des espaces pour que Vercel les trouve
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
    <section className="dark-section px-6 py-20 max-w-6xl mx-auto">
      <div className="slide-up">
        <h2 className="text-3xl md:text-5xl font-black mb-12 text-center uppercase">
          ILS ONT ACTIVÉ MAVA
        </h2>

        {/* Le slider avec les 7 cadres */}
        <div className="social-proof-slider flex gap-6 overflow-x-auto pb-8 snap-x">
          {screenshots.map((imgName, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-72 md:w-80 bg-white rounded-2xl p-3 shadow-2xl snap-center border-4 border-white"
            >
              {/* Étoiles de satisfaction */}
              <div className="flex items-center gap-1 mb-3 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#700E03" color="#700E03" />
                ))}
              </div>

              {/* Conteneur d'image adapté au format WhatsApp */}
              <div className="relative w-full rounded-lg overflow-hidden bg-gray-100">
                <img 
                  src={`/${imgName}`} 
                  alt={`Témoignage ${index + 1}`}
                  className="w-full h-auto object-contain" 
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-300 mt-6 text-sm animate-pulse">
          ⬅️ Faites glisser pour voir les 7 témoignages ➡️
        </p>
      </div>
    </section>
  );
}

