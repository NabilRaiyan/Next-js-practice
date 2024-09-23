import Nav from "@/components/Nav";
import Header from "@/components/Header";
import MiddleSection from "@/components/MiddleSection";
import Footer from "@/components/Footer";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DocLine || Home',
  description:
    'Home Page',
};

export default function Home() {
  return (

    <div className="flex flex-col gap-2">
      <div>
        <Nav loggedInState={false}/>
      </div>
      <div>
        <Header />
      </div>
      <div>
        <MiddleSection />
      </div>

      <div>
        <Footer />
      </div>
    </div>
   
  );
}
