import React from 'react'
import Link from 'next/link';


// Footer function
export default function Footer() {
    const date = new Date().getFullYear();

  return (
    <footer className='mt-10 bg-slate-600 p-4'>
        <div className='grid grid-cols-2 text-white ml-[100px] mt-2'>
                <div className='w-[20%] flex flex-col ml-[400px]'>
                    <Link className='font-serif hover:text-orange-200 text-blue-200' href={'#'}>Contact Us</Link>
                    <Link className='font-serif hover:text-orange-200 text-blue-200' href={'#'}>About</Link>
                    <Link className='font-serif hover:text-orange-200 text-blue-200' href={'#'}>Home</Link>
                    </div>
                    <div className='w-[40%] flex flex-col'> 
                    <p className='font-serif text-gray-50 inline'>Email: docline@gmail.com</p>
                    <p className='font-serif text-gray-50 inline'>Phone: +8803245681</p>
                    <p className='font-serif text-gray-50 inline'>Address: 33 street, New York, USA</p>
                </div> 
        </div>
        <p className='text-center p-2 mt-4 font-serif text-white'>@ Copyright {date} <span className='text-orange-300'>DocLine</span></p>

    </footer>
  )
}
