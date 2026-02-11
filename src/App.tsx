import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import TargetAudienceSection from './components/TargetAudienceSection';
import BenefitsSection from './components/BenefitsSection';
import SocialProof from './components/SocialProof';
import PricingSection from './components/PricingSection';
import GuaranteeSection from './components/GuaranteeSection';
import FinalSections from './components/FinalSections';
import Footer from './components/Footer';

function App() {
  return (
    <div className="text-white scroll-smooth bg-black">
      <Hero />
      
      {/* BLOC CONTEXTE : Problème + Audience */}
      <div className="bg-[#1a1a1a]">
        <ProblemSection />
        <TargetAudienceSection />
      </div>

      {/* BLOC SOLUTION : Ce que c'est + Ce que tu gagnes */}
      <SolutionSection />
      <BenefitsSection />

      <SocialProof />

      {/* BLOC OFFRE : Prix + Garantie + Urgence */}
      <PricingSection />
      <div className="bg-[#700E03]">
         <GuaranteeSection />
         <FinalSections />
      </div>

      <Footer />
    </div>
  );
}

export default App;
