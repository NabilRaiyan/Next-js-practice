"use client";

import React, { useState } from 'react';
import axios from 'axios';

export default function Login() {
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
      console.log(data.d_id);
      console.log(data);
      await getAppointment(); // Wait for appointments to be fetched
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
          <p><strong>Chamber Address:</strong> {doctorData.d_chamber_address}</p>
          <p><strong>Specialization:</strong> {doctorData.d_specialize}</p>
        </div>
      )}
      {appointmentData.length > 0 && (
        <div>
          <h3>Appointment Information</h3>
          <ul>
            {appointmentData.map((appointment) => (
              <li key={appointment.appointment_id}>
                <p><strong>Appointment ID:</strong> {appointment.appointment_id}</p>
                <p><strong>Status:</strong> {appointment.appointment_status}</p>
                <p><strong>Notes:</strong> {appointment.consultation_notes}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
