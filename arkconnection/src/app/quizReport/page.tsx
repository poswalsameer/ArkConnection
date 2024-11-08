'use client'

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react'
import QuizReportContext from '../context/QuizReportContext';

function QuizReport() {

    const quizReportContext = useContext(QuizReportContext);
    if (quizReportContext === null) {
        throw new Error('QuizReportContext must be used within a QuizReportContextProvider');
    }
    const { correctAnswers, setCorrectAnswers } = quizReportContext;

    const router = useRouter();

    const goBackToHomePage = () => {
        router.push('/');
    }

  return (

    <div className="min-h-screen w-[100%] flex flex-col justify-center items-center 
    
    bg-bodyBackground">

        <div className=' h-32 w-full flex justify-center items-center'>
            <img src="../arkConnection-horizontal.png" alt="brandImage" className='h-[30rem] w-[30rem] '/>
        </div>
        
        <div className=' h-44 w-full text-3xl font-extrabold flex justify-center items-center'>
            You answered {correctAnswers}/5 questions correctly!
        </div>
        
        <Button className="h-12 w-36 text-base
        
        bg-[#344e41] hover:bg-[#3d5c4c] rounded-full text-[#e6ccb2] font-bold" 
        onClick={goBackToHomePage}
        >
            Home
        </Button>

        

    </div>
  )
}

export default QuizReport