import React from 'react'
import { useState } from 'react';
import MyFooter from './MyFooter';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";


const data = [
    {
        id: 1,
        title: 'Undestanding the Diffrent Types of Herbicides and their uses',
        description: 'The Impact of Climate Change on Crop Pests and Diseases...',
        author: 'Dhanuka Agritech Limited',
        date: '11 January 2024',
        imageUrl: 'https://www.dhanuka.com/storage/posts/October2023/N0txElwsItT31RK5luWc.jpg',
        profile: 'https://www.dhanuka.com/content/images/logos/dhanukaLogoHome.png',
        link: 'https://www.dhanuka.com/blogs/understanding-the-different-types-of-herbicides-and-their-uses'
    },
    {
        id: 2,
        // category: 'Startups',
        title: 'Hydroponics Farming: Revolution for Soil Less Cultivation',
        description:
            'Hydroponics farming has become a very popular term in the...',
        author: 'unknown',
        date: '28 May 2024',
        imageUrl: 'https://timesofagriculture.in/wp-content/uploads/2024/05/hydroponics-2.webp',
        profile: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
        link: 'https://timesofagriculture.in/hydroponics-farming-in-india/'
    },
    {
        id: 3,
        // category: 'Trending',
        title: 'Revolutionising India’s Economy through Agricultural R&D',
        description:
            "Revolutionising India's economy through agricultural research and development",
        author: 'Dhanuka Agritech Limited',
        date: '06 April 2023',
        imageUrl: 'https://www.dhanuka.com/storage/posts/April2023/1wakXr6TLsu36sDFBxk6.jpg',
        profile: 'https://www.dhanuka.com/content/images/logos/dhanukaLogoHome.png',
        link: 'https://www.dhanuka.com/blogs/revolutionising-india-s-economy-through-agricultural-research-and-development'
    },
    {
        id: 1,
        title: 'Undestanding the Diffrent Types of Herbicides and their uses',
        description: 'The Impact of Climate Change on Crop Pests and Diseases...',
        author: 'Dhanuka Agritech Limited',
        date: '11 January 2024',
        imageUrl: 'https://www.dhanuka.com/storage/posts/October2023/N0txElwsItT31RK5luWc.jpg',
        profile: 'https://www.dhanuka.com/content/images/logos/dhanukaLogoHome.png',
        link: 'https://www.dhanuka.com/blogs/understanding-the-different-types-of-herbicides-and-their-uses'
    },
    {
        id: 2,
        // category: 'Startups',
        title: 'Hydroponics Farming: Revolution for Soil Less Cultivation',
        description:
            'Hydroponics farming has become a very popular term in the...',
        author: 'unknown',
        date: '28 May 2024',
        imageUrl: 'https://timesofagriculture.in/wp-content/uploads/2024/05/hydroponics-2.webp',
        profile: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
        link: 'https://timesofagriculture.in/hydroponics-farming-in-india/'
    },
    {
        id: 3,
        // category: 'Trending',
        title: 'Revolutionising India’s Economy through Agricultural R&D',
        description:
            "Revolutionising India's economy through agricultural research and development",
        author: 'Dhanuka Agritech Limited',
        date: '06 April 2023',
        imageUrl: 'https://www.dhanuka.com/storage/posts/April2023/1wakXr6TLsu36sDFBxk6.jpg',
        profile: 'https://www.dhanuka.com/content/images/logos/dhanukaLogoHome.png',
        link: 'https://www.dhanuka.com/blogs/revolutionising-india-s-economy-through-agricultural-research-and-development'
    },

];

const Card = ({ category, title, description, author, date, imageUrl, profile ,link }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full md:w-80 duration-500 hover:scale-105 hover:shadow-xl">
            <img
                className="w-full h-60 object-cover"
                src={imageUrl}
                alt={title}
            />
            <div className="p-4">
                <p className="text-sm text-gray-500">{category}</p>
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                <p className="text-gray-600 mt-2 text-sm">{description}</p>
                <a href={link} target='_blank' className='text-sm flex justify-end text-green-600 hover:text-green-500'>read more {">"}</a>
                <div className="flex items-center mt-4">
                    <img className="w-10 h-10 rounded-full" src={profile} alt={author} />
                    <div className="ml-3 ">
                        <p className="text-sm font-medium text-gray-800">{author}</p>
                        <p className="text-xs text-gray-500">{date}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const MoreNewsBlog = () => {
    const [visibility, setVisibility] = useState(true);
    const toggleVisibility = () => {
        setVisibility(!visibility);
    };
    return <>
        <Navbar></Navbar>

        <div className='px-4 md:px-14 py-16 max-w-screen-2xl mx-auto' id='blog'> {/* Flex container */}
            <div className="md:w-1/2 mx-auto text-center" data-aos="zoom-out-up">
                <h2 className="text-4xl text-green-600 font-semibold mb-2">Blogs</h2>
                <p className="text-green-500">We have been working with some fortune 500+ clients</p>
            </div>

            <div data-aos="zoom-in" className="flex flex-wrap justify-center gap-6 p-4"> {/* Flex wrap and centered */}
                {data.map((item) => (
                    <Card key={item.id} {...item} />
                ))}
            </div>

            <div className="text-end mt-4 text-green-600 hover:text-green-500">
                <button >
                    <Link to="/?section=newsblog">{visibility ? <span className='flex items-center '><MdKeyboardDoubleArrowLeft className='text-2xl' /> Back </span> : ' More...'}</Link>
                </button>
            </div>

        </div>

        <MyFooter></MyFooter>
    </>
}
