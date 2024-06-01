import React, { useEffect } from 'react'
import aboutimg from '../assets/banner2.jpg'

const About = () => {

    return (
        <section id='about' className='w-[90%] m-auto flex lg:flex-row flex-col justify-between items-center gap-10 px-0 py-10'>
            <div data-aos="zoom-in" data-aos-delay="200" className='lg:w-[60%] w-full'>
                <img src={aboutimg} alt="" />
            </div>
            <div className='lg:w-[40%] w-full flex flex-col justify-center items-start gap-6'>
                <h1 data-aos="zoom-in" data-aos-delay="400" className='font-rubik lg:text-[53px] text-[48px] font-semibold leading-[60px]'>Hello. We've been expecting you</h1>
                <p data-aos="zoom-in" data-aos-delay="600"  className='font-rubik text-lg leading-[30px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, totam sit ratione accusantium quidem minima est explicabo exercitationem ullam harum perferendis commodi, sed, atque ab laborum ad minus laboriosam consequuntur!</p>
                <button data-aos="zoom-in" data-aos-delay="800" className='bg-bluetheme hover:bg-redtheme rounded-xl px-10 py-4 text-white font-semibold font-rubik cursor-pointer hover:scale-105 transition-transform duration-300'>READ MORE</button>
            </div>
        </section>
    )
}

export default About