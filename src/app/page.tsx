import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Benefits from "@/components/Benefits";
import Ingredients from "@/components/Ingredients";
import ProductShowcase from "@/components/ProductShowcase";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import { Footer, FloatingWhatsApp } from "@/components/Footer";
import Loader from "@/components/Loader";
import Particles from "@/components/Particles";
import OrderPopup from "@/components/OrderPopup";
import MobileOrderBar from "@/components/MobileOrderBar";

const Divider = () => (
  <div className="flex justify-center items-center py-8 opacity-40">
    <div className="w-24 h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent"></div>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-gold)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mx-4 text-brand-gold">
      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
    </svg>
    <div className="w-24 h-px bg-gradient-to-r from-brand-gold via-brand-gold to-transparent"></div>
  </div>
);

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Loader />
      <Particles />
      <Navbar />
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Benefits />
      <Divider />
      <Ingredients />
      <Divider />
      <ProductShowcase />
      <Divider />
      <Testimonials />
      <Divider />
      <FAQ />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
      <OrderPopup />
      <MobileOrderBar />
    </main>
  );
}
