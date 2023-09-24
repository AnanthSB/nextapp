"use client";

import React from 'react'

export default function Lecture({params}) {
    console.log(JSON.stringify(params));
  return (
    <div>
        <p>{JSON.stringify(params)}</p>
        <h1>All lecture 1.</h1>
        {params?.lecture?.map((item)=>{
            return <p>{item}</p>
        })}
    </div>
  )
}
