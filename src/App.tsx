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
    <div className="text-white scroll-smooth">
      <Hero />

      <ProblemSection />

      <SolutionSection />

      <TargetAudienceSection />

      <BenefitsSection />

      <SocialProof />

      <PricingSection />

      <GuaranteeSection />

      <FinalSections />

      <Footer />
    </div>
  );
}

export default App;