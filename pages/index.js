import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <style jsx>
      {`
      .heading{
        color: blue;
        font-weight: bolder;}
      `}
    </style>
      <Head>
        <title>My Next App </title>
        <meta name="description" content="next app related to all" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p className={styles.code}>It's my first next app</p>
          <div>
            <a
              href=""
              // target="_blank"
              // rel="noopener noreferrer"
            >
              By{" "}
              <Image
                src="/laptop.png"
                alt="My Next Project"
                className={styles.vercelLogo}
                width={100}
                height={80}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <h1 className="heading">My Next App Projects</h1>
        </div>

        <div className={styles.grid}>
         
          <div className={styles.card}>
           <h2 className={inter.className}>Project 1 <span>-&gt;</span> </h2> 
           <p className={inter.className}>Details about Next.js project 1</p>
          </div>

          <div className={styles.card}>
           <h2 className={inter.className}>Project 2 <span>-&gt;</span> </h2> 
           <p className={inter.className}>Details about Next.js project 2</p>
          </div>

          <div className={styles.card}>
           <h2 className={inter.className}>Project 3 <span>-&gt;</span> </h2> 
           <p className={inter.className}>Details about Next.js project 3</p>
          </div>

          <div className={styles.card}>
           <h2 className={inter.className}>Project 4 <span>-&gt;</span> </h2> 
           <p className={inter.className}>Details about Next.js project 4</p>
          </div>

        </div>
      </main>
    </>
  );
}
