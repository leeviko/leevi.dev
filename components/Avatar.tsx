'use client';
import styles from '@/styles/Avatar.module.css';
import Image from 'next/image';
import { useState } from 'react';

const Avatar = () => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`${styles.avatar} ${hover ? styles.hover : styles.noHover}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Image src="/images/avatar.jpg" alt="Selfie" width={50} height={50} />
      <h1>👻</h1>
    </div>
  );
};

export default Avatar;
