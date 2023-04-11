import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";


const Blog = () => {

  const [blogs , setBlogs] = useState(null);
  
  
  useEffect(() => { 
    fetch('http://localhost:3000/api/blogs').then((a) => {
      return a.json(); 
    }).then((data) => {
      setBlogs(data)
    })
  } , [])



  if(blogs == null){
    return <h1 style={{paddingTop : "5rem" , textAlign : 'center'}}>Loading</h1>
  }

  if( Array.isArray(blogs) && blogs.length == 0){
    return <h1 style={{paddingTop : "5rem" , textAlign : 'center'}}>No Blogs to read</h1>
  }


  return (


    <div className={`${styles["blog-container"]}`}>
      <div className={styles["blogs"]}>

        {
          blogs.map((item) => {
            return <div key={item.title} className={styles["blogItem"]}>
            <Link href={`/blogpost/${item.link}`}>
              <h3>{item.title}</h3>
              <p>{item.content.substr(0, 200)}...</p>
            </Link>
          </div>
          })
        }

      </div>
    </div>
  );
};

export default Blog;
