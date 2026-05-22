import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Facilities from './components/Facilities';
import WhyChoose from './components/WhyChoose';
import BMICalculator from './components/BMICalculator';
import Trainers from './components/Trainers';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import JoinModal from './components/JoinModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { PlanName } from './types';
import { smoothScrollTo } from './utils/scroll';

export default function App() {
  const [selectedPlan, setSelectedPlan] = useState<PlanName>('General');
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  // Core callback when plans are selected or general Join buttons are clicked
  const handleOpenJoinModal = (planName: PlanName = 'General') => {
    setSelectedPlan(planName);
    setIsJoinModalOpen(true);
  };

  const scrollToSection = (sectionId: string) => {
    smoothScrollTo('#' + sectionId, 1200);
  };

  return (
    <div className="bg-cyber-dark min-h-screen font-sans text-white overflow-x-hidden selection:bg-cyber-red selection:text-white">
      {/* Glow Ambient Filter Core (Very soft) */}
      <div className="fixed -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-cyber-red/5 blur-[120px] pointer-events-none z-0" />
      
      {/* 1. Navbar */}
      <Navbar onJoinClick={() => handleOpenJoinModal('General')} />

      {/* 2. Cinematic Hero Section */}
      <Hero 
        onJoinClick={() => handleOpenJoinModal('General')}
        onViewPlansClick={() => scrollToSection('pricing')}
      />

      {/* 3. Facilities Section */}
      <Facilities />

      {/* 4. Why Choose POWERSURGE Section (Stats Counting) */}
      <WhyChoose />

      {/* 5. Biometric BMI Calculator */}
      <BMICalculator />

      {/* 6. Elite Trainers Biography Area */}
      <Trainers />

      {/* 7. Membership Protocols (Pricing Cards) */}
      <Pricing onPlanSelect={handleOpenJoinModal} />

      {/* 8. Operator Feedback (Transformation Testimonials) */}
      <Testimonials />

      {/* 9. Biosphere Gallery of Gym Zones */}
      <Gallery />

      {/* 10. Contact Details & Maps Footer */}
      <Footer />

      {/* 11. Immersive Glass Join Modal Popup */}
      <JoinModal 
        isOpen={isJoinModalOpen} 
        onClose={() => setIsJoinModalOpen(false)} 
        selectedPlan={selectedPlan}
      />

      {/* 12. Futuristic Contact floating portal */}
      <FloatingWhatsApp />
    </div>
  );
}
