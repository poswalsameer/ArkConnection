import Link from 'next/link'
import { Facebook, Twitter, Instagram, Phone, MapPin, Youtube, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="
    h-[20rem] w-full flex flex-col justify-center items-center
    sm:h-44 sm:w-full sm:flex sm:flex-row sm:justify-center sm:items-center
    md:h-44 md:w-full md:flex md:justify-center md:items-center
    lg:h-44 lg:w-full lg:flex lg:justify-center lg:items-center
    xl:h-44 xl:w-full xl:flex xl:justify-center xl:items-center
    2xl:h-44 2xl:w-full 2xl:flex 2xl:justify-center 2xl:items-center
    
    bg-[#344e41] text-white 
    ">

        {/* SOCIALS LINKS */}
        <div className=' 
        h-1/3 w-full flex flex-col justify-center items-center
        sm:h-full sm:w-1/3 sm:flex sm:flex-col sm:justify-center sm:items-center
        md:h-full md:w-1/3 md:flex md:flex-col md:justify-center md:items-center
        lg:h-full lg:w-1/3 lg:flex lg:flex-col lg:justify-center lg:items-center
        xl:h-full xl:w-1/3 xl:flex xl:flex-col xl:justify-center xl:items-center
        2xl:h-full 2xl:w-1/3 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center'>
            
            <div className='
            h-full w-[70%] flex flex-col justify-center items-center
            sm:h-full sm:w-[70%] sm:flex sm:flex-col sm:justify-center sm:items-start
            md:h-full md:w-[70%] md:flex md:flex-col md:justify-center md:items-start
            lg:h-full lg:w-[70%] lg:flex lg:flex-col lg:justify-center lg:items-start
            xl:h-full xl:w-[70%] xl:flex xl:flex-col xl:justify-center xl:items-start
            2xl:h-full 2xl:w-[70%] 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-start' >

                <div className='
                text-xl my-2 font-extrabold
                sm:text-xl sm:my-2 sm:font-extrabold
                md:text-2xl md:my-2 md:font-extrabold
                lg:text-3xl lg:my-2 lg:font-extrabold
                xl:text-3xl xl:my-2 xl:font-extrabold
                2xl:text-3xl 2xl:my-2 2xl:font-extrabold' >
                    Social Links:
                </div>

                <div className='
                flex flex-col justify-center items-start gap-y-1
                sm:flex sm:flex-col sm:justify-center sm:items-start sm:gap-y-1
                md:flex md:flex-col md:justify-center md:items-start md:gap-y-1
                lg:flex lg:flex-col lg:justify-center lg:items-start lg:gap-y-1
                xl:flex xl:flex-col xl:justify-center xl:items-start xl:gap-y-1
                2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-start 2xl:gap-y-1' >

                    <Link className=' 
                    flex justify-start gap-x-2 items-center hover:cursor-pointer
                    sm:flex sm:justify-start sm:gap-x-2 sm:items-center sm:hover:cursor-pointer
                    md:flex md:justify-start md:gap-x-2 md:items-center md:hover:cursor-pointer
                    lg:flex lg:justify-start lg:gap-x-2 lg:items-center lg:hover:cursor-pointer
                    xl:flex xl:justify-start xl:gap-x-2 xl:items-center xl:hover:cursor-pointer
                    2xl:flex 2xl:justify-start 2xl:gap-x-2 2xl:items-center 2xl:hover:cursor-pointer' href="https://www.facebook.com/maharishikapi?mibextid=ZbWKwL">
                        <Facebook className='
                        h-3 w-3
                        sm:h-3 sm:w-3
                        md:h-4 md:w-4
                        lg:h-5 lg:w-5
                        xl:h-5 xl:w-5
                        2xl:h-5 2xl:w-5'/>
                        <div className='
                        text-xs font-bold
                        sm:text-xs sm:font-bold
                        md:text-sm md:font-bold
                        lg:text-base lg:font-bold
                        xl:text-base xl:font-bold
                        2xl:text-base 2xl:font-bold'>Facebook</div>
                    </Link>

                    <Link className='
                    flex justify-start gap-x-2 items-center hover:cursor-pointer
                    sm:flex sm:justify-start sm:gap-x-2 sm:items-center sm:hover:cursor-pointer
                    md:flex md:justify-start md:gap-x-2 md:items-center md:hover:cursor-pointer
                    lg:flex lg:justify-start lg:gap-x-2 lg:items-center lg:hover:cursor-pointer
                    xl:flex xl:justify-start xl:gap-x-2 xl:items-center xl:hover:cursor-pointer
                    2xl:flex 2xl:justify-start 2xl:gap-x-2 2xl:items-center 2xl:hover:cursor-pointer' href="#">
                        <Instagram className='
                        h-3 w-3
                        sm:h-3 sm:w-3
                        md:h-4 md:w-4
                        lg:h-5 lg:w-5
                        xl:h-5 xl:w-5
                        2xl:h-5 2xl:w-5'/>
                        <div className='
                        text-xs font-bold
                        sm:text-xs sm:font-bold
                        md:text-sm md:font-bold
                        lg:text-sm lg:font-bold
                        xl:text-base xl:font-bold
                        2xl:text-base 2xl:font-bold'>Instagram</div>
                    </Link>

                    <Link className='
                    flex justify-start gap-x-2 items-center hover:cursor-pointer
                    sm:flex sm:justify-start sm:gap-x-2 sm:items-center sm:hover:cursor-pointer
                    md:flex md:justify-start md:gap-x-2 md:items-center md:hover:cursor-pointer
                    lg:flex lg:justify-start lg:gap-x-2 lg:items-center lg:hover:cursor-pointer
                    xl:flex xl:justify-start xl:gap-x-2 xl:items-center xl:hover:cursor-pointer
                    2xl:flex 2xl:justify-start 2xl:gap-x-2 2xl:items-center 2xl:hover:cursor-pointer' href='#'>
                        <Twitter className='
                        h-3 w-3
                        sm:h-3 sm:w-3
                        md:h-4 md:w-4
                        lg:h-5 lg:w-5
                        xl:h-5 xl:w-5
                        2xl:h-5 2xl:w-5'/>
                        <div className='
                        text-xs font-bold
                        sm:text-xs sm:font-bold
                        md:text-sm md:font-bold
                        lg:text-sm lg:font-bold
                        xl:text-base xl:font-bold
                        2xl:text-base 2xl:font-bold'>Twitter</div>
                    </Link>

                </div>
                
                

            </div>

        </div>

        {/* ADDRESS AND CONTACT */}
        <div className='
        h-1/3 w-full flex flex-col justify-center items-center
        sm:h-full sm:w-1/3 sm:flex sm:flex-col sm:justify-center sm:items-center
        md:h-full md:w-1/3 md:flex md:flex-col md:justify-center md:items-center
        lg:h-full lg:w-1/3 lg:flex lg:flex-col lg:justify-center lg:items-center
        xl:h-full xl:w-1/3 xl:flex xl:flex-col xl:justify-center xl:items-center
        2xl:h-full 2xl:w-1/3 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center'>

            <div className='
            h-full w-[70%] flex flex-col justify-center items-center
            sm:h-full sm:w-[70%] sm:flex sm:flex-col sm:justify-center sm:items-start
            md:h-full md:w-[70%] md:flex md:flex-col md:justify-center md:items-start
            lg:h-full lg:w-[70%] lg:flex lg:flex-col lg:justify-center lg:items-start
            xl:h-full xl:w-[70%] xl:flex xl:flex-col xl:justify-center xl:items-start
            2xl:h-full 2xl:w-[70%] 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-start' >
                
                <div className='
                text-xl my-2 font-extrabold
                sm:text-xl sm:my-2 sm:font-extrabold
                md:text-2xl md:my-2 md:font-extrabold
                lg:text-3xl lg:my-2 lg:font-extrabold
                xl:text-3xl xl:my-2 xl:font-extrabold
                2xl:text-3xl 2xl:my-2 2xl:font-extrabold'>Get In Touch:</div>
                
                <div className='
                flex flex-col justify-center items-start gap-y-1
                sm:flex sm:flex-col sm:justify-center sm:items-start sm:gap-y-1
                md:flex md:flex-col md:justify-center md:items-start md:gap-y-1
                lg:flex lg:flex-col lg:justify-center lg:items-start lg:gap-y-1
                xl:flex xl:flex-col xl:justify-center xl:items-start xl:gap-y-1
                2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-start 2xl:gap-y-1'>

                    <div className=' 
                    flex justify-start gap-x-2 items-center hover:cursor-pointer
                    sm:flex sm:justify-start sm:gap-x-2 sm:items-center sm:hover:cursor-pointer
                    md:flex md:justify-start md:gap-x-2 md:items-center md:hover:cursor-pointer
                    lg:flex lg:justify-start lg:gap-x-2 lg:items-center lg:hover:cursor-pointer
                    xl:flex xl:justify-start xl:gap-x-2 xl:items-center xl:hover:cursor-pointer
                    2xl:flex 2xl:justify-start 2xl:gap-x-2 2xl:items-center 2xl:hover:cursor-pointer' >
                        <Phone className='
                        h-3 w-3
                        sm:h-3 sm:w-3
                        md:h-4 md:w-4
                        lg:h-5 lg:w-5
                        xl:h-5 xl:w-5
                        2xl:h-5 2xl:w-5'/>
                        <div className='
                        text-xs font-bold
                        sm:text-xs sm:font-bold
                        md:text-sm md:font-bold
                        lg:text-base lg:font-bold
                        xl:text-base xl:font-bold
                        2xl:text-base 2xl:font-bold'>+91-8510979331</div>
                    </div>

                    <div className=' 
                    flex justify-start gap-x-2 items-center hover:cursor-pointer
                    sm:flex sm:justify-start sm:gap-x-2 sm:items-center sm:hover:cursor-pointer
                    md:flex md:justify-start md:gap-x-2 md:items-center md:hover:cursor-pointer
                    lg:flex lg:justify-start lg:gap-x-2 lg:items-center lg:hover:cursor-pointer
                    xl:flex xl:justify-start xl:gap-x-2 xl:items-center xl:hover:cursor-pointer
                    2xl:flex 2xl:justify-start 2xl:gap-x-2 2xl:items-center 2xl:hover:cursor-pointer'>
                        <MessageCircle className='
                        h-3 w-3
                        sm:h-3 sm:w-3
                        md:h-4 md:w-4
                        lg:h-5 lg:w-5
                        xl:h-5 xl:w-5
                        2xl:h-5 2xl:w-5' />
                        <div className='
                        text-xs font-bold
                        sm:text-xs sm:font-bold
                        md:text-sm md:font-bold
                        lg:text-base lg:font-bold
                        xl:text-base xl:font-bold
                        2xl:text-base 2xl:font-bold'>+91-8510979331</div>
                    </div>

                    <div className=' 
                    flex justify-start gap-x-2 items-center hover:cursor-pointer
                    sm:flex sm:justify-start sm:gap-x-2 sm:items-center sm:hover:cursor-pointer
                    md:flex md:justify-start md:gap-x-2 md:items-center md:hover:cursor-pointer
                    lg:flex lg:justify-start lg:gap-x-2 lg:items-center lg:hover:cursor-pointer
                    xl:flex xl:justify-start xl:gap-x-2 xl:items-center xl:hover:cursor-pointer
                    2xl:flex 2xl:justify-start 2xl:gap-x-2 2xl:items-center 2xl:hover:cursor-pointer' >
                        <MapPin className='
                        h-3 w-3
                        sm:h-3 sm:w-3
                        md:h-4 md:w-4
                        lg:h-5 lg:w-5
                        xl:h-5 xl:w-5
                        2xl:h-5 2xl:w-5'/>
                        <div className='
                        text-xs font-bold
                        sm:text-xs sm:font-bold
                        md:text-sm md:font-bold
                        lg:text-base lg:font-bold
                        xl:text-base xl:font-bold
                        2xl:text-base 2xl:font-bold'>Noida, Bharat - 201301</div>
                    </div>

                </div>

                

            </div>

           

        </div>

        {/* YOUTUBE */}
        <div className='
        h-1/3 w-full flex flex-col justify-center items-center
        sm:h-full sm:w-1/3 sm:flex sm:flex-col sm:justify-center sm:items-center
        md:h-full md:w-1/3 md:flex md:flex-col md:justify-center md:items-center
        lg:h-full lg:w-1/3 lg:flex lg:flex-col lg:justify-center lg:items-center 
        xl:h-full xl:w-1/3 xl:flex xl:flex-col xl:justify-center xl:items-center 
        2xl:h-full 2xl:w-1/3 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center ' >

            <div className='
            h-full w-[70%] flex flex-col justify-center items-center
            sm:h-full sm:w-[70%] sm:flex sm:flex-col sm:justify-center sm:items-start
            md:h-full md:w-[70%] md:flex md:flex-col md:justify-center md:items-start
            lg:h-full lg:w-[70%] lg:flex lg:flex-col lg:justify-center lg:items-start
            xl:h-full xl:w-[70%] xl:flex xl:flex-col xl:justify-center xl:items-start
            2xl:h-full 2xl:w-[70%] 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-start' >

                <div className='
                text-lg my-2 font-extrabold text-red-500
                sm:text-lg sm:my-2 sm:font-extrabold sm:text-red-500
                md:text-xl md:my-2 md:font-extrabold md:text-red-500
                lg:text-3xl lg:my-2 lg:font-extrabold lg:text-red-500
                xl:text-3xl xl:my-2 xl:font-extrabold xl:text-red-500
                2xl:text-3xl 2xl:my-2 2xl:font-extrabold 2xl:text-red-500'>
                    Subscribe to us
                </div>
                <Link className='
                flex justify-between gap-x-2 items-center
                sm:flex sm:justify-between sm:gap-x-2 sm:items-center
                md:flex md:justify-between md:gap-x-2 md:items-center
                lg:flex lg:justify-between lg:gap-x-2 lg:items-center
                xl:flex xl:justify-between xl:gap-x-2 xl:items-center
                2xl:flex 2xl:justify-between 2xl:gap-x-2 2xl:items-center' href="https://youtube.com/@Maharishikapi?si=qp2D3AGCOqzfy7gL" >
                    <Youtube className='
                    h-10 w-10 text-red-500 transition-all delay-75 ease-linear hover:cursor-pointer hover:scale-105
                    sm:h-10 sm:w-10 sm:text-red-500 sm:transition-all sm:delay-75 sm:ease-linear sm:hover:cursor-pointer sm:hover:scale-105
                    md:h-10 md:w-10 md:text-red-500 md:transition-all md:delay-75 md:ease-linear md:hover:cursor-pointer md:hover:scale-105
                    lg:h-14 lg:w-14 lg:text-red-500 lg:transition-all lg:delay-75 lg:ease-linear lg:hover:cursor-pointer lg:hover:scale-105
                    xl:h-14 xl:w-14 xl:text-red-500 xl:transition-all xl:delay-75 xl:ease-linear xl:hover:cursor-pointer xl:hover:scale-105
                    2xl:h-14 2xl:w-14 2xl:text-red-500 2xl:transition-all 2xl:delay-75 2xl:ease-linear 2xl:hover:cursor-pointer 2xl:hover:scale-105' />
                    <div className='
                    text-sm font-extrabold text-white
                    sm:text-sm sm:font-extrabold sm:text-white
                    md:text-lg md:font-extrabold md:text-white
                    lg:text-2xl lg:font-extrabold lg:text-white
                    xl:text-2xl xl:font-extrabold xl:text-white
                    2xl:text-2xl 2xl:font-extrabold 2xl:text-white'>
                        On Youtube
                    </div>
                </Link>
                

            </div>

            

        </div>
      
    </footer>
  )
}