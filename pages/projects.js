import { useState } from "react";
import Head from "next/head";

import Project from "../components/Project";

import styles from "../styles/Projects.module.css";

export default function Projects() {
  const [expandedItem, setExpandedItem] = useState(null);

  const handleExpand = (item) => {
    setExpandedItem(item);
  };

  return (
    <>
      <Head>
        <title>Leevi - Projektit</title>
      </Head>
      <h1 className="page-heading" lang="fi">
        Projektit
      </h1>
      <div className="page-content">
        <div className={styles.projectsList}>
          <Project
            name="Tietovisa"
            description="Sivusto, jossa käyttäjät voivat luoda ja pelata tietovisoja."
            code="https://github.com/leeviko/quizitor"
            link="https://quiz.leevi.dev/"
            tags="Next.js, TypeScript, tRPC, Prisma ORM"
            handleExpand={handleExpand}
            expandedItem={expandedItem}
          />
          <Project
            name="Blog"
            description="Blog sivusto. Githubissa on myös CI / CD pipeline."
            code="https://github.com/leeviko/blog.leevi.dev"
            tags="React, Redux, Express, Rest API, PostgreSQL, Docker"
            handleExpand={handleExpand}
            expandedItem={expandedItem}
          />
          <Project
            name="Eveloper"
            description="Full stack Dev.to klooni"
            code="https://github.com/leeviko/eveloper"
            tags="React, Redux, Express, Rest API, PostgreSQL"
            handleExpand={handleExpand}
            expandedItem={expandedItem}
          />
          <Project
            name="Countries"
            description="Etsi tietoa eri maista"
            link="https://countries.leevi.dev"
            code="https://github.com/leeviko/countries"
            tags="React, Rest API"
            handleExpand={handleExpand}
            expandedItem={expandedItem}
          />
          <Project
            name="E-Kirjasto"
            description="E-kirjastossa käyttäjä voi lainata, etsiä ja palauttaa kirjoja. Admin voi lisätä ja päivittää kirjoja yms."
            code="https://github.com/leeviko/e-kirjasto"
            tags="PHP"
            handleExpand={handleExpand}
            expandedItem={expandedItem}
          />
        </div>
      </div>
    </>
  );
}
