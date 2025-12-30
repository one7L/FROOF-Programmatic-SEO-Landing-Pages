import React from 'react';
import styles from './FinalCTA.module.css';

interface FinalCTAProps {
    townName: string;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ townName }) => {
    return (
        <section className={`section-padding ${styles.section}`}>
            <div className="container">
                <h2 className={styles.title}>Ready for a Better Roofing Experience?</h2>
                <p className={styles.subtitle}>
                    Join hundreds of homeowners in {townName} who chose Froof for speed and transparency.
                </p>
                <a href="#quote" className="btn btn-primary btn-large">
                    Get My Instant Quote Now
                </a>
            </div>
        </section>
    );
};

export default FinalCTA;
