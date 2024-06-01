import React from 'react'
import { teams } from '../export'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const Teams = () => {
    return (
        <section id='teams' className='w-full m-auto py-20 bg-bluetheme'>
            <div className='w-[90%] m-auto flex flex-col justify-center items-center gap-6'>
                <h1 data-aos="zoom-in" data-aos-delay="200" className='font-rubik lg:text-[53px] text-[48px] font-semibold leading-[60px] text-white'>Our Teams</h1>
                <p data-aos="zoom-in" data-aos-delay="400" className='font-rubik text-lg leading-[30px] text-center text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, et impedit quas dicta perspiciatis<br></br> officiis est culpa voluptate accusamus dignissimos!</p>
                <div data-aos="zoom-in" data-aos-delay="600" className='w-full grid lg:grid-cols-4 grid-cols-1 justify-center items-start gap-6'>
                    {teams.map((item, index) => (
                        <div key={index} className='bg-white p-10 flex flex-col justify-start items-center gap-3 rounded-lg'>
                            <img src={item.image} alt="" className='w-[270px] h-[250px] rounded-full  cursor-pointer hover:scale-110 transition-transform duration-300' />
                            <h1 className='text-2xl font-rubik font-semibold'>{item.name}</h1>
                            <h1 className='text-xl font-rubik text-slate-600'>{item.position}</h1>
                            <p className='text-center font-rubik'>{item.about}</p>
                            <div id='social-icons' className='flex justify-center items-center gap-6 mt-5'>
                                <FaFacebook className='size-6 text-redtheme hover:text-bluetheme cursor-pointer hover:scale-150 transition-transform duration-300' /><FaInstagram className='size-6 text-redtheme hover:text-bluetheme cursor-pointer hover:scale-150 transition-transform duration-300' /><FaTwitter className='size-6 text-redtheme hover:text-bluetheme cursor-pointer hover:scale-150 transition-transform duration-300' /><FaYoutube className='size-6 text-redtheme hover:text-bluetheme cursor-pointer hover:scale-150 transition-transform duration-300' />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default Teams