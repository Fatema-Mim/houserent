import React from 'react'

const Forrent = () => {
    return (
        <div className='text-center space-y-20 py-28 bg-slate-50'>
            <div className='text-color1 space-y-3'>
                <h2 className='text-5xl md:text-6xl font-bold'>For rants & Availability</h2>
                <p className='text-3xl font-semibold'>Search your <span className='font-semibold'>House</span></p>
            </div>
            <div>
                <form className='space-y-10'>
                    <div className='flex flex-col md:flex-row justify-center space-x-0 md:space-x-4 px-4 space-y-3 md:space-y-0'>
                        <div>
                            <label className="form-label inline-block mb-2 text-gray-700 font-semibold">
                                Living area
                            </label>
                            <input className='form-controlblock w-full px-3 py-1.5 text-base  font-normal text-gray-700 bg-white bg-clip-padding
                            border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-color1 focus:outline-none'
                                type="text" name="" placeholder='Where do you want to live' />
                        </div>
                        <div>
                            <label className="form-label inline-block mb-2 text-gray-700 font-semibold">Type</label>
                            <select name="cars" id="cars" className='form-controlblock w-full px-3 py-1.5 text-base  font-normal text-gray-700 bg-white bg-clip-padding
                            border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-color1 focus:outline-none'>
                                <option value="">Search your type</option>
                                <option value="volvo">Office</option>
                                <option value="saab">Sublet</option>
                                <option value="mercedes">Apartments</option>
                                <option value="audi">Family Home</option>
                            </select>
                        </div>

                        <div>
                            <label className="form-label inline-block mb-2 text-gray-700 font-semibold">
                                Min Price
                            </label>
                            <input className='form-controlblock w-full px-3 py-1.5 text-base  font-normal text-gray-700 bg-white bg-clip-padding
                            border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-color1 focus:outline-none'
                                type="text" name="" placeholder='Minimum' />
                        </div>
                        <div>
                            <label className="form-label inline-block mb-2 text-gray-700 font-semibold">
                                Max Price
                            </label>
                            <input className='form-controlblock w-full px-3 py-1.5 text-base  font-normal text-gray-700 bg-white bg-clip-padding
                            border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-color1 focus:outline-none'
                                type="text" name="" placeholder='Maximun' />
                        </div>

                        <div>
                            <label className="form-label inline-block mb-2 text-gray-700 font-semibold">For</label>
                            <select name="cars" id="cars" className='form-controlblock w-full px-3 py-1.5 text-base  font-normal text-gray-700 bg-white bg-clip-padding
                            border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-color1 focus:outline-none'>
                                <option value="">How many people</option>
                                <option value="volvo">3</option>
                                <option value="saab">1</option>
                                <option value="mercedes">100+</option>
                                <option value="audi">store</option>
                            </select>
                        </div>
                    </div>
                    <button type="submit" className='px-6 py-2.5 rounded-full text-white bg-color1'>Check Availability</button>
                </form>
            </div>
        </div>
    )
}

export default Forrent