// Skills
export const frontend = ['React', 'Redux', 'Next.js', 'TypeScript', 'HTML/CSS'];
export const backend = [
  'Node.js',
  'Express',
  'Fastify',
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

export const webProjects: Project[] = [
  {
    title: 'RecallAI - Muistikorttigeneraattori',
    desc: `Käyttäjät voivat generoida muistikortteja käyttäen apuna tekoälyä.
           Sovellus hyödyntää OpenAI:n API:a.`,
    year: '2025',
    image: '/images/recallai.png',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'Docker'],
    github: 'https://github.com/leeviko/recallai',
  },
  {
    title: 'URL Shortener',
    desc: `Yksinkertainen linkkien lyhentäjä, joka on rakennettu Fastifyllä ja Reactilla.`,
    year: '2026',
    image: '/images/301to.png',
    tags: ['Fastify', 'TypeScript', 'React', 'Docker'],
    github: 'https://github.com/leeviko/url_shortener',
    site: 'https://301to.cc',
  },
  {
    title: 'FridgeGoblin - Reseptigeneraattori',
    desc: `Käyttäjät voivat kysyä AI:lta ruokareseptejä, ja tallentaa niitä, 
           sekä selata muiden käyttäjien tallentamia reseptejä.
           Sovellus hyödyntää OpenAI:n API:a.`,
    year: '2025',
    image: '/images/fridgegoblin.png',
    tags: ['React', 'Express', 'TypeScript', 'Prisma'],
    github: 'https://github.com/leeviko/fridgegoblin',
  },
  {
    title: 'Planit - Task management app',
    desc: `Trellon kaltainen web-sovellus, 
           jossa käyttäjät voivat luoda ja hallita tehtävätauluja, 
           kortteja ja listoja. Projekti pyörii omalla VPS:llä Dockerin kautta.`,
    year: '2024',
    image: '/images/planit.png',
    tags: ['React', 'Redux', 'TypeScript', 'Express', 'Docker', 'Nginx'],
    github: 'https://github.com/leeviko/planit',
  },

  {
    title: 'Linkerr',
    desc: `Full stack -sovellus,
           jossa käyttäjät voivat uploadata kuvia esim.
           omasta setupistaan ja merkitä niihin tuotteita. Käyttäjät voivat sitten
           selata ja etsiä näitä kuvia sekä tuotteita.`,
    year: '????',
    image: '/images/linkerr.png',
    tags: ['Next.js', 'TypeScript', 'Prisma'],
    github: 'https://github.com/leeviko/linkerr',
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

export const otherProjects: Project[] = [
  {
    title: 'Breakout',
    desc: 'Klassinen Breakout peli tehty C++:lla ja OpenGL:llä.',
    image: '/images/breakout.png',
    tags: ['C++', 'OpenGL'],
    year: '2023',
    github: 'https://github.com/leeviko/breakout',
  },
];
