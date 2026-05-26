import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import BlueprintSection from "./components/BlueprintSection";
import PortfolioSection from "./components/PortfolioSection";
import CaseStudies from "./components/CaseStudies";
import SecretSauceAudit from "./components/SecretSauceAudit";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-900">
      <Navigation />
      <Hero />
      <BlueprintSection />
      <PortfolioSection />
      <CaseStudies />
      <SecretSauceAudit />
      <Contact />
    </main>
  );
}
