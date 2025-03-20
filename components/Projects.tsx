import styles from '@/styles/Projects.module.css';
import ProjectCard from './ProjectCard';
import { projects } from '@/lib/data';

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
