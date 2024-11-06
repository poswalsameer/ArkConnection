import React, { useState } from 'react'

function Question() {

    const [selected, setSelected] = useState<number | null>(null);

    const toggleOptions = (index: number) => {

        if( selected === index ){
            setSelected(null);
        }
        else{
            setSelected(index);
        }
        
    }

  return (
    <div className="min-h-screen w-[95%] flex flex-col gap-y-10 justify-center items-center bg-bodyBackground">
        
        <div className='h-44 w-full bg-[#b08968] ' ></div>

        <div className='h-44 w-full grid grid-cols-2 gap-10  '>

            <div className={`flex justify-center items-center rounded-lg bg-[#b08968] hover:cursor-pointer ${ selected === 0 ? "border-2 border-[#344e41] " : "" } `}
            onClick={ () => toggleOptions(0)}
            >
                Option A
            </div>
            <div className={`flex justify-center items-center rounded-lg bg-[#b08968] hover:cursor-pointer ${ selected === 1 ? "border-2 border-[#344e41] " : "" } `}
            onClick={() => toggleOptions(1)}
            >
                Option B
            </div>
            <div className={`flex justify-center items-center rounded-lg bg-[#b08968] hover:cursor-pointer ${ selected === 2 ? "border-2 border-[#344e41] " : "" } `}
            onClick={() => toggleOptions(2)}
            >
                Option C
            </div>
            <div className={`flex justify-center items-center rounded-lg bg-[#b08968] hover:cursor-pointer ${ selected === 3 ? "border-2 border-[#344e41] " : "" } `}
            onClick={() => toggleOptions(3)}
            >
                Option D
            </div>

        </div>

    </div>
  )
}

export default Question
