"use client";

import React from 'react';
import styles from './VideoTestimonial.module.css';

interface VideoTestimonialProps {
    townName: string;
    videoUrl: string;
    thumbnail: string;
    homeownerName: string;
}

const VideoTestimonial: React.FC<VideoTestimonialProps> = ({ townName, videoUrl, thumbnail, homeownerName }) => {
    return (
        <section className={`section-padding ${styles.section}`}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.content}>
                        <span className={styles.badge}>Live Success Story</span>
                        <h2>See why {homeownerName} chose Froof in {townName}</h2>
                        <p className={styles.description}>
                            Local homeowners in {townName} are switching to Froof for our transparent,
                            digital-first roofing process. Hear directly from one of your neighbors
                            about their experience.
                        </p>
                        <div className={styles.stats}>
                            <div className={styles.statItem}>
                                <span className={styles.statValue}>100%</span>
                                <span className={styles.statLabel}>Transparent</span>
                            </div>
                            <div className={styles.statItem}>
                                <span className={styles.statValue}>48hr</span>
                                <span className={styles.statLabel}>Avg. Quote</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.videoWrapper}>
                        <div className={styles.videoCard}>
                            {/* Placeholder for real video player integration */}
                            <div className={styles.videoPlaceholder} data-thumbnail={thumbnail}>
                                <div className={styles.playButton}>
                                    <svg viewBox="0 0 24 24" width="48" height="48">
                                        <path fill="currentColor" d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                                <div className={styles.overlay}>
                                    <span>Play Video Testimonial</span>
                                </div>
                            </div>
                            <video
                                className={styles.video}
                                controls
                                poster={thumbnail}
                            >
                                <source src={videoUrl} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoTestimonial;
