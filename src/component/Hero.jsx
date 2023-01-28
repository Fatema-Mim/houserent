import React from 'react'
import slider from "../assets/img/slider.png"
import { FiHome } from "react-icons/fi"
import { IoIosHome } from "react-icons/io"
import { FaHome, FaUserTie, FaPersonBooth } from "react-icons/fa"
import { GiHomeGarage } from "react-icons/gi"
import { HiBuildingOffice } from "react-icons/hi2"
import { BiHomeHeart } from "react-icons/bi"
import { MdOutlineHomeWork } from "react-icons/md"


const data = [
    {
        id: 1,
        icon: <FiHome size={40} className="inline-block text-gray-700" />,
        text: "Hall Room"
    },
    {
        id: 2,
        icon: <IoIosHome size={40} className="inline-block text-gray-700" />,
        text: "Warehouse"
    },
    {
        id: 3,
        icon: <FaHome size={40} className="inline-block text-gray-700" />,
        text: "Female Mess"
    },
    {
        id: 4,
        icon: <FaHome size={40} className="inline-block text-gray-700" />,
        text: "Male Mess"
    },
    {
        id: 5,
        icon: <GiHomeGarage size={40} className="inline-block text-gray-700" />,
        text: "Garage"
    },
    {
        id: 6,
        icon: <HiBuildingOffice size={40} className="inline-block text-gray-700" />,
        text: "Office"
    },
    {
        id: 7,
        icon: <BiHomeHeart size={40} className="inline-block text-gray-700" />,
        text: "Family House"
    },
    {
        id: 8,
        icon: <MdOutlineHomeWork size={40} className="inline-block text-gray-700" />,
        text: "Apartment"
    },
    {
        id: 9,
        icon: <FaUserTie size={40} className="inline-block text-gray-700" />,
        text: "Sublet"
    },
    {
        id: 10,
        icon: <FaPersonBooth size={40} className="inline-block text-gray-700" />,
        text: "ATM Booth"
    },

]



const Hero = () => {
    return (
        <>
            <div name="home" className='relative h-[600px]'>
                <div className='absolute w-full h-full bg-black/20'>
                    <div className='z-10 mt-40 md:mt-44 text-white text-center space-y-4'>
                        <h3 className='text-3xl'>Good Service is our passion</h3>
                        <h1 className='text-5xl md:text-6xl font-bold'>Awesome Apartment Villa</h1>
                        <p className='text-xl px-0 md:px-40 lg::px-72 pb-8'>No matter what the weather, no matter what the situation we are in, if we have the right perspective in life, life will always be beautiful!</p>
                        <button className='text-lg bg-color1 hover:bg-green-900 px-8 py-2.5 rounded-full'>Special Offer</button>
                    </div>
                </div>
                <img src={slider} alt="slider" className='h-[600px] w-full object-cover' />
            </div>
            <div>
                <div className='grid md:grid-cols-5 lg:grid-cols-10 divide-x divide-y border-b '>
                    {
                        data.map((e) => {
                            return(
                                <div className='text-center h-36  cursor-pointer group ' key={e.id}>
                                <div className='mt-10 space-y-3'>
                                    <span>{e.icon}</span>
                                    <p className='text-slate-800 font-semibold group-hover:text-green-900 group-hover:text-xl transition-all duration-300'>{e.text}</p>
                                </div>
                            </div>
                            )
                        })
                    }
                </div>
                
            </div>
        </>
    )
}

export default Hero