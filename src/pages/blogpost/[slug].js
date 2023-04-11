import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Blogpost.module.css";

function Slug() {
  const [blog, setBlog] = useState(null);
  const router = useRouter();
  let { slug } = router.query;

  useEffect(() => {
    fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
      .then((a) => {
        return a.json();
      })
      .then((data) => {
        setBlog(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [slug]);

  if (blog == null) {
    return <h1 style={{ paddingTop: "5rem", textAlign: "center" }}>Loading</h1>;
  }

  return (
    <div className={`${styles["blog-container"]}`}>
      <h1>{blog.title}</h1>
      <hr />
      <p>{blog.content}</p>
      <p style={{paddingTop : "1rem" ,  fontWeight : "bold"}} >From : {blog.author}</p>
    </div>
  );
}

export default Slug;
