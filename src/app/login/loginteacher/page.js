'use client'
import {useRouter} from 'next/navigation';
import React from 'react'
import styles from "../../page.module.css";

export default function LoginTeacher() {
    const router = useRouter();
    const navigate = (endPoint)=> router.push(endPoint);
  return (
    <div>
        <h1 style={{textAlign:"center"}}>LoginTeacher Page</h1>
        <button className={styles.button} type="button" onClick={()=>navigate('/about')}>Go to About Page</button>
        <button className={styles.button} type="button" onClick={()=>navigate('/')}>Go to Main Page</button>
    </div>
  )
}
