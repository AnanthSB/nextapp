import Link from 'next/link'
import React from 'react'

export default function StudentList() {
    const studentData = ['anil', 'suresh', 'bharath', 'nikil', 'shayam'];
  return (
    <div>
        <h1>Student List</h1>
        <ul>
            {/* <li>
                <Link href="/studentlist/anil">Anil </Link>
            </li>
            <li>
                <Link href="/studentlist/kumar">Kumar </Link>
            </li> */}
            {
                studentData?.map((student, index)=><li key={index}><Link href={`/studentlist/${student}`}>{student}</Link></li>)
            }
        </ul>
    </div>
  )
}
