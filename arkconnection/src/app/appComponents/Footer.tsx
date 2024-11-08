import Link from 'next/link'
import { Facebook, Twitter, Instagram, Phone, MapPin, Youtube, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#344e41] text-white h-44 w-full flex justify-center items-center">

        {/* SOCIALS LINKS */}
        <div className=' h-full w-1/3 flex flex-col justify-center items-center'>
            
            <div className='h-full w-[70%] flex flex-col justify-center items-start' >

                <div className='text-3xl my-2 font-extrabold' >
                    Social Links:
                </div>
                
                <div className=' flex justify-start gap-x-2 items-center'>
                    <Facebook className='h-5 w-5'/>
                    <div className='text-base font-bold'>Facebook</div>
                </div>

                <div className='flex justify-start gap-x-2 items-center'>
                    <Instagram className='h-5 w-5'/>
                    <div className='text-base font-bold'>Instagram</div>
                </div>

                <div className='flex justify-start gap-x-2 items-center'>
                    <Twitter className='h-5 w-5'/>
                    <div className='text-base font-bold'>Twitter</div>
                </div>

            </div>

        </div>

        {/* ADDRESS AND CONTACT */}
        <div className='h-full w-1/3 flex flex-col justify-center items-center'>

            <div className='h-full w-[70%] flex flex-col justify-center items-start' >
                
                <div className='text-3xl my-2 font-extrabold'>Get In Touch:</div>

                <div className=' flex justify-start gap-x-2 items-center' >
                    <Phone className='h-5 w-5'/>
                    <div className='text-base font-bold'>+91-987654321</div>
                </div>

                <div className=' flex justify-start gap-x-2 items-center'>
                    <MessageCircle className='h-5 w-5' />
                    <div className='text-base font-bold'>+91-987654321</div>
                </div>

                <div className=' flex justify-start gap-x-2 items-center' >
                    <MapPin className='h-5 w-5'/>
                    <div className='text-base font-bold'>Address</div>
                </div>

            </div>

           

        </div>

        {/* YOUTUBE */}
        <div className='h-full w-1/3 flex flex-col justify-center items-center ' >

            <div className='h-full w-[70%] flex flex-col justify-center items-start' >

                <div className='text-3xl my-2 font-extrabold text-red-500'>
                    Subscribe to us
                </div>
                <div className='flex justify-between gap-x-2 items-center'>
                    <Youtube className='h-14 w-14 text-red-500' />
                    <div className='text-2xl font-extrabold text-white'>
                        On Youtube
                    </div>
                </div>
                

            </div>

            

        </div>
      
    </footer>
  )
}