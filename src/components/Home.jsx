import { Carousel } from "flowbite-react";
import React from 'react';
import banner1 from '../assets/t.jpg';
import banner2 from '../assets/ban2.png';
import banner3 from '../assets/ban3.png';
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";



const Home = () => {
  return (
    <div className="h-56 sm:h-64  md:h-96 xl:h-screen 2xl:h-screen">
      <Carousel slideInterval={5000} pauseOnHover indicators={false}
      leftControl={<IoIosArrowDropleftCircle className='text-green-600 scale-[3]' />} 
      rightControl={<IoIosArrowDroprightCircle className='text-green-600 scale-[3]' />}>
        <img src={banner1} alt="..." />
        <img src={banner2} alt="..." />
        <img src={banner3} alt="..." />
      </Carousel>
    </div>)
}

export default Home