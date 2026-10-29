import Image from 'next/image';
import type { CSSProperties } from 'react';
import styles from './page.module.css';

export const metadata = {
  title: 'Hobby | Do Hai Nam',
};

// Vị trí top (px, khung 1440) của 5 chữ viền, tính từ đỉnh banner
const outlineTops = [-20, 116, 252, 388, 524];

const hobbies = [
  {
    title: 'Basketball',
    text: 'I casually play basketball with my friends at a local outdoor court, where I have become part of a community of around 30 regular hoopers. I often play as a Point Guard, bringing the ball up and orchestrating our possessions, or as a Power Forward to become a playmaker for my friends to shine.',
  },
  {
    title: 'Manga',
    text: 'I have been in love with Japanese comic books, or manga, since I was a child. The captivating, innovative story illustrated through exquisite strokes genuinely fascinated me. I still visit bookstores with my friends to hunt for special editions of my favorite series, gradually building a collection that now fills my bookshelves.',
  },
  {
    title: 'Boardgame',
    text: 'Board games are one of my favorite ways to spend an evening with friends, combining plenty of laughter with the occasional brain-teasing puzzle. My favorite is Werewolf, where I can step into different characters, bluff my way through accusations, and try to figure out when my friends are telling the truth or convincingly pretending to.',
  },
  {
    title: 'Figure collecting',
    text: 'Recently, I have started collecting Funko Pop figures of characters from animation and video games. Since Funko Pops can be difficult to find in Vietnam, I often look for them whenever I travel abroad, usually bringing home at least one or two. Beyond decorating my desk, each figure has become a small reminder of a place I have visited.',
  },
  {
    title: 'Video games',
    text: 'I’m a big fan of strategy games like Teamfight Tactics and online chess. What I love most is that no two games ever play out the same way, so I’m always figuring out what to do next. I enjoy adapting flexible strategies whenever the situation changes, experimenting with weird ideas.',
  },
];

export default function Hobby() {
  return (
    <main className={styles.page}>
      <div className={styles.content}>
        {/* ---------- Banner ---------- */}
        <section className={styles.banner}>
          <div className={styles.bannerClip}>
            {outlineTops.map((top) => (
              <p
                key={top}
                aria-hidden="true"
                className={`${styles.bannerText} ${styles.outline}`}
                style={{ '--top': top } as CSSProperties}
              >
                Hobby
              </p>
            ))}
            <h1
            className={`${styles.bannerText} ${styles.solid}`}
            style={{ '--top': 670 } as CSSProperties}
            >
            Hobby
            </h1>
          </div>

          <Image
            className={styles.robot}
            src="/images/tay-2.png"
            alt="Robotic arm"
            width={815}
            height={836}
            priority
          />
        </section>

        {/* ---------- Hobbies ---------- */}
        <div className={styles.sections}>
          {hobbies.map((h) => (
            <section key={h.title} className={styles.item}>
              <h2 className={styles.title}>{h.title}</h2>
              <p className={styles.text}>{h.text}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}