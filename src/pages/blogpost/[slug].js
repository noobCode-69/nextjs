import React from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/Blogpost.module.css'



function Slug() {
    const router = useRouter();
    const {slug}= router.query;
    return (
    <div className={styles['blog-container']}>
      <h1>{slug}</h1>
      <hr/>
      <p> 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget magna fermentum iaculis eu non diam phasellus vestibulum lorem. Ut eu sem integer vitae. Sed arcu non odio euismod lacinia at quis risus sed. Fusce id velit ut tortor pretium. Nec feugiat nisl pretium fusce id velit ut tortor pretium. Risus in hendrerit gravida rutrum quisque non tellus orci. Non sodales neque sodales ut etiam sit amet. Volutpat commodo sed egestas egestas fringilla phasellus faucibus. Id diam vel quam elementum pulvinar etiam non quam lacus. Ut sem nulla pharetra diam sit. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Scelerisque purus semper eget duis at tellus. Tempor orci dapibus ultrices in iaculis nunc. Augue lacus viverra vitae congue eu. Purus sit amet volutpat consequat mauris nunc congue. Ornare quam viverra orci sagittis eu volutpat. Tellus elementum sagittis vitae et leo duis ut. Cras sed felis eget velit aliquet. Eget nunc scelerisque viverra mauris.
      </p>
    </div>
  )
}

export default Slug
