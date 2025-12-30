import Link from 'next/link';
import { TOWNS } from '@/data/ma-towns';
import styles from './page.module.css';

export default function Home() {
  const towns = Object.values(TOWNS);

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className="container">
          <nav className={styles.nav}>
            <div className={styles.logo}>Froof.com</div>
          </nav>
          <div className={styles.hero}>
            <h1>Modern Roofing for Massachusetts</h1>
            <p>Select your town to see localized pricing and expertise.</p>
          </div>
        </div>
      </header>

      <section className="section-padding">
        <div className="container">
          <h2 className={styles.sectionTitle}>Our Service Areas</h2>
          <div className={styles.townGrid}>
            {towns.map((town) => (
              <Link
                key={town.slug}
                href={`/locations/${town.region}/${town.slug}-roofing-company`}
                className={`glass-card ${styles.townCard}`}
              >
                <h3>{town.name}</h3>
                <p>{town.county} County</p>
                <span className={styles.linkText}>View Local Page →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className="container">
          <p>&copy; 2025 Froof Roofing. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
