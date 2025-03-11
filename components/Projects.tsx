import styles from '@/styles/Projects.module.css';
import ProjectCard from './ProjectCard';

export type Project = {
  title: string;
  desc: string;
  year: string;
  image: string;
  tags: string[];
  github: string;
  site?: string;
};

const projects: Project[] = [
  {
    title: 'Planit - Task management app',
    desc: 'Trellon tapainen sivusto,  jossa käyttäjät voivat luoda ja hallita tehtävätauluja, kortteja ja listoja. Projekti hostattu VPS:ssä Dockeria käyttäen.',
    year: '2024',
    image: '/images/planit.png',
    tags: ['React', 'Redux', 'TypeScript', 'Express', 'Docker', 'Nginx'],
    github: 'https://github.com/leeviko/planit',
    site: 'https://planit.leevi.dev',
  },
  {
    title: 'Quizitor - quiz app',
    desc: 'Käyttäjät voivat luoda ja pelata tietovisoja sekä katsoa muiden käyttäjien tuloksia. Tavoitteena oli tutustua erilaisiin teknologioihin, kuten tRPC.',
    year: '2023',
    image: '/images/quizitor.png',
    tags: ['Next.js', 'TypeScript', 'tRPC', 'Prisma'],
    github: 'https://github.com/leeviko/quizitor',
  },
  {
    title: 'Blog',
    desc: 'Henk. koht. blogi sivusto. Yhtenä tavoitteena oli opetella Dockerin käyttöä ja hostata täysin itse sivusto käyttäen hyväksi mm. Nginx:iä.',
    year: '2022',
    image: '/images/blog.png',
    tags: ['React', 'Redux', 'TypeScript', 'Docker', 'Nginx'],
    github: 'https://github.com/leeviko/blog.leevi.dev',
  },
];

const Projects = () => {
  return (
    <section id="projektit" className={styles.container}>
      <h2>Projektit</h2>
      <div className={styles.projects}>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
        <p className={styles.more}>Enemmän juttuja GitHubissa</p>
      </div>
    </section>
  );
};

export default Projects;
