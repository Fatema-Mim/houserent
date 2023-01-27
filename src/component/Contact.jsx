import React from 'react'
import { FaAddressBook } from "react-icons/fa"
import {GrMail} from "react-icons/gr"
import {ImPhone,ImUsers} from "react-icons/im"
import {FaFacebookSquare,FaTwitterSquare,FaInstagramSquare,FaGooglePlusSquare} from "react-icons/fa"

const Contact = () => {
    return (
        <div name="contact" className='space-y-20 py-28 text-center'>
            <div className='text-color1 space-y-3 text-center px-2'>
                <h2 className='text-5xl md:text-6xl font-bold'>We Are Available</h2>
                <h2 className='text-5xl md:text-6xl font-bold'>For You 24/7</h2>
                <p className='text-2xl font-semibold'>OUR ONLINE SUPPORT SERVICE IS ALWAYS 24 HOURS</p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                <div className='space-y-3'>
                    <div className='text-color1 flex justify-center space-x-1'>
                        <FaAddressBook size={30} />
                        <p className='text-2xl font-bold'>Address</p>
                    </div>
                    <div className='text-xl text-gray-700'>
                        <p>112/B - Road 121,</p>
                        <p>King/St Melbourne Australia</p>
                    </div>
                </div>
                <div className='space-y-3'>
                    <div className='text-color1 flex justify-center space-x-1'>
                        <GrMail size={30} />
                        <p className='text-2xl font-bold'>Email</p>
                    </div>
                    <div className='text-xl text-gray-700'>
                        <p>houserant@gamil.com</p>
                        <p>house123rant@gamil.com</p>
                    </div>
                </div>
                <div className='space-y-3'>
                    <div className='text-color1 flex justify-center space-x-1'>
                        <ImPhone size={30} />
                        <p className='text-2xl font-bold'>Phone</p>
                    </div>
                    <div className='text-xl text-gray-700'>
                        <p>+99 0215469875</p>
                        <p>666 35874692050</p>
                    </div>
                </div>
                <div className='space-y-3'>
                    <div className='text-color1 flex justify-center space-x-1'>
                        <ImUsers size={30} />
                        <p className='text-2xl font-bold'>Social Account</p>
                    </div>
                    <div className='flex justify-center space-x-3'>
                        <FaFacebookSquare size={27} className="text-gray-700"/>
                        <FaTwitterSquare size={27} className="text-gray-700"/>
                        <FaInstagramSquare size={27} className="text-gray-700"/>
                        <FaGooglePlusSquare size={27} className="text-gray-700"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact