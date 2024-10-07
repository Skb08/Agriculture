import React from 'react';
import digitalindia from '../assets/digitalindia.png';
import mygov from '../assets/mygov.png';
import makeinindia from '../assets/makeinindia.jfif';
import datagov from '../assets/datagov.jfif';
import indiagovin from '../assets/indiagovin.png';
import webdirectory from '../assets/webdirectory.png';

const Companies = () => {
    return (
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8 pb-6' id='companies'>
            <div className="md:w-1/2 mx-auto text-center" data-aos="zoom-out">
                <h2 className="text-4xl text-green-600 font-semibold mb-2">Resource Library</h2>
                <p className="text-green-500">We have been working with some fortune 500+ clients</p>
            </div>

            <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
                <ul className="flex items-center justify-center md:justify-start space-x-8 md:space-x-12 [&_img]:max-w-none animate-infinite-scroll">
                    <li>
                        <a href='https://www.digitalindia.gov.in/' target='_blank' rel="noopener noreferrer">
                            <img className='w-24 md:w-32' src={digitalindia} alt="Digital India" />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.mygov.in/' target='_blank' rel="noopener noreferrer">
                            <img className='w-24 md:w-32' src={mygov} alt="MyGov" />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.makeinindia.com/home' target='_blank' rel="noopener noreferrer">
                            <img className='w-24 md:w-32' src={makeinindia} alt="Make in India" />
                        </a>
                    </li>
                    <li>
                        <a href='https://data.gov.in/' target='_blank' rel="noopener noreferrer">
                            <img className='w-24 md:w-32' src={datagov} alt="Data Gov" />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.india.gov.in/' target='_blank' rel="noopener noreferrer">
                            <img className='w-24 md:w-32' src={indiagovin} alt="India Gov" />
                        </a>
                    </li>
                    <li>
                        <a href='https://igod.gov.in/' target='_blank' rel="noopener noreferrer">
                            <img className='w-24 md:w-32' src={webdirectory} alt="Web Directory" />
                        </a>
                    </li>
                </ul>

                <ul className="flex items-center justify-center md:justify-start space-x-8 md:space-x-12 [&_img]:max-w-none animate-infinite-scroll invisible lg:visible ml-6" aria-hidden="true">
                    <li>
                        <a href='https://www.digitalindia.gov.in/' target='_blank' rel="noopener noreferrer">
                            <img className='w-24 md:w-32' src={digitalindia} alt="Digital India" />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.mygov.in/' target='_blank' rel="noopener noreferrer">
                            <img className='w-24 md:w-32' src={mygov} alt="MyGov" />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.makeinindia.com/home' target='_blank' rel="noopener noreferrer">
                            <img className='w-24 md:w-32' src={makeinindia} alt="Make in India" />
                        </a>
                    </li>
                    <li>
                        <a href='https://data.gov.in/' target='_blank' rel="noopener noreferrer">
                            <img className='w-24 md:w-32' src={datagov} alt="Data Gov" />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.india.gov.in/' target='_blank' rel="noopener noreferrer">
                            <img className='w-24 md:w-32' src={indiagovin} alt="India Gov" />
                        </a>
                    </li>
                    <li>
                        <a href='https://igod.gov.in/' target='_blank' rel="noopener noreferrer">
                            <img className='w-24 md:w-32' src={webdirectory} alt="Web Directory" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Companies;
