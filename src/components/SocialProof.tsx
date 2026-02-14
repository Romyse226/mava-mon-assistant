import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export default function SocialProof() {
  const screenshots = [
    "capture 1.jpeg",
    "capture 2.jpeg",
    "capture 3.jpeg",
    "capture 4.jpeg",
    "capture 5.jpeg",
    "capture 6.jpeg",
  ];

  return (
    <section className="dark-section px-4 py-12 w-full overflow-hidden"> {/* py-24 réduit à py-12 pour compresser le noir */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black mb-10 text-center uppercase tracking-tighter leading-none">
          ILS ONT ACTIVÉ MAVA
        </h2>

        {/* Slider automatique calé sur 6 images */}
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x items-start custom-scrollbar">
          {screenshots.map((imgName, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[280px] md:w-[320px] bg-white rounded-2xl p-1 shadow-2xl snap-center border border-white/5 flex flex-col h-auto"
            >
              {/* Étoiles discrètes */}
              <div className="flex items-center gap-1 mb-2 justify-center py-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#700E03" color="#700E03" />
                ))}
              </div>

              {/* Cadre ultra-fin pour laisser respirer l'image */}
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

        {/* Navigation et Texte - Non animé et compressé */}
        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="flex items-center gap-12 text-white animate-pulse">
            <ChevronLeft size={32} strokeWidth={3} />
            <ChevronRight size={32} strokeWidth={3} />
          </div>
          
          <p className="text-center text-gray-300 text-sm font-medium tracking-widest uppercase max-w-md">
            Les business organisés dominent. Les autres répondent.
          </p>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar {
          height: 4px;
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
