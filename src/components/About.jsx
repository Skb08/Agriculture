import React from 'react'
import Agri5 from "../assets/agri5.png"
import Agri4 from "../assets/agri4.png";

const About = () => {
  return (
    <>

        {/* about text */}
        <div className='md:w-1/2 mx-auto text-center ' data-aos="zoom-out" id='about' >
            <h2 className='text-4xl text-gray-500 font-semibold mb-2'>About</h2>
            <p className='text-gray-500 '>We have been working with some fortune 500+ clients</p>
        </div>
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8 bg-[#ADEF8866]' >

            <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
                <div data-aos="zoom-out-down" >
                    <img className='md:max-w-md md:h-4/5 animate-bounceSlow' src={Agri5} alt='skb' />
                </div>
                <div className='md:w-3/4 mx-auto' data-aos="zoom-out-down" >
                    <h2 className='text-4xl text-gray-500 font-semibold mb-4 md:w-4/5'>
                        The About of spending three years at pixelgrade</h2>
                    <p className='md:w-3/4 text-sm text-gray-500 mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing 
                    elit. Quae rem dolor ab quisquam eaque aspernatur temporibus alias autem sit doloremque nesciunt accusamus 
                    facere ad voluptatibus fugiat reiciendis eum suscipit aut, nemo quia ullam quis ratione cum. Amet sed modi 
                    quod enim quibusdam sint adipisci voluptatibus impedit quidem perspiciatis? Libero, laboriosam.</p>
                    <button className='btn-primary'>Learn More</button>
                </div>
            </div>
        </div>

        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8' >
            <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
                <div className='md:w-3/4 mx-auto' data-aos="zoom-out-down" >
                    <h2 className='text-4xl text-gray-500 font-semibold mb-4 md:w-4/5'>
                        The unseen of spending three years at pixelgrade</h2>
                    <p className='md:w-3/4 text-sm text-gray-500 mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing 
                    elit. Quae rem dolor ab quisquam eaque aspernatur temporibus alias autem sit doloremque nesciunt accusamus 
                    facere ad voluptatibus fugiat reiciendis eum suscipit aut, nemo quia ullam quis ratione cum. Amet sed modi 
                    quod enim quibusdam sint adipisci voluptatibus impedit quidem perspiciatis? Libero, laboriosam.</p>
                    <button className='btn-primary'>Learn More</button>
                </div>
                <div data-aos="zoom-out-down" >
                    <img className='md:max-w-md md:h-4/5 animate-bounceSlow' src={Agri4} alt='skb' />
                </div>
            </div>
        </div>

        {/* companies stats */}
        {/* <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-16 bg-[#ADEF8866] '>
            <div className='flex flex-col md:flex-row justify-between items-center py-6'>
                <div className='md:w-1/2' data-aos="zoom-out-up">
                    <h2 className='text-4xl text-gray-500 font-semibold mb-4 md:w-2/3'>
                        Helping a local business<span className='text-green-400'> reinvent itself</span></h2>
                    <p>We reached here with our hardwork and dedication</p>
                </div>
                
                <div data-aos="zoom-out-up" 
                    className='md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12'>
                    <div className='space-y-8'>
                        <div className='flex items-center gap-4'>
                            <img className='w-20 h-20 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32' src='/src/assets/slogo.png' alt='' />
                            <div>
                                <h4 className='text-2xl text-gray-400 font-semibold'>3,145</h4>
                                <p>Member</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <img className='w-20 h-20 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32' src='/src/assets/slogo.png' alt='' />
                            <div>
                                <h4 className='text-2xl text-gray-400 font-semibold'>2,125</h4>
                                <p>Events Booking</p>
                            </div>
                        </div>
                    </div>
                    <div className='space-y-8'>
                        <div className='flex items-center gap-4'>
                            <img className='w-20 h-20 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32' src='/src/assets/slogo.png' alt='' />
                            <div>
                                <h4 className='text-2xl text-gray-400 font-semibold'>90,145</h4>
                                <p>Clubs</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <img className='w-20 h-20 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32' src='/src/assets/slogo.png' alt='' />
                            <div>
                                <h4 className='text-2xl text-gray-400 font-semibold'>13,145</h4>
                                <p>Payments</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
    </>
  )
}

export default About