import React from 'react'
import { Button } from '@/components/ui/button'

function Hero() {
  return (
    <div className='h-screen w-full bg-[#fdf0d5] flex justify-between items-center gap-x-20'>
        
        <div className='ml-20 h-[30rem] w-[30%] flex justify-center items-center bg-[#b08968] rotate-6 rounded-xl'>
            <div className='h-[90%] w-[90%] border-2 border-[#b08968] scale-105 -rotate-[10deg] bg-[#fdf0d5] rounded-xl' >
                <img src="./arkConnection-vertical.png" alt="" className='h-96 w-96' />
            </div> 
        </div>
        
        <div className=' w-[70%] flex flex-col justify-center items-center gap-y-3  '>
            <div className='max-w-xl flex text-[#344e41] justify-center items-center text-center text-3xl font-extrabold'>
                Blending Vedic wisdom & modern science for holistic well-being
            </div>
            <div className='max-w-xl text-base text-center text-[#cb997e] font-bold'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quibusdam provident quo molestiae, distinctio quos nemo consequatur laboriosam, dolorem aspernatur sit 
            </div>
            <Button className='mt-3 h-12 w-36 bg-[#344e41] hover:bg-[#3d5c4c] rounded-full text-[#e6ccb2] text-base font-bold hover:'>
                Chat Now
            </Button>
        </div>

    </div>
  )
}

export default Hero
