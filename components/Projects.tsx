'use client';
import styles from '@/styles/Projects.module.css';
import ProjectCard from './ProjectCard';
import { webProjects, otherProjects } from '@/lib/data';
import { useState } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState<'web' | 'others'>('web');

  return (
    <section id="projektit" className={styles.container}>
      <h2>Projektit</h2>
      <div className={styles.projectGroupBtns}>
        <button
          onClick={() => setFilter('web')}
          disabled={filter === 'web'}
          className={filter === 'web' ? styles.active : ''}
        >
          Web
        </button>
        <button
          onClick={() => setFilter('others')}
          disabled={filter === 'others'}
          className={filter === 'others' ? styles.active : ''}
        >
          Muut
        </button>
      </div>
      <div className={styles.projects}>
        {filter === 'web' &&
          webProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        {filter === 'others' &&
          otherProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        <p className={styles.more}>Enemmän juttuja GitHubissa...</p>
      </div>
    </section>
  );
};

export default Projects;
