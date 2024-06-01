import React, { useEffect } from 'react'
import herobanner from '../assets/team3.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
        });
    }, [])

    return (
        <section id='home' className=' bg-bluetheme w-full h-fit'>
            <div className='lg:w-[80%] w-full m-auto flex lg:flex-row flex-col justify-between items-center px-0 py-20'>
                <div data-aos="slide-left" data-aos-delay="200" className='lg:w-[50%] w-[80%]'>
                    <img src={herobanner} alt="" />
                </div>
                <div data-aos="slide-right" data-aos-delay="400" className='lg:w-[50%] w-[80%] bg-white max-h-full px-10 lg:py-[137px] py-[50px] flex flex-col items-start justify-center gap-8'>
                    <h1 className=' font-rubik lg:text-[65px] text-[50px] font-semibold leading-[65px] text-bluetheme'>Branding <br></br>Agency</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet totam doloribus quidem eum sapiente ipsum officia similique doloremque quisquam est!</p>
                    <button className='bg-bluetheme hover:bg-redtheme rounded-xl px-10 py-4 text-white font-semibold font-rubik cursor-pointer hover:scale-105 transition-transform duration-300'>READ MORE</button>
                </div>
            </div>

        </section>
    )
}

export default Hero