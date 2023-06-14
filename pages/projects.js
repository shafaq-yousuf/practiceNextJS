import React from "react";
import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const projects = () => {
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <div className={styles.card}>
          <h2 className={inter.className}>
            Project 1 <span>-&gt;</span>{" "}
          </h2>
          <Link href={'/projectDetails/project1'}>
          <p className={inter.className}>Details about Next.js project 1</p>
          </Link>
        </div>

        <div className={styles.card}>
          <h2 className={inter.className}>
            Project 2 <span>-&gt;</span>{" "}
          </h2>
          <Link href={'/projectDetails/project2'}>
          <p className={inter.className}>Details about Next.js project 2</p>
          </Link>
        </div>

        <div className={styles.card}>
          <h2 className={inter.className}>
            Project 3 <span>-&gt;</span>{" "}
          </h2>
          <Link href={'/projectDetails/project3'}>
          <p className={inter.className}>Details about Next.js project 3</p>
          </Link>
        </div>

        <div className={styles.card}>
          <h2 className={inter.className}>
            Project 4 <span>-&gt;</span>{" "}
          </h2>
          <Link href={'/projectDetails/project4'}>
            <p className={inter.className}>Details about Next.js project 4</p>
          </Link>
        </div>
        
      </div>
    </main>
  );
};

export default projects;
