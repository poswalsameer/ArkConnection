import Courses from "./appComponents/Courses";
import Email from "./appComponents/Email";
import Footer from "./appComponents/Footer";
import Hero from "./appComponents/Hero";
import Navbar from "./appComponents/Navbar";
import Quiz from "./appComponents/Quiz";
import Testimonials from "./appComponents/Testimonials";

export default function Home() {
  return (

    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-bodyBackground text-white">
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
