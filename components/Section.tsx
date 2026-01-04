import Image from 'next/image';
import Link from 'next/link';

interface SectionProps {
    title: string;
    subtitle?: string;
    content: string;
    imageSrc: string;
    imageAlt: string;
    reverse?: boolean;
    ctaText?: string;
    ctaLink?: string;
    isArch?: boolean; // New prop for the arch shape
}

export default function Section({
    title,
    subtitle,
    content,
    imageSrc,
    imageAlt,
    reverse = false,
    ctaText,
    ctaLink,
    isArch = false,
}: SectionProps) {
    // Style for the text block to always be centered
    const textStyle = {
        textAlign: 'center' as const,
        padding: '0 2rem',
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'center',
        justifyContent: 'center'
    };

    return (
        <section className="section">
            {/* 
                We use the 'reverse' logic to swap columns. 
                Standard: Image Left [1], Text Right [2]
                Reverse: Text Left [1], Image Right [2]
            */}
            <div className="container split-section">
                {/* Image Wrapper */}
                <div
                    className={`split-image-wrapper ${isArch ? 'arch-image' : ''}`}
                    style={{ order: reverse ? 2 : 1 }}
                >
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 900px) 100vw, 50vw"
                    />
                </div>

                {/* Content Wrapper */}
                <div className="split-content" style={{ ...textStyle, order: reverse ? 1 : 2 }}>
                    {title && (
                        <h2 style={{
                            fontSize: '3rem',
                            marginBottom: '0.5rem',
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase'
                        }}>
                            {title}
                        </h2>
                    )}
                    {subtitle && (
                        <p className="script-text">
                            {subtitle}
                        </p>
                    )}

                    <p style={{
                        fontSize: '1rem',
                        marginBottom: '2rem',
                        color: 'rgba(0,0,0,0.7)',
                        maxWidth: '500px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginTop: '1.5rem'
                    }}>
                        {content}
                    </p>
                    {ctaText && ctaLink && (
                        <Link href={ctaLink} className="btn">
                            {ctaText}
                        </Link>
                    )}
                </div>
            </div>
        </section>
    );
}
