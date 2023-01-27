import React, { useState } from 'react';
import { Link } from 'react-scroll'
import { HiOutlineMenuAlt3 } from "react-icons/hi"
import { RxCross2 } from "react-icons/rx"


const Header = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    const handleClose = () => setNav(!nav)

    return (
        <div className='w-full h-[80px]  bg-zinc-200  drop-shadow-lg sticky top-0 z-50 px-4'>
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                    <h1 className='text-3xl font-bold mr-4 sm:text-4xl'> House Rent</h1>
                </div>
                <ul className='hidden md:flex pr-4 space-x-5'>
                    <li className='cursor-pointer'><Link to="home" smooth={true} duration={500}>Home</Link></li>
                    <li className='cursor-pointer'><Link to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
                    <li className='cursor-pointer'><Link to="apartment" smooth={true} offset={-50} duration={500}>Apartment</Link></li>
                    <li className='cursor-pointer'><Link to="review" smooth={true} offset={-100} duration={500}>Review</Link></li>
                    <li className='cursor-pointer'><Link to="contact" smooth={true} offset={-50} duration={500}>Contact</Link></li>
                </ul>
                <div className='md:hidden mr-4' onClick={handleClick}>
                    {!nav ? <HiOutlineMenuAlt3 size={28} /> : <RxCross2 size={28} />}

                </div>
            </div>

            <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
                <li className='border-b-2 border-zinc-300 w-full cursor-pointer py-2'><Link onClick={handleClose} to="home" smooth={true} duration={500}>Home</Link></li>
                <li className='border-b-2 border-zinc-300 w-full cursor-pointer py-2'><Link onClick={handleClose} to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
                <li className='border-b-2 border-zinc-300 w-full cursor-pointer py-2'><Link onClick={handleClose} to="apartment" smooth={true} offset={-50} duration={500}>Apartment</Link></li>
                <li className='border-b-2 border-zinc-300 w-full cursor-pointer py-2'><Link onClick={handleClose} to="review" smooth={true} offset={-100} duration={500}>Review</Link></li>
                <li className='border-b-2 border-zinc-300 w-full cursor-pointer py-2'><Link onClick={handleClose} to="contact" smooth={true} offset={-50} duration={500}>Contact</Link></li>
            </ul>
        </div>
    );
};

export default Header;