import { Zap, MessageSquare, ShieldCheck, Bell, CheckCircle2, XCircle } from 'lucide-react';

export default function SolutionSection() {
  return (
    <section className="red-section px-4 py-10 max-w-5xl mx-auto relative overflow-hidden">
      <div className="slide-up">
        <h2 className="text-3xl md:text-5xl font-black mb-8 text-center uppercase tracking-tighter">
          MAVA, CONCRÈTEMENT
        </h2>

        <div className="space-y-6 leading-relaxed">
          {/* Texte élargi pour mobile */}
          <div className="space-y-2">
            <p className="font-semibold text-xl md:text-2xl text-center px-2">
              MAVA est ton employé commercial permanent,
              <br className="hidden md:block" /> entraîné pour le marché ivoirien et connecté directement à ton WhatsApp.
            </p>
            <p className="text-center text-gray-200 text-base md:text-lg">
              Il travaille pendant que tu es déconnecté, travailles ailleurs, ou endormi.
              <br className="hidden md:block" /> Avec un seul objectif : transformer chaque message en opportunité de vente.
            </p>
          </div>

          {/* Tableau de fonctionnalités avec ton nouveau design compact */}
          <div className="bg-white/10 rounded-2xl p-5 border border-white/20 shadow-xl">
            <p className="font-bold mb-4 text-xl uppercase text-white text-center md:text-left">Quand un client t'écrit, MAVA :</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm md:text-base text-white">
              <li className="flex items-center gap-3 bg-black/40 p-2 rounded-lg border border-white/5"> 
                <Zap size={18} className="text-yellow-400" /> <span>répond (instantanément)</span> 
              </li>
              <li className="flex items-center gap-3 bg-black/40 p-2 rounded-lg border border-white/5"> 
                <MessageSquare size={18} className="text-blue-400" /> <span>parle un français naturel et rassurant</span> 
              </li>
              <li className="flex items-center gap-3 bg-black/40 p-2 rounded-lg border border-white/5"> 
                <CheckCircle2 size={18} className="text-green-500" /> <span>donne les infos (prix, stocks, fonctionnement)</span> 
              </li>
              <li className="flex items-center gap-3 bg-black/40 p-2 rounded-lg border border-white/5"> 
                <CheckCircle2 size={18} className="text-green-500" /> <span>pose les bonnes questions</span> 
              </li>
              <li className="flex items-center gap-3 bg-black/40 p-2 rounded-lg border border-white/5"> 
                <CheckCircle2 size={18} className="text-green-500" /> <span>prend la commande complète</span> 
              </li>
              <li className="flex items-center gap-3 bg-black/40 p-2 rounded-lg border border-white/5"> 
                <Bell size={18} className="text-red-500" /> <span>t'alerte dès que la commande est validée</span> 
              </li>
            </ul>
          </div>

          <div className="text-center space-y-4 py-4">
            <div className="flex items-center justify-center gap-2">
              <XCircle size={22} className="text-red-500" />
              <p className="font-bold text-lg md:text-xl uppercase">MAVA ne sort jamais du cadre. Tu gardes le contrôle.</p>
            </div>
            <p className="font-semibold text-base md:text-lg flex items-center justify-center gap-2">
              <ShieldCheck size={20} className="text-green-500" />
              Il gère juste le courant. Tu gères l'important.
            </p>
          </div>

          {/* Section exemple de message compacte */}
          <div className="relative bg-white/5 rounded-2xl p-6 border border-white/10 text-center">
            <p className="mb-4 text-sm md:text-base text-gray-300 italic">Quand une situation le dépasse, il te notifie. Ex :</p>
            
            <div className="bg-black border border-white/30 rounded-xl p-4 italic text-sm text-white mb-6 shadow-lg inline-block w-full">
              <Bell className="inline mr-2 text-red-500 animate-pulse" size={16} />
              "Boss, y'a le client 07XXXXXXX qui est mécontent pour son colis endommagé à la livraison…"
            </div>

            <img
              src="/image.jpeg"
              alt="MAVA Dashboard"
              className="w-32 h-32 md:w-40 md:h-40 mx-auto object-contain floating-image drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

