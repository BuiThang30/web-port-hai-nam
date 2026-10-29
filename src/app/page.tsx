import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.home}>
        <h1 className={styles.name}>DO HAI NAM</h1>

        <Image
          className={styles.robot}
          src="/images/tay-1.png"
          alt="Robotic arm"
          width={535}
          height={682}
          priority
        />

        <p className={styles.portfolio}>Portfolio</p>
        <p className={styles.year}>2026</p>

        <p className={styles.slogan}>
          Turning Ideas
          <br />
          Into Motion<span className={styles.dot}>.</span>
        </p>

        <p className={`${styles.tag} ${styles.robotics}`}>Robotics</p>
        <p className={`${styles.tag} ${styles.cadDesign}`}>CAD Design</p>
        <p className={`${styles.tag} ${styles.stemOutreach}`}>STEM Outreach</p>
        <p className={`${styles.tag} ${styles.prototyping}`}>Prototyping</p>
        <p className={`${styles.tag} ${styles.appliedResearch}`}>Applied Research</p>
      </div>
    </main>
  );
}