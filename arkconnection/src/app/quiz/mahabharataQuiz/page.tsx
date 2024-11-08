'use client'

import Question from '@/app/appComponents/Question'
import React, { useEffect, useState } from 'react'

function page() {

    const quizzes = [
      [
        {
          "question": "Who is considered the author of the *Mahabharata*?",
          "options": ["Vyasa", "Valmiki", "Tulsidas", "Kalidasa"],
          "answer": 0
        },
        {
          "question": "Who was the eldest of the Pandavas?",
          "options": ["Yudhishthira", "Bhima", "Arjuna", "Nakula"],
          "answer": 0
        },
        {
          "question": "Which warrior from the Kaurava side was invincible until his death?",
          "options": ["Duryodhana", "Bhishma", "Karna", "Dushasana"],
          "answer": 1
        },
        {
          "question": "What is the name of the sacred conversation between Arjuna and Krishna?",
          "options": ["Vishnu Sahasranama", "Bhagavad Gita", "Ramayana", "Mahabharata"],
          "answer": 1
        },
        {
          "question": "Who was the main antagonist of the *Mahabharata* war?",
          "options": ["Karna", "Duryodhana", "Bhishma", "Shakuni"],
          "answer": 1
        }
      ],

      [
        {
          "question": "Which character is known as the great archer of the Pandavas?",
          "options": ["Yudhishthira", "Bhima", "Arjuna", "Nakula"],
          "answer": 2
        },
        {
          "question": "Who was the mother of the Kauravas?",
          "options": ["Kunti", "Gandhari", "Satyavati", "Subhadra"],
          "answer": 1
        },
        {
          "question": "Who was the teacher of both the Pandavas and Kauravas in the *Mahabharata*?",
          "options": ["Drona", "Kripacharya", "Bhishma", "Narada"],
          "answer": 0
        },
        {
          "question": "Who is known for having caused the downfall of Draupadi during the game of dice?",
          "options": ["Duryodhana", "Shakuni", "Karna", "Bhishma"],
          "answer": 1
        },
        {
          "question": "Which epic battle is the central event of the *Mahabharata*?",
          "options": ["Kurukshetra War", "Ramayana War", "Mahapadma War", "War of the Devas"],
          "answer": 0
        }
      ],

      [
        {
          "question": "Who was the eldest son of the Kauravas?",
          "options": ["Dushasana", "Duryodhana", "Vikarna", "Dhrishtadyumna"],
          "answer": 1
        },
        {
          "question": "Which warrior was known as the *Karna* of the Pandavas?",
          "options": ["Bhima", "Draupadi", "Abhimanyu", "Arjuna"],
          "answer": 2
        },
        {
          "question": "Who was the wife of Arjuna and mother of his son Abhimanyu?",
          "options": ["Draupadi", "Subhadra", "Ulupi", "Chitrangada"],
          "answer": 1
        },
        {
          "question": "Which character had a boon that made him invincible against all warriors except Arjuna?",
          "options": ["Karna", "Bhishma", "Duryodhana", "Shakuni"],
          "answer": 0
        },
        {
          "question": "Who was the mother of the Pandavas?",
          "options": ["Gandhari", "Kunti", "Satyavati", "Subhadra"],
          "answer": 1
        }
      ]

    ]
    
    const [quizNumber, setQuizNumber] = useState<number>(1);
    const [currentQuestion, setCurrentQuestion] = useState<number>(1);

    useEffect( () => {
        const min: number = 1;
        const max: number = 100; 
        const randomNumber: number = Math.floor(Math.random() * (max - min + 1)) + min;
        setQuizNumber(randomNumber);
    }, [] )

  return (
    <div className="min-h-screen w-full flex flex-col gap-y-20 justify-center items-center 
    
    bg-bodyBackground">
        {
        quizNumber === 1
            ? ( <> <Question quiz={quizzes[0]} /> </> ) // <ComponentForQuiz1 /> 
            : quizNumber === 2
            ? ( <> <Question quiz={quizzes[1]} /> </> )  // <ComponentForQuiz2 />
            : ( <> <Question quiz={quizzes[2]} /> </> )  // <ComponentForOtherQuiz />  
        }
    </div>
  )
}

export default page
