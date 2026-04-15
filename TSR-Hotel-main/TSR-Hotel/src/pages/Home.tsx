import Hero from '../components/Hero';
import WelcomeSection from '../components/WelcomeSection';
import LuxuryMoments from '../components/LuxuryMoments';
import StorySection from '../components/StorySection';
import LegacySection from '../components/LegacySection';
import EveryStaySection from '../components/EveryStaySection';
import SpecialOccasions from '../components/SpecialOccasions';

export default function Home() {
  return (
    <>
      <Hero />
      <WelcomeSection />
      <StorySection />
      <LuxuryMoments />
      <LegacySection />
      <EveryStaySection />
      <SpecialOccasions />
    </>
  );
}
