import styles from '@/styles/ProjectCard.module.css';
import Image from 'next/image';
import { Project } from './Projects';

type Props = Project;

const ProjectCard = ({
  title,
  desc,
  year,
  image,
  tags,
  github,
  site,
}: Props) => {
  return (
    <div className={styles.card}>
      <Image
        className={styles.projectImg}
        src={image}
        width={800}
        height={190}
        alt="Project img"
      />
      <div className={styles.content}>
        <div className={styles.text}>
          <p className={styles.year}>{year}</p>
          <h2>{title}</h2>
          <p className={styles.desc}>{desc}</p>
        </div>
        <div className={styles.bottom}>
          <div className={styles.links}>
            {github && (
              <a
                className="fill fill-square"
                href={github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/icons/github.svg"
                  width={20}
                  height={20}
                  alt="Github link"
                />
              </a>
            )}
            {site && (
              <a
                className="fill fill-square"
                href={site}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/icons/open.svg"
                  width={20}
                  height={20}
                  alt="Site link"
                />
              </a>
            )}
          </div>
          <div className={styles.tags}>
            {tags.map((tag, index) => (
              <span className="fill" key={index}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
