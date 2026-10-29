import Image from 'next/image';
import type { CSSProperties } from 'react';
import styles from './page.module.css';

export const metadata = {
  title: 'Engineering | Do Hai Nam',
};

type Project = {
  title: string;
  text: string;
  layout: 'triple' | 'single' | 'storm';
  images: string[];
};

const outlineTops = [10, 128, 244, 362, 480, 598];

const fireText =
  'Concerned about the risk of forest fires in Vietnam, I designed an early-warning system using a distributed network of IoT sensor nodes. Each node monitors key environmental parameters, including temperature, humidity, and smoke levels, and triggers an alert when readings exceed predefined thresholds. As one of my first engineering projects, this work introduced me to embedded systems, sensor integration, and data processing. I began with an ESP32-based system using low-cost sensors such as the DHT11 and MQ-2, then explored more advanced sensing components. To improve the identification of potentially dangerous conditions, I also collected environmental data from active meteorological stations and experimented with several machine-learning approaches, ultimately selecting a K-Nearest Neighbors (KNN) model.';

const projects: Project[] = [
  {
    title: 'VEX IQ Team 25812M',
    text: 'As the team’s lead designer, I had to optimize our robot within the VEX IQ kit’s limited motor capacity and available components. In our ball-shooting game, alliances had one minute to maximize their score, so typically the roles were between a scorer and a passer. While most teams specialized their robots for one role, I wanted ours to switch between both depending on our alliance partner and match conditions. To achieve this flexibility, I designed a double PTO system that selectively transferred mechanical power among the drivetrain, intake roller, and shooter, allowing the robot to switch between shooter and passer modes during a match.',
    layout: 'triple',
    images: ['engineering-1', 'engineering-2', 'engineering-3'],
  },
  {
    title: 'Conrad Challenge',
    text: 'Our innovation, IDEON, is an autonomous underwater vehicle designed to monitor microplastics in water using computer vision and polarization-based sensing. Contaminated water is pumped into an optical chamber, where a laser beam passes through a series of optical components before reaching a polarization camera. Microplastics exhibit a characteristic optical property called birefringence, which alters the polarization of transmitted light. By analyzing these polarization patterns with computer vision and machine learning, the system can identify and estimate the presence of microplastics in the sample. I worked specifically on mechanical design and 3D printing components, but also accounted for embedded computing and computer vision. The project challenged me to integrate hardware and software into a single system while repeatedly testing and refining the design.',
    layout: 'triple',
    images: ['engineering-4', 'engineering-5', 'engineering-6'],
  },
  {
    title: 'Early Fire Detection IOT',
    text: fireText,
    layout: 'single',
    images: ['engineering-7'],
  },
  {
    title: 'Storm Warning App',
    text: 'A mobile application designed to help users monitor storms and prepare for severe weather. The app combines real-time storm data with practical tools such as storm mapping, shelter locations, emergency checklists, and an SOS feature. I developed the application in Python using Kivy/KivyMD and integrated NASA’s EONET data to visualize active storm events. I also integrated AI for geospatial calculations and data routing, suggesting optimal paths to shelters and supporting location-based emergency planning.',
    layout: 'storm',
    images: ['engineering-8', 'engineering-9'],
  },
];

export default function Engineering() {
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
                Engineering
              </p>
            ))}
            <h1
              className={`${styles.bannerText} ${styles.solid}`}
              style={{ '--top': 702 } as CSSProperties}
            >
              Engineering
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
          {projects.map((p, i) => {
            const isStorm = p.layout === 'storm';
            return (
              <section key={`${p.title}-${i}`}>
                {i > 0 && <hr className={styles.divider} />}

                <h2 className={styles.title}>{p.title}</h2>
                <p className={`${styles.text} ${isStorm ? styles.stormText : ''}`}>
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

                {p.layout === 'single' && (
                  <div className={styles.single}>
                    <Image
                      className={styles.img}
                      src={`/images/${p.images[0]}.png`}
                      alt={p.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 52vw"
                    />
                  </div>
                )}

                {isStorm && (
                  <div className={styles.storm}>
                    <div className={styles.map}>
                      <Image
                        className={styles.img}
                        src={`/images/${p.images[0]}.png`}
                        alt="Storm map"
                        fill
                        sizes="(max-width: 768px) 100vw, 29vw"
                      />
                    </div>
                    <div className={styles.screen}>
                      <Image
                        className={styles.img}
                        src={`/images/${p.images[1]}.png`}
                        alt="Storm Warning App screen"
                        fill
                        sizes="(max-width: 768px) 100vw, 37vw"
                      />
                    </div>
                  </div>
                )}
              </section>
            );
          })}
        </div>
      </div>
    </main>
  );
}