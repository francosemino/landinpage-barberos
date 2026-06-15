import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import ClientsLogos from "@/components/landing/ClientsLogos";
import Problem from "@/components/landing/Problem";
import Features from "@/components/landing/Features";
import DashboardShowcase from "@/components/landing/DashboardShowcase";
import BarberClub from "@/components/landing/BarberClub";
import HowItWorks from "@/components/landing/HowItWorks";
import Testimonials from "@/components/landing/Testimonials";
import Pricing from "@/components/landing/Pricing";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";
import FloatingWhatsApp from "@/components/landing/FloatingWhatsApp";

export default function Landing() {
  return (
    <div data-testid="landing-page" className="min-h-screen bg-[#0A0A0A] text-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <ClientsLogos />
        <Problem />
        <Features />
        <DashboardShowcase />
        <BarberClub />
        <div id="turnos" />
        <HowItWorks />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
