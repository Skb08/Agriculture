import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const AgricultureNews = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [visibility, setVisibility] = useState(false);

    const toggleVisibility = () => {
        setVisibility(!visibility);
    };

    // Fetch Agriculture News using NewsAPI
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://newsapi.org/v2/everything', {
                    params: {
                        apiKey: import.meta.env.VITE_API_KEY,  
                        q: 'agriculture',  // agriculture news
                        language: 'en',
                    }
                });

                // limit to first 5 news
                const filteredNews = response.data.articles
                    .filter(article => article.description && !article.description.includes('[Removed]'))
                    .slice(0, 5);

                setNews(filteredNews); 
                setLoading(false);
            } catch (err) {
                console.error('Error fetching data:', err);
                setError('Error fetching agricultural news.');
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="max-w-screen-xl mx-auto px-4 lg:px-14 py-6" id='agrinews'>
            <div className="md:w-1/2 mx-auto text-center" data-aos="zoom-out">
                <h2 className="text-4xl text-green-600 font-semibold mb-2">Agricultural News</h2>
                <p className="text-green-500">What's  New !</p>
            </div>

            {/* News Container */}
            <div className="bg-white shadow-lg rounded-lg p-6 mt-6">
                {loading ? (
                    <p className="text-gray-500 text-center">Loading news...</p>
                ) : error ? (
                    <p className="text-red-500 text-center">{error}</p>
                ) : (
                    <div className="space-y-6 max-h-96 overflow-y-auto">
                        {news.map((article, index) => (
                            <div key={index} className="flex items-start justify-between bg-gray-50 p-4 rounded-lg shadow-md hover:bg-gray-100 transition ease-in-out duration-200">
                                <div className="flex-grow">
                                    <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-lg text-green-600 font-semibold hover:underline">
                                        {article.title}
                                    </a>
                                    <p className="text-sm text-gray-600 mt-1">{article.description.slice(0, 100) + '...'}</p>
                                </div>
                                <span className="ml-4 px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full">NEW</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* More Button */}
            <div className="text-end mt-4 ">
                <button className='text-green-600 hover:text-green-500' onClick={toggleVisibility}>
                    <Link to={"/morenews"}>{visibility ? 'Back' : <span className='flex items-center '>More <MdKeyboardDoubleArrowRight className='text-2xl' /></span>}</Link>
                </button>
            </div>
        </div>
    );
}

export default AgricultureNews;
