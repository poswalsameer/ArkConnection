import React from 'react'

function Navbar() {
  return (
    <div className='mx-6 h-20 w-[95%] bg-[#ddbea9] text-[#344e41] rounded-full flex justify-between items-center'>

        <div className='mx-10'>
            <img src="./arkConnection-horizontal.png" alt="Website logo" 
            className='h-56 mt-2'
            />
        </div>

        <div className='flex justify-center items-center mx-10 gap-x-5 font-bold'>
            <h1>Home</h1>
            <h1>About us</h1>
            <h1>Courses</h1>
            <h1>Contact</h1>
        </div>
      
    </div>
  )
}

export default Navbar
