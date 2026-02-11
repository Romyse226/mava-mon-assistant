import { Zap, MessageSquare, ShieldCheck, Bell, CheckCircle2, XCircle } from 'lucide-react';

export default function SolutionSection() {
  return (
    <section className="red-section px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black mb-10 text-center uppercase italic">MAVA, CONCRÈTEMENT</h2>
        
        <div className="grid md:grid-cols-2 gap-6 items-center">
          {/* Colonne Gauche : La liste compacte */}
          <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
            <p className="font-bold mb-6 text-xl uppercase">Quand un client écrit :</p>
            <ul className="grid grid-cols-1 gap-3 text-base">
              <li className="flex items-center gap-3 bg-black/20 p-2 rounded-lg"> <Zap size={18} /> Réponse instantanée </li>
              <li className="flex items-center gap-3 bg-black/20 p-2 rounded-lg"> <MessageSquare size={18} /> Français naturel </li>
              <li className="flex items-center gap-3 bg-black/20 p-2 rounded-lg"> <CheckCircle2 size={18} /> Infos prix/stocks </li>
              <li className="flex items-center gap-3 bg-black/20 p-2 rounded-lg"> <Bell size={18} /> Alerte vente validée </li>
            </ul>
          </div>

          {/* Colonne Droite : L'image + Le message d'alerte */}
          <div className="space-y-4">
            <div className="bg-black border border-white/30 rounded-xl p-4 italic text-sm">
              <Bell className="inline mr-2 text-red-500" size={16} />
              "Boss, commande validée pour Client 07XXXXXXX : 2 Montres Luxe."
            </div>
            <img src="/image.jpeg" alt="Dashboard" className="w-32 h-32 mx-auto object-contain floating-image" />
            <p className="text-center font-bold uppercase text-sm">Il gère le courant. Tu gères l'important.</p>
          </div>
        </div>
      </div>
    </section>
  );
}