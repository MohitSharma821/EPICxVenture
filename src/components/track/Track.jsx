import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'

function Track() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
        <div>
            <section>
                <div className=" container mx-auto px-5 md:py-5">
                    <div className="flex flex-wrap -m-4 text-center">
                        <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                            <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                                <img src='/images/category-1.jpg' alt='' className='rounded-full h-48 inline-block'/>

                                <h2 className="title-font font-medium text-2xl text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>Bungee Jump</h2>
                                <p className="leading-relaxed">Bungee Jumping Is An Activity That Involves A Person Jumping From A Great Height While Connected To A Large Elastic Cord.
                                </p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                            <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                                <img src='/images/category-2.jpg' alt='category-2' className='rounded-full h-48 inline-block'/>

                                <h2 className="title-font font-medium text-2xl text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>Zip Lines</h2>
                                <p className="leading-relaxed">A Zip-Line, Zip Line, Zip-Wire, Or Flying Fox Is A Pulley Suspended On A Cable, Usually Made Of Stainless Steel, Mounted On A Slope.
                                </p>
                            </div>
                        </div>

                        <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                            <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                            <img src='/images/category-2.jpg' alt='category-3' className='rounded-full h-48 inline-block'/>

                                <h2 className="title-font font-medium text-lg text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>Canoeing</h2>
                                <p className="leading-relaxed">Canoeing Is An Activity Which Involves Paddling A Canoe With A Single-Bladed Paddle.
                                </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Track