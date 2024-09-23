"use client";

import React, { useState } from 'react';
import {useForm} from 'react-hook-form';
import { useRouter } from 'next/navigation';

import axios from 'axios';
export default function Login() {

  const router = useRouter();

  const {register, handleSubmit, formState: {errors}, reset} = useForm({
    defaultValues:
    {
      email: "",
      password: ""
    }
  });

  // doctor interface
  interface Doctor {
    d_id: string;
    d_name: string;
    d_chamber_address: string;
    d_specialize: string;
  }

 

  interface loginInputObj{
    email: string,
    password: string

  }

  const [doctorData, setDoctorData] = useState<Doctor | null>(null);
  const [doctorId, setDoctorId] = useState<string | null>(null);
  

    // handle login   
  async function handleLogin(loginInput: loginInputObj) {
    if(loginInput){
      try {
        const loginData = {
          u_email: loginInput.email,
          u_password: loginInput.password,
        };
        const response = await axios.post('http://localhost:3000/users/login', loginData, {
          withCredentials: true, // Include credentials in login request
        });
        const data = response.data.doctor;
        setDoctorData(data);
        setDoctorId(data.d_id);
        console.log(doctorId);
        console.log(doctorData);
        if(doctorId !== null){
          router.push(`/dashboard/?doctorId=${doctorId}&doctorName=${data.d_name}`);
          // router.push('/dashboard')
        }
        
      } catch (error) {
        console.log(error);
      }
    }else{
      console.log("Login info is null")
    }
    
  }


  const onSubmit = (data: loginInputObj) => {
    handleLogin(data); 
  };


  // rendering doc info
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("email", {required: "Please enter email", 
                              pattern: {value: /^[A-Za-z0-9._%+-]+@gmail\.com$/,
                                message: "Please enter a valid email address"
                              }
                              })} placeholder='Enter email' />
            <p>{errors && errors.email?.message}</p>
          <input {...register("password", {required: "Please enter password"})} 
                              placeholder='Enter password' type='password' />
          <p>{errors && errors.password?.message}</p>

          <button type='submit'>Login</button>

        </form>
    </div>
  );
}
