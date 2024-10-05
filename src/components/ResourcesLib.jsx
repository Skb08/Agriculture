import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const ResourcesLib = () => {

  const [visibility, setVisibility] = useState(false);

  const toggleVisibility = () => {
    setVisibility(!visibility);
  };

  const defaultAgricultureImage = '../assets/land1.jpg'; // default image 

  return (
    <div className="px-4 md:px-14 py-16 max-w-screen-2xl mx-auto bg-[#aeef8856]" id='resourcelib'>
      <div className="md:w-1/2 mx-auto text-center" data-aos="zoom-out-up">
        <h2 className="text-4xl text-green-600 font-semibold mb-2">Resource Library</h2>
        <p className="text-green-500">We have been working with some fortune 500+ clients</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
        
        <div className="group relative bg-white shadow-lg rounded-lg overflow-hidden" data-aos="fade-up">
          <img className="w-full h-72 object-cover" src="https://img.youtube.com/vi/W3P9deLFkk8/maxresdefault.jpg" alt="Thumbnail" onError={(e) => e.target.src = defaultAgricultureImage} />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/W3P9deLFkk8?autoplay=1&mute=1" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          </div>
        </div>

        <div className="group relative bg-white shadow-lg rounded-lg overflow-hidden" data-aos="fade-up">
          <img className="w-full h-72 object-cover" src="https://img.youtube.com/vi/EyVHl_H1o24/maxresdefault.jpg" alt="Thumbnail" onError={(e) => e.target.src = defaultAgricultureImage} />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/EyVHl_H1o24?autoplay=1&mute=1" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          </div>
        </div>

        <div className="group relative bg-white shadow-lg rounded-lg overflow-hidden" data-aos="fade-up">
          <img className="w-full h-72 object-cover" src="https://img.youtube.com/vi/ys42RUFhMqg/maxresdefault.jpg" alt="Thumbnail" onError={(e) => e.target.src = defaultAgricultureImage} />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/ys42RUFhMqg?autoplay=1&mute=1" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          </div>
        </div>

        <div className="group relative bg-white shadow-lg rounded-lg overflow-hidden" data-aos="fade-up">
          <img className="w-full h-72 object-cover" src="https://img.youtube.com/vi/lxZF7rpmFxo/maxresdefault.jpg" alt="Thumbnail" onError={(e) => e.target.src = defaultAgricultureImage} />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/lxZF7rpmFxo?autoplay=1&mute=1" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          </div>
        </div>

        <div className="group relative bg-white shadow-lg rounded-lg overflow-hidden" data-aos="fade-up">
          <img className="w-full h-72 object-cover" src="https://img.youtube.com/vi/a3m5U1d06AY/maxresdefault.jpg" alt="Thumbnail" onError={(e) => e.target.src = defaultAgricultureImage} />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/a3m5U1d06AY?autoplay=1&mute=1" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          </div>
        </div>

        <div className="group relative bg-white shadow-lg rounded-lg overflow-hidden" data-aos="fade-up">
          <img className="w-full h-72 object-cover" src="https://img.youtube.com/vi/llbcUcP_oAU/maxresdefault.jpg" alt="Thumbnail" onError={(e) => e.target.src = defaultAgricultureImage} />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/llbcUcP_oAU?autoplay=1&mute=1" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          </div>
        </div>

      </div>
      
      <div className="text-end mt-4 text-blue-700">
        <button className='text-green-600 hover:text-green-500' onClick={toggleVisibility}>
          <Link to={"/moreresource"}>{visibility ? 'Back' : <span className='flex items-center '>More <MdKeyboardDoubleArrowRight className='text-2xl' /></span>}</Link>
        </button>
      </div>
    </div>
  );
};

export default ResourcesLib;
