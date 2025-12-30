import React from 'react';
import styles from './PricingModule.module.css';

const PricingModule: React.FC<{ townName: string }> = ({ townName }) => {
    return (
        <section className={`section-padding ${styles.section}`}>
            <div className="container">
                <div className={styles.header}>
                    <h2>2025 Roof Replacement Costs in {townName}, MA</h2>
                    <p>Transparent, honest pricing—no hidden fees, no surprises.</p>
                </div>

                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Roof Type / Material</th>
                                <th>Size (Sq Ft)</th>
                                <th>Cost Per Sq Ft</th>
                                <th>Total Project Cost</th>
                                <th>Timeline</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>3-Tab/Entry-Level Asphalt</td>
                                <td>1,500-2,000</td>
                                <td>$5.50-6.50</td>
                                <td>$8,250-13,000</td>
                                <td>3-5 days</td>
                            </tr>
                            <tr>
                                <td>Architectural Asphalt</td>
                                <td>1,500-2,000</td>
                                <td>$7.50-9.50</td>
                                <td>$11,250-19,000</td>
                                <td>4-6 days</td>
                            </tr>
                            <tr>
                                <td>Premium/Designer Shingles</td>
                                <td>1,500-2,000</td>
                                <td>$10-15</td>
                                <td>$15,000-30,000</td>
                                <td>5-7 days</td>
                            </tr>
                            <tr>
                                <td>Metal Standing Seam</td>
                                <td>1,500-2,000</td>
                                <td>$15-25</td>
                                <td>$22,500-50,000</td>
                                <td>5-8 days</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className={styles.tierContainer}>
                    <div className={styles.tier}>
                        <h3>STANDARD</h3>
                        <div className={styles.price}>Average Choice</div>
                        <p>Architectural Shingles (GAF Timberline HDZ). Lifetime Warranty. Peace of mind.</p>
                        <div className={styles.monthly}>From $149/mo</div>
                    </div>
                    <div className={styles.tier + ' ' + styles.featured}>
                        <div className={styles.tierBadge}>Best Value</div>
                        <h3>PREMIUM</h3>
                        <div className={styles.price}>The Forever Roof</div>
                        <p>Designer Shingles or Metal. Ultimate protection for high-value properties.</p>
                        <div className={styles.monthly}>From $289/mo</div>
                    </div>
                </div>

                <div className={styles.financing}>
                    <h3>Monthly Affordability</h3>
                    <p>Your roof doesn&apos;t have to break the bank. Reframe from capital expenditure to manageable monthly payments.</p>
                    <a href="#financing" className="btn btn-primary">Get Instant Financing Quote</a>
                </div>
            </div>
        </section>
    );
};

export default PricingModule;
