import Image from 'next/image'
import React from 'react'

// Middle section function
export default function MiddleSection() {
  return (
    <div className='flex justify-center flex-col ml-[85px] mt-16'>
      <h3 className='text-3xl self-center font-serif mt-10'>Why Us?</h3>
      <div className='grid grid-cols-2 mt-10'>
        <div className='mt-20 text-justify'>
            <p className='text-slate-400 font-sans mb-8'>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Natoque nascetur eu eros conubia neque vel sollicitudin elementum. Pellentesque convallis penatibus leo ex dis curae. Natoque ridiculus penatibus facilisi tristique rhoncus etiam.
                Lorem ipsum odor amet, consectetuer adipiscing elit.
            </p>
        </div>
        <div>
            <Image src={'/medical-1.png'} width={400} height={400} alt='medical-1' />
        </div>
      </div>

      <div className='grid grid-cols-2 mr-10'>
        <div className='w-[51%]'>
            <Image src={'/medical-2.png'} width={400} height={400} alt='medical-2' />
        </div>
        <div className='mt-20 text-justify mr-[50px]'>
            <p className='text-slate-400 font-sans mb-8'>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Natoque nascetur eu eros conubia neque vel sollicitudin elementum. Pellentesque convallis penatibus leo ex dis curae. Natoque ridiculus penatibus facilisi tristique rhoncus etiam.
                Lorem ipsum odor amet, consectetuer adipiscing elit.
            </p>
        </div>
      </div>

      <div className='grid grid-cols-2 mt-10'>
        <div className='mt-20 text-justify'>
            <p className='text-slate-400 font-sans mb-8'>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Natoque nascetur eu eros conubia neque vel sollicitudin elementum. Pellentesque convallis penatibus leo ex dis curae. Natoque ridiculus penatibus facilisi tristique rhoncus etiam.
                Lorem ipsum odor amet, consectetuer adipiscing elit.
            </p>
        </div>
        <div>
            <Image src={'/medical-3.png'} width={400} height={400} alt='medical-3' />
        </div>
      </div>
    </div>
  )
}
