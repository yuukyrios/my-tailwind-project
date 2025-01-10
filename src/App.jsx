import Navbar from './components/navbar';
import HeroSection from './components/hero';
import WhySection from './components/why';
import ServicesSection from './components/services';
import PortfolioSection from './components/portfolio';
import ContactSection from './components/contact';
import FooterSection from './components/footer';

function App() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar />
      <HeroSection />
      <WhySection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
      <FooterSection />
      {/* Add more sections here */}
    </div>
  );
}

export default App;
