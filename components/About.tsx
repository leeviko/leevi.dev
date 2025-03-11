import styles from '@/styles/About.module.css';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <section id="minusta" className={styles.container}>
      <h2>Moi, mä oon Leevi</h2>
      <div className={styles.subtitleContainer}>
        <p className={styles.subtitle}>
          Tietojenkäsittelytieteiden opiskelija Oulun yliopistossa,
        </p>
        <p className={styles.subtitle}>
          sekä junior full stack kehittäjä (7+ kuukautta työkokemusta)
        </p>
      </div>
      <div className={styles.textContainer}>
        <p className={styles.text}>
          Aloitin ohjelmoinnin vuonna 2019, ja siitä lähtien olen jatkuvasti
          kehittänyt taitojani sekä tutustunut uusiin teknologioihin.
          Erityisesti olen keskittynyt full stack web-kehitykseen.
        </p>
        <p className={styles.text}>
          Vahvimmat osaamisalueeni ovat React ja Node.js, ja niiden parissa
          minulla onkin eniten kokemusta. Nautin modernien web-sovellusten
          rakentamisesta ja teknologioiden syvällisestä ymmärtämisestä.
        </p>
      </div>
      <div className={styles.buttons}>
        <button className="btn">
          <Image src="/icons/github.svg" width={20} height={20} alt="Github" />
          <span>GitHub</span>
        </button>
        <button className="btn">
          <Image
            src="/icons/linkedin.svg"
            width={20}
            height={20}
            alt="Linkedin"
          />
          <span>LinkedIn</span>
        </button>
        <Link
          className={`btn ${styles.cv}`}
          href="/files/CV.pdf"
          target="_blank"
          download
        >
          <span>CV</span>
        </Link>
      </div>
    </section>
  );
};

export default About;
