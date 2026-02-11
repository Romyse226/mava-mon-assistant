function App() {
  return (
    <div className="text-white scroll-smooth bg-black">
      <Hero />
      
      {/* Fusion Problème + Solution en un bloc compact */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-4 py-10 px-4">
        <ProblemSection />
        <SolutionSection />
      </div>

      {/* Fusion Cible + Bénéfices */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-4 py-10 px-4">
        <TargetAudienceSection />
        <BenefitsSection />
      </div>

      <SocialProof />
      <PricingSection />
      
      {/* Fusion Garantie + Alertes finales */}
      <div className="max-w-5xl mx-auto py-10 px-4">
        <GuaranteeSection />
        <FinalSections />
      </div>

      <Footer />
    </div>
  );
}