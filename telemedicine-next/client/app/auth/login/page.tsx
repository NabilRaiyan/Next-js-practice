"use client";

import React, { useState } from 'react';
import axios from 'axios';

export default function Login() {

    // Define the type for the doctor object
interface Doctor {
    d_id: string;
    d_name: string;
    d_phone_number: string;
    d_chamber_address: string;
    d_specialize: string;
    d_education: string;
    d_gender: string;
    d_dob: string;
    license_number: string;
    status: string;
    notice_id: string;
    d_fee: number;
  }

  const [doctorData, setDoctorData] = useState<Doctor | null>(null);

  // login
  async function handleLogin() {
    try {
      const loginData = {
        u_email: 'raiyan@gmail.com',
        u_password: 'qwerty123'
      };
      const response = await axios.post('http://localhost:3000/users/login', loginData);
      let data = response.data.doctor;
      localStorage.setItem('doctorId', data.d_id);
      console.log(localStorage.getItem('doctorId'))
      setDoctorData(data); // Store the data in state
      console.log(doctorData);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      {doctorData && (
        <div>
          <h2>Doctor Information</h2>
          <p><strong>Name:</strong> {doctorData.d_name}</p>
          <p><strong>Phone Number:</strong> {doctorData.d_phone_number}</p>
          <p><strong>Chamber Address:</strong> {doctorData.d_chamber_address}</p>
          <p><strong>Specialization:</strong> {doctorData.d_specialize}</p>
        </div>
      )}
    </div>
  );
}

