import { Carousel } from "flowbite-react";
import React from 'react';
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";



const Home = () => {
  return (
    <div className="h-32 sm:h-64  md:h-72 lg:h-[25rem] ">
      <Carousel slideInterval={5000} pauseOnHover indicators={false}
      leftControl={<IoIosArrowDropleftCircle className='text-green-600 scale-[3]' />} 
      rightControl={<IoIosArrowDroprightCircle className='text-green-600 scale-[3]' />}>
        <img src="https://www.kaveriseeds.in/wp-content/uploads/2020/03/banner5_16mar.jpg" alt="..." />
        <img src="https://www.kaveriseeds.in/wp-content/uploads/2019/06/banner1.jpg" alt="..." />
        <img src="https://www.kaveriseeds.in/wp-content/uploads/2019/06/banner3.jpg" alt="..." />
        <img src="https://www.kaveriseeds.in/wp-content/uploads/2019/06/banner4.jpg" alt="..." />
      </Carousel>
    </div>)
}

export default Home