import { useState, useEffect } from "react";
import Head from "next/head";

import Link from "next/link";
import styles from "@/styles/Home.module.css";

export default function Home({blogs}) {


  const fetchContent = () => {
    if (blogs == null) {
      return (
        <h1 style={{ paddingTop: "5rem", textAlign: "center" }}>Loading</h1>
      );
    }

    if (Array.isArray(blogs) && blogs.length == 0) {
      return (
        <h1 style={{ paddingTop: "5rem", textAlign: "center" }}>
          No Blogs to read
        </h1>
      );
    }
    return blogs.map((item) => {
      return (
        <div key={item.title} className={styles["blogItem"]}>
          <Link href={`/blogpost/${item.link}`}>
            <h3>{item.title}</h3>
            <p>{item.content.substr(0, 200)}...</p>
          </Link>
        </div>
      );
    });
  };

  return (
    <div className={`${styles["main-content"]}`}>
      <Head>
        <title>Hunter Coder</title>
        <meta name="description" content="A blogging app created with NextJS" />
        <meta name="keywords" content="next, nextjs, react, beginner" />
      </Head>

      <main className={styles.main}>
        <h1>Hunting coder</h1>
        <p>A coding platform for the coder by the coder.</p>
      </main>

      <div className={styles["blogs"]}>{fetchContent()}</div>
    </div>
  );
}


export async function getServerSideProps(context) {
  let data;
  try {
    data = await fetch("http://localhost:3000/api/blogs")
    data = await data.json();
  } catch (error) {
    console.log(error);
  }
  return {
    props : {blogs : data}
  }
}
