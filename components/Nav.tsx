import styles from '@/styles/Nav.module.css';
import Link from 'next/link';
import Avatar from './Avatar';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Avatar />
      <div className={styles.navContainer}>
        <div className={styles.link}>
          <Link href="#minusta">Minusta</Link>
        </div>
        <div className={styles.link}>
          <Link href="#projektit">Projektit</Link>
        </div>
        <div className={styles.link}>
          <Link href="#taidot">Taidot</Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
