import React from 'react';
import { Link } from 'react-scroll';
import grain from '../assets/grain.svg'

const Navbar = () => {
    const navItems = [
        { link: "Home", path: "home" },
        { link: "Service", path: "service" },
        { link: "About", path: "about" },
        { link: "Product", path: "product" },
        { link: "Testimonial", path: "testimonial" },
        { link: "FaQ", path: "faq" },
    ];
    const dropdown = [
        { link: "Dashboard", path: "dashboard" },
        { link: "Setting", path: "setting" },
        { link: "Signout", path: "signout" },
    ];

    return (
        <>
            <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 sticky top-0 z-50">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={grain} className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Agriculture</span>
                    </a>
                    <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className="hidden w-[100%] md:block md:w-auto" id="navbar-dropdown">
                        <ul className="flex flex-col items-center font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            {
                                navItems.map(({ link, path }) => (
                                    <Link to={path} spy={true} smooth={true} key={path} offset={-100} className="block text-base py-2 text-gray-900 dark:text-gray-300 hover:text-white dark:hover:text-white md:hover:text-white first:font-medium cursor-pointer   rounded md:rounded hover:bg-green-500 dark:hover:bg-green-500  transition-all duration-300 ease-in-out hover:px-4 md:hover:px-2">
                                        {link}
                                    </Link>
                                ))
                            }
                            <li>
                            <Link to='signin' spy={true} smooth={true} key='signin' offset={-100}><button className="block text-base py-2 text-white  first:font-medium cursor-pointer p-2 rounded bg-green-400 hover:bg-green-500  ">
                                SignIn</button>
                            </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
