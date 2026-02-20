"use client";

import { useState } from "react";

const reviews = [
    {
        name: "Heather Lossing",
        text: "Rachel is amazing. She really listens to what you want and then doesn't just give you the look you want. She gives you the feeling you want. She knows how to give you confidence so that you are beautiful inside and out. One of the most talented stylists I have ever met but she really shines in her customer care and the genuine love she has for everyone who sits in her chair. If you want a great experience and a great look, she's your girl!!",
        rating: 5,
    },
    {
        name: "Walt R Lusk",
        text: "She's the only stylist in Duluth I would EVER go to!",
        rating: 5,
    },
    {
        name: "Crystal Johnson",
        text: "She is absolutely amazing! I've explained to her what colors I wanted and without hesitation she made it happen! Her Costumer service is great. My entire Family goes to get our hair done by her. She is also great with my little people who aren't very patient nor still! She is simply amazing! You will LOVE her!!",
        rating: 5,
    },
    {
        name: "Kristina Potter",
        text: "Highly recommend Rachel! She's great to work with! After visiting various stylists over the years and always walking out feeling like the end result isn't what I was hoping for, I've found a stylist that delivers!",
        rating: 5,
    },
    {
        name: "Coliene Roberts",
        text: "I had a great experience with Rachel Marconi and would recommend her to any friends who are looking for a new look!",
        rating: 5,
    },
    {
        name: "Brittany Arrey",
        text: "Rachel is an awesome hair artist/stylist. I say artist because she's a beast on getting your hair to your over all \"goal\". My hair is natural dark dark brown she's the first stylist to get my hair super blonde without my hair falling out do to bleach. I get so many compliments. The shop is adorable and clean which is a plus! Rachel is a down to earth person...",
        rating: 5,
    },
    {
        name: "Nancy Bush",
        text: "I would highly recommend Rachel! She did an amazing job on my hair. The purple in my blonde hair came out perfect and loved the way she cut it. I would go to her anytime!",
        rating: 5,
    },
    {
        name: "Wendy McClain",
        text: "Rachel does an amazing job! She makes you feel comfortable and welcome the minute you walk in the door. Rachel takes the time to listen and understand what you want and she explains what she can do to make it happen. She is very knowledgeable and professional, and takes her work seriously. My hair has never looked so beautiful, while at the same time being super easy to style. I'm always impressed by how she tailors the cut and color to my specific hair patterns and textures. I highly recommend Rachel if you want great hair!",
        rating: 5,
    },
    {
        name: "Dean Sirrah",
        text: "I've been consistently waiting till I'm back in Duluth to get a haircut because it's not worth time time or money getting it done anywhere else. She takes the time and care to give a great haircut every time and I always walk out with a sly smile on my face.",
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
