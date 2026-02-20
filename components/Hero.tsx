"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HERO_IMAGES = [
    '/images/media__1771616269778.jpg',
    '/images/media__1771616269903.jpg',
    '/images/media__1771616269966.jpg',
    '/images/media__1771616270023.jpg',
    '/images/media__1771616279125.jpg',
    '/images/media__1771616369029.jpg',
    '/images/media__1771617879734.jpg',
    '/images/media__1771619622538.jpg',
];

export default function Hero() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <header className="hero" style={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>
            {/* Background Slideshow */}
            {HERO_IMAGES.map((src, index) => (
                <div
                    key={src}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        opacity: index === currentImageIndex ? 1 : 0,
                        transition: 'opacity 1s ease-in-out',
                        zIndex: 0, // Behind everything
                    }}
                >
                    <Image
                        src={src}
                        alt={`Rachel Styling Hair ${index + 1}`}
                        fill
                        style={{ objectFit: 'cover' }}
                        priority={index === 0}
                    />
                </div>
            ))}

            {/* Dark Overlay for Text Contrast */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0,0,0,0.3)', // Darken background by 30%
                zIndex: 1
            }}></div>

            {/* Centered Content */}
            <div className="hero-content" style={{
                position: 'relative',
                zIndex: 10,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                color: '#fff',
                padding: '0 20px'
            }}>
                <span style={{
                    display: 'block',
                    marginBottom: '1.5rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.3em',
                    fontSize: '0.9rem',
                    fontFamily: 'var(--font-sans)',
                    textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                }}>
                    Independent Hairstylist
                </span>
                <h1 style={{
                    fontFamily: 'var(--font-parisienne)',
                    color: '#fff',
                    fontSize: 'clamp(4.5rem, 10vw, 8rem)',
                    lineHeight: '1',
                    marginBottom: '2rem',
                    textTransform: 'capitalize',
                    textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                }}>
                    The Luxury<br />Beauty Experience
                </h1>

                <Link
                    href="#services"
                    className="btn"
                    style={{
                        backgroundColor: '#fff',
                        color: '#1a1a1a',
                        border: 'none',
                        padding: '1rem 3rem',
                        fontSize: '0.8rem',
                        fontWeight: '700',
                        letterSpacing: '0.1em'
                    }}
                >
                    Book Appointment
                </Link>
            </div>
        </header>
    );
}
