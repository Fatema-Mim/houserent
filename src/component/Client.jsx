import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import slider from "../assets/img/slider.png"

const Client = () => {
    const [countOn, setCountOn] = useState(false)
    return (
        <div>
            <div className='relative h-[550px] md:h-[300px]'>
                <div className='absolute w-full h-full bg-black/20'>
                    <div className='z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  md:mt-10 lg:mt-24 gap-4 text-white text-center '>
                        <div>
                            <ScrollTrigger onEnter={() => setCountOn(true)} onExit={() => setCountOn(false)}>
                                <p className='text-7xl font-semibold'>
                                    {
                                        countOn && <CountUp start={150} end={200} duration={2} delay={0} />
                                    }
                                </p>
                            </ScrollTrigger>
                            <p className='text-2xl tracking-wider pt-3'>Clients</p>
                        </div>
                        <div>
                            <ScrollTrigger onEnter={() => setCountOn(true)} onExit={() => setCountOn(false)}>
                                <p className='text-7xl font-semibold'>
                                    {
                                        countOn && <CountUp start={3300} end={3340} duration={2} delay={0} />
                                    }
                                </p>
                            </ScrollTrigger>
                            <p className='text-2xl tracking-wider pt-3'>Booking</p>
                        </div>
                        <div>
                            <ScrollTrigger onEnter={() => setCountOn(true)} onExit={() => setCountOn(false)}>
                                <p className='text-7xl font-semibold'>
                                    {
                                        countOn && <CountUp start={20} end={40} duration={2} delay={0} />
                                    }
                                </p>
                            </ScrollTrigger>
                            <p className='text-2xl tracking-wider pt-3'>Swimming</p>
                        </div>
                        <div>
                            <ScrollTrigger onEnter={() => setCountOn(true)} onExit={() => setCountOn(false)}>
                                <p className='text-7xl font-semibold'>
                                    {
                                        countOn && <CountUp start={1200} end={1230} duration={2} delay={0} />
                                    }
                                </p>
                            </ScrollTrigger>
                            <p className='text-2xl tracking-wider pt-3'>Apartment</p>
                        </div>
                    </div>
                </div>
                <img src={slider} alt="slider" className=' h-[550px] md:h-[300px] w-full object-cover' />
            </div>
        </div>
    )
}

export default Client