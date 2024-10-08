import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const AgroEquip = () => {
  const blogs = [
    {
      id: 1, title: "Tractor", description: "A versatile machine for pulling or pushing agricultural tools like plows,cultivators,and trailers.",
      image: 'https://www.agriculture.com/thmb/Ee_FgOBLp0V2qc4Y92fXbHQxVrQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8-ff55222dbb51426b969f338b4efce6b2.jpeg',
      link: 'https://www.agriculture.com/when-is-a-tractor-more-than-just-a-tractor-8695889'
    },
    {
      id: 2, title: "Harvester", description: "A machine used for harvesting crops efficiently by cutting and separating the grain from the stalk.",
      image: 'https://www.agriculture.com/thmb/JKqE7xfyLiKMo4dhSY1Bq9wF0ys=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/7020013Drago2courtesyofDrago_preview-f1452943332543c4a0185d55725c4233.jpg',
      link: 'https://www.agriculture.com/wisconsin-s-corn-harvest-explained-in-3-simple-pie-charts-8717857'
    },
    {
      id: 3, title: "Sprayer", description: "quipment used for spraying fertilizers, herbicides, or pesticides on crops to ensure proper plant health.",
      image: 'https://www.agriculture.com/thmb/lDKCTnJKTQM7o2_ImJEFNh4FiiI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/7018438_MagGrow-Peanut-07266-5e182b945db74ceda9c6e8e6abd75800.jpg',
      link: 'https://www.agriculture.com/machinery/spraying/farm-sprayers-overview'
    },
  ]
  const [visibility, setVisibility] = useState(false);
  const toggleVisibility = () => {
    setVisibility(!visibility);
  };
  return (
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-12' >
      <div data-aos="zoom-out"
        className='text-center md:w-3/4 mx-auto flex flex-col items-center' >
        <h2 className='text-4xl text-green-600 font-semibold mb-4'>
          Agricultural equipment</h2>
        <p className='md:w-3/4 text-sm text-green-500 mb-8 text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni iusto, maxime tempora  unde
          consequatur, tempore hic voluptas dolores deserunt excepturi, exercitationem  doloremque voluptatem officiis ipsum?</p>
      </div>
      {/* blogs */}
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 items-center justify-between'>
        {
          blogs.map(blog => <div key={blog.id} data-aos="zoom-out-up"
            className='mx-auto relative mb-12 cursor-pointer ' >
            <img src={blog.image} alt='' className='hover:scale-95 transition-all duration-300' />
            <a href={blog.link} target='_blank'><div className=' text-center px-4 py-0  lg:py-4 bg-white shadow-lg rounded-md md:w-3/4  mx-auto absolute left-0 right-0 -bottom-12 md:-bottom-18'>
              <h3 className='mb-3 text-green-600 font-semi-bold'>{blog.title}</h3>
              <p className='text-gray-500 '>{blog.description}</p>
            </div></a>
          </div>)
        }
      </div>

      <div className="text-end mt-4 text-green-600 hover:text-green-500">
        <button onClick={toggleVisibility}>
          <Link to={"/moreagroequip"}>{visibility ? 'Back' : <span className='flex items-center '>More <MdKeyboardDoubleArrowRight className='text-2xl' /></span>}</Link>
        </button>
      </div>

    </div>
  )
}

export default AgroEquip