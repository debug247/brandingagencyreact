import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaArrowUp } from "react-icons/fa";
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <>
            <section className='w-full m-auto bg-bluetheme pt-10 flex flex-col justify-between items-center gap-6'>
                <div className='lg:w-[90%] w-full m-auto flex flex-col justify-center items-center gap-3'>
                    <h1 className='lg:text-[45px] text-center text-[40px] font-bold text-black '>Branding<span className=' text-white italic'> Agency</span></h1>
                    <div id='social-icons' className='flex justify-center items-center gap-6 mt-5'>
                        <FaFacebook className='size-10 text-redtheme hover:text-white cursor-pointer hover:scale-110 transition-transform duration-300' /><FaInstagram className='size-10 text-redtheme hover:text-white cursor-pointer hover:scale-110 transition-transform duration-300' /><FaTwitter className='size-10 text-redtheme hover:text-white cursor-pointer hover:scale-110 transition-transform duration-300' /><FaYoutube className='size-10 text-redtheme hover:text-white cursor-pointer hover:scale-110 transition-transform duration-300' />
                    </div>

                    <ul className='flex justify-center items-center flex-wrap lg:gap-10 gap-4 mt-4'>
                        <li className='text-lg text-white font-semibold cursor-pointer hover:text-black'>Home</li>
                        <li className='text-lg text-white font-semibold cursor-pointer hover:text-black'>About</li>
                        <li className='text-lg text-white font-semibold cursor-pointer hover:text-black'>Services</li>
                        <li className='text-lg text-white font-semibold cursor-pointer hover:text-black'>Teams</li>
                        <li className='text-lg text-white font-semibold cursor-pointer hover:text-black'>Contact</li>
                    </ul>
                </div>

                <div className=' bg-blue-800 p-3 mt-10 w-full flex flex-col justify-center items-center'>
                    <h1 className='text-white text-center font-semibold'>Designed & Developed by: Debug Entity</h1>
                </div>

            </section>

            {/* scroll to top button  */}
            <div id='icon-box' className=' bg-redtheme text-white p-3 rounded-full hover:bg-bluetheme hover:text-white cursor-pointer fixed lg:bottom-6 right-6 bottom-6'>
                <Link to='home' spy={true} offset={-100} smooth={true}>
                    <FaArrowUp className='w-[35px] h-[35px]' />
                </Link>
            </div>
        </>

    )
}

export default Footer