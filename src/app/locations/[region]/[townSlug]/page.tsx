import React from 'react';
import { notFound } from 'next/navigation';
import { TOWNS } from '@/data/ma-towns';
import Hero from '@/components/Hero';
import FroofDifference from '@/components/FroofDifference';
import ServiceSuite from '@/components/ServiceSuite';
import PricingModule from '@/components/PricingModule';
import TrustSignals from '@/components/TrustSignals';
import FAQSection from '@/components/FAQSection';
import FinalCTA from '@/components/FinalCTA';
import ProjectGallery from '@/components/ProjectGallery';
import VideoTestimonial from '@/components/VideoTestimonial';
import { Metadata } from 'next';

interface PageProps {
    params: Promise<{
        region: string;
        townSlug: string;
    }>;
}

// Function to get town data safely
function getTownData(townParam: string | undefined) {
    if (!townParam) return undefined;
    const slug = townParam.replace('-roofing-company', '');
    return TOWNS[slug];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { townSlug } = await params;
    const town = getTownData(townSlug);

    if (!town) return { title: 'Not Found' };

    return {
        title: `Top-Rated Roofing Services in ${town.name}, MA | Froof.com`,
        description: `Professional roof replacement in ${town.name}. Fast, transparent, ${town.primaryPainPoint} solutions. Get an instant satellite quote. Licensed & Insured.`,
        openGraph: {
            title: `Roofing Experts in ${town.name}, MA`,
            description: `Modern, tech-enabled roofing for ${town.name} homeowners.`,
            images: [town.heroImage],
        }
    };
}

export default async function Page({ params }: PageProps) {
    const { townSlug } = await params;
    const town = getTownData(townSlug);

    if (!town) {
        notFound();
    }

    // JSON-LD Schema
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": `Froof Roofing - ${town.name}`,
        "image": town.heroImage,
        "@id": `https://froof.com/locations/${town.region}/${town.slug}-roofing-company`,
        "url": `https://froof.com/locations/${town.region}/${town.slug}-roofing-company`,
        "telephone": "1-800-FROOF-MA",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": town.name,
            "addressRegion": "MA",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "42.3601",
            "longitude": "-71.0589"
        },
        "areaServed": {
            "@type": "City",
            "name": town.name
        },
        "priceRange": "$$-$$$"
    };

    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <Hero town={town} />
            <FroofDifference />
            <ServiceSuite town={town} />
            <PricingModule townName={town.name} />
            {town.videoTestimonial && (
                <VideoTestimonial
                    townName={town.name}
                    videoUrl={town.videoTestimonial.url}
                    thumbnail={town.videoTestimonial.thumbnail}
                    homeownerName={town.videoTestimonial.homeownerName}
                />
            )}
            <ProjectGallery townName={town.name} heroImage={town.heroImage} />
            <TrustSignals townName={town.name} />
            <FAQSection town={town} />
            <FinalCTA townName={town.name} />
        </main>
    );
}

// Generate static params for optimal SEO and performance
export async function generateStaticParams() {
    return Object.values(TOWNS).map((town) => ({
        region: town.region,
        townSlug: `${town.slug}-roofing-company`,
    }));
}
