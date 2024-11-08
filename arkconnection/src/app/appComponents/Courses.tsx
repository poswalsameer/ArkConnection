import React from 'react'

function SingleCourse(){
    return (
        <div className=' h-96 w-96 flex flex-col justify-center items-center rounded-lg 
            
            bg-[#b08968] transition-all delay-75 ease-linear hover:cursor-pointer hover:-translate-y-2'>
                
                {/* IMAGE */}
                <div className=' h-1/2 w-full flex justify-center items-center border-b-2 border-black 
                
                font-bold
                '>
                    IMAGE FOR THE COURSE
                </div>

                {/* COURSE DETAILS */}
                <div className=' h-1/2 w-full flex justify-center items-center border-t-2 border-black
                
                font-bold 
                ' >
                    CONTENT OF THE COURSE
                </div>

        </div>        
    )
}

function Courses() {
  return (

    <div className='h-full max-w-[70rem] my-20 flex flex-col gap-y-10 justify-center items-center '>

        <div className=' text-3xl font-extrabold 
        
        text-[#344e41] ' >
            Our Courses and Offerings
        </div>

        <div className='h-full w-full grid grid-cols-3 gap-x-36 place-content-center place-items-center'>
            
        {Array.from({ length: 3 }).map((_, index) => (
                <SingleCourse key={index} />
            ))}

        </div>
    </div>
  )
}

export default Courses
