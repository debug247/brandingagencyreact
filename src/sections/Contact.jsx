import React from 'react'
import { FaMapMarkerAlt, FaPhoneVolume, FaFax } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Contact = () => {
    return (
        <section id='contact' className='w-[90%] m-auto flex lg:flex-row flex-col justify-between items-center gap-10 px-0 py-20'>
            <div className='lg:w-[50%] w-full grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-6'>
                <div data-aos="zoom-in" data-aos-delay="200" className='p-10 flex flex-col justify-center items-center gap-4 bg-slate-200 rounded-xl'>
                    <FaMapMarkerAlt className=' text-redtheme hover:text-bluetheme cursor-pointer size-[60px] hover:scale-110 transition-transform duration-300' />
                    <h1 className='font-rubik font-semibold text-2xl'>Our Main Office</h1>
                    <p className='text-center text-lg'>SoHo 94 Broadway St New York, NY 1001</p>
                </div>
                <div data-aos="zoom-in" data-aos-delay="200" className='p-10 flex flex-col justify-center items-center gap-4 bg-slate-200 rounded-xl'>
                    <FaPhoneVolume className=' text-redtheme hover:text-bluetheme cursor-pointer size-[60px] hover:scale-110 transition-transform duration-300' />
                    <h1 className='font-rubik font-semibold text-2xl'>Phone Number</h1>
                    <p className='text-center text-lg'>234-9876-5400888-0123-4567 (Toll Free)</p>
                </div>
                <div data-aos="zoom-in" data-aos-delay="400" className='p-10 flex flex-col justify-center items-center gap-4 bg-slate-200 rounded-xl'>
                    <FaFax className=' text-redtheme hover:text-bluetheme cursor-pointer size-[60px] hover:scale-110 transition-transform duration-300' />
                    <h1 className='font-rubik font-semibold text-2xl'>Fax</h1>
                    <p className='text-center text-lg'>1-234-567-8900</p>
                </div>
                <div data-aos="zoom-in" data-aos-delay="600" className='p-10 flex flex-col justify-center items-center gap-4 bg-slate-200 rounded-xl'>
                    <IoMdMail className=' text-redtheme hover:text-bluetheme cursor-pointer size-[60px] hover:scale-110 transition-transform duration-300' />
                    <h1 className='font-rubik font-semibold text-2xl'>Email</h1>
                    <p className='text-center text-lg'>company@gmail.com</p>
                </div>
            </div>
            <div data-aos="zoom-in" data-aos-delay="800" className=' bg-bluetheme lg:p-12 p-6 lg:w-[50%] w-full flex flex-col justify-center items-center gap-6 rounded-xl'>
                <h1 className='font-rubik lg:text-[53px] text-[40px] text-center font-semibold leading-[60px] text-white'>Contact Us</h1>
                <input type="text" placeholder='Enter your full name' className='w-full px-6 py-4 rounded-xl' />
                <input type="text" placeholder='Enter your full name' className='w-full px-6 py-4 rounded-xl' />
                <textarea name="" id="" placeholder='Your Message...' rows="5" className='w-full px-6 py-4 rounded-xl'></textarea>
                <button className='w-full bg-redtheme hover:bg-black hover:text-white px-6 py-4 rounded-xl text-white font-rubik font-regular text-lg'>SUBMIT</button>
            </div>
        </section>
    )
}

export default Contact