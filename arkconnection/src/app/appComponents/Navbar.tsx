import React from 'react'

function Navbar() {
  return (
    <div className='2xl:mx-6 2xl:h-20 2xl:w-[95%] 2xl:flex 2xl:justify-between 2xl:items-center
    
    bg-[#ddbea9] text-[#344e41] rounded-full 
    '>

        <div className='2xl:mx-10'>
            <img src="./arkConnection-horizontal.png" alt="Website logo" 
            className='2xl:h-56 2xl:mt-2'
            />
        </div>

        <div className='2xl:flex 2xl:justify-center 2xl:items-center 2xl:mx-10 2xl:gap-x-5 
        
        font-bold'>
            <h1>Home</h1>
            <h1>Courses</h1>
            <h1>Testimonials</h1>
            <h1>Contact</h1>
        </div>
      
    </div>
  )
}

export default Navbar
