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
          Matkani ohjelmoinnin maailmassa alkoi vuonna 2019, kun vahingossa 
          törmäsin Youtube tutoriaaliin. Siitä lähtien olen syventynyt alaan intohimoisesti,
          kehittäen taitojani jatkuvasti ja kokeillen uusia teknologioita. Full Stack -kehitys on minulle
          erityisen kiehtovaa, koska se mahdollistaa sovellusten luomisen kokonaisvaltaisesti ja näen, 
          miten omat ideani muuttuvat toimiviksi ratkaisuiksi.
        </p>
        <p className={styles.text}>
          Vahvimmat osaamisalueeni ovat <span>React</span> ja{' '}
          <span>Node.js</span>, joissa minulla on 
          jo vuosien kokemusta käytännön projekteista.
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
