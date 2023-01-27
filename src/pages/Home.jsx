import React from 'react'
import { Aboutus } from '../component/Aboutus'
import Client from '../component/Client'
import Contact from '../component/Contact'
import Footer from '../component/Footer'
import Forrent from '../component/Forrent'
import Header from '../component/Header'
import Hero from '../component/Hero'
import House from '../component/House'
import Testimonial from '../component/Testimonial'

const Home = () => {
  return (
    <div className='container mx-auto h-full w-full' >
        <Header/>
        <Hero/>
        <Forrent/>
        <Aboutus/>
        <House/>
        <Client/>
        <Testimonial/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home