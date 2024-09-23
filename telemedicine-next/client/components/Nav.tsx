import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface NavProps {
  loggedInState: boolean; // Define the type for loggedInState
}

export default function Nav({loggedInState}: NavProps) {

  let isLoggedIn = loggedInState
  return (
      <nav className='flex justify-center gap-[60px] p-3 pb-0'>
        <div className='flex flex-col-2 gap-2'>
            <Image className='rounded ml-4' src={'/logo.png'} alt='logo' width={40} height={40} />
            <p className='mt-2 text-xl font-thin text-gray-800'>Doc<span className='font-serif text-orange-500'>Line</span></p>
        </div>
        <Link className='mt-3 hover:underline hover:text-gray-500' href="/">Home</Link>
        <Link className='mt-3 hover:underline hover:text-gray-500' href="#">About</Link>
        
        {
        isLoggedIn ? (
          <>
          <Link className='mt-3 hover:underline hover:text-gray-500' href="/dashboard">Dashboard</Link>
          <Link className='mt-1 bg-blue-600 p-1 rounded px-3 text-white hover:text-black hover:bg-orange-50' href="/auth/logout">Sign Out</Link>
          </>
        ) : (
        <Link className='mt-1 bg-blue-600 p-1 rounded px-3 text-white hover:text-black hover:bg-orange-50' href="/auth/login">Sign In</Link>
      )}
      </nav>
      
  )
}
