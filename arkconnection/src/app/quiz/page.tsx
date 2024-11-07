'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

function page() {    
    
    const router = useRouter();

    const ramayanaQuiz = () => {
        router.push("/quiz/ramayanaQuiz");
    }

    const mahabharataQuiz = () => {
        router.push("/quiz/mahabharataQuiz");
    }

  return (

    
    <div className="min-h-screen w-full flex flex-col gap-y-20 justify-center items-center bg-bodyBackground text-white">
            <div className=' h-[20%] flex text-[#344e41] justify-center items-center text-center text-3xl font-extrabold'>
                Select any one quiz you would like to give?
            </div>

            <div className=' h-[80%] flex gap-x-10 justify-center items-center' >

                <div className='h-full w-[50%] relative hover:scale-105 transition-all delay-75 ease-in-out hover:cursor-pointer hover:blur-[2px] '
                onClick={ramayanaQuiz}
                >
                    <img src="./ramayana-quiz-photo.jpg" alt="" className='h-[30rem] w-full rounded-lg transition-all border-4 border-[#b08968]'/>
                    <div className="absolute top-8 inset-0 flex justify-center items-start text-white text-3xl font-bold opacity-100 hover:opacity-0 transition-opacity duration-300 z-30">
                        Ramayana
                    </div>
                </div>

                <div className='h-full w-[50%] relative hover:scale-105 transition-all delay-75 ease-in-out hover:cursor-pointer hover:blur-[2px] '
                onClick={mahabharataQuiz}
                >
                    <img src="mahabharata.jpg" alt="" className='h-[30rem] w-full rounded-lg border-4 border-[#b08968]'/>
                    <div className="absolute top-8 inset-0 flex justify-center items-start text-white text-3xl font-bold opacity-100 hover:opacity-0 transition-opacity duration-300 z-10">
                        Mahabharata
                    </div>
                </div>

            </div>

    </div>
    
  )
}

export default page