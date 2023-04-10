
import Head from 'next/head'

import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  

  return (
    <div className={`${inter.className} ${styles['main-content']}`}>
      <Head>
        <title>Hunter Coder</title>
        <meta name="description" content="A blogging app created with NextJS" />
        <meta name="keywords" content="next, nextjs, react, beginner" />
      </Head>
   

      
      <main className={styles.main}>
        <h1>Hunting coder</h1>
        <p>A coding platform for the coder by the coder.</p>
      </main>

      <div className={styles["blogs"]}>
        <div className={styles["blogItem"]}>
          <Link href={"/blogpost/how-to-learn-js"}>
            <h3>How to learn Javascript in 2022</h3>
            <p>Javascript is dope.</p>
          </Link>
        </div>

        <div className={styles["blogItem"]}>
          <Link href={"/blogpost/how-to-learn-js"}>
            <h3>How to learn Javascript in 2022</h3>
            <p>Javascript is dope.</p>
          </Link>{" "}
        </div>

        <div className={styles["blogItem"]}>
          <Link href={"/blogpost/how-to-learn-js"}>
            <h3>How to learn Javascript in 2022</h3>
            <p>Javascript is dope.</p>
          </Link>{" "}
        </div>

        <div className={styles["blogItem"]}>
          <Link href={"/blogpost/how-to-learn-js"}>
            <h3>How to learn Javascript in 2022</h3>
            <p>Javascript is dope.</p>
          </Link>{" "}
        </div>
      </div>

    </div>
  )
}
