// Skills
export const frontend = ['React', 'Redux', 'Next.js', 'TypeScript', 'HTML/CSS'];
export const backend = [
  'Node.js',
  'Express',
  'Prisma',
  'PostgreSQL',
  'TypeORM',
  'PHP',
];
export const devops = [
  'Git',
  'Linux',
  'Docker',
  'Nginx',
  'CI/CD',
  'GitHub Actions',
];

export type Project = {
  title: string;
  desc: string;
  year: string;
  image: string;
  tags: string[];
  github?: string;
  site?: string;
};

export const projects: Project[] = [
  {
    title: 'RecallAI',
    desc: `[ WIP ] Käyttäjät voivat generoida muistikortteja käyttäen apuna tekoälyä. 
           Sovellus hyödyntää OpenAI:n API:a.`,
    year: '????',
    image: '/images/recallai.png',
    tags: ['Next.js', 'TypeScript', 'Prisma'],
  },
  {
    title: 'Linkerr',
    desc: `[ WIP ] Full stack -sovellus, 
           jossa käyttäjät voivat uploadata kuvia esim. 
           omasta setupistaan ja merkitä niihin tuotteita. Käyttäjät voivat sitten
           selata ja etsiä näitä kuvia sekä tuotteita.`,
    year: '????',
    image: '/images/linkerr.png',
    tags: ['Next.js', 'TypeScript', 'Prisma'],
    github: 'https://github.com/leeviko/linkerr',
  },
  {
    title: 'Planit - Task management app',
    desc: `Trellon tapainen sivusto, jossa käyttäjät voivat luoda ja 
           hallita tehtävätauluja, kortteja ja listoja.
           Projekti hostattu VPS:ssä Dockeria käyttäen.`,
    year: '2024',
    image: '/images/planit.png',
    tags: ['React', 'Redux', 'TypeScript', 'Express', 'Docker', 'Nginx'],
    github: 'https://github.com/leeviko/planit',
    site: 'https://planit.leevi.dev',
  },
  {
    title: 'Quizitor - quiz app',
    desc: `Käyttäjät voivat luoda ja pelata tietovisoja sekä
           katsoa muiden käyttäjien tuloksia. 
           Tavoitteena oli tutustua erilaisiin teknologioihin, kuten tRPC.`,
    year: '2023',
    image: '/images/quizitor.png',
    tags: ['Next.js', 'TypeScript', 'tRPC', 'Prisma'],
    github: 'https://github.com/leeviko/quizitor',
  },
  {
    title: 'Blog',
    desc: `Full-stack blogisivusto, jossa tavoitteena oli oppia Dockerin käyttöä ja 
           hostata sivusto itse käyttäen mm. Dockeria ja Nginx:iä. 
           Sivustolla on myös markdown-editori.`,
    year: '2022',
    image: '/images/blog.png',
    tags: ['React', 'Redux', 'TypeScript', 'Docker', 'Nginx'],
    github: 'https://github.com/leeviko/blog.leevi.dev',
  },
];
