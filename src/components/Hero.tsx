import React from 'react';
import styles from './Hero.module.css';
import { TownData } from '@/data/ma-towns';

interface HeroProps {
    town: TownData;
}

const Hero: React.FC<HeroProps> = ({ town }) => {
    return (
        <section className={styles.hero}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.badge}>
                        {town.county} County Licensed & Insured
                    </div>
                    <h1 className={styles.title}>
                        Top-Rated Roofing Services in {town.name}, MA
                    </h1>
                    <p className={styles.subtitle}>
                        {town.housingStock}. Protect your home from {town.primaryPainPoint} with modern, transparent roofing solutions.
                    </p>
                    <div className={styles.ctaGroup}>
                        <a href="#quote" className="btn btn-primary">
                            Get An Instant Satellite Quote
                        </a>
                        <div className={styles.trustSignals}>
                            <span>⭐ 5-Star Rated in {town.name}</span>
                            <span>✓ Google Screened</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.overlay}></div>
        </section>
    );
};

export default Hero;
