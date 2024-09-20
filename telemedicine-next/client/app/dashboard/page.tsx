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

  // const [appointmentData, setAppointmentData] = useState<Appointment[]>([]); // Initialize as an empty array

  //   // getting all appointment for doctor   
  // async function getAppointment() {
  //   try {
  //     const appResponse = await axios.get('http://localhost:3000/appointments/appointmentHistory', {
  //       withCredentials: true, // This ensures cookies are sent with the request
  //       params: { doctorId },
  //     });
  //     setAppointmentData(appResponse.data);
  //     console.log(appResponse.data); // Log the fetched appointment data
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }


//   // create prescription for patient
//   async function createPrescription(){
//     try{
//         const prescriptionData = {
//             prescription_details: "New Data for prescription",
//         }
//         const response = await axios.post('http://localhost:3000/prescription/createPrescription/3', prescriptionData, {
//             withCredentials: true,
//             params: doctorId
//         });
//         console.log(response)

//     }
//     catch(error){
//         console.log(error)
//     }
// }


    
  return (
    <div className='flex flex-col gap-2'>
      <div>
        <Nav />
        <button>Login</button>
      </div>
    </div>
  )
}
