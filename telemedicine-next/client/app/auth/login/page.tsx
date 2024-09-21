"use client";

import React, { useState } from 'react';
import axios from 'axios';

export default function Login() {

  // doctor interface
  interface Doctor {
    d_id: string;
    d_name: string;
    d_chamber_address: string;
    d_specialize: string;
  }

  interface Appointment {
    appointment_id: string;
    appointment_status: string;
    consultation_notes: string;
  }

  const [doctorData, setDoctorData] = useState<Doctor | null>(null);
  const [doctorId, setDoctorId] = useState<string | null>(null);
  

    // handle login   
  async function handleLogin() {
    try {
      const loginData = {
        u_email: 'fatima@gmail.com',
        u_password: 'qwerty123',
      };
      const response = await axios.post('http://localhost:3000/users/login', loginData, {
        withCredentials: true, // Include credentials in login request
      });
      const data = response.data.doctor;
      setDoctorData(data);
      setDoctorId(data.d_id);
      console.log(doctorId);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  // rendering doc info
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      {doctorData && (
        <div>
          <h2>Doctor Information</h2>
          <p><strong>Name:</strong> {doctorData.d_name}</p>
          <p><strong>Chamber Address:</strong> {doctorData.d_chamber_address}</p>
          <p><strong>Specialization:</strong> {doctorData.d_specialize}</p>
        </div>
      )}
      
    </div>
  );
}
