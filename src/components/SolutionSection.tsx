import { Zap, MessageSquare, Bell, CheckCircle2 } from 'lucide-react';

export default function SolutionSection() {
  return (
    <section className="bg-red-950/20 p-6 rounded-3xl border border-red-900/50"> 
      <div className="max-w-5xl mx-auto py-10">
        <h2 className="text-3xl md:text-5xl font-black mb-10 text-center uppercase italic text-white">MAVA, CONCRÈTEMENT</h2>
        
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
            <p className="font-bold mb-6 text-xl uppercase text-white">Quand un client écrit :</p>
            <ul className="grid grid-cols-1 gap-3 text-base text-white">
              <li className="flex items-center gap-3 bg-black/20 p-2 rounded-lg"> <Zap size={18} /> Réponse instantanée </li>
              <li className="flex items-center gap-3 bg-black/20 p-2 rounded-lg"> <MessageSquare size={18} /> Français naturel </li>
              <li className="flex items-center gap-3 bg-black/20 p-2 rounded-lg"> <CheckCircle2 size={18} /> Infos prix/stocks </li>
              <li className="flex items-center gap-3 bg-black/20 p-2 rounded-lg"> <Bell size={18} /> Alerte vente validée </li>
            </ul>
          </div>

          <div className="space-y-4 text-center">
            <div className="bg-black border border-white/30 rounded-xl p-4 italic text-sm text-white">
              <Bell className="inline mr-2 text-red-500" size={16} />
              "Boss, commande validée pour Client 07XXXXXXX : 2 Montres Luxe."
            </div>
            <img src="/image.jpeg" alt="Dashboard" className="w-48 h-48 mx-auto object-contain" />
            <p className="font-bold uppercase text-sm text-white">Il gère le courant. Tu gères l'important.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
