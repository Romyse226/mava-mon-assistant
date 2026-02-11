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
              'Alertes vente validée',
              'Garde ton téléphone actuel',
              'Tableau de bord inclus'
            ]}
            price="29.000 F / mois"
            originalPrice="45.000 F"
            installTime="24–48h"
            ctaText="Activer MAVA CHAT"
            ctaMessage="Bonjour, je veux activer MAVA CHAT."
            icon="sparkles"
          />

          <PricingCard
            title="MAVA VISION"
            badge="SPECIAL TIKTOK"
            description="Pour les business qui vendent via photos et lives."
            features={[
              'Tout MAVA CHAT +',
              'Lecture intelligente d\'images',
              'Preuves de paiement auto',
              'Mise à jour des stocks',
              'Garde ton téléphone actuel'
            ]}
            price="35.000 F / mois"
            originalPrice="50.000 F"
            installTime="48–72h"
            ctaText="Activer MAVA VISION"
            ctaMessage="Bonjour, je veux activer MAVA VISION."
            icon="trending"
          />

          <PricingCard
            title="MAVA PRO"
            badge="SUR SÉLECTION"
            description="Pour structures établies."
            features={[
              'Configuration sur mesure',
              'Multi-numéros / multi-canaux',
              'Automatisations avancées',
              'Support prioritaire',
              'Totalement autonome (Cloud)'
            ]}
            price="Sur devis"
            installTime="Dès 125.000 F Inst. + 59.000 F/m"
            ctaText="Demander évaluation"
            ctaMessage="Bonjour, je souhaite une évaluation MAVA PRO."
            icon="crown"
          />
        </div>
      </div>
    </section>
  );
}

