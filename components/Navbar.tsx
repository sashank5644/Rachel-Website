"use client";

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    const navItems = [
        { label: 'About', action: () => scrollToSection('about') },
        { label: 'Gallery', action: () => scrollToSection('gallery') },
        { label: 'Reviews', action: () => scrollToSection('reviews') },
        { label: 'Contact', action: () => scrollToSection('contact') },
        { label: 'New Guests', action: () => scrollToSection('intake-form') },
    ];

    return (
        <nav className={`navbar-fixed ${isScrolled ? 'navbar-scrolled' : ''}`}>
            <div className="container navbar-inner">
                {/* Logo */}
                <Link href="/" className="navbar-logo">
                    <Image
                        src="/images/hairapist-logo.png"
                        alt="The Hairapist Logo"
                        width={45}
                        height={45}
                        style={{
                            objectFit: 'contain',
                            borderRadius: '4px',
                            filter: isScrolled ? 'none' : 'brightness(1.2)',
                            transition: 'filter 0.3s ease'
                        }}
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="navbar-desktop-links">
                    {navItems.map((item) => (
                        <button
                            key={item.label}
                            onClick={item.action}
                            className="navbar-link"
                        >
                            {item.label}
                        </button>
                    ))}
                </div>

                {/* CTA Button (Desktop) */}
                <div className="navbar-cta-wrapper">
                    <Link
                        href="https://www.hairartistrybyrachelsalem.com"
                        className="navbar-cta"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Book Now
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="navbar-mobile-toggle"
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? (
                        <X size={24} />
                    ) : (
                        <Menu size={24} />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="navbar-mobile-menu">
                    {navItems.map((item) => (
                        <button
                            key={item.label}
                            onClick={item.action}
                            className="navbar-mobile-link"
                        >
                            {item.label}
                        </button>
                    ))}
                    <Link
                        href="https://www.hairartistrybyrachelsalem.com"
                        className="navbar-mobile-cta"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Book Now
                    </Link>
                </div>
            )}
        </nav>
    );
}
