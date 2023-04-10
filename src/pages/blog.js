import Link from "next/link";
import React from "react";
import styles from "../styles/Blog.module.css";
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })


const Blog = () => {
  return (
    <div className={`${styles["blog-container"]} ${inter.className}`}>
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
  );
};

export default Blog;
