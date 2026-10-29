import Image from 'next/image';
import styles from './page.module.css';

export const metadata = {
  title: 'About me | Do Hai Nam',
};

export default function AboutMe() {
  return (
    <main className={styles.page}>
      <div className={styles.content}>
        <h1 className={styles.title}>About Me</h1>

        <Image
          className={styles.photo}
          src="/images/about.png"
          alt="Do Hai Nam"
          width={437}
          height={289}
          priority
        />

        <p className={styles.text}>
          I’m a high school student in Vietnam aspiring to study Mechanical
          Engineering. What draws me to engineering is the process of turning
          ideas into tangible solutions. Through hands-on projects and
          research, I’ve designed and developed solutions to real-world
          problems while building my technical knowledge and practical skills.
          Leading robotics teams in competitions and organizing community
          initiatives have also shaped how I approach collaboration and
          leadership. Beyond building things myself, I enjoy sharing what I’ve
          learned by mentoring younger robotics teams and organizing STEM
          activities for underserved communities, helping more students
          experience the excitement of creating something of their own. Outside
          the workshop, you’ll probably find me playing basketball, collecting
          manga, or getting lost in a strategy game.
        </p>

        <hr className={styles.divider} />
      </div>
    </main>
  );
}