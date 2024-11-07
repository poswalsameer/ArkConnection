import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react'
import QuizReportContext from '../context/QuizReportContext';
import quizReportContext from '../context/QuizReportContext';

interface quiz {
    question: string;
    options: string[];
    answer: number;
}

interface question {
    question: string;
    options: string[];
    answer: number;
}

function Question({ quiz } : {quiz: quiz[]} ) {

    const [selected, setSelected] = useState<number | null>(null);
    const [currentQuiz, setCurrentQuiz] = useState<quiz[]>([]);
    const [currentQuestion, setCurrentQuestion] = useState<question | null>(null);
    const [questionsAnswered, setQuestionsAnswered] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);
    
    const quizReportContext = useContext(QuizReportContext);
    if (quizReportContext === null) {
        throw new Error('QuizReportContext must be used within a QuizReportContextProvider');
    }
    const { correctAnswers, setCorrectAnswers } = quizReportContext;

    const router = useRouter();

    const toggleOptions = (index: number) => {
        if( selected === index ){
            setSelected(null);
        }
        else{
            setSelected(index);
        }
    }

    const moveToNextQuestion = () => {

        if( selected === currentQuestion?.answer ){
            setCorrectAnswers(correctAnswers+1);
        }

        setQuestionsAnswered( questionsAnswered+1 );
    }

    useEffect( () => {
        setQuestionsAnswered(0);
    }, [] )

    useEffect( () => {

        if( questionsAnswered === 5 ){
            setLoading(true);
            router.push('/quizReport');
            setLoading(false);
        }

        setSelected(null);
        setCurrentQuiz(quiz);
        setCurrentQuestion(quiz[questionsAnswered]);
 
    }, [questionsAnswered] )


  return (

    !loading ? 
    ( 
        <>
            <div className="min-h-screen w-[95%] flex flex-col justify-center items-center bg-bodyBackground">

                <div className=' h-32 w-full flex justify-center items-center'>
                    <img src="../arkConnection-horizontal.png" alt="brandImage" className='h-96 w-96 '/>
                </div>

                <div className='mb-40 h-full w-full flex flex-col justify-center items-center'>
                    <div className='h-44 w-full text-3xl font-bold flex justify-center items-center ' >
                        { currentQuestion && currentQuestion.question}
                    </div>

                    <div className='h-44 w-full grid grid-cols-2 gap-10'>
                        { currentQuestion && currentQuestion.options.map((option, index) => (
                            <div
                            key={index}
                            className={`font-bold flex justify-center items-center rounded-lg bg-[#b08968] text-bodyBackground text-lg hover:cursor-pointer transition-all delay-75 ease-linear hover:-translate-y-1 ${selected === index ? "border-[#644b37]" : ""} border-4 border-[#b08968] p-2`}
                            onClick={() => toggleOptions(index)}
                            >
                            {option}
                            </div>
                        ))}
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
        </> 
    ) : 
    ( 
        <>
            <div className="min-h-screen w-[95%] text-3xl font-extrabold text-[#b08968] flex flex-col justify-center items-center bg-bodyBackground">
                Loading your report...
            </div>
        </> 
    )

    

    
  )
}

export default Question
