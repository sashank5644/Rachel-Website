import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Services from "@/components/Services";
import LocationSection from "@/components/LocationSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />

      <Section
        title="Our Mission"
        subtitle="serving beauty & confidence"
        content="We are taking modern beauty to a whole new level! Rachel's mission is to connect her clients with the art of talented beauty professionals to provide luxury on-site beauty services to elevate your beauty and confidence."
        imageSrc="/images/rachel-1.jpg"
        imageAlt="Mission Statement Image"
        reverse={false}
        isArch={true}
      />

      <Section
        title="The Boss"
        subtitle="Rachel Stylist"
        content="Rachel is the founder and creative force. With over 10 years of experience in the industry, Rachel has honed her skills in top salons across the country. Passionate about ongoing education, she stays ahead of trends to bring you the best in hair care."
        imageSrc="/images/rachel-3.jpg"
        imageAlt="Rachel Portrait"
        reverse={true}
        ctaText="View Portfolio"
        ctaLink="#portfolio"
      />

      <Section
        title="Signature Services"
        subtitle="luxury experience"
        content="From lived-in balayage to precision bobs, my services are designed to enhance your natural beauty. I use only premium, eco-friendly products to ensure the health of your hair."
        imageSrc="/images/rachel-2.jpg"
        imageAlt="Hair Service"
        reverse={false}
        ctaText="See Menu"
        ctaLink="#services"
      />

      <Services />

      <LocationSection />

      <footer id="contact" style={{ backgroundColor: '#2d2d2d', color: '#fff', padding: '5rem 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: '#fff', marginBottom: '2rem' }}>Get In Touch</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2rem' }}>
            Ready for your transformation? Book your appointment today.
          </p>
          <a href="mailto:hello@rachelhair.com" className="btn" style={{ backgroundColor: '#fff', color: '#333' }}>
            Email Me
          </a>
          <div style={{ marginTop: '3rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)' }}>
            &copy; {new Date().getFullYear()} Rachel Hair. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
