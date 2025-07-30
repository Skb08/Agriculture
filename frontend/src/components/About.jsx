import React from 'react'

const About = () => {
  return (
<section className="px-4 sm:px-6 md:px-14 py-12 md:py-16 max-w-screen-xl mx-auto my-2 bg-[#aeef8856]">
  <h2 className="text-3xl sm:text-4xl text-green-700 font-bold mb-10 text-center">
    About Us
  </h2>

  <div className="flex flex-col-reverse lg:flex-row items-center md:items-start gap-10 md:gap-16">
    {/* Text Section */}
    <div
      data-aos="fade-left"
      className="w-full lg:w-1/2 text-center md:text-left"
    >
      <div className="mx-auto md:mx-0 md:max-w-[90%] p-4">
        <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed text-justify">
          We are on a mission to uplift the farming community by providing timely information, expert advice, and essential resources.
        </p>
        <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed text-justify ">
          Our platform helps farmers stay updated with the best agricultural practices, get personalized crop guidance, and access all relevant government schemes in one place.
        </p>
        <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed text-justify">
          We aim to bridge the gap between farmers, buyers, and sellers — empowering them with tools, knowledge, and a supportive ecosystem.
        </p>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
          From soil testing to seasonal planning, from scheme benefits to expert consultations — we’re here to ensure no farmer is left behind.
        </p>
      </div>
    </div>

    {/* Image Section */}
    <div data-aos="fade-right" className="w-full lg:w-1/2">
      <img
        src="https://media.istockphoto.com/id/671263588/photo/group-of-people-planting-vegetable-in-greenhouse.jpg?s=612x612&w=0&k=20&c=j2n2GC1RfbGaHnipQ2kM_Yc4BH7wCz6TRgifGHbUp7o="
        alt="Supporting Farmers"
        className="w-full h-auto max-h-[400px] object-cover rounded-xl shadow-lg"
      />
    </div>
  </div>
</section>


  )
}

export default About
