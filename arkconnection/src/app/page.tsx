import Hero from "./appComponents/Hero";
import Navbar from "./appComponents/Navbar";

export default function Home() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-[#fdf0d5] text-white">
      <div className="h-5 w-full"></div>
      <Navbar />
      <Hero />
    </div>    
  );
}
