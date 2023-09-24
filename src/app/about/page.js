"use client"
import Link from 'next/link'
import React from 'react'
import styles from "../page.module.css";
import { useRouter } from 'next/navigation';
import Layout from '../layout';

export default function About() {
  const router = useRouter();
  const navigate = (endPoint)=> router.push(endPoint)
  return (
    <div className={styles.xyCenter}>
        <div style={{color:'red'}}>This is page is about Student</div>
        {/* <Link href="/">Go Back to Main Page</Link> */}
        <button className={styles.button} type="button" onClick={()=>navigate('/about/aboutstudent')}>About Student</button>
        <button className={styles.button} type="button" onClick={()=>navigate('/about/aboutcollege')}>About College</button>
        <button className={styles.button} type="button" onClick={()=>navigate('/')}>Go To Main Page</button>
    </div>
  )
}
