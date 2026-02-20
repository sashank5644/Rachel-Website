"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const galleryImages = [
    { src: "/images/media__1771618829728.jpg", alt: "Gorgeous hair coloring" },
    { src: "/images/media__1771618876612.jpg", alt: "Beautiful hair extensions" },
    { src: "/images/media__1771618884293.jpg", alt: "Client transformation" },
    { src: "/images/media__1771618889464.jpg", alt: "Beautiful hair styling" },
    { src: "/images/media__1771619434565.jpg", alt: "Beautiful highlighted waves" },
    { src: "/images/media__1771619277591.jpg", alt: "Stylist showcasing hair extensions" },
];

export default function Gallery() {
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const openLightbox = (index: number) => setLightboxIndex(index);
    const closeLightbox = () => setLightboxIndex(null);

    const goNext = () => {
        if (lightboxIndex !== null) {
            setLightboxIndex((lightboxIndex + 1) % galleryImages.length);
        }
    };

    const goPrev = () => {
        if (lightboxIndex !== null) {
            setLightboxIndex(
                (lightboxIndex - 1 + galleryImages.length) % galleryImages.length
            );
        }
    };

    return (
        <section id="gallery" className="section gallery-section">
            <div className="container">
                <div className="gallery-header">
                    <span className="gallery-eyebrow">Portfolio</span>
                    <h2>Gallery</h2>
                    <p>A look at some of our favorite transformations and styles.</p>
                </div>

                {/* Instagram Profile Card */}
                <Link
                    href="https://www.instagram.com/stylesbyrachellenay/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ig-profile-card"
                >
                    <div className="ig-profile-left">
                        <div className="ig-avatar">
                            <Image
                                src="/images/media__1771617948513.jpg"
                                alt="Rachel Marconi"
                                width={72}
                                height={72}
                                style={{ objectFit: "cover", borderRadius: "50%" }}
                            />
                        </div>
                        <div className="ig-profile-info">
                            <div className="ig-username">
                                stylesbyrachellenay
                                <svg className="ig-verified" width="16" height="16" viewBox="0 0 24 24" fill="none">
                                    <circle cx="12" cy="12" r="10" fill="var(--accent)" />
                                    <path d="M9 12l2 2 4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <p className="ig-fullname">Rachel Marconi</p>
                            <p className="ig-bio">
                                Certified Extensions Specialist · Color and Blonding Artist · Balayage and Customized Color
                            </p>
                        </div>
                    </div>
                    <div className="ig-profile-right">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                            <circle cx="12" cy="12" r="5" />
                            <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                        </svg>
                        <span className="ig-follow-label">Follow</span>
                    </div>
                </Link>

                {/* Gallery Grid — 3 columns × 2 rows */}
                <div className="gallery-grid">
                    {galleryImages.map((img, index) => (
                        <div
                            key={index}
                            className="gallery-item"
                            onClick={() => openLightbox(index)}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                style={{ objectFit: "cover" }}
                                sizes="(max-width: 600px) 50vw, 33vw"
                            />
                            <div className="gallery-item-overlay">
                                <span>View</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View More on Instagram */}
                <div className="ig-view-more">
                    <Link
                        href="https://www.instagram.com/stylesbyrachellenay/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ig-view-more-btn"
                    >
                        View More on Instagram →
                    </Link>
                </div>
            </div>

            {/* Lightbox */}
            {lightboxIndex !== null && (
                <div className="gallery-lightbox" onClick={closeLightbox}>
                    <button
                        className="gallery-lightbox-close"
                        onClick={closeLightbox}
                        aria-label="Close"
                    >
                        ✕
                    </button>
                    <button
                        className="gallery-lightbox-arrow gallery-lightbox-prev"
                        onClick={(e) => {
                            e.stopPropagation();
                            goPrev();
                        }}
                        aria-label="Previous"
                    >
                        ‹
                    </button>
                    <div
                        className="gallery-lightbox-img"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={galleryImages[lightboxIndex].src}
                            alt={galleryImages[lightboxIndex].alt}
                            fill
                            style={{ objectFit: "contain" }}
                            sizes="90vw"
                        />
                    </div>
                    <button
                        className="gallery-lightbox-arrow gallery-lightbox-next"
                        onClick={(e) => {
                            e.stopPropagation();
                            goNext();
                        }}
                        aria-label="Next"
                    >
                        ›
                    </button>
                </div>
            )}
        </section>
    );
}
