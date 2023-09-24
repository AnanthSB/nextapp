'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Layout({children}) {
  const pathName = usePathname();
  return (
    <>
      <div>
        {
          pathName !== "/login/loginteacher" ? (
          <>
                  <ul style={{display:'flex', justifyContent:'flex-start', padding:'18px 10px',marginBottom:'40px',listStyleType:'none', gap:'20px'}}>
          <li>
            <Link href="/">Main Page</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/about/aboutcollege">About College</Link>
          </li>
          <li>
            <Link href="/about/aboutstudent">About Student</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/login/loginstudent">Student Login</Link>
          </li>
          <li>
            <Link href="/login/loginteacher">Teacher Login</Link>
          </li>
        </ul>
          </>
          ) : (
            <>
            <Link href = "/login"><center>Go to the main login page</center></Link>
            </>
          )
        }
          {children}
      </div>
    </>
  )
}
