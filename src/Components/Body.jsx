import React from 'react'

const Body = () => {
    return (
        <section className='w-full px-10 pt-24 pb-14 bg-white flex flex-col lg:flex-row items-center justify-between gap-12'>
            <div className="w-1/2">
                <img src="simple_more.avif"
                alt="simple more images"
                className="w-full aspect-[95/66] object-cover" />
            </div>

            <div className="w-1/2">
            <h1 className='text-4xl font-bold text-green-700 mb-4 leading-tight'>
                Simple UV Fluids SPF 50
            </h1>
            <h2 className='text-2xl font-semibold text-green-700 mb-2'>
                 For visibly glowing skin
            </h2>
            <p className="text-gray-800 text-lg mb-6">
                Protects & helps reverse visible signs of sundamage in 4 weeks.
            </p>
            <button className="bg-green-700 text-white px-6 py-2 font-semibold rounded hover:bg-green-700 transition">
      Explore the range
    </button>
            </div>
        </section>

    )
}

export default Body
