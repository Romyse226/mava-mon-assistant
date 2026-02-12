import PricingCard from './PricingCard';

export default function PricingSection() {
  return (
    <section className="red-section px-6 py-12 max-w-7xl mx-auto">
      <div className="slide-up">
        <h2 className="text-3xl md:text-5xl font-black mb-8 text-center uppercase">
          CHOISIS TON MAVA
        </h2>
        
        <div className="grid md:grid-cols-3 gap-4">
          <PricingCard
            title="MAVA CHAT"
            badge="LE PLUS CHOISI"
            description="Pour respirer et ne plus rater de vente."
            features={[
              'Réponses 24h/7j',
              'Prises de commandes',
              'Alertes dès qu’une vente est prête',
              'Mise à jour des infos',
              'Fonctionne naturellement avec ton téléphone actif, comme aujourd’hui'
            ]}
            bonus="Bonus : Dashboard simple pour suivre tes ventes"
            price="29.000 F / mois"
            originalPrice="45.000 F"
            installTime="24–48h"
            ctaText="Activer MAVA CHAT"
            ctaMessage="Bonjour, je veux activer MAVA CHAT."
          />

          <PricingCard
            title="MAVA VISION"
            badge="PRÉFÉRÉ PAR LES VENDEURS TIKTOK"
            description="Pour les business qui vendent via lives TikTok/Facebook avec captures d’écran ou photos des produits"
            features={[
              'Tout MAVA CHAT +',
              'Traitement intelligent des images',
              'Reconnaissance des produits et preuves de paiement',
              'Ajout et mise à jour des produits',
              'Fonctionne naturellement avec ton téléphone actif, comme aujourd’hui'
            ]}
            price="35.000 F / mois"
            originalPrice="50.000 F"
            installTime="48–72h"
            ctaText="Activer MAVA VISION"
            ctaMessage="Bonjour, je veux activer MAVA VISION."
          />

          <PricingCard
            title="MAVA PRO"
            badge="SUR SÉLECTION"
            description="Pour structures prêtes à devenir des systèmes."
            features={[
              'Configuration sur mesure',
              'Multi-numéros / multi-canaux (sites web, réseaux sociaux, App)',
              'Automatisations avancées',
              'Support prioritaire',
              'Entièrement autonome, même avec un smartphone hors circuit'
            ]}
            price="Sur devis"
            installTime="Dès 125.000 F Inst. + 59.000 F/m"
            ctaText="Demander évaluation"
            ctaMessage="Bonjour, je souhaite une évaluation MAVA PRO."
          />
        </div>
      </div>
    </section>
  );
}
