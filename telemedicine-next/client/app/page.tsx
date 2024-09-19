import Nav from "@/components/Nav";
import Header from "@/components/Header";
import MiddleSection from "@/components/MiddleSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (

    <div className="flex flex-col gap-2">
      <div>
        <Nav/>
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
