import Image from 'next/image';
import type { CSSProperties } from 'react';
import styles from './page.module.css';

export const metadata = {
  title: 'Community | Do Hai Nam',
};

type Project = {
  title: string;
  paragraphs: string[];
  layout: 'triple' | 'wide';
  images: string[];
  font?: '42dot';
};

// Vị trí top (px, khung 1440) của 6 chữ viền, tính từ đỉnh banner
const outlineTops = [-13, 103, 219, 335, 451, 567];

const projects: Project[] = [
  {
    title: 'Gart Camp',
    font: '42dot',
    paragraphs: [
      'At Gart Camp, I introduced students to robotics through hands-on building and experimentation. Rather than simply teaching them how to assemble a robot, I encouraged them to understand why each mechanism worked and experiment with their own solutions. The experience showed me that engineering becomes much more meaningful when people are given the freedom to build and discover for themselves.',
    ],
    layout: 'triple',
    images: ['community-1', 'community-2', 'community-3'],
  },
  {
    title: 'VEX IQ Mentor',
    paragraphs: [
      'My experience with VEX IQ also led me to mentor other robotics teams. I helped students with robot design, programming, troubleshooting, and competition preparation, while encouraging them to solve problems independently rather than simply giving them answers. Mentoring became an opportunity for me to turn the lessons I learned through competition into knowledge that other students could build upon.',
    ],
    layout: 'triple',
    images: ['community-4', 'community-5', 'community-6'],
  },
  {
    title: 'STEMINA',
    paragraphs: [
      'I founded STEMINA to bring hands-on STEM experience to students in underdeveloped regions, who have limited access to science activities. As the founder, I led a team of 12 students and coordinated with schools and local officials to organize STEM activities for over 150 students in Tri Le, Lang Son. Under our guidance, students went through many interesting activities, from driving VEX IQ robots, programming robots on simulation platforms, assembling and coding simple sensor systems to viewing DIY projects exhibition.',
      'Rather than simply presenting finished projects, we designed activities that encourage students to experiment themselves and learn from vivid interactions. The event was a huge success, gaining approval from the local officials for STEM contributions to the region. Although I face many challenges when preparing for the event, STEMINA taught me valuable lessons about team management and event preparation, understanding the process to turn from idea into actual event.',
    ],
    layout: 'triple',
    images: ['community-7', 'community-8', 'community-9'],
  },
  {
    title: 'Amstro’s Gallery',
    paragraphs: [
      'Amstro’s Gallery is an annual astronomy exhibition of my school astronomy club. Participating as a collaborative member, I made an interactive experiment to illustrate how astronauts simulate spacecraft movement and presented it in my booth for visitors, attracting many young enthusiasts.',
    ],
    layout: 'wide',
    images: ['community-10'],
  },
];

export default function Community() {
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
                Community
              </p>
            ))}
            <h1
              className={`${styles.bannerText} ${styles.solid}`}
              style={{ '--top': 683 } as CSSProperties}
            >
              Community
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

        {/* ---------- Projects ---------- */}
        <div className={styles.sections}>
          {projects.map((p, i) => (
            <section key={p.title}>
              {i > 0 && <hr className={styles.divider} />}

              <h2 className={styles.title}>{p.title}</h2>

              <div
                className={`${styles.textGroup} ${
                  p.font === '42dot' ? styles.altFont : ''
                }`}
              >
                {p.paragraphs.map((t) => (
                  <p key={t.slice(0, 24)} className={styles.text}>
                    {t}
                  </p>
                ))}
              </div>

              {p.layout === 'triple' ? (
                <div className={styles.triple}>
                  {p.images.map((name, n) => (
                    <div key={name} className={styles.cell}>
                      <Image
                        className={styles.img}
                        src={`/images/${name}.png`}
                        alt={`${p.title} ${n + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 34vw"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className={styles.wide}>
                  <Image
                    className={styles.img}
                    src={`/images/${p.images[0]}.png`}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 67vw"
                  />
                </div>
              )}
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}