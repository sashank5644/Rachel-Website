"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 100,
            padding: scrolled ? '1rem 0' : '2rem 0',
            backgroundColor: scrolled ? '#F9F8F6' : 'transparent',
            boxShadow: scrolled ? '0 2px 10px rgba(0,0,0,0.05)' : 'none',
            transition: 'all 0.3s ease',
            color: scrolled ? '#1a1a1a' : '#fff'
        }}>
            <div className="container" style={{
                position: 'relative',
                display: 'grid',
                gridTemplateColumns: '1fr auto 1fr',
                alignItems: 'center',
                gap: '1.5rem' // Consistent spacing around the logo
            }}>

                {/* Left Links - Aligned towards center */}
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Link href="#about" style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px' }}>
                        About
                    </Link>
                </div>

                {/* Centered Logo - No longer absolute */}
                <div style={{ textAlign: 'center' }}>
                    <Link href="/" style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '2rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.2em',
                        whiteSpace: 'nowrap'
                    }}>
                        Rachel
                    </Link>
                </div>

                {/* Right Links - Aligned towards center */}
                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <Link href="#services" style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px' }}>
                        Services
                    </Link>
                </div>

            </div>
        </nav>
    );
}
