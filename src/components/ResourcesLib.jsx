import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ResourcesLib = () => {

  const [visibility, setVisibility] = useState(false);

  const toggleVisibility = () => {
      setVisibility(!visibility);
  };

  return (
    <div className="px-4 md:px-14 py-16 max-w-screen-2xl mx-auto bg-[#ADEF8866]" id='resourcelib'>
      <div className="md:w-1/2 mx-auto text-center" data-aos="zoom-out-up">
        <h2 className="text-4xl text-gray-500 font-semibold mb-2">Resource Library</h2>
        <p className="text-gray-500">We have been working with some fortune 500+ clients</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
        
        <div className="group relative bg-white shadow-lg rounded-lg overflow-hidden" data-aos="fade-up">
          <img className="w-full h-72 object-cover" src="/src/assets/land1.jpg" alt="Thumbnail" />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/3RvQJX1_fKQ?autoplay=1&mute=1" frameborder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          </div>
        </div>

        <div className="group relative bg-white shadow-lg rounded-lg overflow-hidden" data-aos="fade-up">
          <img className="w-full h-72 object-cover" src="/src/assets/land1.jpg" alt="Thumbnail" />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/xIe2EjQNols?autoplay=1&mute=1" frameborder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          </div>
        </div>

        <div className="group relative bg-white shadow-lg rounded-lg overflow-hidden" data-aos="fade-up">
          <img className="w-full h-72 object-cover" src="/src/assets/land1.jpg" alt="Thumbnail" />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/t5zFfDdvApE?autoplay=1&mute=1" frameborder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          </div>
        </div>

        <div className="group relative bg-white shadow-lg rounded-lg overflow-hidden" data-aos="fade-up">
          <img className="w-full h-72 object-cover" src="/src/assets/land1.jpg" alt="Thumbnail" />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/3RvQJX1_fKQ?autoplay=1&mute=1" frameborder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          </div>
        </div>

        <div className="group relative bg-white shadow-lg rounded-lg overflow-hidden" data-aos="fade-up">
          <img className="w-full h-72 object-cover" src="/src/assets/land1.jpg" alt="Thumbnail" />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/xIe2EjQNols?autoplay=1&mute=1" frameborder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          </div>
        </div>

        <div className="group relative bg-white shadow-lg rounded-lg overflow-hidden" data-aos="fade-up">
          <img className="w-full h-72 object-cover" src="/src/assets/land1.jpg" alt="Thumbnail" />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/t5zFfDdvApE?autoplay=1&mute=1" frameborder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          </div>
        </div>

      </div>
          <div className="text-end mt-4 text-blue-700">
                <button onClick={toggleVisibility}>
                    <Link to={"/moreresource"}>{visibility ? 'Back' : 'More'}</Link>

                </button>
            </div>
    </div>
  );
};

export default ResourcesLib;
