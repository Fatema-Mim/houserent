import React from 'react'
import { Autoplay, EffectFade, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from 'swiper/react';
import client1 from "../assets/img/client1.jpg";
import client2 from "../assets/img/client2.jpeg";
import client3 from "../assets/img/client3.jpeg";
import client4 from "../assets/img/client4.jpeg";
import client5 from "../assets/img/client5.jpeg";
import client6 from "../assets/img/client6.jpeg";

const sliders = [
    {
        img:client1,
        text:"I’m very satisfied. They are high-quality and worth the money. The also offered packages at that minimum price so that’s a plus! Thanks to its scheduling feature, we don’t need staff to work outside of business hours.",
        name:"Jhon Doe",
        work:"Founder, Jhon Group"
    },
    {
        img:client2,
        text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim ipsa voluptates et quae, inventore quaerat, aspernatur in dolore eos sit repellat, laboriosam laborum? Officiis voluptatum iusto modi eveniet aliquid voluptate!",
        name:"Fatema",
        work:"Senior Officer, Jamuna Group"
    },
    {
        img:client3,
        text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim ipsa voluptates et quae, inventore quaerat, aspernatur in dolore eos sit repellat, laboriosam laborum? Officiis voluptatum iusto modi eveniet aliquid voluptate!",
        name:"Farhana",
        work:"Founder, Farhana ORC"
    },
    {
        img:client4,
        text:"I’m very satisfied. They are high-quality and worth the money. The also offered packages at that minimum price so that’s a plus! Thanks to its scheduling feature, we don’t need staff to work outside of business hours.",
        name:"Jhon Doe",
        work:"Founder, Jhon Group"
    },
    {
        img:client5,
        text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim ipsa voluptates et quae, inventore quaerat, aspernatur in dolore eos sit repellat, laboriosam laborum? Officiis voluptatum iusto modi eveniet aliquid voluptate!",
        name:"Fatema",
        work:"Senior Officer, Jamuna Group"
    },
    {
        img:client6,
        text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim ipsa voluptates et quae, inventore quaerat, aspernatur in dolore eos sit repellat, laboriosam laborum? Officiis voluptatum iusto modi eveniet aliquid voluptate!",
        name:"Farhana",
        work:"Founder, Farhana ORC"
    },
    

]

const Testimonial = () => {
    return (
        <div name="review" className='py-28 bg-slate-50'>
            <div className='text-color1 space-y-3 text-center'>
                <h2 className='text-5xl md:text-6xl font-bold'>Some Reviews</h2>
            </div>
            <Swiper pagination={true}
            modules={[EffectFade, Autoplay, Pagination]}
            effect={'fade'}
            loop={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false
            }}>
            {sliders.map((slider, index) => {
                const { img,text,name,work } = slider;
                return (
                    <SwiperSlide className=' h-[500px] md:h-[400px] bg-slate-50 flex justify-between ' key={index}>
                        <div className=' w-full h-full text-center py-16'>
                            <img src={img} alt={name} className="h-36 w-36 rounded-full inline-block object-cover" />
                            <p className='py-4 px-4  md:px-48' >{text}</p>
                            <p className='font-semibold'>{name}</p>
                            <p className='font-semibold'>{work}</p>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
        </div>
    )
}

export default Testimonial