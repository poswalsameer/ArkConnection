'use client'

import { Button } from '@/components/ui/button'
import React from 'react'
import { useRouter } from 'next/navigation'

function Quiz() {

    const router = useRouter();

  return (
    <div className='my-5 h-[30rem] w-[95%] flex flex-col gap-y-5 justify-center items-center relative ' id='quizSectionDiv' >
        <div className="absolute inset-0 blur-[2px] bg-opacity-50 bg-gray-200 z-0"></div>
        
        <div className='z-10 flex bg-[#cb997e] py-3 px-6 rounded-full text-[#344e41] justify-center items-center text-center text-3xl font-[1000]'>
            Test your vedic knowledge with our comprehensize prepared quizzes
        </div>
        <Button className="relative z-10 mt-3 h-12 w-36 bg-[#344e41] hover:bg-[#3d5c4c] rounded-full text-[#e6ccb2] text-base font-bold"
        onClick={() => (router.push("/quiz"))}
        >
            Take a quiz
        </Button>
    </div>
  )
}
  
export default Quiz
