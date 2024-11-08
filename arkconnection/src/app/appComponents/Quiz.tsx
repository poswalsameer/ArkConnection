'use client'

import { Button } from '@/components/ui/button'
import React from 'react'
import { useRouter } from 'next/navigation'

function Quiz() {

    const router = useRouter();

  return (
    <div className='2xl:my-5 2xl:h-[30rem] 2xl:w-[95%] 2xl:flex 2xl:flex-col 2xl:gap-y-5 2xl:justify-center 2xl:items-center 2xl:relative ' id='quizSectionDiv' >
        <div className="2xl:absolute 2xl:inset-0 2xl:z-0
        
        blur-[2px] bg-opacity-50 bg-gray-200
        "></div>
        
        <div className='2xl:z-10 2xl:flex 2xl:py-3 2xl:px-6 2xl:justify-center 2xl:items-center 2xl:text-center 2xl:text-3xl 
        
        bg-[#cb997e] font-[1000] text-[#344e41] rounded-full
        '>
            Test your vedic knowledge with our comprehensize prepared quizzes
        </div>
        <Button className="2xl:relative 2xl:z-10 2xl:mt-3 2xl:h-12 2xl:w-36 2xl:text-base  
        
        font-bold bg-[#344e41] hover:bg-[#3d5c4c] rounded-full text-[#e6ccb2]
        "
        onClick={() => (router.push("/quiz"))}
        >
            Take a quiz
        </Button>
    </div>
  )
}
  
export default Quiz
