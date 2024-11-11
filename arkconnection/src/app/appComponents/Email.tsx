import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

function Email() {
  return (
    <div className='
    h-56 w-[80%] my-20 bg-[#344e41] flex flex-col justify-between items-center rounded-lg 
    sm:h-32 sm:w-[80%] sm:my-20 sm:bg-[#344e41] sm:flex sm:flex-row sm:justify-between sm:items-center sm:rounded-lg 
    md:h-32 md:w-[80%] md:my-20 md:bg-[#344e41] md:flex md:justify-between md:items-center md:rounded-lg
    lg:h-32 lg:w-[80%] lg:my-20 lg:bg-[#344e41] lg:flex lg:justify-between lg:items-center lg:rounded-lg
    xl:h-32 xl:w-[80%] xl:my-20 xl:bg-[#344e41] xl:flex xl:justify-between xl:items-center xl:rounded-lg
    2xl:h-32 2xl:w-[80%] 2xl:my-20 2xl:bg-[#344e41] 2xl:flex 2xl:justify-between 2xl:items-center 2xl:rounded-lg ' >    

    {/* LEFT PART */}
    <div className='
    h-full w-full ml-0 flex flex-col gap-y-1 justify-center items-center
    sm:h-full sm:w-1/2 sm:ml-7 sm:flex sm:flex-col sm:gap-y-1 sm:justify-center sm:items-start
    md:h-full md:w-1/2 md:ml-7 md:flex md:flex-col md:gap-y-1 md:justify-center md:items-start
    lg:h-full lg:w-1/2 lg:ml-10 lg:flex lg:flex-col lg:gap-y-1 lg:justify-center lg:items-start
    xl:h-full xl:w-1/2 xl:ml-10 xl:flex xl:flex-col xl:gap-y-1 xl:justify-center xl:items-start
    2xl:h-full 2xl:w-1/2 2xl:ml-10 2xl:flex 2xl:flex-col 2xl:gap-y-1 2xl:justify-center 2xl:items-start '>
        <div className='
        text-xl font-extrabold
        sm:text-xl sm:font-extrabold
        md:text-2xl md:font-extrabold
        lg:text-3xl lg:font-extrabold
        xl:text-3xl xl:font-extrabold
        2xl:text-3xl 2xl:font-extrabold'>
            Want to join us?
        </div>
        <div className='
        text-sm font-bold text-[#fdf0d5]
        sm:text-sm sm:font-bold sm:text-[#fdf0d5]
        md:text-base md:font-bold md:text-[#fdf0d5]
        lg:text-base lg:font-bold lg:text-[#fdf0d5]
        xl:text-base xl:font-bold xl:text-[#fdf0d5]
        2xl:text-base 2xl:font-bold 2xl:text-[#fdf0d5]'
        
        id='emailDivSmallText'
        >
            Subscribe to our email and get the latest notifications
        </div>
    </div>

    {/* RIGHT PART */}
    <div className='
    h-full w-full mr-0 flex justify-center items-center
    sm:h-full sm:w-1/2 sm:mr-7 sm:flex sm:justify-end sm:items-center
    md:h-full md:w-1/2 md:mr-7 md:flex md:justify-end md:items-center
    lg:h-full lg:w-1/2 lg:mr-10 lg:flex lg:justify-end lg:items-center
    xl:h-full xl:w-1/2 xl:mr-10 xl:flex xl:justify-end xl:items-center
    2xl:h-full 2xl:w-1/2 2xl:mr-10 2xl:flex 2xl:justify-end 2xl:items-center '>

        <div className='
        h-16 w-[70%] p-1 flex justify-center items-center bg-white rounded-full
        sm:h-16 sm:w-[70%] sm:p-1 sm:flex sm:justify-center sm:items-center sm:bg-white sm:rounded-full
        md:h-16 md:w-[70%] md:p-1 md:flex md:justify-center md:items-center md:bg-white md:rounded-full
        lg:h-16 lg:w-[70%] lg:p-1 lg:flex lg:justify-center lg:items-center lg:bg-white lg:rounded-full
        xl:h-16 xl:w-[70%] xl:p-1 xl:flex xl:justify-center xl:items-center xl:bg-white xl:rounded-full
        2xl:h-16 2xl:w-[70%] 2xl:p-1 2xl:flex 2xl:justify-center 2xl:items-center 2xl:bg-white 2xl:rounded-full' >

            <Input className=' 
            h-full w-[80%] text-black text-sm font-bold rounded-l-full bg-slate-200
            sm:h-full sm:w-[80%] sm:text-black sm:text-sm sm:font-bold sm:rounded-l-full sm:bg-slate-200
            md:h-full md:w-[70%] md:text-black md:text-sm md:font-bold md:rounded-l-full md:bg-slate-200
            lg:h-full lg:w-[70%] lg:text-black lg:text-lg lg:font-bold lg:rounded-l-full lg:bg-slate-200
            xl:h-full xl:w-[70%] xl:text-black xl:text-lg xl:font-bold xl:rounded-l-full xl:bg-slate-200
            2xl:h-full 2xl:w-[70%] 2xl:text-black 2xl:text-lg 2xl:font-bold 2xl:rounded-l-full 2xl:bg-slate-200'
            placeholder='Enter your email'
            >
            </Input>
            <Button className='
            h-full w-[30%] text-sm font-bold rounded-r-full bg-[#b08968] hover:bg-[#906e52]
            sm:h-full sm:w-[30%] sm:text-sm sm:font-bold sm:rounded-r-full sm:bg-[#b08968] sm:hover:bg-[#906e52]
            md:h-full md:w-[30%] md:text-sm md:font-bold md:rounded-r-full md:bg-[#b08968] md:hover:bg-[#906e52]
            lg:h-full lg:w-[30%] lg:text-lg lg:font-bold lg:rounded-r-full lg:bg-[#b08968] lg:hover:bg-[#906e52]
            xl:h-full xl:w-[30%] xl:text-lg xl:font-bold xl:rounded-r-full xl:bg-[#b08968] xl:hover:bg-[#906e52]
            2xl:h-full 2xl:w-[30%] 2xl:text-lg 2xl:font-bold 2xl:rounded-r-full 2xl:bg-[#b08968] 2xl:hover:bg-[#906e52] '>
                Join
            </Button>

        </div>

    </div>

    </div>
  )
}

export default Email
