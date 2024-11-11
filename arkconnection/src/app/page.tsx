import Courses from "./appComponents/Courses";
import Email from "./appComponents/Email";
import Footer from "./appComponents/Footer";
import Hero from "./appComponents/Hero";
import Navbar from "./appComponents/Navbar";
import Quiz from "./appComponents/Quiz";
import Testimonials from "./appComponents/Testimonials";

export default function Home() {
  return (

    <div className="
    min-h-screen w-full flex flex-col justify-center items-center bg-bodyBackground text-white
    sm:min-h-screen sm:w-full sm:flex sm:flex-col sm:justify-center sm:items-center sm:bg-bodyBackground sm:text-white
    md:min-h-screen md:w-full md:flex md:flex-col md:justify-center md:items-center md:bg-bodyBackground md:text-white
    lg:min-h-screen lg:w-full lg:flex lg:flex-col lg:justify-center lg:items-center lg:bg-bodyBackground lg:text-white
    xl:min-h-screen xl:w-full xl:flex xl:flex-col xl:justify-center xl:items-center xl:bg-bodyBackground xl:text-white
    2xl:min-h-screen 2xl:w-full 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center 2xl:bg-bodyBackground 2xl:text-white">
      <div className="h-5 w-full"></div>
      <Navbar />
      <Hero />
      <Quiz />
      <Courses />
      <Testimonials />
      <Email />
      <Footer />
    </div>

  );
}
