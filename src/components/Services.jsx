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
            <div className='text-center md:w-3/4 mx-auto flex flex-col items-center ' data-aos="zoom-out" >
                <h2 className='text-4xl text-green-600 font-semibold mb-4'>
                    Schemes</h2>
                <p className='md:w-3/4 text-sm text-green-500 mb-8 text-center'>Your support has the power to change lives.
                    Whether it's offering food, shelter, medical assistance, or education, every contribution counts. Your generosity
                    makes a meaningful difference in the lives of those in need.</p>
            </div>

            <section data-aos="zoom-in"
                className="w-fit mx-auto grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">

                <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl " >
                    <img src="https://pmkisan.gov.in/new_images/FinalPMO.jpg"
                        alt="Product" class="h-75 w-75 object-cover rounded-t-xl" />
                    <div class="px-4 py-3 w-72">
                        <p class="text-lg font-bold text-black truncate block capitalize mb-2 text-center font-ubuntu">PM-KISAN</p>
                        <div class="flex flex-wrap">
                            <p className='text-sm text-justify text-neutral-600 mb-4 font-ubuntu'>The <span className='font-extrabold'>Pradhan Mantri Kisan Samman Nidhi</span> is a central sector scheme launched on 24th February 
                                2019 to supplement financial needs of land holding farmers, subject to exclusions.</p>
                            <a href="https://pmkisan.gov.in/" target='_blank' className='ml-12'>
                                <button className='px-7 py-2 bg-green-400 text-white rounded hover:bg-slate-400'>Know more</button>
                            </a>

                        </div>
                    </div>
                </div>
                <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <img src="https://kisanvedika.bighaat.com/wp-content/uploads/2024/06/Default_Pradhan_Mantri_Kisan_MaanDhan_Yojana_PMKMY_Web_Story_P_3-1.jpg"
                        alt="Product" class="h-75 w-75 object-cover rounded-t-xl" />
                    <div class="px-4 py-3 w-72">
                        <p class="text-lg font-bold text-black truncate block capitalize mb-2 text-center font-ubuntu">PM-KMY</p>
                        <div class="flex flex-wrap">
                            <p className='text-sm text-justify text-neutral-600 mb-4 font-ubuntu'>The <span className='font-extrabold'>Pradhan Mantri Kisan Maandhan Yojana</span> is a 
                                government scheme aimed at providing a pension for small and marginal farmers in India after they reach 60 years of age.</p>
                            <a href="https://pmkmy.gov.in/" target='_blank' className='ml-12'>
                                <button className='px-7 py-2 bg-green-400 text-white rounded hover:bg-slate-400'>Know more</button>
                            </a>

                        </div>
                    </div>
                </div>
                <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl" >
                <img src="https://pbs.twimg.com/media/FY5bNsMVEAEZdOJ?format=jpg&name=900x900"
                        alt="Product" className="h-65 w-65 object-cover rounded-t-xl" />
                    <div class="px-4 py-3 w-72">
                        <p class="text-lg font-bold text-black truncate block capitalize mb-2 text-center font-ubuntu">PMFBY</p>
                        <div class="flex flex-wrap">
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

            <div className='mt-8 text-center md:w-3/4 mx-auto flex flex-col items-center ' data-aos="zoom-in" >
                <h2 className='text-4xl text-green-600 font-semibold mb-4'>
                    Services</h2>
                <p className='md:w-3/4 text-sm text-green-600 mb-8 text-center'>Your support has the power to change lives.
                    Whether it's offering food, shelter, medical assistance, or education, every contribution counts. Your generosity
                    makes a meaningful difference in the lives of those in need.</p>
            </div>

            <section
                className="w-fit mx-auto grid grid-cols-1 xl:grid-cols-2 md:grid-cols-1 justify-items-center justify-center gap-y-20 gap-x-8 mt-10 mb-5 px-12 ">

                <div data-aos="fade-up" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-[#ADEF8866] dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                        src="https://images.unsplash.com/photo-1649261191624-ca9f79ca3fc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="skb" />
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </div>
                </div>

                <div data-aos="fade-up" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                        src="https://images.unsplash.com/photo-1651950537598-373e4358d320?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="skb" />
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </div>
                </div>


                <div data-aos="fade-up" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                        src="https://images.unsplash.com/photo-1651950519238-15835722f8bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="skb" />
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </div>
                </div>
                <div data-aos="fade-up" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                        src="https://images.unsplash.com/photo-1649261191606-cb2496e97eee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="skb" />
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </div>
                </div>

                <div data-aos="fade-up" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                        src="https://images.unsplash.com/photo-1649261191624-ca9f79ca3fc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="skb" />
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </div>
                </div>

                <div data-aos="fade-up" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                        src="https://images.unsplash.com/photo-1649261191606-cb2496e97eee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="skb" />
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </div>
                </div>


            </section>

            

        </div>
    )
}

export default Services