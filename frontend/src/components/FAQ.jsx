import React from 'react'

const FAQ = () => {

    return (
        <>
           <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-12' id='faq'>

<div data-aos="zoom-out"
    className='text-center md:w-3/4 mx-auto flex flex-col items-center'>
    <h2 className='text-4xl text-gray-500 font-semibold mb-4'>
        Agriculture FAQ</h2>
    <p className='md:w-3/4 text-sm text-gray-500 mb-8 text-center'>Find answers to common questions about modern farming, sustainable agriculture, and advanced farming equipment.</p>
</div>

<div className="mx-auto mt-4 grid max-w-screen-lg divide-y divide-neutral-200">
    <div className="py-5">
        <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between font-normal text-gray-700">
                <span>What are the benefits of using advanced agricultural equipment?</span>
                <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                        <path d="M6 9l6 6 6-6"></path>
                    </svg>
                </span>
            </summary>
            <p className="group-open:animate-fadeIn mt-3 font-[350] text-neutral-500">Advanced agricultural equipment helps farmers increase efficiency, reduce labor costs, and improve crop yields. These innovations contribute to sustainable farming and environmental conservation.</p>
        </details>
    </div>
    <div className="py-5">
        <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between font-normal text-gray-700">
                <span>How can precision farming benefit small-scale farmers?</span>
                <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                        <path d="M6 9l6 6 6-6"></path>
                    </svg>
                </span>
            </summary>
            <p className="group-open:animate-fadeIn mt-3 font-[350] text-neutral-500">Precision farming allows small-scale farmers to optimize resources, reduce waste, and improve productivity by using technology like GPS mapping, soil sensors, and automated irrigation systems.</p>
        </details>
    </div>
    <div className="py-5">
        <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between font-normal text-gray-700">
                <span>What are the latest trends in sustainable agriculture?</span>
                <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                        <path d="M6 9l6 6 6-6"></path>
                    </svg>
                </span>
            </summary>
            <p className="group-open:animate-fadeIn mt-3 font-[350] text-neutral-500">Key trends include regenerative farming, vertical farming, organic crop production, and the use of AI-driven analytics for better farm management and sustainability.</p>
        </details>
    </div>
    <div className="py-5">
        <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between font-normal text-gray-700">
                <span>How can farmers access financial support for modernizing their farms?</span>
                <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                        <path d="M6 9l6 6 6-6"></path>
                    </svg>
                </span>
            </summary>
            <p className="group-open:animate-fadeIn mt-3 font-[350] text-neutral-500">Farmers can explore government subsidies, agricultural grants, and low-interest loans offered by banks and agricultural development programs to upgrade their equipment and farming techniques.</p>
        </details>
    </div>
</div>
</div>





        </>
    )
}

export default FAQ