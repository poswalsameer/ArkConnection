import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

function Email() {
  return (
    <div className=' h-32 w-[80%] my-20 bg-[#344e41] flex justify-between items-center rounded-lg ' >    

    {/* LEFT PART */}
    <div className='h-full w-1/2 ml-10 flex flex-col gap-y-1 justify-center items-start '>
        <div className='text-3xl font-extrabold'>
            Want to join us?
        </div>
        <div className='text-base font-bold text-[#fdf0d5]'>
            Subscribe to our email and get the latest notifications
        </div>
    </div>

    {/* RIGHT PART */}
    <div className='h-full w-1/2 mr-10 flex justify-end items-center '>

        <div className='h-16 w-[70%] p-1 flex justify-center items-center bg-white rounded-full' >

            <Input className=' h-full w-[70%] text-lg font-bold rounded-l-full bg-slate-200'
            placeholder='Enter your email'
            >
            </Input>
            <Button className='h-full w-[30%] text-lg font-bold rounded-r-full bg-[#b08968] hover:bg-[#906e52] '>
                Join
            </Button>

        </div>

    </div>

    </div>
  )
}

export default Email
