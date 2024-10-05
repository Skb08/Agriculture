import React from 'react'

const Companies = () => {
    return (
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8  pb-6' id='companies'>
            <div className='text-center md:w-3/4 mx-auto flex flex-col items-center pt-8' data-aos="zoom-out" data-aos-duration="1000" data-aos-offset="170" data-aos-easing="ease-in-out">
                <h2 className='text-4xl text-gray-500 font-semibold mb-4'>
                    Companies</h2>
                <p className='md:w-3/4 text-sm text-gray-500 mb-8 text-center'>Your support has the power to change lives. 
                Whether it's offering food, shelter, medical assistance, or education, every contribution counts. Your generosity 
                makes a meaningful difference in the lives of those in need.</p>
            </div>

            <div class="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)" >
                <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                    <li>
                        <img className='w-24' src='/src/assets/chart.svg' alt="Chart" />
                    </li>
                    <li>
                        <img className='w-24' src='/src/assets/disney.svg' alt="Disney" />
                    </li>
                    <li>
                        <img className='w-24' src='/src/assets/amazon.svg' alt="Amazon" />
                    </li>
                    <li>
                        <img className='w-24' src='/src/assets/meta.svg' alt="Meta" />
                    </li>
                    <li>
                        <img className='w-24' src='/src/assets/movie.svg' alt="Movie" />
                    </li>
                    <li>
                        <img className='w-24' src='/src/assets/youtube.svg' alt="YouTube" />
                    </li>
                </ul>
                <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll invisible lg:visible" aria-hidden="true">
                    <li>
                        <img className='w-24' src='/src/assets/chart.svg' alt="Chart" />
                    </li>
                    <li>
                        <img className='w-24' src='/src/assets/disney.svg' alt="Disney" />
                    </li>
                    <li>
                        <img className='w-24' src='/src/assets/amazon.svg' alt="Amazon" />
                    </li>
                    <li>
                        <img className='w-24' src='/src/assets/meta.svg' alt="Meta" />
                    </li>
                    <li>
                        <img className='w-24' src='/src/assets/movie.svg' alt="Movie" />
                    </li>
                    <li>
                        <img className='w-24' src='/src/assets/youtube.svg' alt="YouTube" />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Companies