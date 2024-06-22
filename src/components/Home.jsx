import { Carousel } from "flowbite-react";
import React from 'react';
// import Hero1 from '../assets/hero1.png'
import Agri1 from '../assets/demo.png'
import Agri2 from '../assets/agri2.png'
import Agri3 from '../assets/agri3.png'

const Home = () => {
    return (
        <div className='bg-[#ADEF8866] ' id="home">
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen '>

                <Carousel className=' mx-auto'>
                    <div className="mb-8 md:mb-28 md:pb-8 flex flex-col md:flex-row-reverse items-center justify-evenly lg:gap-12">
                        <div >
                            <img className="animate-bounceSlow sm:max-w-sm md:max-w-md lg:max-w-[36rem] " src={Agri1} alt='skb' />
                        </div>
                        <div className="md:w-1/2  md:visible">
                            <h1 className=" t text-3xl md:text-5xl font-semibold mb-4 text-gray-500 md:w-3/4 leading-sung">If agriculture goes wrong, nothing else will have a chance to go right.
                             <br />
                                <span className="text-3xl text-green-500 leading-9 md:leading-sung"> M.S.SWAMINATHAN</span></h1>
                            {/* <p className="text-gray-500 text-base mb-8">Support,Contribute,Donate for the mission</p> */}
                            <button className="btn-primary">Register</button>
                        </div>
                    </div>
                    <div className="mb-8 md:mb-28 md:pb-8 flex flex-col md:flex-row-reverse items-center justify-evenly lg:gap-12">
                        <div>
                            <img className="animate-bounceSlow sm:max-w-sm md:max-w-md lg:max-w-[36rem] " src={Agri3} alt='skb' />
                        </div>
                        <div className="md:w-1/2 md:visible">
                            <h1 className=" t text-3xl md:text-5xl font-semibold mb-4 text-gray-500 md:w-3/4 leading-sung">The farm is a school of patience; you can't hurry the crops or make an ox in two days.
                             <br />
                                <span className="text-3xl text-green-500 leading-9 md:leading-sung"> HENRI ALAIN</span></h1>
                            {/* <p className="text-gray-500 text-base mb-8">Support,Contribute,Donate for the mission</p> */}
                            <button className="btn-primary">
                                Register</button>
                        </div>
                    </div>
                    <div className="mb-8 md:mb-28 md:pb-8 flex flex-col md:flex-row-reverse items-center justify-evenly lg:gap-12">
                        <div>
                            <img className="animate-bounceSlow max-w-[20rem] md:max-w-[25] lg:max-w-[29rem] " src={Agri2} alt='skb' />
                        </div>
                        <div className="md:w-1/2 md:visible">
                            <h1 className=" t  text-3xl md:text-5xl font-semibold mb-4 text-gray-500 md:w-3/4 leading-snug">Agriculture is the most healthful, most useful and most noble employment of man.
                               <br />
                                <span className=" text-3xl text-green-500 leading-9 md:leading-sung">GEORGE WASHINGTON</span></h1>
                            {/* <p className="text-gray-500 text-base mb-8">Support,Contribute,Donate for the mission</p> */}
                            <button className="btn-primary">
                                Register</button>
                        </div>
                    </div>

                </Carousel>

            </div>
        </div>
    )
}

export default Home