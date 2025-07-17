import React from 'react'

const Body = () => {
    return (
        <section className='w-full px-10 pt-12 pb-10 bg-white flex items-start lg:flex-row flex-col  justify-between gap-14'>
            <div className="w-1/2 items-center justify-between">
                <img src="simple_more.avif"
                    alt="simple more images"
                    className="w-full aspect-[95/66] object-cover" />
            </div>

            <div className="w-1/2">
                <h1 className="text-6xl font-[550] tracking-wide text-[#12703c] mb-4 leading-tight">
                    Simple UV Fluids SPF 50
                </h1>

                <h2 className="text-[3rem] font-[520] font-[Gotham] text-[#12703c] leading-[2] pt-1 mb-2 tracking-wide ">
                    For visibly glowing skin
                </h2>





                <p className=" font-gothamlight text-3xl text-gray-800  mb-6 pt-1 tracking-wider font-light">
                    Protects & helps reverse visible signs of sundamage in 4 weeks.
                </p>
                <div className="pt-4">
                    <button className="bg-[#12703c] text-white px-8 py-4 font-gotham font-semibold hover:bg-green-700 transition tracking-wider">
                        Explore the range
                    </button>

                </div>
            </div>
        </section>

    )
}

export default Body
