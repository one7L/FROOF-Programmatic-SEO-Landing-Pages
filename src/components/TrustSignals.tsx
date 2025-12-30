import React from 'react';
import styles from './TrustSignals.module.css';

const TrustSignals: React.FC<{ townName: string }> = ({ townName }) => {
    return (
        <section className={`section-padding ${styles.section}`}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.badgeGroup}>
                        <div className={styles.badgeCard}>
                            <div className={styles.icon}>🏆</div>
                            <h4>Google Screened</h4>
                            <p>Verified background and license checks.</p>
                        </div>
                        <div className={styles.badgeCard}>
                            <div className={styles.icon}>🏠</div>
                            <h4>Expert Local Roofing</h4>
                            <p>Serving {townName} since day one.</p>
                        </div>
                        <div className={styles.badgeCard}>
                            <div className={styles.icon}>⏰</div>
                            <h4>24/7 Emergency Response</h4>
                            <p>Storm damage doesn&apos;t wait. Neither do we.</p>
                        </div>
                    </div>

                    <div className={styles.testimonials}>
                        <div className={styles.testimonialHeader}>
                            <h3>What Your Neighbors in {townName} Say</h3>
                            <div className={styles.rating}>⭐⭐⭐⭐⭐ 4.9/5 Average</div>
                        </div>

                        <div className={styles.quote}>
                            &ldquo;Froof replaced our roof in {townName} in just 2 days. The drone photos showing the underlayment before the shingles went on gave us total peace of mind.&rdquo;
                            <div className={styles.author}>— Jennifer R., {townName} Homeowner</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustSignals;
