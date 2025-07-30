import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Gallery = () => {
    const [visibility, setVisibility] = useState(false);

    const toggleVisibility = () => {
        setVisibility(!visibility);
    };
    return (
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8' id='gallary'>
            <div className='text-center md:w-3/4 mx-auto flex flex-col items-center' data-aos="zoom-out" data-aos-duration="1000" data-aos-offset="170" data-aos-easing="ease-in-out">
                <h2 className='text-4xl text-gray-500 font-semibold mb-4'>
                    Gallery</h2>
                <p className='md:w-3/4 text-sm text-gray-500 mb-8 text-center'>A glimpse into the future of farming! Our gallery showcases the blend of modern technology and traditional methods, driving sustainable agriculture and rural progress.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-8 ">
                <div>
                    <img className="h-auto max-w-full rounded-lg hover:scale-[97%] transition-all duration-300 " 
                    src="https://img.freepik.com/free-photo/hardworking-young-farmer-operating-motor-cultivator-prepare-soil-new-seedlings-organic-food-farm_342744-1390.jpg?semt=ais_hybrid" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg hover:scale-[97%] transition-all duration-300 " 
                    src="https://img.freepik.com/premium-photo/young-indian-farmer-showing-smartphone-money-cotton-field_75648-2074.jpg?semt=ais_hybrid" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg hover:scale-[97%] transition-all duration-300 " 
                    src="https://img.freepik.com/free-photo/green-tea-bud-leaves-green-tea-plantations-morning_335224-955.jpg?t=st=1734636494~exp=1734640094~hmac=8afcbaf643f0bc1ea97476e625f3d8b6fc2ad12096cc2b9efe280e0b277d227d&w=1060" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg hover:scale-[97%] transition-all duration-300 " 
                    src="https://img.freepik.com/free-photo/farmer-holds-rice-hand_1150-6063.jpg?semt=ais_hybrid" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg hover:scale-[97%] transition-all duration-300 " 
                    src="https://img.freepik.com/free-photo/environmental-conservation-plant-sustainability_53876-104385.jpg?semt=ais_hybrid" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg hover:scale-[97%] transition-all duration-300 " 
                    src="https://img.freepik.com/premium-photo/indian-farmer-working-green-pigeon-peas-field-with-bullock_54391-6543.jpg?semt=ais_hybrid" alt="" />
                </div>
                {/* <div>
                    <img className="h-auto max-w-full rounded-lg hover:scale-[97%] transition-all duration-300 " 
                    src="https://media.istockphoto.com/id/2148858499/photo/indian-woman-collecting-a-wheat-india.jpg?s=612x612&w=0&k=20&c=u8S9OLNOLKLsPCvl5cLNGQDvdAFKb_BzmmqMKr8VY5M=" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg hover:scale-[97%] transition-all duration-300 " 
                    src="https://img.freepik.com/premium-photo/young-indian-farmer-with-agronomist-cotton-field_75648-1177.jpg?semt=ais_hybrid" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg hover:scale-[97%] transition-all duration-300 " 
                    src="https://media.istockphoto.com/id/2167280120/photo/tamil-women-plucking-tea-leaves-on-plantation-ceylon.jpg?s=612x612&w=0&k=20&c=rHAOh22fVnDeEFEDf5_B7mvTCcHNJdd7KEmR4S9jcZk=" alt="" />
                </div> */}
                
            </div>
            <div className="text-end mt-4 text-green-600 hover:text-green-500">
                <button onClick={toggleVisibility}>
                    <Link to={"/moregallery"}>{visibility ? 'Back' : <span className='flex items-center '>More <MdKeyboardDoubleArrowRight className='text-2xl' /></span>}</Link>

                </button>
            </div>

        </div>
    )
}

export default Gallery