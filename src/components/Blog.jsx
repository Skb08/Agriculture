import React from 'react'
// import Boy from "../assets/cartoonBoy.png"

const Blog = () => {
    const blogs=[
        {id:1, title:"creating Streamline Safegurding Process with Oneren", image:'/src/assets/cartoonBoy.png'},
        {id:2, title:"creating Streamline Safegurding Process with Oneren", image:'/src/assets/cartoonBoy.png'},
        {id:3, title:"creating Streamline Safegurding Process with Oneren", image:'/src/assets/cartoonBoy.png'},
    ]
  return (
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-12' id='faq'>
        <div data-aos="zoom-out" 
            className='text-center md:w-3/4 mx-auto flex flex-col items-center' >
            <h2 className='text-4xl text-gray-500 font-semibold mb-4'>
                Caring is the new marketing</h2>
            <p className='md:w-3/4 text-sm text-gray-500 mb-8 text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni iusto, maxime tempora  unde 
                consequatur, tempore hic voluptas dolores deserunt excepturi, exercitationem  doloremque voluptatem officiis ipsum?</p>
        </div>
        {/* blogs */}
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 items-center justify-between'>
            {
                blogs.map(blog=> <div key={blog.id} data-aos="zoom-out-up" 
                    className='mx-auto relative mb-12 cursor-pointer ' >
                    <img src={blog.image} alt='' className='hover:scale-95 transition-all duration-300'/>
                    <div className='text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12'>
                        <h3 className='mb-3 text-gray-400 font-semi-bold'>{blog.title}</h3>
                        <div className='flex items-center justify-center gap-8'>
                            <a href='/' className='font-bold text-green-500 hover:text-neutral-700'>
                                Readmore</a>
                    
                        </div>
                    </div>
                </div>)
            }
        </div>
    </div>
  )
}

export default Blog