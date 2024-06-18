import React from 'react';
import { Carousel } from "flowbite-react";
import hero3 from "../assets/cartoonTmg.png";


const Reviews = () => {
  return (
    < >
        {/* review */}
        <div className='bg-[#ADEF8866] py-6' id="product">
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto h-[100vh] md:h-[40vh]'>
                <Carousel className='w-[100%] mx-auto' data-aos="zoom-in" >
                    <div className='flex flex-col md:flex-row justify-between items-center py-6'>
                        <div className='md:w-1/3 flex justify-center'>
                            <img className='h-3/4 w-3/4 md:w-2/3 md:h-2/3 ' src={hero3} alt='skb' />
                        </div>
                        
                        <div className='md:w-2/3 mx-auto'>
                            <h2 className='text-4xl text-green-400 font-semibold mb-4 md:w-4/5'>Products Review</h2>
                            <div>
                                <p className='md:w-4/5 text-base text-gray-500 mb-4 leading-7'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt 
                                cupiditate officiis, doloremque vel nihil libero omnis, aliquid, ipsam asperiores quos voluptas quis vitae! Libero possimus aliquam 
                                recusandae nihil nostrum obcaecati magnam esse quidem deleniti nam! Libero nulla, doloremque similique rem et aut dolorum incidunt 
                                natus optio voluptatem, modi labore quia?</p>
                                <h5 className='text-green-400 text-xl font-semibold mb-2'>Stev Smeet</h5>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row justify-between items-center py-6'>
                        <div className='md:w-1/3 flex justify-center'>
                            <img className='h-3/4 w-3/4 md:w-2/3 md:h-2/3 ' src={hero3} alt='skb' />
                        </div>
                        
                        <div className='md:w-2/3 mx-auto'>
                            <h2 className='text-4xl text-green-400 font-semibold mb-4 md:w-4/5'>Products Review</h2>
                            <div>
                                <p className='md:w-4/5 text-base text-gray-500 mb-4 leading-7'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt 
                                cupiditate officiis, doloremque vel nihil libero omnis, aliquid, ipsam asperiores quos voluptas quis vitae! Libero possimus aliquam 
                                recusandae nihil nostrum obcaecati magnam esse quidem deleniti nam! Libero nulla, doloremque similique rem et aut dolorum incidunt 
                                natus optio voluptatem, modi labore quia?</p>
                                <h5 className='text-green-400 text-xl font-semibold mb-2'>Stev Smeet</h5>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row justify-between items-center py-6'>
                        <div className='md:w-1/3 flex justify-center'>
                            <img className='h-3/4 w-3/4 md:w-2/3 md:h-2/3 ' src={hero3} alt='skb' />
                        </div>
                       
                        <div className='md:w-2/3 mx-auto'>
                            <h2 className='text-4xl text-green-400 font-semibold mb-4 md:w-4/5'>Products Review</h2>
                            <div>
                                <p className='md:w-4/5 text-base text-gray-500 mb-4 leading-7'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt 
                                cupiditate officiis, doloremque vel nihil libero omnis, aliquid, ipsam asperiores quos voluptas quis vitae! Libero possimus aliquam 
                                recusandae nihil nostrum obcaecati magnam esse quidem deleniti nam! Libero nulla, doloremque similique rem et aut dolorum incidunt 
                                natus optio voluptatem, modi labore quia?</p>
                                <h5 className='text-green-400 text-xl font-semibold mb-2'>Stev Smeet</h5>
                            </div>
                        </div>
                    </div>
                    
                </Carousel>
            </div>
        </div>

    </>
  )
}

export default Reviews