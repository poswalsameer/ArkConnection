import React from 'react'

function SingleTestimonial(){
    return (

        <div className='h-80 w-64 bg-[#b08968] p-2 flex flex-col gap-y-2 justify-center items-center rounded-lg hover:cursor-pointer transition-all delay-75 ease-linear hover:-translate-y-2' >
            
            {/* IMAGE */}
            <div className='h-[28%] w-20 bg-black rounded-full'></div>

            {/* NAME AND DESIGNATION */}
            <div className='h-[20%] w-full bg-white rounded-lg' >

            </div>

            {/* TESTIMONIAL */}
            <div className='h-[50%] w-full bg-blue-400 rounded-lg ' >

            </div>

        </div>

    )
}

function Testimonials() {
  return (
    <div className='h-full max-w-[80rem] my-20 flex flex-col gap-y-10 justify-center items-center '>

        <div className=' text-3xl font-extrabold text-[#344e41] ' >
            Testimonials
        </div>

        <div className='h-full w-full grid grid-cols-5 gap-x-36 place-content-center place-items-center'>
            {Array.from({ length: 5 }).map((_, index) => (
                <SingleTestimonial key={index} />
            ))}
        </div>
      
    </div>
  )
}

export default Testimonials
