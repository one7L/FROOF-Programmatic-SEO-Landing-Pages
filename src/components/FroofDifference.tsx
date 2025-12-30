import React from 'react';
import styles from './FroofDifference.module.css';

const FroofDifference: React.FC = () => {
    return (
        <section className={`section-padding ${styles.section}`}>
            <div className="container">
                <div className={styles.header}>
                    <h2>The Froof Difference</h2>
                    <p>Why modern homeowners are choosing technology over tradition.</p>
                </div>

                <div className={styles.matrix}>
                    <div className={styles.column}>
                        <h3>Traditional Contractors</h3>
                        <ul>
                            <li>Waiting weeks for estimates</li>
                            <li>High-pressure sales visits</li>
                            <li>Vague, paper-based quotes</li>
                            <li>Hidden costs & surprises</li>
                            <li>Uncertain timelines</li>
                        </ul>
                    </div>

                    <div className={styles.column + ' ' + styles.featured}>
                        <div className={styles.badge}>Next-Gen Choice</div>
                        <h3>Froof.com</h3>
                        <ul>
                            <li>✓ Instant satellite analysis</li>
                            <li>✓ Zero-pressure digital process</li>
                            <li>✓ Transparent digital contracts</li>
                            <li>✓ Guaranteed price lock</li>
                            <li>✓ Real-time project tracking</li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h3>Your Benefit</h3>
                        <ul>
                            <li>Maximum Speed</li>
                            <li>Complete Control</li>
                            <li>Absolute Certainty</li>
                            <li>Total Transparency</li>
                            <li>Peace of Mind</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FroofDifference;
