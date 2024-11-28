import React from 'react'
import Footer from '../appComponents/Footer';
import Navbar from '../appComponents/Navbar'

const HomeGallery: React.FC = () => {

    // const router = useRouter();

  const images = [
    { src: "https://img.freepik.com/free-vector/geometric-astrological-symbols-tarot-card_53876-78879.jpg", alt: "Gallery Image 1" },
    { src: "https://img.freepik.com/free-vector/zodiac-wheel-space-background_52683-10930.jpg?uid=R110538746&ga=GA1.1.653147989.1731269547&semt=ais_hybrid", alt: "Gallery Image 2" },
    { src: "https://img.freepik.com/premium-photo/horoscope-astrology-collage_23-2150719043.jpg?uid=R110538746&ga=GA1.1.653147989.1731269547&semt=ais_hybrid", alt: "Gallery Image 3" },
    { src: "https://img.freepik.com/premium-photo/horoscope-astrology-collage_23-2150719043.jpg?uid=R110538746&ga=GA1.1.653147989.1731269547&semt=ais_hybrid", alt: "Gallery Image 3" },
    { src: "https://img.freepik.com/premium-photo/horoscope-astrology-collage_23-2150719043.jpg?uid=R110538746&ga=GA1.1.653147989.1731269547&semt=ais_hybrid", alt: "Gallery Image 3" },
    { src: "https://img.freepik.com/premium-photo/horoscope-astrology-collage_23-2150719043.jpg?uid=R110538746&ga=GA1.1.653147989.1731269547&semt=ais_hybrid", alt: "Gallery Image 3" },
    { src: "https://img.freepik.com/premium-photo/horoscope-astrology-collage_23-2150719043.jpg?uid=R110538746&ga=GA1.1.653147989.1731269547&semt=ais_hybrid", alt: "Gallery Image 3" },
    { src: "https://img.freepik.com/premium-photo/horoscope-astrology-collage_23-2150719043.jpg?uid=R110538746&ga=GA1.1.653147989.1731269547&semt=ais_hybrid", alt: "Gallery Image 3" },
    { src: "https://img.freepik.com/premium-photo/horoscope-astrology-collage_23-2150719043.jpg?uid=R110538746&ga=GA1.1.653147989.1731269547&semt=ais_hybrid", alt: "Gallery Image 3" },
    { src: "https://img.freepik.com/premium-photo/horoscope-astrology-collage_23-2150719043.jpg?uid=R110538746&ga=GA1.1.653147989.1731269547&semt=ais_hybrid", alt: "Gallery Image 3" },
    { src: "https://img.freepik.com/premium-photo/horoscope-astrology-collage_23-2150719043.jpg?uid=R110538746&ga=GA1.1.653147989.1731269547&semt=ais_hybrid", alt: "Gallery Image 3" },
    { src: "https://img.freepik.com/premium-photo/horoscope-astrology-collage_23-2150719043.jpg?uid=R110538746&ga=GA1.1.653147989.1731269547&semt=ais_hybrid", alt: "Gallery Image 3" },
  ];

  return (
    <div className="h-full max-w-[80rem] flex flex-col container mx-auto px-4 py-8">
      {/* <h2 className="text-black text-3xl font-bold text-center mb-8">Image Gallery</h2> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-4">
        {images.map((image, index) => (
          <div key={index} className="flex justify-center">
            <img
              src={image.src}
              alt={image.alt}
              className="h-80 w-full max-w-sm object-cover rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
      {/* <div className="flex justify-center">
        <Button className="bg-black text-white hover:bg-gray-800"
        onClick={ () => router.push("/gallery") }
        >
          View Full Gallery
        </Button>
      </div> */}
    </div>
  );
};

function Page() {
  return (
    <div
    className='
        min-h-screen w-full flex flex-col justify-center items-center gap-y-20 bg-white
        sm:min-h-screen sm:w-full sm:flex sm:flex-col sm:justify-center sm:items-center sm:gap-y-20
        md:min-h-screen md:w-full md:flex md:flex-col md:justify-center md:items-center md:gap-y-20
        lg:min-h-screen lg:w-full lg:flex lg:flex-col lg:justify-center lg:items-center lg:gap-y-20
        xl:min-h-screen xl:w-full xl:flex xl:flex-col xl:justify-center xl:items-center xl:gap-y-20
        2xl:min-h-screen 2xl:w-full 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center 2xl:gap-y-20
    '
    >
    
        <div className='mt-10 w-full'>
            <Navbar />
        </div>

        <HomeGallery />

        <Footer />


    </div>
  )
}

export default Page
