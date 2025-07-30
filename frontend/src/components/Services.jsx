import React from 'react'
import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Services = () => {

    const [visibility, setVisibility] = useState(false);

  const toggleVisibility = () => {
    setVisibility(!visibility);
  };

    return (
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8' id='service' >
         
         
          <div className='mt-8 text-center
             md:w-3/4 mx-auto 
            flex flex-col items-center '
             data-aos="zoom-in" >
                <h2 className='text-4xl text-green-600 font-semibold mb-4'>
                    Services</h2>
                <p className='md:w-3/4 text-sm text-green-600 mb-8 text-center'>Our goal is to empower farmers by providing innovative solutions, advanced resources, and unwavering support, ensuring their growth, prosperity, and a sustainable future.</p>
          </div>

            <section
                className="w-fit mx-auto grid grid-cols-1 xl:grid-cols-2 md:grid-cols-1 justify-items-center justify-center gap-y-20 gap-x-8 mt-10 mb-5 px-12 ">

                <div data-aos="fade-up"className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-[#ADEF8866] dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img 
                     className="object-cover w-full rounded-t-lg 
                     h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                        src="https://media.istockphoto.com/id/1346337711/vector/regenerative-agriculture-method-for-soil-health-and-vitality-outline-diagram.jpg?s=612x612&w=0&k=20&c=PPoQzmzVVqv_gXCCclZSN-DBDb3JX2v6C9HlT3lS4mU="
                         alt="AgriUniverse" />

                     <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Sustainable Farming Practices</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-balance">Assist farmers in organic methods for better soil, sustainability, and market value through providing guidance.</p>
                     </div>
    
                </div>

                <div data-aos="fade-up"className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                     <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                        src="https://images.stockcake.com/public/9/b/3/9b364cae-7d9b-4639-991a-dafb355bac64_large/friendly-market-interaction-stockcake.jpg" alt="skb" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Market Connectivity Solutions</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Our platform connects farmers with buyers for fair pricing and market expansion.</p>
                    </div>
                </div>


                <div data-aos="fade-up" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-48 md:w-48 md:rounded-none md:rounded-s-lg"
                        src="https://cdn.shopify.com/s/files/1/0501/9359/6573/files/IPM_1_600x600.png?v=1645712335" alt="skb" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Pest Management Solutions</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Provide farmers with effective strategies and natural methods to prevent insect attacks, ensuring healthy crop growth and minimizing losses.</p>
                    </div>
                </div>

                <div data-aos="fade-up" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                        src="https://5.imimg.com/data5/SELLER/Default/2024/11/465745447/TQ/FH/HH/233086993/climate-change-advisory-services-250x250.jpeg" alt="skb" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Climate Advisory Services</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Offer real-time climate insights and weather forecasts to help farmers make informed decisions and protect crops from unpredictable conditions.</p>
                    </div>
                </div>

                <div data-aos="fade-up" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-48 md:w-48 md:rounded-none md:rounded-s-lg"
                        src="https://media.gettyimages.com/id/1181712886/photo/the-man-oversees-the-cockroach.jpg?s=612x612&w=gi&k=20&c=Z--tuykCqluTVLQ0x6qHfnrqTqz7mmksXEWwoKHB4lM=" alt="skb" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Crop Planning Guidance </h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Educate farmers on the right crops to grow at the right time, optimizing yield and resource use efficiently.</p>
                    </div>
                </div>

                <div data-aos="fade-up" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-48 md:w-48 md:rounded-none md:rounded-s-lg"
                        src="https://media.istockphoto.com/id/1224503011/photo/soil-science.jpg?s=612x612&w=0&k=20&c=bz3huWx623j1JU_dHCBkR6esdbVRaBuLSCREzOWhEdQ=" alt="skb" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Agri-Testing Services</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">This platform seamlessly connects farmers with testing labs for soil, water, and other essential analyses, ensuring accurate assessments and better-informed farming decisions.</p>
                    </div>
                </div>


            </section>



         
            <div className='text-center md:w-3/4 mx-auto  flex flex-col items-center ' data-aos="zoom-out" >
                <h2 className="text-4xl text-green-600 font-semibold mb-4">
               Government Schemes for Farmers
                  </h2>
     <p className="md:w-3/4 text-sm  text-green-600 mb-8 text-center">
  Empowering every farmer with the right information at the right time.
  We are committed to ensuring that no farmer misses out on the benefits they deserve — from financial support to innovative technologies.
  Stay informed. Stay ahead.
    </p>
            </div>

            <section data-aos="zoom-in"
                className="w-fit mx-auto grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">

                <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl " >
                    <img src="https://pmkisan.gov.in/new_images/FinalPMO.jpg"
                        alt="Product" className="h-75 w-75 object-cover rounded-t-xl" />
                    <div className="px-4 py-3 w-72">
                        <p className="text-lg font-bold text-black truncate block capitalize mb-2 text-center font-ubuntu">PM-KISAN</p>
                        <div className="flex flex-wrap">
                            <p className='text-sm text-justify text-neutral-600 mb-4 font-ubuntu'>The <span className='font-extrabold'>Pradhan Mantri Kisan Samman Nidhi</span> is a central sector scheme launched on 24th February 
                                2019 to supplement financial needs of land holding farmers, subject to exclusions.</p>
                            <a href="https://pmkisan.gov.in/" target='_blank' className='ml-12'>
                                <button className='px-7 py-2 bg-green-400 text-white rounded hover:bg-slate-400'>Know more</button>
                            </a>

                        </div>
                    </div>
                </div>
                <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <img src="https://kisanvedika.bighaat.com/wp-content/uploads/2024/06/Default_Pradhan_Mantri_Kisan_MaanDhan_Yojana_PMKMY_Web_Story_P_3-1.jpg"
                        alt="Product" className="h-75 w-75 object-cover rounded-t-xl" />
                    <div className="px-4 py-3 w-72">
                        <p className="text-lg font-bold text-black truncate block capitalize mb-2 text-center font-ubuntu">PM-KMY</p>
                        <div className="flex flex-wrap">
                            <p className='text-sm text-justify text-neutral-600 mb-4 font-ubuntu'>The <span className='font-extrabold'>Pradhan Mantri Kisan Maandhan Yojana</span> is a 
                                government scheme aimed at providing a pension for small and marginal farmers in India after they reach 60 years of age.</p>
                            <a href="https://pmkmy.gov.in/" target='_blank' className='ml-12'>
                                <button className='px-7 py-2 bg-green-400 text-white rounded hover:bg-slate-400'>Know more</button>
                            </a>

                        </div>
                    </div>
                </div>
                <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl" >
                <img src="https://pbs.twimg.com/media/FY5bNsMVEAEZdOJ?format=jpg&name=900x900"
                        alt="Product" className="h-65 w-65 object-cover rounded-t-xl" />
                    <div className="px-4 py-3 w-72">
                        <p className="text-lg font-bold text-black truncate block capitalize mb-2 text-center font-ubuntu">PMFBY</p>
                        <div className="flex flex-wrap">
                            <p className='text-sm text-justify text-neutral-600 mb-4 font-ubuntu'>The <span className='font-extrabold'>Pradhan Mantri Fasal Bima Yojana</span> is a 
                                government-backed crop insurance scheme in India that provides financial support to farmers in case of crop loss due to natural calamities.</p>
                            <a href="https://pmfby.gov.in" target='_blank' className='ml-12'>
                                <button className='px-7 py-2 bg-green-400 text-white rounded hover:bg-slate-400'>Know more</button>
                            </a>

                        </div>
                    </div>
                </div>
            </section>
            <div className="text-end mt-4 text-blue-700">
        <button className='text-green-600 hover:text-green-500' onClick={toggleVisibility}>
          <Link to={"/moreservice"}>{visibility ? 'Back' : <span className='flex items-center '>More <MdKeyboardDoubleArrowRight className='text-2xl' /></span>}</Link>
        </button>
      </div>

       

            

        </div>
    )
}

export default Services