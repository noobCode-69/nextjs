import React from 'react'
import styles from './Navbar.module.css'
import Link from 'next/link'


function Navbar() {
  return (
    <nav className={`${styles['nav']}`}>
    <ul>
      <Link  href="/">
        <li>Home</li>
      </Link>
      <Link href="/about">
        <li>About</li>
      </Link>
      <Link href="/blog">
        <li>Blog</li>
      </Link>
      <Link href="/contact">
        <li>Contact</li>
      </Link>
    </ul>

  </nav>
  )
}

export default Navbar
