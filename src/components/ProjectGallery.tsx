import React from 'react';
import styles from './ProjectGallery.module.css';
import Image from 'next/image';

interface ProjectGalleryProps {
    townName: string;
    heroImage: string;
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ townName, heroImage }) => {
    return (
        <section className={`section-padding ${styles.section}`}>
            <div className="container">
                <div className={styles.header}>
                    <h2>Recent Projects in {townName}</h2>
                    <p>Real results for your neighbors. See the Froof quality for yourself.</p>
                </div>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src={heroImage}
                                alt={`Recent project in ${townName}`}
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.details}>
                            <h4>Whole Roof Replacement</h4>
                            <p>Architectural Shingles | Completed Dec 2024</p>
                        </div>
                    </div>
                    {/* Placeholder for more projects - in real app, these would come from town data */}
                    <div className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <div className={styles.placeholder}>Before / After</div>
                        </div>
                        <div className={styles.details}>
                            <h4>Emergency Leak Repair</h4>
                            <p>Copper Flashing | Completed Nov 2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectGallery;
