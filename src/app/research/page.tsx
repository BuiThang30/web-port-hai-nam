import Image from 'next/image';
import type { CSSProperties } from 'react';
import styles from './page.module.css';

export const metadata = {
  title: 'Research | Do Hai Nam',
};

type Project = {
  title: string;
  text: string;
  layout: 'triple' | 'paper' | 'fridge';
  images: string[];
  font?: '42dot';
};

// Vị trí top (px, khung 1440) của 5 chữ viền, tính từ đỉnh banner
const outlineTops = [-23, 114, 251, 388, 525];

const projects: Project[] = [
  {
    title: 'VEX IQ Physics Education Initiative',
    font: '42dot',
    text: 'As a research assistant, I support my counselor’s research on integrating VEX IQ robotics kit into teaching physics. I help deliver trial lessons and collect students feedback, as well as prepare robotics equipment and instructional materials for pilot classrooms. Working closely with the data collection process gave me a deeper understanding of sampling, especially the way data is selected can influence what conclusions a study can support.',
    layout: 'triple',
    images: ['research-1', 'research-2', 'research-3'],
  },
  {
    title: 'Vinschool Innovation\nand Research Challenge',
    text: 'My experience with VEX IQ also led me to mentor other robotics teams. I helped students with robot design, programming, troubleshooting, and competition preparation, while encouraging them to solve problems independently rather than simply giving them answers. Mentoring became an opportunity for me to turn the lessons I learned through competition into knowledge that other students could build upon.',
    layout: 'triple',
    images: ['research-4', 'research-5', 'research-6'],
  },
  {
    title: 'AI for Medical Diagnosis',
    text: 'Studying the use of large language models in health consultation under the guidance of a professor at Hanoi University of Science and Technology, I created a model that answers questions about health and medicine. Fine-tuning the LLM using normalized conversational data (Q&A, hypothetical situations, clinical practice guidelines). The project taught me that developing an effective AI system is rarely about choosing a model once. It is an iterative process of identifying weaknesses, testing modifications, evaluating results, and deciding which changes genuinely improve performance.',
    layout: 'paper',
    images: ['research-7'],
  },
  {
    title: 'Smart Fridge Camera',
    text: 'I am developing a research project around camera-based monitoring for smart refrigerators, investigating whether computer vision can be deployed directly on an embedded device to recognize and monitor items inside the fridge. The project focuses on the challenges of bringing AI into a constrained physical environment, where computational resources, camera capabilities, latency, and cost must all be considered together.',
    layout: 'fridge',
    images: ['research-8'],
  },
];

export default function Research() {
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
                Research
              </p>
            ))}
            <h1
            className={`${styles.bannerText} ${styles.solid}`}
            style={{ '--top': 672 } as CSSProperties}
            >
            Research
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
              <p
                className={`${styles.text} ${
                  p.font === '42dot' ? styles.altFont : ''
                }`}
              >
                {p.text}
              </p>

              {p.layout === 'triple' && (
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
              )}

              {p.layout === 'paper' && (
                <div className={`${styles.shot} ${styles.paper}`}>
                  <Image
                    className={styles.img}
                    src={`/images/${p.images[0]}.png`}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 38vw"
                  />
                </div>
              )}

              {p.layout === 'fridge' && (
                <div className={`${styles.shot} ${styles.fridge}`}>
                  <Image
                    className={styles.img}
                    src={`/images/${p.images[0]}.png`}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 53vw"
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