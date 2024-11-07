import Hero from "./appComponents/Hero";
import Navbar from "./appComponents/Navbar";
import Quiz from "./appComponents/Quiz";

export default function Home() {
  return (

    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-bodyBackground text-white">
      <div className="h-5 w-full"></div>
      <Navbar />
      <Hero />
      <Quiz />
    </div>

  );
}
