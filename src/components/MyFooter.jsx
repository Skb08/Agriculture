import React from 'react'
import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

const MyFooter = () => {
  return (
    <Footer className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8'>
      <div className="w-[100%]">
        <div className="grid w=[100%] justify-between sm:flex sm:justify-between md:flex md:grid-cols-1 md:px-8 pl-4">
          <div className='space-y-4 mb-8'>
            <Footer.Brand
              href="#"
              src="/src/assets/grain.svg"
              alt="Flowbite Logo"
              name="Agriculture"
              //  class='m'
            />
            <div className='text-gray-700'>
              <p className='mb-1'>Copyright @ 2024 Suraj ltd</p>
              <p>All rights reserved</p>
            </div>
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Agriculture</Footer.Link>
                <Footer.Link href="#">Tailwind CSS</Footer.Link>
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
    </Footer>
  )
}

export default MyFooter