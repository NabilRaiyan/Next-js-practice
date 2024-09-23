"use client"

import Dashboard from "@/components/Dashboard";
import Nav from "@/components/Nav";
import withSessionGuard from "@/components/SessionGuard";

// const ProtectedDashboard = withSessionGuard(Dashboard); // Wrap Dashboard with the session guard

export default function Page() {
    return (
        <div>
            <Nav loggedInState={true} />
            {/* <ProtectedDashboard /> Use the wrapped component */}
            <Dashboard/>
        </div>
    );
}
