'use client'
 
import { useRouter } from 'next/navigation'
import React from 'react'

const style: React.CSSProperties = {
  'width': '30px',
  'height': '30px',
  'cursor': 'pointer',
}

 export default function Homeward() {
  const router = useRouter()
  return (
        <div style={style} onClick={() => router.replace('/')}></div>
  );
}