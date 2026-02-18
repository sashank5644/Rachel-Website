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
    isArch?: boolean;
    offset?: 'up' | 'down';
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
    offset,
    id,
}: SectionProps & { id?: string }) {
    return (
        <section id={id} className="section">
            <div className="container">
                <div className={`section-card ${reverse ? 'section-card-reverse' : ''}`}>
                    {/* Image Side */}
                    <div className={`section-card-image ${isArch ? 'arch-image' : ''} ${offset ? `image-offset-${offset}` : ''}`}>
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            fill
                            style={{ objectFit: 'cover' }}
                            sizes="(max-width: 900px) 100vw, 50vw"
                        />
                    </div>

                    {/* Content Side */}
                    <div className="section-card-content">
                        {title && (
                            <h2 className="section-card-title">
                                {title}
                            </h2>
                        )}
                        {subtitle && (
                            <p className="section-card-subtitle script-text">
                                {subtitle}
                            </p>
                        )}
                        <p className="section-card-text">
                            {content}
                        </p>
                        {ctaText && ctaLink && (
                            <Link href={ctaLink} className="section-card-cta">
                                {ctaText}
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
