import About from '@/components/About';
import styles from './page.module.css';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <About />
        <Projects />
        <Skills />
      </div>
    </div>
  );
}
