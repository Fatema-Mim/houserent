import React from 'react'
import about from "../assets/img/about.png"

export const Aboutus = () => {
    return (
        <div name="about" className='space-y-16 py-28'>
            <div>
                <div className='text-center text-color1 space-y-3'>
                    <h2 className='text-5xl md:text-6xl font-bold'>About us</h2>
                    <p className='text-2xl font-semibold'>WELCOME TO OUR HOUSE RENT COMPANY</p>
                </div>
            </div>
            <div className='grid lg:grid-cols-2 gap-8 px-3 md:px-20 lg:px-36'>
                <img  data-aos="fade-right" data-aos-duration="1000" src={about} alt="" className='w-full h-full object-cover'/>
                <div  data-aos="fade-left" data-aos-duration="1000" className='flex justify-center items-center text-center lg:text-left'>
                    <p>Amorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae nibh nisl. Cras etitikis mauris egeth lorem ultricies ferme is ntum a inti diam. Morbi mollis pellden tesque offs aiug ueia nec rhoncus. Nam ute ultricies. Cras etitikis mauris eget lorem ultricies ferme ntum a inti diam. Morbi mollis pellen tesque offs aiug ueia nec rhoncus. Nam ute ultricies.Amorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae nibh nisl. Cras etitikis mauris egeth lorem ultricies ferme is ntum a inti diam. Morbi mollis pellden tesque offs aiug ueia nec rhoncus. Nam ute ultricies. Cras etitikis mauris eget lorem ultricies ferme ntum a inti diam. Morbi mollis pellen tesque offs aiug ueia nec rhoncus. Nam ute ultricies.Amorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae nibh nisl. Cras etitikis mauris egeth lorem ultricies ferme is ntum a inti diam. Morbi mollis pellden tesque offs aiug ueia nec rhoncus. Nam ute ultricies. Cras etitikis mauris eget lorem ultricies ferme ntum a inti diam. Morbi mollis pellen tesque offs aiug ueia nec rhoncus. Nam ute ultricies.</p>
                </div>

            </div>
        </div>
    )
}
