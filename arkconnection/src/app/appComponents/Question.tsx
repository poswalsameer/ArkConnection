import { Button } from '@/components/ui/button';
import React, { useEffect, useState } from 'react'

interface quiz {
    question: string;
    options: string[];
    answer: string;
}

interface question {
    question: string;
    options: string[];
    answer: string;
}

function Question({ quiz } : {quiz: quiz[]} ) {

    const [selected, setSelected] = useState<number | null>(null);
    const [currentQuiz, setCurrentQuiz] = useState<quiz[]>([]);
    const [currentQuestion, setCurrentQuestion] = useState<question | null>(null);
    const [questionsAnswered, setQuestionsAnswered] = useState<number>(0);

    const toggleOptions = (index: number) => {
        if( selected === index ){
            setSelected(null);
        }
        else{
            setSelected(index);
        }
    }

    const moveToNextQuestion = () => {
        setQuestionsAnswered( questionsAnswered+1 );
    }

    useEffect( () => {
        setQuestionsAnswered(0);
    }, [] )

    useEffect( () => {
        setSelected(null);
        setCurrentQuiz(quiz);
        setCurrentQuestion(quiz[questionsAnswered]);
 
    }, [questionsAnswered] )


  return (
    <div className="min-h-screen w-[95%] flex flex-col justify-center items-center bg-bodyBackground">

        <div className=' h-32 w-full flex justify-center items-center'>
            <img src="../arkConnection-horizontal.png" alt="brandImage" className='h-96 w-96 '/>
        </div>
        
        <div className='mb-40 h-full w-full flex flex-col justify-center items-center'>
            <div className='h-44 w-full text-3xl font-bold flex justify-center items-center ' >
                { currentQuestion && currentQuestion.question}
            </div>

            <div className='h-44 w-full grid grid-cols-2 gap-10  '>

                <div className={`font-bold flex justify-center items-center rounded-lg bg-[#b08968] hover:cursor-pointer transition-all delay-75 ease-linear hover:-translate-y-1 ${ selected === 0 ? "bg-[#987558] " : "" } `}
                onClick={ () => toggleOptions(0)}
                >
                    { currentQuestion && currentQuestion.options[0] }
                </div>
                <div className={`font-bold flex justify-center items-center rounded-lg bg-[#b08968] hover:cursor-pointer transition-all delay-75 ease-linear hover:-translate-y-1 ${ selected === 1 ? "bg-[#987558] " : "" } `}
                onClick={() => toggleOptions(1)}
                >
                { currentQuestion && currentQuestion.options[1] }
                </div>
                <div className={`font-bold flex justify-center items-center rounded-lg bg-[#b08968] hover:cursor-pointer transition-all delay-75 ease-linear hover:-translate-y-1 ${ selected === 2 ? "bg-[#987558] " : "" } `}
                onClick={() => toggleOptions(2)}
                >
                    { currentQuestion && currentQuestion.options[2] }
                </div>
                <div className={`font-bold flex justify-center items-center rounded-lg bg-[#b08968] hover:cursor-pointer transition-all delay-75 ease-linear hover:-translate-y-1 ${ selected === 3 ? "bg-[#987558] " : "" } `}
                onClick={() => toggleOptions(3)}
                >
                    { currentQuestion && currentQuestion.options[3] }
                </div>

            </div>
        </div>
        
        

        <div className='absolute bottom-10 right-10'>
            <Button 
            className={`h-12 w-36 bg-[#344e41] hover:bg-[#3d5c4c] rounded-full text-[#e6ccb2] text-base font-bold ${ selected === null ? "cursor-not-allowed" : "hover:cursor-pointer" } `}
            disabled={selected === null}
            onClick={moveToNextQuestion}
            >
                Next
            </Button>
        </div>

    </div>
  )
}

export default Question
