import React from 'react';
import tunnel from '../../assets/tunnel-01.png';

const Hero = () => {
  return (
    <>
      <img src={tunnel} alt='tunnel from Day 1 of the event' className='hidden sm:block object-cover bg-green-opaque'/>
      <p className='text-center mx-auto bg-green-900 text-grey-100 text-xs'>photo of tunnel from Day 1 of the event</p>
      <div className='sm:absolute sm:left-hero-left sm:top-hero-top bg-green-opaque rounded'>
        <h1 className='w-96 text-grey-100 text-2xl sm:text-7xl text-center font-medium tracking-wide pt-6 sm:py-2 border-b-2 border-yellow-500 mx-auto'>Chief Ladiga Silver Comet Sk8 Challenge</h1>
      </div>
    </>
  )
}

export default Hero;