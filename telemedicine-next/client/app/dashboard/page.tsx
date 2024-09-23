
import Dashboard from "@/components/Dashboard";
import Nav from "@/components/Nav";

export default function page(){

  return(
    <div>
      <Nav loggedInState={true}/>
      <Dashboard/>
    </div>
   
  )
}