import React from 'react'

function HeroSection() {
  return (
    <div className='relative'>
        <img src="/home1.jpg" alt="hero" className='w-screen'/>
        <div className="absolute top-[20%] flex flex-col items-center justify-center w-full max-sm:pl-20 pl-40">
        <p className="text-3xl mb-2 md:text-5xl">Never Stop</p>
        <h1 className="text-4xl md:text-7xl text-green-600 font-bold uppercase my-2">Exploring</h1>
          <p className="text-2xl mt-2 max-sm:hidden">EPICxVENTURE Offers Best Deals On India Tour Packages.</p>
          <p className="text-2xl mt-2 max-sm:hidden">EPICxVENTURE Signifies A Grand, Remarkable, Or Legendary Journey.</p>
          <button className="border-2 border-black rounded-full px-8 py-3 mt-3">Get Started</button>
        </div>
        
    </div>
  )
}

export default HeroSection