import React from 'react'
import { Metadata } from 'next';
import Nav from '@/components/Nav';
import axios from 'axios';


export const metadata: Metadata = {
    title: 'DocLine || Dashboard',
    description:
      'My Dashboard',
  };

export default function page() {
    
  return (
    <div className='flex flex-col gap-2'>
      <div>
        <Nav />
      </div>
    </div>
  )
}
