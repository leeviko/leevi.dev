import { backend, devops, frontend } from '@/lib/data';
import styles from '@/styles/Skills.module.css';

const Skills = () => {
  return (
    <section id="taidot" className={styles.container}>
      <h2>Taidot</h2>
      <div className={styles.skills}>
        <div className={styles.skill}>
          <h3>Frontend</h3>
          {frontend.map((skill) => (
            <span className="fill" key={skill}>
              {skill}
            </span>
          ))}
        </div>
        <div className={styles.skill}>
          <h3>Backend</h3>
          {backend.map((skill) => (
            <span className="fill" key={skill}>
              {skill}
            </span>
          ))}
        </div>
        <div className={styles.skill}>
          <h3>DevOps</h3>
          {devops.map((skill) => (
            <span className="fill" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
