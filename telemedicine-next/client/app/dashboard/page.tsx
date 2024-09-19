"use client";

import React from 'react'
import { Metadata } from 'next';
import Nav from '@/components/Nav';
import axios from 'axios';


// export const metadata: Metadata = {
//     title: 'DocLine || Dashboard',
//     description:
//       'My Dashboard',
//   };

export default function page() {

    async function handleLogin(){
        try{
            const loginData = {
                u_email: 'fatima@gmail.com',
                u_password: 'qwerty123'
            }
            const response = await axios.post('http://localhost:3000/users/login', loginData)
            const data = response.data.doctor;
        }
        catch(error){
            console.log(error)
        }
    }
    
  return (
    <div className='flex flex-col gap-2'>
      <div>
        <Nav />
        <button onClick={handleLogin}>Login</button>
        {
            
        }
      </div>
    </div>
  )
}
