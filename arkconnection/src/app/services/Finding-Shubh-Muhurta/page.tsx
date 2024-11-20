import Footer from "@/app/appComponents/Footer";
import Navbar from "@/app/appComponents/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

function Page() {
  return (
    <div
      className="
        min-h-screen w-full flex flex-col justify-center items-center gap-y-20 bg-white
        sm:min-h-screen sm:w-full sm:flex sm:flex-col sm:justify-center sm:items-center sm:gap-y-20
        md:min-h-screen md:w-full md:flex md:flex-col md:justify-center md:items-center md:gap-y-20
        lg:min-h-screen lg:w-full lg:flex lg:flex-col lg:justify-center lg:items-center lg:gap-y-20
        xl:min-h-screen xl:w-full xl:flex xl:flex-col xl:justify-center xl:items-center xl:gap-y-20
        2xl:min-h-screen 2xl:w-full 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center 2xl:gap-y-20
    "
    >
      <div className="mt-10 w-full">
        <Navbar />
      </div>

      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-7xl mx-auto">
          <CardContent className="flex flex-col items-center p-6 space-y-6">
            
            <img src="https://arkaconnection.in/wp-content/uploads/2024/01/90f37e_732dc7d9eb8344a4b204b9493d728043mv2.webp" alt="" className="rounded-full" />

            <h1 className="text-5xl font-bold text-center">
              Finding Shubh Muhurta
            </h1>

            <div className="text-xl text-center space-y-7 max-w-3xl">
              <p>
                Medical Astrology is an extremely specialized field. An expert
                astrologer can look at the birth chart of a person and able to
                pinpoint potential weaknesses or diseases.
              </p>

              <p>
                Medical Astrology can provide vital, life-saving information.
                Remember once health is lost everything is lost. Through its
                applications, one can solve medical problems before it's onset.
              </p>

              <p className=" text-2xl font-extrabold">
                What would you get in this Medicinal Astrology Consultancy?
              </p>
              <ul className=" text-xl text-center list-none pl-6 space-y-2">
                <li>Detailed Analysis and Timing of disease in the future.</li>
                <li>
                  If you have already suffering from the disease then the period
                  of good health or it's re-occurrence and when it can re-occur.
                </li>
                <li>Remedial Measures to Prevent or Cure Diseases</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
}

export default Page;
