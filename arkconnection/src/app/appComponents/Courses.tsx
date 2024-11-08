import React from 'react'

function Courses() {
  return (

    <div className='h-full max-w-[70rem] my-20 flex flex-col gap-y-10 justify-center items-center '>

        <div className=' text-3xl font-extrabold text-[#344e41] ' >
            Our Courses and Offerings
        </div>

        <div className='h-full w-full grid grid-cols-3 gap-x-36 place-content-center place-items-center'>
            
            <div className=' h-96 w-96 flex flex-col justify-center items-center bg-[#b08968] rounded-lg transition-all delay-75 ease-linear hover:cursor-pointer hover:-translate-y-2'>
                
                {/* IMAGE */}
                <div className=' h-1/2 w-full font-bold flex justify-center items-center border-b-2 border-black '>
                    IMAGE FOR THE COURSE
                </div>

                {/* COURSE DETAILS */}
                <div className=' h-1/2 w-full font-bold flex justify-center items-center border-t-2 border-black' >
                    CONTENT OF THE COURSE
                </div>

            </div>

            <div className=' h-96 w-96 bg-[#b08968] rounded-lg transition-all delay-75 ease-linear hover:cursor-pointer hover:-translate-y-2'>

                {/* IMAGE */}
                <div className=' h-1/2 w-full font-bold flex justify-center items-center border-b-2 border-black '>
                    IMAGE FOR THE COURSE
                </div>

                {/* COURSE DETAILS */}
                <div className=' h-1/2 w-full font-bold flex justify-center items-center border-t-2 border-black' >
                    CONTENT OF THE COURSE
                </div>

            </div>

            <div className=' h-96 w-96 bg-[#b08968] rounded-lg transition-all delay-75 ease-linear hover:cursor-pointer hover:-translate-y-2'>

                {/* IMAGE */}
                <div className=' h-1/2 w-full font-bold flex justify-center items-center border-b-2 border-black '>
                    IMAGE FOR THE COURSE
                </div>

                {/* COURSE DETAILS */}
                <div className=' h-1/2 w-full font-bold flex justify-center items-center border-t-2 border-black' >
                    CONTENT OF THE COURSE
                </div>

            </div>

        </div>
    </div>
  )
}

export default Courses
