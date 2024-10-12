import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import MyFooter from './MyFooter';
import { Link } from 'react-router-dom';
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

const MoreNews = () => {
    const [moreNews, setMoreNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const articlesPerPage = 10;
    const [visibility, setVisibility] = useState(true);
    const toggleVisibility = () => {
        setVisibility(!visibility);
    };

    // Fetch more news
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Call the proxy server instead of the NewsAPI directly
                const response = await axios.get('http://localhost:5000/agriculture-news');
    
                const filteredNews = response.data.articles
                    .filter(article => article.description && !article.description.includes('[Removed]'))
                    .slice(0, 100);
    
                setMoreNews(filteredNews); 
                setLoading(false);
            } catch (err) {
                console.error('Error fetching data:', err);
                setError('Error fetching more agricultural news.');
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Calculate the index for the current page
    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticles = moreNews.slice(indexOfFirstArticle, indexOfLastArticle);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <Navbar />
            <div className="max-w-screen-xl mx-auto px-4 lg:px-14 py-6" id='morenews'>
                <div className="md:w-1/2 mx-auto text-center" data-aos="zoom-out">
                    <h2 className="text-4xl text-green-600 font-semibold mb-2">Resource Library</h2>
                    <p className="text-green-500">We have been working with some fortune 500+ clients</p>
                </div>
                <div className="bg-gray-50 rounded-lg shadow-md p-6">
                    {loading ? (
                        <p>Loading more news...</p>
                    ) : error ? (
                        <p className="text-red-500">{error}</p>
                    ) : (
                        <div className="space-y-6">
                            {currentArticles.map((article, index) => (
                                <div key={index} className="border-b border-gray-300 pb-4 mb-4 last:border-b-0 transition-transform hover:scale-[1.01]">
                                    <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-lg md:text-xl font-semibold text-green-600 hover:underline">
                                        {article.title}
                                    </a>
                                    <p className="text-sm text-gray-500 mt-2">{article.description}</p>
                                    <p className="text-xs text-gray-400 mt-1">Source: {article.source.name} - {new Date(article.publishedAt).toLocaleDateString()}</p>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Pagination */}
                    <div className="flex justify-center items-center mt-6 space-x-2">
                        {[...Array(Math.ceil(moreNews.length / articlesPerPage)).keys()].map(number => (
                            <button key={number} onClick={() => paginate(number + 1)} className={`mx-1 px-4 py-2 rounded-lg 
                            ${currentPage === number + 1 ? 'bg-green-500 text-white font-bold' : 'bg-gray-200 text-gray-800'} 
                            hover:bg-green-600 hover:text-white transition duration-200 ease-in-out`}>
                                {number + 1}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex justify-end mt-4 mx-4">
                <Link to="/?section=agrinews" className="flex items-center text-green-600 hover:text-green-500 transition duration-200 ease-in-out">
                    <MdKeyboardDoubleArrowLeft className='text-2xl mr-1' />
                    {visibility ? 'Back' : 'More...'}
                </Link>
            </div>

            <MyFooter />
        </>
    );
}

export default MoreNews;
