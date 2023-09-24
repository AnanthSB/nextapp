"use client"

import Link from 'next/link'
import React from 'react'
import styles from "../page.module.css";
import {useRouter} from "next/navigation";

export default function Page() {
  const router = useRouter();
  const navigate = (endPoint)=> router.push(endPoint.toLowerCase())
  return (
    <div className={styles.xyCenter}>
      <div>This is a Home page</div>
      {/* <Link href="/">Go Back to Main Page</Link> */}
      <button  className={styles.button} type="button" onClick={()=>navigate('/')}>Go To Main Page</button>
    </div>
  )
}
