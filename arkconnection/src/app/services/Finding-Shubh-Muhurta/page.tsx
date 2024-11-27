'use client'

import Footer from "@/app/appComponents/Footer";
import Navbar from "@/app/appComponents/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";

function Page() {

  const [age, setAge] = useState('')

  const calculateAge = (dob: string) => {
    const birthDate = new Date(dob)
    const today = new Date()
    let age = today.getFullYear() - birthDate.getFullYear()
    const monthDiff = today.getMonth() - birthDate.getMonth()
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }
    
    setAge(age.toString())
  }

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

      <div className="min-h-screen w-full flex items-center justify-center p-4">
      <form className="w-full max-w-7xl bg-white border-2 border-gray-100 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Personal Information</h2>
        
        <div className="mb-4">
          <Label htmlFor="name" className="font-bold text-gray-700">Name</Label>
          <Input type="text" id="name" placeholder="Ravi Verma" className="mt-1 border-gray-300 text-gray-800" />
        </div>
        
        <div className="mb-4">
          <Label htmlFor="contact" className="font-bold text-gray-700">Contact</Label>
          <Input type="text" id="contact" placeholder="Contact information" className="mt-1 border-gray-300 text-gray-800" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <Label htmlFor="email" className="font-bold text-gray-700">Email</Label>
            <Input type="email" id="email" placeholder="ravi@example.com" className="mt-1 border-gray-300 text-gray-800" />
          </div>
          <div>
            <Label htmlFor="phone" className="font-bold text-gray-700">Phone</Label>
            <Input type="tel" id="phone" placeholder="(+91)-9876543210" className="mt-1 border-gray-300 text-gray-800" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <Label htmlFor="dob" className="font-bold text-gray-700">Date of Birth</Label>
            <Input 
              type="date" 
              id="dob" 
              className="mt-1 border-gray-300 text-gray-800"
              onChange={(e) => calculateAge(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="age" className="font-bold text-gray-700">Age</Label>
            <Input type="text" id="age" value={age} readOnly className="mt-1 border-gray-300 text-gray-800 bg-gray-100" />
          </div>
        </div>
        
        <div className="mb-4">
          <Label htmlFor="birthTime" className="font-bold text-gray-700">Birth Time</Label>
          <Input type="time" id="birthTime" className="mt-1 border-gray-300 text-gray-800" />
        </div>
        
        <div className="mb-6">
          <Label htmlFor="notes" className="font-bold text-gray-700">Notes</Label>
          <Textarea id="notes" placeholder="Additional notes..." className="mt-1 border-gray-300 text-gray-800" />
        </div>
        
        <Button type="submit" className="w-full bg-gray-800 hover:bg-gray-700 text-white">
          Submit
        </Button>
      </form>
    </div>

      <Footer />
    </div>
  );
}

export default Page;
