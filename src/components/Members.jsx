import React from 'react'

const Members = () => {
    const services = [
        {
            id: 1, title: "Honourable Prime Minister",
            description: "Shri Narendra Modi",
            image: "https://www.newsonair.gov.in/wp-content/uploads/2024/08/PM-Modi-to-visit-Jalgaon-and-Jodhpur-tomorrow.jpeg"
        },
        {
            id: 2, title: "Honourable Minister of Agriculture and Farmers' Welfare",
            description: "Shri Shivraj Singh Chouhan",
            image: "https://irc.trif.in/wp-content/uploads/2024/08/Shri-Shivraj-Singh-Chouhan-e1722970636976.jpg"
        },
        {
            id: 3, title: "Honourable Chief Minister of Odisha",
            description: "Shri Mohan Charan Majhi",
            image: "https://www.amaodisha.com/wp-content/uploads/2024/06/Mohan-Charan-Majhi.jpg"
        },
        {
            id: 4, title: "Honourable Minister of Agriculture and Farmers' Welfare",
            description: "Shri Kanak Vardhan Singh Deo", 
            image: "https://pbs.twimg.com/media/GPzLLOObgAA2dLB.jpg"
        },

    ]
    return (
        <div className='px-4 md:px-14 py-16 max-w-screen-2xl mx-auto ' id='member'>

            <div className='md:w-1/2 mx-auto text-center' data-aos="zoom-out-up">
                <h2 className='text-4xl text-gray-700 font-semibold mb-4'>Our Members</h2>
                <p className='text-gray-600'>We have been working with some fortune 500+ clients</p>
            </div>

            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12'>
                {
                    services.map(service => (
                        <div key={service.id} data-aos="zoom-out-up" className='px-4 py-8 text-center w-full rounded-md shadow-xl cursor-pointer hover:translate-y-3 
                            hover:border-b-4 hover:border-green-700 transition-transform duration-300 flex flex-col items-center justify-center'>
                            <div className='w-36 h-36 mx-auto mb-4 bg-[#E8F5E9] rounded-tl-3xl rounded-br-3xl overflow-hidden'>
                                <img src={service.image} alt={service.title} className='w-full h-full object-cover' />
                            </div>
                            <h4 className='text-xl font-bold text-gray-700 mb-2'>{service.title}</h4>
                            <p className='text-sm text-gray-600'>{service.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Members
