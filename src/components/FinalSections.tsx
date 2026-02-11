export default function FinalSections() {
  return (
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="bg-white/5 rounded-2xl p-6 border border-white/10 text-center">
        <AlertTriangle size={32} className="mx-auto mb-4" />
        <h2 className="text-xl font-black mb-4 uppercase">Capacité Limitée</h2>
        <p className="text-sm text-gray-300">Les prix actuels s'appliquent uniquement dans la limite de notre capacité mensuelle.</p>
      </div>
      
      <div className="bg-white/5 rounded-2xl p-6 border border-white/10 text-center">
        <Clock size={32} className="mx-auto mb-4" />
        <h2 className="text-xl font-black mb-4 uppercase">Dernier Rappel</h2>
        <p className="text-sm text-gray-300">Chaque jour sans MAVA, c'est vendre à ta capacité humaine, pas à celle du marché.</p>
        <div className="mt-4 scale-90">
             <CTAButton text="Activer" variant="light" />
        </div>
      </div>
    </div>
  );
}
