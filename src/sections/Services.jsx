import React from 'react'
import servicesimg from '../assets/banner1.jpg'
import { PiStrategyBold } from "react-icons/pi";
import { SiCoinmarketcap } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";

const Services = () => {
    return (
        <section id='services' className='w-[90%] m-auto flex lg:flex-row flex-col justify-between items-center gap-10 px-0 py-10'>

            <div className='lg:w-[50%] w-full flex flex-col justify-center items-start gap-10'>
                <h1 data-aos="zoom-in" data-aos-delay="200" className='font-rubik lg:text-[53px] text-[48px] font-semibold leading-[60px]'>Boost Your Brand With These Key Features</h1>
                <div data-aos="zoom-in" data-aos-delay="400" id='services-box' className='flex lg:flex-row flex-col justify-center items-center gap-10'>
                    <div className='flex flex-col justify-center items-center gap-4'>
                        <PiStrategyBold className=' text-redtheme size-16' />
                        <h1 className='text-2xl font-rubik text-black font-regular'>Strategy</h1>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-4'>
                        <SiCoinmarketcap className=' text-redtheme size-16' />
                        <h1 className='text-2xl font-rubik text-black font-regular'>Marketting</h1>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-4'>
                        <MdDesignServices className=' text-redtheme size-16' />
                        <h1 className='text-2xl font-rubik text-black font-regular'>Design</h1>
                    </div>
                </div>
                <p data-aos="zoom-in" data-aos-delay="600" className='font-rubik text-lg leading-[30px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, totam sit ratione accusantium quidem minima est explicabo exercitationem ullam harum perferendis commodi, sed, atque ab laborum ad minus laboriosam consequuntur!</p>
                <button data-aos="zoom-in" data-aos-delay="800" className='bg-bluetheme hover:bg-redtheme rounded-xl px-10 py-4 text-white font-semibold font-rubik cursor-pointer hover:scale-105 transition-transform duration-300'>READ MORE</button>
            </div>
            <div data-aos="zoom-in" data-aos-delay="1000" className='lg:w-[50%] w-full'>
                <img src={servicesimg} alt="" />
            </div>
        </section>
    )
}

export default Services