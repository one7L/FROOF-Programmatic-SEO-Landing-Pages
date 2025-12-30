import React from 'react';
import styles from './ServiceSuite.module.css';
import { TownData } from '@/data/ma-towns';

interface ServiceSuiteProps {
    town: TownData;
}

const ServiceSuite: React.FC<ServiceSuiteProps> = ({ town }) => {
    const services = [
        { title: 'Asphalt Shingle Replacement', desc: 'Premium architectural shingles for maximum durability.' },
        { title: 'Emergency Leak Repair', desc: 'Fast, 24/7 response to protect your home from water damage.' },
        { title: 'Skylight Installation', desc: 'Brighten your home with professional Velux solutions.' },
        { title: 'Free Roof Inspection', desc: 'Comprehensive, drone-assisted visual inspection.' },
    ];

    if (town.historic) {
        services.unshift(
            { title: 'Historic Restoration', desc: 'Specialized care for Victorian and Colonial architecture.' },
            { title: 'Copper Gutter Systems', desc: 'Elegant and durable water management for historic homes.' }
        );
    }

    if (town.snowBelt) {
        services.push(
            { title: 'Ice Dam Prevention', desc: 'Advanced ventilation and heat tape solutions.' },
            { title: 'Snow Load Structural Assessment', desc: 'Ensure your roof can handle New England winters.' }
        );
    }

    if (town.coastal) {
        services.push(
            { title: 'Salt-Resistant Materials', desc: 'High-wind rated shingles for coastal properties.' },
            { title: 'Corrosion-Proof Flashing', desc: 'Marine-grade solutions for North Shore homes.' }
        );
    }

    return (
        <section className={`section-padding ${styles.section}`}>
            <div className="container">
                <div className={styles.header}>
                    <h2>Specialized Roofing Services in {town.name}</h2>
                    <p>Tailored solutions for the unique housing stock of {town.name}.</p>
                </div>

                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <div key={index} className={`glass-card ${styles.card}`}>
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceSuite;
