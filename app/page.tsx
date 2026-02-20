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
        imageSrc="/images/media__1771616751525.jpg"
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
        imageSrc="/images/media__1771617948513.jpg"
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
        imageSrc="/images/media__1771624309186.jpg"
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
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:hello@rachelhair.com" className="btn" style={{ backgroundColor: '#C9A88C', color: '#fff', borderColor: '#C9A88C', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Email
            </a>
            <a href="https://www.instagram.com/stylesbyrachellenay/" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ borderColor: '#C9A88C', color: '#C9A88C', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              Instagram
            </a>
            <a href="https://www.facebook.com/rachellenaymarconi/about/?_rdr" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ borderColor: '#C9A88C', color: '#C9A88C', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              Facebook
            </a>
            <a href="tel:+12187306723" className="btn btn-outline" style={{ borderColor: '#C9A88C', color: '#C9A88C', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              Phone
            </a>
          </div>
          <div style={{ marginTop: '3rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)' }}>
            &copy; {new Date().getFullYear()} Rachel Hair. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
