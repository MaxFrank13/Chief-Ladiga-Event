import React from 'react';
import { useEffect } from 'react';
import logo from '../assets/chief-logo.png';

export default function Header() {
  const currentPage = window.location.pathname.split('/')[1];
  useEffect(() => {
    console.log(currentPage);
  })

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
            {['', 'DETAILS', 'REGISTER'].map((text, idx, array) => (
              <li key={idx} className={`${idx === 0 ? 'rounded-tl' : idx === array.length - 1 ? 'rounded-tr' : ''} ${text.toLowerCase() === currentPage ? 'bg-grey-50 text-grey-900 shadow-topDown' : 'shadow-topDown bg-grey-900 text-green-500'} w-1/3 sm:w-32 py-2 font-bold text-center`}>
                <a href={`/${text.toLowerCase()}`}>
                  {text ? text : 'HOME'}
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