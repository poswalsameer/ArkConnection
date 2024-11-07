'use client'

import Question from '@/app/appComponents/Question';
import React, { useState, useEffect } from 'react'

function page() {

    const quizzes = [ 

      [
      {
        "question": "Who was the father of Lord Rama?",
        "options": ["Dasharatha", "Vishwamitra", "Janaka", "Sugriva"],
        "answer": "Dasharatha"
      },
      {
        "question": "Which kingdom was ruled by Ravana?",
        "options": ["Ayodhya", "Mithila", "Kishkindha", "Lanka"],
        "answer": "Lanka"
      },
      {
        "question": "Who helped Lord Rama in building a bridge to Lanka?",
        "options": ["Hanuman", "Vibhishana", "Sugriva", "Nala and Nila"],
        "answer": "Nala and Nila"
      },
      {
        "question": "What was the name of Lord Rama's devoted wife?",
        "options": ["Mandodari", "Kaikeyi", "Sita", "Urmila"],
        "answer": "Sita"
      },
      {
        "question": "Who was the mother of the demon king Ravana?",
        "options": ["Kaushalya", "Mandodari", "Kaikeyi", "Kaikesi"],
        "answer": "Kaikesi"
      }
      ],
      
      [
        {
          "question": "Who was the mentor and teacher of Lord Rama?",
          "options": ["Vishwamitra", "Vashistha", "Valmiki", "Narada"],
          "answer": "Vashistha"
        },
        {
          "question": "Who was Ravana's primary ally and trusted companion during the battle with Lord Rama?",
          "options": ["Kumbhakarna", "Vibhishana", "Indrajeet", "Shurpanakha"],
          "answer": "Kumbhakarna"
        },
        {
          "question": "Which demoness tried to seduce Lord Rama and later played a pivotal role in his exile?",
          "options": ["Shurpanakha", "Tataka", "Surasa", "Trijata"],
          "answer": "Shurpanakha"
        },
        {
          "question": "Who was the monkey king who helped Rama during the war against Ravana?",
          "options": ["Sugriva", "Hanuman", "Angada", "Vibhishana"],
          "answer": "Sugriva"
        },
        {
          "question": "Which sacred river did Lord Rama bathe in before beginning his journey to rescue Sita?",
          "options": ["Yamuna", "Ganga", "Sarasvati", "Godavari"],
          "answer": "Ganga"
        }
      ],

      [
        {
          "question": "Who was the one who informed Rama about Sita's abduction by Ravana?",
          "options": ["Hanuman", "Jatayu", "Sugriva", "Vibhishana"],
          "answer": "Jatayu"
        },
        {
          "question": "Which city was Sita originally from?",
          "options": ["Ayodhya", "Mithila", "Lanka", "Kishkindha"],
          "answer": "Mithila"
        },
        {
          "question": "Which demon did Lord Rama kill at the beginning of his exile, during the journey to the forest?",
          "options": ["Tataka", "Maricha", "Surpanakha", "Vibhishana"],
          "answer": "Tataka"
        },
        {
          "question": "What was the name of the bow that Lord Rama broke during his marriage ceremony with Sita?",
          "options": ["Pinaka", "Sharanga", "Maheswara", "Vajra"],
          "answer": "Pinaka"
        },
        {
          "question": "Who was the loyal brother of Ravana who defected to Lord Rama's side?",
          "options": ["Kumbhakarna", "Vibhishana", "Bibhishana", "Indrajeet"],
          "answer": "Vibhishana"
        }
      ]

  ]


    const [quizNumber, setQuizNumber] = useState<number>(0);
    const [currentQuestion, setCurrentQuestion] = useState<number>(1);
  
    useEffect( () => {
        const min: number = 0;
        const max: number = 2; 
        const randomNumber: number = Math.floor(Math.random() * (max - min + 1)) + min;
        setQuizNumber(randomNumber);
    }, [] )

    useEffect( () => {
      console.log("Value inside quizNumber: ", quizNumber);
    }, [] )

  return (
    <div className="min-h-screen w-full flex flex-col gap-y-20 justify-center items-center bg-bodyBackground">
        <div className="min-h-screen w-full flex flex-col gap-y-20 justify-center items-center bg-bodyBackground">
            {
            quizNumber === 0
                ? ( <> <Question quiz={quizzes[0]} /> </> ) 
                : quizNumber === 1
                ? ( <> <Question quiz={quizzes[1]} /> </> ) 
                : ( <> <Question quiz={quizzes[2]} /> </> ) 
            }
        </div>
    </div>
  )
}

export default page