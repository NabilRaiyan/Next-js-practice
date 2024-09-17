import React from 'react'
import Image from 'next/image'


const Header = () => {
  return (
    <div className='mt-3 flex flex-col'>
        <h1 className='text-2xl self-center'>Welcome to our website</h1>
        <img src=''></img>
        <Image alt='logo' width={400} height={40} src="/next.png" className='rounded mt-4 self-center'></Image>
    </div>
  )
}

export default Header
