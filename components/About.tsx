import styles from '@/styles/About.module.css';
import Image from 'next/image';

const About = () => {
  return (
    <section id="minusta" className={styles.container}>
      <h2>Moi, mä oon Leevi</h2>
      <div className={styles.subtitleContainer}>
        <p className={styles.subtitle}>
          Tietojenkäsittelytieteiden opiskelija Oulun yliopistossa,
        </p>
        <p className={styles.subtitle}>sekä Full Stack kehittäjä</p>
      </div>
      <div className={styles.textContainer}>
        <p className={styles.text}>
          Aloitin ohjelmoinnin vuonna 2019, ja siitä lähtien olen jatkuvasti
          kehittänyt taitojani sekä tutustunut uusiin teknologioihin.
          Erityisesti olen keskittynyt full stack web-kehitykseen. Nautin
          modernien web-sovellusten rakentamisesta ja teknologioiden
          syvällisestä ymmärtämisestä.
        </p>
        <p className={styles.text}>
          Vahvimmat osaamisalueeni ovat <span>React</span> ja{' '}
          <span>Node.js</span>, ja niiden parissa minulla onkin eniten
          kokemusta.
        </p>
      </div>
      <div className={styles.buttons}>
        <a
          href="https://github.com/leeviko"
          className="btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/icons/github.svg" width={20} height={20} alt="Github" />
          <span>GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/leevi-kotilainen"
          className="btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/icons/linkedin.svg"
            width={20}
            height={20}
            alt="Linkedin"
          />
          <span>LinkedIn</span>
        </a>
      </div>
    </section>
  );
};

export default About;
