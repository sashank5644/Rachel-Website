import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import IntakeForm from "@/components/IntakeForm";
import LocationSection from "@/components/LocationSection";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />

      <Section
        id="about"
        title="Our Mission"
        subtitle="serving beauty & confidence"
        content="My goal as a luxury stylist is to always provide elevated customized services to suit each and every individual client's needs. I provide the latest and most up to date techniques for all my clients. Integrity, passion and my absolute love for hair are the driving forces that motivate me daily to strive for excellence in each and every service I provide my clients. The health of my clients hair is my top priority at all times as well as educating my clients about home care and proper tones and hairstyles that are customized to fit their life style. Communication and integrity are the foundations I have built my business and the elements that are always present in my services and relationships with my clients day to day. My absolute greatest hope is to always make my clients feel incredibly beautiful, confident, and know that they have their hairstylist for life in me."
        imageSrc="/images/rachel-1.jpg"
        imageAlt="Mission Statement Image"
        reverse={false}
        isArch={true}
        offset="up"
        align="left"
      />

      <Section
        title="Rachel Marconi"
        subtitle="Hair Stylist"
        content="Rachel is the founder and creative force. With over 10 years of experience in the industry, Rachel has honed her skills in top salons across the country. Passionate about ongoing education, she stays ahead of trends to bring you the best in hair care."
        imageSrc="/images/rachel-3.jpg"
        imageAlt="Rachel Portrait"
        reverse={true}
        ctaText="View Portfolio"
        ctaLink="#portfolio"
        offset="down"
        align="right"
      />

      <Section
        id="services"
        title="Our Services"
        subtitle="Luxury Experience"
        content="Explore our full menu of hair extensions, coloring, and styling services designed to enhance your natural beauty."
        imageSrc="/images/rachel-2.jpg"
        imageAlt="Services Image"
        reverse={false}
        ctaText="View Service Menu & Book"
        ctaLink="https://www.hairartistrybyrachelsalem.com"
        offset="up"
        align="left"
      />

      <Gallery />

      <Reviews />

      <div id="intake-form">
        <IntakeForm />
      </div>

      <LocationSection />

      <footer id="contact" style={{ backgroundColor: '#3D3229', color: '#fff', padding: '5rem 0', textAlign: 'center' }}>
        <div className="container">
          <div style={{ marginBottom: '2rem' }}>
            <Image
              src="/images/hairapist-logo.png"
              alt="The Hairapist Logo"
              width={80}
              height={100}
              style={{ objectFit: 'contain', borderRadius: '8px' }}
            />
          </div>
          <h2 style={{ color: '#fff', marginBottom: '2rem' }}>Get In Touch</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2rem' }}>
            Ready for your transformation? Book your appointment today.
          </p>
          <a href="mailto:hello@rachelhair.com" className="btn" style={{ backgroundColor: '#C9A88C', color: '#fff', borderColor: '#C9A88C' }}>
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
