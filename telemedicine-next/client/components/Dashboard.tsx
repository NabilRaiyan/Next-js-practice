"use client";

import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {useForm} from 'react-hook-form'


interface Patient {
    p_id: number,
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

  interface Prescription{
    prescription_id: number,
    prescription_details: string,
    created_at: Date
    patient: Patient; 

  }

  interface AddPrescription{
    prescription_details: string,

  }

// dashboard
export default function Dashboard(){
  const {register, handleSubmit, formState: {errors}, reset} = useForm({
    defaultValues:
    {
      prescription_details: "",
    }
  });

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
  const [prescriptionData, setPrescriptionData] = useState<Prescription[]>([]); // Initialize as an empty array
  const [patientData, setPatientData] = useState<Patient[]>([]); // Initialize as an empty array
  const [patientPrescriptionData, setPatientPrescription] = useState<Prescription[]>([]); // Initialize as an empty array


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

  useEffect(() => {
      getAppointment(); 
    }, [doctorId]);

    // getting all prescription for doctor   
  async function getAllPrescription() {
    try {
      const appResponse = await axios.get('http://localhost:3000/prescription/allPrescription', {
        withCredentials: true, // This ensures cookies are sent with the request
        params: { doctorId },
      });
      setPrescriptionData(appResponse.data);
      console.log(appResponse.data); // Log the fetched appointment data
    } catch (error) {
      console.log(error);
    }
  }


  // create prescription for patient
  async function createPrescription(patientId:number){
    try{
        const prescriptionData = {
            prescription_details: "Another new Prescription",
        }
        const response = await axios.post(`http://localhost:3000/prescription/createPrescription/${patientId}`, prescriptionData, {
            withCredentials: true,
            params: {doctorId}
        });
        console.log(response)

    }
    catch(error){
        console.log(error)
    }
}


// get all patients for the doctor
async function getPatient() {
  try {
    const appResponse = await axios.get('http://localhost:3000/appointments/findAllPatients', {
      withCredentials: true, // This ensures cookies are sent with the request
      params: { doctorId },
    });
    setPatientData(appResponse.data);
    console.log(appResponse.data); // Log the fetched appointment data
  } catch (error) {
    console.log(error);
  }
}

  // create prescription for patient
  async function updatePrescription(prescriptionId:number){
    try{
        const prescriptionData = {
            prescription_details: "New Updated Data",
        }
        const response = await axios.put(`http://localhost:3000/prescription/updatePrescription/${prescriptionId}`, prescriptionData, {
            withCredentials: true,
            params: {doctorId}
        });
        console.log(response)

    }
    catch(error){
        console.log(error)
    }
}


  // create prescription for patient
  async function showPatient(patientName:string){
    try{

        const response = await axios.get(`http://localhost:3000/doctor/prescriptions/${patientName}`, {
            withCredentials: true,
            params: {doctorId}
        });
        setPatientPrescription(response.data)
        console.log(response.data)

    }
    catch(error){
        console.log(error)
    }
}
 



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

      {/* Show all appointments  */}
      <div className='grid grid-cols-3 gap-3'>
      <div className='ml-6 bg-orange-100 rounded p-5 font-serif'>
        <h2 className='text-lg'>All Appointments:</h2>
        {appointmentData.length > 0 ? (
          appointmentData.map((appointment) => (
            <div key={appointment.appointment_id} className='bg-orange-200 m-4 p-4 rounded'>
              <p className='font-sans font-semibold'>Patient Name: {appointment.patient.p_name}</p> 
              <p className='font-sans font-semibold'>Patient Phone: {appointment.patient.p_phone}</p> 
              <p className='font-sans font-semibold'>Notes: {appointment.consultation_notes}</p>
              <p className='font-sans font-semibold'>Status: {appointment.appointment_status}</p>
            </div>
          ))
        ) : (
          <p>No appointments found.</p>
        )}
      </div>

      {/* prescription div */}
      <div className='bg-emerald-100 p-2'>
        <div className='m-6 bg-orange-100 rounded p-5 font-serif'>
          <button onClick={getAllPrescription} className='m-2 bg-emerald-200 p-2'>Show All Prescription</button>
          <h2 className='text-lg'>All Prescription:</h2>
          {prescriptionData.length > 0 ? (
            prescriptionData.map((prescription) => (
              <div key={prescription.prescription_id} className='bg-orange-200 m-4 p-4 rounded'>
                <p className='font-sans font-semibold'>Prescription ID: {prescription.prescription_id}</p> 
                <p className='font-sans font-semibold'>Prescription Details:  {prescription.prescription_details}</p> 
                <p className='font-sans font-semibold'>Patient Name: {prescription.patient.p_name}</p>
                <p className='font-sans font-semibold'>Patient Phone: {prescription.patient.p_phone}</p>
                <p className='font-sans font-semibold'>Patient Medical History: {prescription.patient.p_medical_history}</p>

                <button
                  className="text-blue-500 underline"
                  onClick={() => createPrescription(prescription.patient.p_id)}
                >
                  Create Prescription
              </button> 
              <button
                  className="text-blue-500 underline"
                  onClick={() => updatePrescription(prescription.prescription_id)}
                >
                  Update Prescription
              </button>                          
            </div>
            ))
          ) : (
            <p>No Prescription found.</p>
          )}
        </div>
      </div>

      {/* Show all patient  */}
      <div className='bg-emerald-100 p-2'>
        <div className='m-6 bg-orange-100 rounded p-5 font-serif'>
          <button onClick={getPatient} className='m-2 bg-cyan-100 p-2'>Show All Patient</button>
          <h2 className='text-lg'>All Patients:</h2>
          {patientData.length > 0 ? (
            patientData.map((patient) => (
              <div key={patient.p_id} className='bg-orange-200 m-4 p-4 rounded'>
                <p className='font-sans font-semibold'>Patient Name: {patient.p_name}</p> 
                <p className='font-sans font-semibold'>Medical Details:  {patient.p_medical_history}</p> 
                <button
                  className="text-blue-500 underline"
                  onClick={() => showPatient(patient.p_name)}
                >
                  Show Patient Prescription
              </button>                          
            </div>
            ))
          ) : (
            <p>No Patient found.</p>
          )}
        </div>
      </div>
      </div>

      <div className='grid grid-cols-2 gap-2'>
          <div className='p-3'>
              {patientPrescriptionData.length > 0 ? (
          patientPrescriptionData.map((prescription, index) => (
            <div key={`${prescription.prescription_id}-${index}`} className='bg-orange-200 m-4 p-4 rounded'>
              <p className='font-sans font-semibold'>Prescription ID: {prescription.prescription_id}</p>
              <p className='font-sans font-semibold'>Prescription Details: {prescription.prescription_details}</p>
              <p className='font-sans font-semibold'>Patient Name: {prescription.patient.p_name}</p>
              <p className='font-sans font-semibold'>Patient Phone: {prescription.patient.p_phone}</p>
              <p className='font-sans font-semibold'>Patient Medical History: {prescription.patient.p_medical_history}</p>
            </div>
          ))
        ) : (
          <p>No prescriptions found.</p>
        )}
        </div>
      </div>
    </div>
  )
}

