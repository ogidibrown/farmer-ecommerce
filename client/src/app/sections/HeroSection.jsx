'use client'
import Image from 'next/image'
import Carousel from '../components/Carousel'




const Slides = [
    "/hero1.jpg",
    "/hero2.jpg",
    "/hero3.jpg",
    "/hero4.jpg"
]

const HeroSection = () => {
  return (
    <div className="">
        <Carousel autoSlide={true} autoSlideInterval={4000} >
            {Slides.map((s)=>(
                <Image src={s} width={900} height={900} alt="hero images" className='  h-[400px] md:min-h-screen md:min-w-full  w-full ' />
            ))}
            
        </Carousel>
    </div>
  )
}

export default HeroSection