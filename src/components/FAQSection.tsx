"use client";

import React, { useState } from 'react';
import styles from './FAQSection.module.css';
import { TownData } from '@/data/ma-towns';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQSectionProps {
    town: TownData;
}

const FAQSection: React.FC<FAQSectionProps> = ({ town }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const faqs: FAQItem[] = [
        {
            question: `How much does a roof replacement cost in ${town.name}?`,
            answer: `Roof replacement costs in ${town.name} typically range from $8,250 for standard asphalt shingles to $50,000+ for premium materials like metal or slate, depending on the size and complexity of your home.`
        },
        {
            question: "How long does a roof replacement take?",
            answer: "Most roof replacements are completed in 3-7 days, depending on weather conditions and material selection."
        },
        {
            question: "Do you offer financing?",
            answer: "Yes! We offer flexible financing options with monthly payments as low as $149 for qualified homeowners."
        },
        {
            question: "Are you licensed and insured?",
            answer: `Absolutely. Froof is fully licensed and insured to operate in ${town.name} and across Massachusetts.`
        }
    ];

    if (town.historic) {
        faqs.push({
            question: `Do you specialize in historic home restoration in ${town.name}?`,
            answer: `Yes, we have extensive experience working with ${town.name}'s historic Victorian and Colonial properties, including complex slate repair and copper gutter installations.`
        });
    }

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className={`section-padding ${styles.section}`}>
            <div className="container">
                <div className={styles.header}>
                    <h2>Frequently Asked Questions</h2>
                    <p>Everything you need to know about roofing in {town.name}.</p>
                </div>

                <div className={styles.faqList}>
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`${styles.item} ${activeIndex === index ? styles.active : ''}`}
                            onClick={() => toggleAccordion(index)}
                        >
                            <div className={styles.question}>
                                {faq.question}
                                <span className={styles.icon}>{activeIndex === index ? '−' : '+'}</span>
                            </div>
                            {activeIndex === index && (
                                <div className={styles.answer}>
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
