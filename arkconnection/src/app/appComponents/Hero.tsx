import React from 'react'
import { Button } from '@/components/ui/button'

function Hero() {
  return (
    <div className='h-screen w-full flex justify-between items-center gap-x-20
    
    bg-[#fdf0d5] 
    '>
        
        <div className='2xl:ml-20 2xl:h-[30rem] 2xl:w-[30%] 2xl:flex 2xl:justify-center 2xl:items-center 2xl:rounded-xl
        
        bg-[#b08968] rotate-6 
        '>
            <div className='2xl:h-[90%] 2xl:w-[90%] 2xl:rounded-xl
            
            bg-[#fdf0d5] border-[#b08968] scale-105 -rotate-[10deg] border-2 
            ' >
                <img src="./arkConnection-vertical.png" alt="" className='h-96 w-96' />
            </div> 
        </div>
        
        <div className=' 2xl:w-[70%] 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center 2xl:gap-y-3  '>
            <div className='2xl:max-w-xl 2xl:flex 2xl:justify-center 2xl:items-center 2xl:text-center 2xl:text-3xl 2xl:font-extrabold
            
            text-[#344e41] 
            '>
                Blending Vedic wisdom & modern science for holistic well-being
            </div>
            <div className='2xl:max-w-xl 2xl:text-base 2xl:text-center 
            
            text-[#cb997e] font-bold'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quibusdam provident quo molestiae, distinctio quos nemo consequatur laboriosam, dolorem aspernatur sit 
            </div>
            <Button className='2xl:mt-3 2xl:h-12 2xl:w-36 2xl:text-base 
            
            bg-[#344e41] hover:bg-[#3d5c4c] text-[#e6ccb2] font-bold rounded-full
            '>
                Chat Now
            </Button>
        </div>

    </div>
  )
}

export default Hero
