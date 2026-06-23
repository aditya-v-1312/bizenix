import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import WhyBizenix from "@/components/WhyBizenix";
import FounderCTA from "@/components/FounderCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <WhyBizenix />
      <FounderCTA />
      <Footer />
    </main>
  );
}