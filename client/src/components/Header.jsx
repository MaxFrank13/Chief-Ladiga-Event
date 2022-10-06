import React from 'react';
import logo from '../assets/chief-logo.png';

export default function Header() {
  return (
    <header className='bg-grey-900 pt-6'>
      <div className='max-w-4xl flex justify-around mx-auto relative'>
        <div className='bg-grey-50 rounded-100 hidden sm:inline-block mb-6'>
          <img src={logo} alt='Chief Ladiga logo' className='px-8 h-40' />
        </div>
        <div className='flex flex-col justify-between gap-4 w-full sm:w-fit'>
          <h1 className='w-96 text-grey-50 text-2xl sm:text-3xl text-center font-bold sm:pt-6 mx-auto'>Chief Ladiga Silver Comet Sk8 Challenge</h1>
          <nav>
            <ul className='flex'>
            {['', 'DETAILS', 'REGISTER'].map((text, idx) => (
              <li key={idx}>
                <a href={`/${text.toLowerCase()}`}>
                  <button className='bg-grey-900 shadow-topDown rounded-sm py-2 w-1/3 sm:w-32 text-green-500 font-bold'>
                    {text ? text : 'HOME'}
                  </button>
                </a>
              </li>
            ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}