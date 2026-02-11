import { XCircle, CheckCircle2 } from 'lucide-react';

export default function TargetAudienceSection() {
  return (
    <section className="dark-section px-6 py-16 bg-black">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black mb-12 text-center uppercase tracking-tighter">MAVA EST-IL POUR TOI ?</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-red-950/20 rounded-2xl p-6 border border-red-900/50 opacity-70">
            <div className="flex items-center gap-3 mb-4 text-red-500">
              <XCircle size={24} /> <h3 className="text-xl font-bold uppercase">Pas pour :</h3>
            </div>
            <ul className="text-sm space-y-2 text-gray-400 italic">
              <li>• WhatsApp encore calme</li>
              <li>• Ventes rares ou occasionnelles</li>
              <li>• Ceux qui veulent tout micro-gérer</li>
            </ul>
          </div>

          <div className="bg-white/5 rounded-2xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-4 text-green-500">
              <CheckCircle2 size={24} /> <h3 className="text-xl font-bold uppercase">Fait pour :</h3>
            </div>
            <ul className="text-sm space-y-2">
              <li>• Business qui vendent déjà</li>
              <li>• Messages constants et fatigants</li>
              <li>• Volonté de scaler sans recruter</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}