import React from 'react';

const services = [
    {
        title: "FALL SPECIAL 🍂🍁",
        description: "I am offering this Fall special for a limited time. It includes a fully comprehensive consultation and an express color service of your choice.",
        price: "$200.00",
        duration: "2 hrs"
    },
    {
        title: "Women's Full Haircut Wash and Style",
        description: "I offer cutting edge up to date precision haircuts on all hair types, along with a relaxing shampoo and blowout and style to compliment your look.",
        price: "Price Varies",
        duration: "1 hr 30 mins"
    },
    {
        title: "Waxing/ Eyebrows/Lips/Chins",
        description: "",
        price: "$15.00",
        duration: "30 mins"
    },
    {
        title: "Special Occasion Makeup and Hair Consultation",
        description: "Special occasion makeup and hair available upon request. Consultation required.",
        price: "Price varies",
        duration: "30 mins"
    },
    {
        title: "Skin/Razor Fade",
        description: "",
        price: "$50.00",
        duration: "1 hr"
    },
    {
        title: "Mens Haircolor",
        description: "",
        price: "$75.00",
        duration: "1 hr 15 mins"
    },
    {
        title: "Men's Shampoo",
        description: "",
        price: "$5.00",
        duration: "30 mins"
    },
    {
        title: "Malibu Treatment; Well water/ Blonde Brightener/Extension Cleanse",
        description: "Natural Malibu treatments for a variety of hair problems. Not a chemical service.",
        price: "$25.00",
        duration: "30 mins"
    },
    {
        title: "Malibu CPR/DDL/ Malibu C with Conditioning Treatment",
        description: "",
        price: "$50.00",
        duration: "1 hr 30 mins"
    },
    {
        title: "Grey Coverage Root Touch Up",
        description: "Root touch up of one color only. No lightening services included.",
        price: "$95.00",
        duration: "1 hr 30 mins"
    },
    {
        title: "Extensions Maintenance/ Hand Tied/I-tip only",
        description: "",
        price: "$150.00",
        duration: "1 hr"
    },
    {
        title: "Extensions Installation/ No Color",
        description: "",
        price: "Price varies",
        duration: "5 hrs"
    },
    {
        title: "Cut and Shave",
        description: "A wonderfully relaxing service, includes a hot towel straight razor shave and a haircut. Followed with a shampoo and style.",
        price: "$65.00",
        duration: "1 hr 30 mins"
    },
    {
        title: "Consultation",
        description: "",
        price: "Price varies",
        duration: "30 mins"
    },
    {
        title: "Brazilian Blowout Express",
        description: "A smoothing service that provides 100% frizz elimination from all hair types up to 3 months and can be customized to suit your specific needs.",
        price: "$250.00",
        duration: "2 hrs 30 mins"
    },
    {
        title: "Beard Trim",
        description: "",
        price: "$15.00",
        duration: "30 mins"
    },
    {
        title: "Bang Trim",
        description: "",
        price: "$15.00",
        duration: "15 mins"
    },
    {
        title: "Relaxer/Smoothing Service",
        description: "I offer relaxer perms for textured hair. Included with your relaxer or relaxer retouch is your choice of wrap set or thermal set.",
        price: "Price varies",
        duration: "1 hr 30 mins"
    },
    {
        title: "Men's Haircut/ Fade",
        description: "I am a highly skilled and experienced barber. I offer Fades, Bald Fades, Razor Fades, Hot Towel Cut and Shave, Line-ups, Beard Trims, and more.",
        price: "Price Varies",
        duration: "45 mins"
    },
    {
        title: "Gloss/Toner",
        description: "A gloss service is a great way to add shine and sparkle to your existing natural hair color. It is also wonderful for maintaining your beautiful color.",
        price: "$65.00",
        duration: "1 hr 10 mins"
    },
    {
        title: "Conditioning Treatment",
        description: "A service that restores as well as maintains the health and appearance of dry, damaged or neglected hair. I offer the only demi-permanent deep conditioner.",
        price: "$55.00",
        duration: "1 hr"
    },
    {
        title: "BB Split End Repair",
        description: "Brazilian Blowout split end repair is a short service that seals the ends of your hair preventing any split ends from breaking any further.",
        price: "$40.00",
        duration: "1 hr"
    },
    {
        title: "Customized Color Services",
        description: "I provide customized color services specializing in balayage, foilage, blonding, color corrections and many more completely individualized.",
        price: "Price Varies",
        duration: "4 hrs"
    },
    {
        title: "Shampoo/Thermal Style",
        description: "A relaxing shampoo and blowout followed by a thermal style, curls, waves, and smoothing out natural curls.",
        price: "Price Varies",
        duration: "1 hr 15 mins"
    },
    {
        title: "Women's Haircut",
        description: "I offer cutting edge precision haircuts. Up to date and trending haircuts.",
        price: "$65.00",
        duration: "1 hr"
    },
    {
        title: "Hand Tied Hair Extensions, Tape-in, I-tip and K-tip Hair Extensions Consultation",
        description: "I am offering hand tied hair extensions as well as tape-in, I tip, and Keratin bonded extensions. I offer only the best quality all Remy hair.",
        price: "Price varies",
        duration: "30 mins"
    },
    {
        title: "Brazilian Blowout",
        description: "A smoothing service that provides 100% frizz elimination from all hair types up to 3 months and can be customized to suit your specific needs.",
        price: "$300.00",
        duration: "3 hrs"
    }
];

const Services = () => {
    return (
        <section id="services" className="section services-section">
            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div className="services-header">
                    <span className="services-subtitle">Our Menu</span>
                    <h2 style={{ marginBottom: '1rem' }}>Service Menu</h2>
                    <p>
                        Experience the art of hair with our comprehensive range of services.
                        Each treatment is tailored to your unique style and needs.
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div>
                                <h3 className="service-title">{service.title}</h3>
                                {service.description && (
                                    <p className="service-description">
                                        {service.description}
                                    </p>
                                )}
                            </div>

                            <div className="service-footer">
                                <div className="service-meta">
                                    <span className="service-price">{service.price}</span>
                                    <span className="service-duration">{service.duration}</span>
                                </div>
                                <a
                                    href="https://www.hairartistrybyrachelsalem.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn"
                                    style={{ padding: '0.8rem 1.5rem', fontSize: '0.75rem' }}
                                >
                                    Book
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <p style={{ marginBottom: '1rem' }}>Looking for something custom?</p>
                    <a
                        href="https://www.hairartistrybyrachelsalem.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline"
                        style={{ display: 'inline-block', padding: '1rem 3rem', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem' }}
                    >
                        View Full Booking Menu
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Services;
