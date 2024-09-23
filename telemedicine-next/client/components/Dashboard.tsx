"use client";

import React from 'react'
import Nav from '@/components/Nav';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Table, TableBody, TableHeader, TableCell, TableRow, TableColumn } from '@nextui-org/table';

interface Patient {
    p_name: string;
    p_phone: string;
    p_medical_history: string

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
  const [doctorName, setDocName] = useState<string | null>(null);


  useEffect(() => {
    const url = new URL(window.location.href);
    const id = url.searchParams.get('doctorId');
    const doctorName = url.searchParams.get('doctorName')
    setDoctorId(id);
    setDocName(doctorName)
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


  // <h2>Appointments:</h2>
  //     {appointmentData.length > 0 ? (
  //       appointmentData.map((appointment) => (
  //         <div key={appointment.appointment_id}>
  //           <p>Status: {appointment.appointment_status}</p>
  //           <p>Notes: {appointment.consultation_notes}</p>
  //           <p>Patient Name: {appointment.patient.p_name}</p> {/* Display patient name */}
  //           <p>Patient Phone: {appointment.patient.p_phone}</p> 
  //         </div>
  //       ))
  //     ) : (
  //       <p>No appointments found.</p>
  //     )}

  // show approved and pending appointments if any
  const approvedAppointments = appointmentData.filter(appointment => appointment.appointment_status === 'Approved');
  const pendingAppointments = appointmentData.filter(appointment => appointment.appointment_status === 'Pending');

    
  return (
    <div className='flex flex-col gap-2'>
      <h1 className='ml-8 text-2xl font-sans mt-3 font-semibold'>Welcome doctor, {doctorName}</h1>
      <div className='grid grid-cols-3 gap-5 p-2 m-6 mt-7'>
        <div className='text-lg bg-amber-400 p-4 rounded font-serif font-semibold text-slate-700 shadow-lg'>
          <h3 className='mb-4'>Total Appointment</h3>
          {
            appointmentData.length > 0 ? (
              <p className='text-[1.4rem] bg-orange-100 w-[50px] p-3 rounded-full ml-4'>{appointmentData.length}</p>
            ) : (
              <p>No Appointment</p>
            )
          }
        </div>
        <div className='text-lg bg-emerald-300 p-4 rounded font-serif font-semibold text-slate-700 shadow-lg'>
          <h3 className='mb-4'>Approved Appointment</h3>

          {
            appointmentData.length > 0 ? (
              <p className='text-[1.4rem] bg-emerald-50 w-[50px] p-3 rounded-full ml-4'>{approvedAppointments.length}</p>
            ) : (
              <p>No Appointment</p>
            )
          }
        </div>
        <div className='text-lg bg-red-400 p-4 rounded font-serif font-semibold text-slate-700 shadow-lg'>
          <h3 className='mb-4'>Pending Appointment</h3>

          {
            appointmentData.length > 0 ? (
              <p className='text-[1.4rem] bg-red-100 w-[50px] p-3 rounded-full ml-4'>{pendingAppointments.length}</p>
            ) : (
              <p>No Appointment</p>
            )
          }
        </div>
      </div>

      {/* Next table */}
    
    </div>
  )
}

