import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Nav = () => {
  return (
    <>
    <div className='grid grid-cols-3 gap-2'>
        <div className="logo">
            <Link className='' href="/home">
            <Image alt='logo' width={38} height={40} src="/next.png" className='rounded mt-4 self-center'></Image>
            </Link>
        </div>
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/form">Form</Link>


        </div>
    
    </>
    
  )
}

export default Nav
