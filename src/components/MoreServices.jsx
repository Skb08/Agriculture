import React from 'react'
import { useState } from 'react';
import MyFooter from './MyFooter';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

const MoreServices = () => {
    const [visibility, setVisibility] = useState(true);
    const toggleVisibility = () => {
        setVisibility(!visibility);
    }
    return <>
        <Navbar></Navbar>

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
            <div className="text-end mt-4 text-green-600 hover:text-green-500">
                <button >
                    <Link to="/?section=service">{visibility ? <span className='flex items-center '><MdKeyboardDoubleArrowLeft className='text-2xl' /> Back </span> : ' More...'}</Link>
                </button>
            </div>
           
        </div>
    

        <MyFooter></MyFooter>

    </>
}

export default MoreServices;