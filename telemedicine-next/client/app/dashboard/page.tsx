"use client"

import Dashboard from "@/components/Dashboard";
import Nav from "@/components/Nav";


// Dashboard page
export default function Page() {
    return (
        <div>
            <Nav loggedInState={true} />
            <Dashboard/>
        </div>
    );
}
