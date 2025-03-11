import styles from '@/styles/Skills.module.css';

const frontend = ['React', 'Redux', 'Next.js', 'TypeScript', 'HTML/CSS'];
const backend = [
  'Node.js',
  'Express',
  'Prisma',
  'PostgreSQL',
  'TypeORM',
  'PHP',
];
const devops = ['Git', 'Linux', 'Docker', 'Nginx', 'CI/CD', 'GitHub Actions'];

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
