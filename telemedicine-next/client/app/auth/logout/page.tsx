"use client"

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function Logout(){
    const router = useRouter();

    async function logout(){
        try{
            const response = await axios.delete('http://localhost:3000/users/logout');
            router.push('/');

        }catch(error){
            console.log(error)

        }
    }
    useEffect(() => {
        logout();
    }, []);
}