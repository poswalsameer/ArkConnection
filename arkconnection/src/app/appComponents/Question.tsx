import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react'
import QuizReportContext from '../context/QuizReportContext';

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
            <div className="
            min-h-screen w-[95%] flex flex-col justify-center items-center bg-bodyBackground
            sm:min-h-screen sm:w-[95%] sm:flex sm:flex-col sm:justify-center sm:items-center sm:bg-bodyBackground
            md:min-h-screen md:w-[95%] md:flex md:flex-col md:justify-center md:items-center md:bg-bodyBackground
            lg:min-h-screen lg:w-[95%] lg:flex lg:flex-col lg:justify-center lg:items-center lg:bg-bodyBackground
            xl:min-h-screen xl:w-[95%] xl:flex xl:flex-col xl:justify-center xl:items-center xl:bg-bodyBackground
            2xl:min-h-screen 2xl:w-[95%] 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center 2xl:bg-bodyBackground
            ">

                <div className=' 
                h-32 w-full flex justify-center items-center
                sm:h-32 sm:w-full sm:flex sm:justify-center sm:items-center
                md:h-32 md:w-full md:flex md:justify-center md:items-center
                lg:h-32 lg:w-full lg:flex lg:justify-center lg:items-center
                xl:h-32 xl:w-full xl:flex xl:justify-center xl:items-center
                2xl:h-32 2xl:w-full 2xl:flex 2xl:justify-center 2xl:items-center'>
                    <img src="../arkConnection-horizontal.png" alt="brandImage" 
                    className='
                    h-80 w-80
                    sm:h-96 sm:w-96
                    md:h-96 md:w-96
                    lg:h-96 lg:w-96 
                    xl:h-96 xl:w-96 
                    2xl:h-96 2xl:w-96 '/>
                </div>

                <div className='
                mb-40 h-full w-full flex flex-col justify-center items-center
                sm:mb-40 sm:h-full sm:w-full sm:flex sm:flex-col sm:justify-center sm:items-center
                md:mb-40 md:h-full md:w-full md:flex md:flex-col md:justify-center md:items-center
                lg:mb-40 lg:h-full lg:w-full lg:flex lg:flex-col lg:justify-center lg:items-center
                xl:mb-40 xl:h-full xl:w-full xl:flex xl:flex-col xl:justify-center xl:items-center
                2xl:mb-40 2xl:h-full 2xl:w-full 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center'>
                    <div className='
                    h-44 w-full text-xl font-bold flex justify-center items-center
                    sm:h-44 sm:w-full sm:text-3xl sm:font-bold sm:flex sm:justify-center sm:items-center
                    md:h-44 md:w-full md:text-3xl text-center md:font-bold md:flex md:justify-center md:items-center
                    lg:h-44 lg:w-full lg:text-3xl lg:font-bold lg:flex lg:justify-center lg:items-center
                    xl:h-44 xl:w-full xl:text-3xl xl:font-bold xl:flex xl:justify-center xl:items-center
                    2xl:h-44 2xl:w-full 2xl:text-3xl 2xl:font-bold 2xl:flex 2xl:justify-center 2xl:items-center ' >
                        { currentQuestion && currentQuestion.question}
                    </div>

                    <div className='
                    h-32 w-full grid grid-cols-2 gap-3
                    sm:h-44 sm:w-full sm:grid sm:grid-cols-2 sm:gap-8
                    md:h-44 md:w-full md:grid md:grid-cols-2 md:gap-10
                    lg:h-44 lg:w-full lg:grid lg:grid-cols-2 lg:gap-10
                    xl:h-44 xl:w-full xl:grid xl:grid-cols-2 xl:gap-10
                    2xl:h-44 2xl:w-full 2xl:grid 2xl:grid-cols-2 2xl:gap-10'>
                        { currentQuestion && currentQuestion.options.map((option, index) => (
                            <div
                            key={index}
                            className={`
                            font-bold flex justify-center items-center rounded-lg bg-[#b08968] text-bodyBackground text-lg
                            sm:font-bold sm:flex sm:justify-center sm:items-center sm:rounded-lg sm:bg-[#b08968] sm:text-bodyBackground sm:text-lg
                            md:font-bold md:flex md:justify-center md:items-center md:rounded-lg md:bg-[#b08968] md:text-bodyBackground md:text-lg
                            lg:font-bold lg:flex lg:justify-center lg:items-center lg:rounded-lg lg:bg-[#b08968] lg:text-bodyBackground lg:text-lg
                            xl:font-bold xl:flex xl:justify-center xl:items-center xl:rounded-lg xl:bg-[#b08968] xl:text-bodyBackground xl:text-lg
                            2xl:font-bold 2xl:flex 2xl:justify-center 2xl:items-center 2xl:rounded-lg 2xl:bg-[#b08968] 2xl:text-bodyBackground 2xl:text-lg 
                            
                            hover:cursor-pointer transition-all delay-75 ease-linear hover:-translate-y-1 ${selected === index ? "border-[#644b37]" : ""} border-4 border-[#b08968] p-2`}
                            onClick={() => toggleOptions(index)}
                            >
                            {option}
                            </div>
                        ))}
                    </div>
                    
                </div>

                <div className='
                absolute bottom-6 right-5
                sm:absolute sm:bottom-10 sm:right-10
                md:absolute md:bottom-10 md:right-10
                lg:absolute lg:bottom-10 lg:right-10
                xl:absolute xl:bottom-10 xl:right-10
                2xl:absolute 2xl:bottom-10 2xl:right-10'>
                    <Button 
                    className={`
                    h-12 w-36 bg-[#344e41] hover:bg-[#3d5c4c] rounded-full text-[#e6ccb2] text-base font-bold
                    sm:h-12 sm:w-36 sm:bg-[#344e41] sm:hover:bg-[#3d5c4c] sm:rounded-full sm:text-[#e6ccb2] sm:text-base sm:font-bold
                    md:h-12 md:w-36 md:bg-[#344e41] md:hover:bg-[#3d5c4c] md:rounded-full md:text-[#e6ccb2] md:text-base md:font-bold
                    lg:h-12 lg:w-36 lg:bg-[#344e41] lg:hover:bg-[#3d5c4c] lg:rounded-full lg:text-[#e6ccb2] lg:text-base lg:font-bold
                    xl:h-12 xl:w-36 xl:bg-[#344e41] xl:hover:bg-[#3d5c4c] xl:rounded-full xl:text-[#e6ccb2] xl:text-base xl:font-bold
                    2xl:h-12 2xl:w-36 2xl:bg-[#344e41] 2xl:hover:bg-[#3d5c4c] 2xl:rounded-full 2xl:text-[#e6ccb2] 2xl:text-base 2xl:font-bold ${ selected === null ? "cursor-not-allowed" : "hover:cursor-pointer" } `}
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
            <div className="
            min-h-screen w-[95%] text-3xl font-extrabold text-[#b08968] flex flex-col justify-center items-center bg-bodyBackground
            sm:min-h-screen sm:w-[95%] sm:text-3xl sm:font-extrabold sm:text-[#b08968] sm:flex sm:flex-col sm:justify-center sm:items-center sm:bg-bodyBackground
            md:min-h-screen md:w-[95%] md:text-3xl md:font-extrabold md:text-[#b08968] md:flex md:flex-col md:justify-center md:items-center md:bg-bodyBackground
            lg:min-h-screen lg:w-[95%] lg:text-3xl lg:font-extrabold lg:text-[#b08968] lg:flex lg:flex-col lg:justify-center lg:items-center lg:bg-bodyBackground
            xl:min-h-screen xl:w-[95%] xl:text-3xl xl:font-extrabold xl:text-[#b08968] xl:flex xl:flex-col xl:justify-center xl:items-center xl:bg-bodyBackground
            2xl:min-h-screen 2xl:w-[95%] 2xl:text-3xl 2xl:font-extrabold 2xl:text-[#b08968] 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center 2xl:bg-bodyBackground">
                Loading your report...
            </div>
        </> 
    )

    

    
  )
}

export default Question
