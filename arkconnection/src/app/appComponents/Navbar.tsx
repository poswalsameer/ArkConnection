'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

function Navbar() {

  const router = useRouter();

  const routeToAboutPage = () => {
    router.push("/about");
  }

  return (
    <div className='
    mx-20 h-20 w-[98%] flex justify-between items-center
    sm:mx-6 sm:h-20 sm:w-[98%] sm:flex sm:justify-between sm:items-center
    md:mx-6 md:h-20 md:w-[95%] md:flex md:justify-between md:items-center
    lg:mx-6 lg:h-20 lg:w-[95%] lg:flex lg:justify-between lg:items-center
    xl:mx-6 xl:h-20 xl:w-[95%] xl:flex xl:justify-between xl:items-center
    2xl:mx-6 2xl:h-20 2xl:w-[95%] 2xl:flex 2xl:justify-between 2xl:items-center
    
    bg-[#ddbea9] text-[#344e41] rounded-full 
    '
    id='navbarDiv'
    >

        <div className=' mx-7 sm:mx-7 md:mx-10 lg:mx-10 xl:mx-10 2xl:mx-10'>
            <img src="./arkConnection-horizontal.png" alt="Website logo" 
            className='
            h-56 mt-2
            sm:h-56 sm:mt-2
            md:h-56 md:mt-2
            lg:h-56 lg:mt-2
            xl:h-56 xl:mt-2
            2xl:h-56 2xl:mt-2'
            />
        </div>

        <div className='
        flex justify-center items-center mx-7 gap-x-2 text-xs
        sm:flex sm:justify-center sm:items-center sm:mx-7 sm:gap-x-3 sm:text-xs
        md:flex md:justify-center md:items-center md:mx-10 md:gap-x-3 md:text-sm
        lg:flex lg:justify-center lg:items-center lg:mx-10 lg:gap-x-5 lg:text-base
        xl:flex xl:justify-center xl:items-center xl:mx-10 xl:gap-x-5
        2xl:flex 2xl:justify-center 2xl:items-center 2xl:mx-10 2xl:gap-x-5 
        
        font-bold'>
            <h1 className='hover:cursor-pointer'>Home</h1>
            <h1 className='hover:cursor-pointer' onClick={routeToAboutPage} >About us</h1>
            <h1 className='hover:cursor-pointer'>Courses</h1>
            <h1 className='hover:cursor-pointer'>Services</h1>
            <h1 className='hover:cursor-pointer'>Contact</h1>
        </div>
      
    </div>
  )
}

export default Navbar
