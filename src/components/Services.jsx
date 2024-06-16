import React from 'react'

const Services = () => {
    const services=[
        {id:1, title:"Membership Organization", description:"Our membership management software provides full automation of membership renewals and payments", image:"/src/assets/slogo.png"},
        {id:2, title:"National Association", description:"Our membership management software provides full automation of membership renewals and payments", image:"/src/assets/slogo.png"},
        {id:3, title:"Clubs and Groups", description:"Our membership management software provides full automation of membership renewals and payments", image:"/src/assets/slogo.png"},
        
    ]
  return (
    <div className='px-4 md:px-14 py-16 max-w-screen-2xl mx-auto my-8 ' id='service'>
        <div className='text-center my-8'>
            <div data-aos="zoom-out-down" >
                <h2 className='text-4xl text-gray-500 font-semibold mb-2' >Our Clients</h2>
                <p className='text-gray-500 '>We have been working with some fortune 500+ clients</p>
            </div>
            {/* companies logo */}
            <div className='container mx-auto p-4 flex flex-wrap justify-evenly items-center gap-8' data-aos="zoom-out-up" >
                <img src='/src/assets/slogo.png' alt='company' className='w-16 h-16 sm:w-24 sm:h-24 md:w-24 md:h-24 lg:w-32 lg:h-32'/>
                <img src='/src/assets/slogo.png' alt='company' className='w-16 h-16 sm:w-24 sm:h-24 md:w-24 md:h-24 lg:w-32 lg:h-32'/>
                <img src='/src/assets/slogo.png' alt='company' className='w-16 h-16 sm:w-24 sm:h-24 md:w-24 md:h-24 lg:w-32 lg:h-32'/>
                <img src='/src/assets/slogo.png' alt='company' className='w-16 h-16 sm:w-24 sm:h-24 md:w-24 md:h-24 lg:w-32 lg:h-32'/>
                <img src='/src/assets/slogo.png' alt='company' className='w-16 h-16 sm:w-24 sm:h-24 md:w-24 md:h-24 lg:w-32 lg:h-32'/>
                
            </div>
        </div>

        {/* services */}
        <div className='mt-20 md:w-1/2 mx-auto text-center ' data-aos="zoom-out-up" >
            <h2 className='text-4xl text-gray-500 font-semibold mb-2'>Our Members</h2>
            <p className='text-gray-500 '>We have been working with some fortune 500+ clients</p>
        </div>
        <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12'>
            {
                services.map(service => <div key={service.id} data-aos="zoom-out-up" 
                className='px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-[100%] '>
                    <div>
                        <div className='bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl '>
                            <img src={service.image} alt='skb' className='-ml-5' />
                        </div>
                        <h4 className='text-2xl font-bold text-gray-500 mb-2 px-2'>{service.title}</h4>
                        <p className='text-sm text-gray-500'>{service.description}</p>
                    </div>

                </div>)
            }
        </div>
    </div>
  )
}

export default Services