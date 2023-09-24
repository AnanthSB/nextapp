"use client"
import { useState } from 'react'
import styles from './page.module.css'
import {useRouter} from 'next/navigation';

import Link from 'next/link'

export default function Home() {
  const [name, setName] = useState('Anil')
  const  apple = (item)=>setName("siddu")
  const router = useRouter();
  const navigate = (endPoint)=> router.push(endPoint)
  return (
    <main className={styles.xyCenter} style={{color:'#fff', backgroundColor:'grey'}}>
      <h1>Basice Routing | Make New Page</h1>
      {/* <Link href='/login'>Go to Login Page</Link>
      <Link href='/about'>Go to About Page</Link> */}

      <button type="button" onClick={()=>navigate('/login')} className={styles.button}>Go to Login Page</button>
      <button type="button" onClick={()=>navigate('/about')} className={styles.button}>Go to About Page</button>
    </main>
  )
}