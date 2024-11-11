import React from 'react'
import { Button } from '@/components/ui/button'

function Hero() {
  return (
    <div className='
    h-screen w-full flex flex-col justify-center items-center gap-y-20
    sm:h-screen sm:w-full sm:flex sm:flex-row sm:justify-between sm:items-center sm:gap-x-20
    md:h-screen md:w-full md:flex md:justify-between md:items-center md:gap-x-20
    lg:h-screen lg:w-full lg:flex lg:justify-between lg:items-center lg:gap-x-20
    xl:h-screen xl:w-full xl:flex xl:justify-between xl:items-center xl:gap-x-20
    2xl:h-screen 2xl:w-full 2xl:flex 2xl:justify-between 2xl:items-center 2xl:gap-x-20
    
    bg-[#fdf0d5] 
    '
    id='heroDiv'
    >
        
        <div className='
        ml-0 h-[15rem] w-[70%] flex justify-center items-center rounded-xl
        sm:ml-7 sm:h-[20rem] sm:w-[40%] sm:flex sm:justify-center sm:items-center sm:rounded-xl
        md:ml-10 md:h-[20rem] md:w-[32%] md:flex md:justify-center md:items-center md:rounded-xl
        lg:ml-14 lg:h-[25rem] lg:w-[35%] lg:flex lg:justify-center lg:items-center lg:rounded-xl
        xl:ml-20 xl:h-[30rem] xl:w-[30%] xl:flex xl:justify-center xl:items-center xl:rounded-xl
        2xl:ml-20 2xl:h-[30rem] 2xl:w-[30%] 2xl:flex 2xl:justify-center 2xl:items-center 2xl:rounded-xl
        
        bg-[#b08968] rotate-6 
        '>
            <div className='
            h-[90%] w-[90%] flex justify-center items-center rounded-xl
            sm:h-[90%] sm:w-[90%] sm:rounded-xl
            md:h-[90%] md:w-[90%] md:rounded-xl
            lg:h-[90%] lg:w-[90%] lg:rounded-xl
            xl:h-[90%] xl:w-[90%] xl:rounded-xl
            2xl:h-[90%] 2xl:w-[90%] 2xl:rounded-xl
            
            bg-[#fdf0d5] border-[#b08968] scale-105 -rotate-[10deg] border-2 
            ' >
                <img src="./arkConnection-vertical.png" alt="" className='
                h-56 w-56
                sm:h-72 sm:w-72
                md:h-72 md:w-72 lg:h-96 lg:w-96 xl:h-96 xl:w-96 2xl:h-96 2xl:w-96' />
            </div> 
        </div>
        
        <div className=' 
        mr-5 w-[80%] flex flex-col justify-center items-center gap-y-3
        sm:mr-5 sm:w-[60%] sm:flex sm:flex-col sm:justify-center sm:items-center sm:gap-y-3
        md:w-[68%] md:flex md:flex-col md:justify-center md:items-center md:gap-y-3
        lg:w-[65%] lg:flex lg:flex-col lg:justify-center lg:items-center lg:gap-y-3
        xl:w-[70%] xl:flex xl:flex-col xl:justify-center xl:items-center xl:gap-y-3
        2xl:w-[70%] 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center 2xl:gap-y-3  '>

            <div className='
            max-w-xl flex justify-center items-center text-center text-xl font-extrabold
            sm:max-w-xl sm:flex sm:justify-center sm:items-center sm:text-center sm:text-3xl sm:font-extrabold
            md:max-w-xl md:flex md:justify-center md:items-center md:text-center md:text-3xl md:font-extrabold
            lg:max-w-xl lg:flex lg:justify-center lg:items-center lg:text-center lg:text-3xl lg:font-extrabold
            xl:max-w-xl xl:flex xl:justify-center xl:items-center xl:text-center xl:text-3xl xl:font-extrabold
            2xl:max-w-xl 2xl:flex 2xl:justify-center 2xl:items-center 2xl:text-center 2xl:text-3xl 2xl:font-extrabold
            
            text-[#344e41] 
            '>
                Connecting Modern Minds with Ancient Wisdom
            </div>
            <div className='
            max-w-xl text-base text-center
            sm:max-w-xl sm:text-base sm:text-center
            md:max-w-xl md:text-base md:text-center
            lg:max-w-xl lg:text-base lg:text-center
            xl:max-w-xl xl:text-base xl:text-center
            2xl:max-w-xl 2xl:text-base 2xl:text-center 
            
            text-[#cb997e] font-bold'>
                The spiritual and healing research work and service of the last nine generations of my family are my spiritual roots.
            </div>
            <Button className='
            mt-3 h-12 w-36 text-base
            sm:mt-3 sm:h-12 sm:w-36 sm:text-base
            md:mt-3 md:h-12 md:w-36 md:text-base
            lg:mt-3 lg:h-12 lg:w-36 lg:text-base
            xl:mt-3 xl:h-12 xl:w-36 xl:text-base
            2xl:mt-3 2xl:h-12 2xl:w-36 2xl:text-base 
            
            bg-[#344e41] hover:bg-[#3d5c4c] text-[#e6ccb2] font-bold rounded-full
            '>
                Chat Now
            </Button>
        </div>

    </div>
  )
}

export default Hero
