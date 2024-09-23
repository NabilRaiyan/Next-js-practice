"use client";

import React from 'react'
import Nav from '@/components/Nav';
import axios from 'axios';
import { useEffect, useState } from 'react';


import { useRouter } from 'next/navigation';


interface Patient {
    p_name: string;
    p_phone: string;

}
 // appointment interface
 interface Appointment {
    appointment_id: string;
    appointment_status: string;
    consultation_notes: string;
    patient: Patient; 

  }

// dashboard
export default function Dashboard(){

  const router = useRouter();
  const [doctorId, setDoctorId] = useState<string | null>(null);

  useEffect(() => {
    const url = new URL(window.location.href);
    const id = url.searchParams.get('doctorId');
    setDoctorId(id);
  }, []);

  console.log(doctorId);


  const [appointmentData, setAppointmentData] = useState<Appointment[]>([]); // Initialize as an empty array

    // getting all appointment for doctor   
  async function getAppointment() {
    try {
      const appResponse = await axios.get('http://localhost:3000/appointments/appointmentHistory', {
        withCredentials: true, // This ensures cookies are sent with the request
        params: { doctorId },
      });
      setAppointmentData(appResponse.data);
      console.log(appResponse.data); // Log the fetched appointment data
    } catch (error) {
      console.log(error);
    }
  }


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

useEffect(() => {
    getAppointment(); // Call the function to fetch appointments when doctorId changes
  }, [doctorId]);

    
  return (
    <div className='flex flex-col gap-2'>
      <h2>Appointments:</h2>
      {appointmentData.length > 0 ? (
        appointmentData.map((appointment) => (
          <div key={appointment.appointment_id}>
            <p>Status: {appointment.appointment_status}</p>
            <p>Notes: {appointment.consultation_notes}</p>
            <p>Patient Name: {appointment.patient.p_name}</p> {/* Display patient name */}
            <p>Patient Phone: {appointment.patient.p_phone}</p> 
          </div>
        ))
      ) : (
        <p>No appointments found.</p>
      )}
    </div>
  )
}

