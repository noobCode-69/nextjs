import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Blogpost.module.css";

function Slug({blog}) {

  if (!blog) {
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


  export async function getServerSideProps(context) {


    let { slug } = context.params;  


    let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
    data = await data.json()

    return {
      props : {blog : data}
    }
  }

export default Slug;
