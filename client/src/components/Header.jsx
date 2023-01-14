import React from 'react';
import Hero from './partials/Hero';
import { Link } from 'react-router-dom';

export default function Header({ currentPage }) {
  const tabs = [
    {
      name: 'home',
      path: '',
    },
    {
      name: 'details',
      path: 'details',
    },
    {
      name: 'register',
      path: 'register',
    },
    {
      name: 'history',
      path: 'history',
    },
    {
      name: 'sponsors',
      path: 'sponsors',
    },
  ];

  return (
    <header className='shadow-xl relative'>
      {/* Nav starts */}
      <div className='bg-grey-900 z-10 flex sm:justify-around mx-auto fixed w-full'>
        <div className='flex flex-col justify-between gap-2 w-full sm:w-fit'>
          <nav className='sm:max-w-xl w-sm'>
            <ul className='flex'>
              {tabs.map((item, idx, array) => (
                <Link to={`/${item.path.toLowerCase()}`} className="w-1/5 sm:w-32">
                  <li key={idx} className={`${idx === 0 ? 'rounded-tl' : idx === array.length - 1 ? 'rounded-tr' : ''} ${item.name.toLowerCase() === currentPage ? 'bg-grey-50 text-grey-900 shadow-topDown' : 'shadow-topDown bg-grey-900 text-green-500'} text-xs sm:text-lg py-2 font-bold text-center`}>
                    {item.name.toUpperCase()}
                  </li>
                </Link>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      {/* Nav ends */}
      {currentPage === 'home' ? (
        <Hero />
      ) : (
        <div className='h-10 bg-green-900'></div>
      )}
    </header>
  )
}