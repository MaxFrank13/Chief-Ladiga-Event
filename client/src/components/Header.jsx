import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/chief-logo.png';

export default function Header({ currentPage }) {
  return (
    <header className='bg-grey-900 pt-6 shadow-xl'>
      <Link to='/'>
        <div className='max-w-screen-lg flex sm:justify-around mx-auto'>
          <div className='bg-grey-50 rounded-100 hidden sm:inline-block mb-6'>
            <img src={logo} alt='Chief Ladiga logo' className='px-8 h-40' />
          </div>
          <div className='flex flex-col justify-between gap-2 w-full sm:w-fit'>
            <h1 className='w-96 text-grey-50 text-2xl sm:text-5xl text-center font-medium tracking-wide py-2 border-b-2 border-yellow-200 mx-auto'>Chief Ladiga Silver Comet Sk8 Challenge</h1>
            <nav>
              <ul className='flex'>
              {['DETAILS', 'REGISTER', 'HISTORY'].map((text, idx, array) => (
                <li key={idx} className={`${idx === 0 ? 'rounded-tl' : idx === array.length - 1 ? 'rounded-tr' : ''} ${text.toLowerCase() === currentPage ? 'bg-grey-50 text-grey-900 shadow-topDown' : 'shadow-topDown bg-grey-900 text-green-500'} w-1/3 sm:w-32 py-2 font-bold text-center`}>
                  <Link 
                    to={`/${text.toLowerCase()}`}
                  >
                    {text}
                  </Link>
                </li>
              ))}
              </ul>
            </nav>
          </div>
        </div>
      </Link>
    </header>
  )
}