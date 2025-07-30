import React from 'react'
import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
 
const MyFooter = () => {
  return (
    <footer className="bg-gray-700 text-white py-10 px-6 md:px-14">
      <div className="max-w-screen-2xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand Section */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <img src="/src/assets/planet-earth.png" alt="Agriculture Logo" className="w-10 h-10" />
            <span className="text-xl font-semibold">Agriculture</span>
          </div>
          <p className="text-gray-300">Growing a sustainable future with modern and traditional farming.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-green-400 transition"><BsFacebook size={20} /></a>
            <a href="#" className="hover:text-green-400 transition"><BsInstagram size={20} /></a>
            <a href="#" className="hover:text-green-400 transition"><BsTwitter size={20} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-green-400 transition">Home</a></li>
            <li><a href="#" className="hover:text-green-400 transition">About</a></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-green-400 transition">Twitter</a></li>
            <li><a href="#" className="hover:text-green-400 transition">Instagram</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Legal</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-green-400 transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-green-400 transition">Terms & Conditions</a></li>
          </ul>
        </div>
      </div>
      
      <div className="mt-8 border-t border-gray-400 pt-4 text-center text-gray-200 ">
        <p>&copy; {new Date().getFullYear()} Agriculture Ltd. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default MyFooter;




{/*<Footer className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8'>
      <div className="w-[100%]">
        <div className="grid w=[100%] justify-between sm:flex sm:justify-between md:flex md:grid-cols-1 md:px-8 pl-4">
          <div className='space-y-4 mb-8'>
            <Footer.Brand
              href="#"
              src="/src/assets/planet-earth.png"
              alt="Flowbite Logo"
              name="Agriculture"
               className="m "
            />
            <div className='text-gray-700'>
              <p className='mb-1'>Copyright @ 2024 Agriculture ltd</p>
              <p>All rights reserved</p>
            </div>
            <div className="mt-4 flex space-x-12 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
          </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="Quick Links" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Home</Footer.Link>
                <Footer.Link href="#">About</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Github</Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div> 
      </div>
    </Footer>*/}