"use client"
import Link from 'next/link'
import React from 'react'
import styles from "../page.module.css"
import { useRouter } from 'next/navigation';
import Layout from '../layout';

export default function Login() {
  const router = useRouter();
  const navigate = (endPoint)=> router.push(endPoint.toLowerCase())
  return (
    <div className={styles.xyCenter} style={{backgroundColor:'lightgray', color:'#000'}}>
        <div>Login Page</div>
        {/* <Link href="/">Go Back to Main Page</Link> */}
        <button className={styles.button} type="button" onClick={()=>navigate('/loginstudent')}>Student Login Page</button>
        <button className={styles.button} type="button" onClick={()=>navigate('/loginteacher')}>Teacher Login Page</button>
        <button className={styles.button} type="button" onClick={()=>navigate('/')}>Go back to Main Page</button>
    </div>
  )
}
