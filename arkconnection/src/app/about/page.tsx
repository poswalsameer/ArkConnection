import React from "react";

function Page() {
  return (
    <div
      className="min-h-screen w-full flex flex-col justify-center items-center gap-y-20
    
    bg-[#fdf0d5] 
    "
    >
        <div className="2xl:mx-6 2xl:h-20 2xl:w-[95%] flex justify-center items-center text-center
    
    bg-[#ddbea9] text-[#344e41] rounded-full 
     mt-20 text-4xl font-bold">
            Gurukul reaching to your doorstep Restoring Guru Shishya Parampara
        </div>

        <div className="flex justify-between items-center gap-x-10">
        <div className=" ml-16 h-96 w-1/3 ">
          <img
            src="https://arkaconnection.in/wp-content/uploads/2023/11/maharishi.webp"
            alt=""
            className="rounded-lg h-full w-full"
          />
        </div>

        <div className="mr-16 h-96 w-2/3 flex flex-col px-10 gap-y-10 justify-center items-center bg-[#e4c6b2] rounded-lg">
          <div className="text-4xl font-bold">Acharya Alok Awasthi</div>
          <div className="text-xl text-center font-semibold">
            This is an Institution of higher learning in the field of
            Vedic-Studies and other Traditional Shastras. The words Astronomy
            and Astrology have distinct meanings in this modern world: Astronomy
            is the scientific study of the physical universe. Astrology is the
            practice of relating heavenly bodies with the lives and the events
            on earth. The split between Astronomy and Astrology is a feature of
            today’s lifestyle thought.
          </div>
        </div>


        </div>
    
        <div className="mx-10 text-lg font-bold flex flex-col gap-y-4">
        <p>The concept of Astrology has emerged from the belief and the faith of people who remain orthodox to the traditional aspect of predictions. Today, the Astrology developed by Maharishi Kapi is considered as a science of stars, planets, and celestial bodies to extract information about people’s lives, human happenings, future, and other earthly topics.</p>

        <p>Here we have a specialization in this field of knowledge but, very few have that specialized in Maharishi Kapi expertise and are considered to be experts in it.</p>

        <p>Are you working in the Marketing department ? or are you with some operation teams where you have to lead or maybe follow teamwork to upgrade more ? Are you in the accounts departments ? or in the front office ?</p>

        <p>What are your goals and visions for your career ? If you do not have any clarity ? , or if you know what you want, but don’t know the path to reach there ?</p>

        <p>Defending the move Acharya Alok Awasthi (founder of Maharishi Kapi) said that astrology qualifies as a science, which he defined as “a subject that needs probing, investigation and research”.</p>

        <p>Acharya Alok Awasthi explored this field of Astrology and Astronomy with different perspective with the help of his by born expertise of Decoding mantras of Vedas and Upanishads and interpreted Astrology for corporate world.</p>

        <p>He started practicing Organization’s sections /departments and invented these courses for each designation so that they can work on their dominant Astronomy and perform successfully to achieve their goals step by step.</p>

        <p>This is a unique course that deals with the ways in which human beings attribute meaning to the planets, stars and sky, and construct cosmologies that provide the basis for culture and society.</p>

        <p>Here we are discussing about astrology and  astronomy while exploring studies his relation with numbers  manifested his thought about  astronomy.</p>

        <p>Maharishi Kapi served us short path towards our goals to defined roles, he formatted  the following courses to up-built our strength into implementations and he created a platform for us emerged this magical science into one format.</p>

        </div>

        {/* OUR MISSION */}
        <div className="w-full flex flex-col justify-center gap-y-5">
            <div className="ml-10 text-4xl font-bold">Our Mission</div>

            <div className="text-xl ml-10 font-bold">
                <ul className="list-disc">
                    <li>To impart education in Vedic Science in the modern context.</li>
                    <li>To provide higher lifestyle education in Veda, Upanishad, Astrology, Numerology, Vastu, Meditation, Ayurveda and other traditional subjects.</li>
                    <li>To recognize the students with certification of scholar from Maharishi Kapi with respect to above mentioned subjects.</li>
                    <li>To conduct courses, workshops, lectures & demonstrations in the Vedic and allied Tradition for the help of people across the world.</li>
                </ul>
            
            </div>
        </div>

        {/* OUR VISION */}
        <div className="w-full flex flex-col justify-center gap-y-5">
            <div className="ml-10 text-4xl font-bold">Our Vision</div>

            <div className="text-xl mx-10 font-bold">
                To establish Spiritual well-being through Vedic Knowledge, a high level of faith, like through Vedas Yoga etc., and to create commitment and behavior relating to ‘Vedic world view’ which provides a high sense of meaning and purpose to existence in general, and that offers an ethical path to personal fulfillment and self-realization.
            
            </div>
        </div>

    </div>
  );
}

export default Page;
