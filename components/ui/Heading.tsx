import React from 'react'

export default function Heading({children}: {children: React.ReactNode}) {
  return (
    <h1 className='text-gray-800 text-lg font-bold mb-5'>
        {children}
    </h1>
  )
}
