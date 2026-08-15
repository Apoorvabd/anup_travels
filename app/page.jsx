import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import About from "@/components/About";
import Services from "@/components/Services";
import Rituals from "@/components/Rituals";
import Jyotish from "@/components/Jyotish";
import Process from "@/components/Process";
import FeaturedRitual from "@/components/FeaturedRitual";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactCta from "@/components/ContactCta";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <About />
        <Services />
        <Rituals />
        <Jyotish />
        <Process />
        <FeaturedRitual />
        <Testimonials />
        <FAQ />
        <ContactCta />
        <ContactFooter />
      </main>
      <WhatsAppButton />
    </>
  );
}
