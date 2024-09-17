import Link from "next/link";
import Nav from "@/utils/Nav";
import Header from "@/utils/Header";
import Footer from "@/utils/Footer";


export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-5">
      <div className="bg-gray-400 p-4">
        <Nav />
      </div>
      <div className="bg-gray-300 p-5">
        <Header />
      </div>
      <div className="bg-gray-300 p-6 text-2xl ">
        <h1 className="">We provide solution for your tech projects</h1>
      </div>
      <div className="p-4 ml-3 grid grid-cols-3 gap-4">
        <div className="text-blue-800 text-xl rounded p-3 w-[200px] h-[300px] bg-gray-300">
          <Link href="/box/1">Box-1</Link>
        </div>
        <div className="text-xl rounded p-3 w-[200px] h-[300px] bg-gray-300 text-blue-800">
          <Link href="/box/2">Box-2</Link>

        </div>
        <div className="text-blue-800 text-xl rounded p-3 w-[200px] h-[300px] bg-gray-300">
          <Link href="/box/3">Box-3</Link>
        </div>

      </div>
      <div className="bg-gray-200 p-7 text-sm">
        <Footer />
      </div>


      {/* <Link href="/form">Form</Link> */}
      {/* <Link href="/post">All Post</Link> */}

    </div>
  );
}
