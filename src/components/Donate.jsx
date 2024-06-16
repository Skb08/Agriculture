import React from 'react'

const Donate = () => {
  return (
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8'>
        <div className='text-center md:w-3/4 mx-auto flex flex-col items-center ' data-aos="zoom-out" >
            <h2 className='text-4xl text-gray-500 font-semibold mb-4'>
                Donate for Those in Need</h2>
            <p className='md:w-3/4 text-sm text-gray-500 mb-8 text-center'>Your support has the power to change lives. 
            Whether it's offering food, shelter, medical assistance, or education, every contribution counts. Your generosity 
            makes a meaningful difference in the lives of those in need.</p>
        </div>
        <section id="Projects" data-aos="zoom-out" 
            className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
            <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl " >
                <img src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
                <div class="px-4 py-3 w-72">
                    {/* <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span> */}
                    <p class="text-lg font-bold text-black truncate block capitalize mb-2 text-center">Product Name</p>
                    <div class="flex items-center justify-center">
                        <button className='px-7 py-2 bg-green-400 text-white rounded hover:bg-slate-400'>Donate</button>
                    </div>
                </div>
            </div>
            <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <img src="https://images.unsplash.com/photo-1651950519238-15835722f8bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
                <div class="px-4 py-3 w-72">
                    {/* <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span> */}
                    <p class="text-lg font-bold text-black truncate block capitalize mb-2 text-center">Product Name</p>
                    <div class="flex items-center justify-center">
                        <button className='px-7 py-2 bg-green-400 text-white rounded hover:bg-slate-400'>Donate</button>
                    </div>
                </div>
            </div>
            <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl" >
                <img src="https://images.unsplash.com/photo-1651950537598-373e4358d320?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
                <div class="px-4 py-3 w-72">
                    {/* <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span> */}
                    <p class="text-lg font-bold text-black truncate block capitalize mb-2 text-center">Product Name</p>
                    <div class="flex items-center justify-center">
                        <button className='px-7 py-2 bg-green-400 text-white rounded hover:bg-slate-400'>Donate</button>
                    </div>
                </div>
            </div>
        </section>

    </div>
  )
}

export default Donate