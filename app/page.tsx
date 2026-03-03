// app/page.tsx
import HeroSection from "@/components/sections/HeroSection"
import FeaturedSection from "@/components/FeaturedSection"
import DifferentialSection from "@/components/sections/DifferentialSection" 
import TestimonialSection from "@/components/sections/TestimonialSection"
import Footer from "@/components/sections/Footer"
export default function Home() {
  return (
    <main className="min-h-screen">
      
      <section id="inicio">
        <HeroSection />
      </section>

      
      <section id="destaques">
        <FeaturedSection />
      </section>
      
     
      <section id="diferencial">
        <DifferentialSection />
      </section>
      
      
      
      <section id="depoimentos">
        <TestimonialSection />
      </section>
      
      <Footer />
    </main>
  )
}