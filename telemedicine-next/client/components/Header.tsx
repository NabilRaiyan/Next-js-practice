import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div className="grid grid-cols-2 gap-3">
         <div className='ml-[90px] mt-[30px] w-[60%]'>
            <h1 className='text-[4rem] text-slate-800'>Fastest Way <br /> To Find <br /> Doctor</h1>
            <p className='text-slate-500 font-sans text-justify mb-8'>Lorem ipsum odor amet, consectetuer adipiscing elit Natoque nascetur eu eros conubia neque vel sollicitudin elementum Pellentesque convallis penatibus leo ex dis curae. Natoque ridiculus penatibus facilisi tristique rhoncus etiam.</p>
            <Link href={'#'} className='rounded hover:bg-black hover:text-blue-100 bg-blue-500 text-white p-3 font-serif text-lg'>Sign Up</Link>
         </div>
         <div className='absolute left-[680px] top-[100px] w-[50%]'>
            <Image className='rotate-90' src={'/header.png'} width={800} alt='header' height={800} />
         </div>

    </div>
  )
}
