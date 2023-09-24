"use client"
import Link from 'next/link'
import React, { useEffect } from 'react'

export default function Student({params}) {

    return (
    <div>
        <h1>Student Details</h1>
        <h3>Name: {params.student}</h3>
    </div>
  )
}
