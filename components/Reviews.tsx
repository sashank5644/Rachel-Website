"use client";

import { useState } from "react";

const reviews = [
    {
        name: "Jessica M.",
        text: "Rachel is absolutely incredible! She took my damaged hair and turned it into the most beautiful extensions I've ever had. I finally feel confident again. She truly listens and delivers beyond expectations.",
        rating: 5,
    },
    {
        name: "Amanda R.",
        text: "Best hair experience I've ever had. Rachel is so talented and makes you feel comfortable from start to finish. My balayage was exactly what I envisioned and more. I won't go anywhere else!",
        rating: 5,
    },
    {
        name: "Sophia L.",
        text: "Rachel is a true artist. She did my bridal hair and I couldn't have been happier. She understood my vision perfectly and made me feel like a queen on my wedding day. Highly recommend!",
        rating: 5,
    },
    {
        name: "Melissa K.",
        text: "I've been going to Rachel for over two years now and she never disappoints. Her attention to detail and passion for what she does is unmatched. My hair has never been healthier!",
        rating: 5,
    },
    {
        name: "Taylor B.",
        text: "Rachel gave me the hair of my dreams! The hand-tied extensions look so natural and she took the time to educate me on proper care. I get compliments every single day.",
        rating: 5,
    },
    {
        name: "Danielle W.",
        text: "From the consultation to the final look, Rachel made the entire experience feel luxurious. She's incredibly knowledgeable and I love that she prioritizes hair health above everything.",
        rating: 5,
    },
];

export default function Reviews() {
    const [activeIndex, setActiveIndex] = useState(0);

    const goNext = () => setActiveIndex((prev) => (prev + 1) % reviews.length);
    const goPrev = () =>
        setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

    return (
        <section id="reviews" className="section reviews-section">
            <div className="container">
                <div className="reviews-header">
                    <span className="reviews-eyebrow">Testimonials</span>
                    <h2>What Our Clients Say</h2>
                    <p>Real words from real clients who trust Rachel with their hair.</p>
                </div>

                <div className="reviews-carousel">
                    <button
                        className="reviews-arrow reviews-arrow-prev"
                        onClick={goPrev}
                        aria-label="Previous review"
                    >
                        ‹
                    </button>

                    <div className="reviews-card">
                        <div className="reviews-stars">
                            {Array.from({ length: reviews[activeIndex].rating }).map(
                                (_, i) => (
                                    <span key={i} className="reviews-star">
                                        ★
                                    </span>
                                )
                            )}
                        </div>
                        <blockquote className="reviews-text">
                            &ldquo;{reviews[activeIndex].text}&rdquo;
                        </blockquote>
                        <p className="reviews-author">— {reviews[activeIndex].name}</p>
                    </div>

                    <button
                        className="reviews-arrow reviews-arrow-next"
                        onClick={goNext}
                        aria-label="Next review"
                    >
                        ›
                    </button>
                </div>

                <div className="reviews-dots">
                    {reviews.map((_, i) => (
                        <button
                            key={i}
                            className={`reviews-dot ${i === activeIndex ? "active" : ""}`}
                            onClick={() => setActiveIndex(i)}
                            aria-label={`Go to review ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
