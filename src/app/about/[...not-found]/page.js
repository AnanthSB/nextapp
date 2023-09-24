import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <>
        <div>This About Page is not found.</div>
    <Link href={`/home`}>Go To Home Page</Link>
    </>
  )
}
