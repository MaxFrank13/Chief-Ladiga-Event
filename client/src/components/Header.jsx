import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/chief-logo.png';

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
  ];

  const tabWidth = `w-1/${tabs.length} md:w-32`
  
  return (
    <header className='bg-grey-900 pt-6 shadow-xl'>
      <Link to='/Chief-Ladiga-Event'>
        <div className='max-w-screen-lg flex sm:justify-around mx-auto'>
          <div className='bg-grey-50 rounded-100 hidden sm:inline-block mb-6'>
            <img src={logo} alt='Chief Ladiga logo' className='px-8 h-40' />
          </div>
          <div className='flex flex-col justify-between gap-2 w-full sm:w-fit'>
            <h1 className='w-96 text-grey-50 text-2xl sm:text-5xl text-center font-medium tracking-wide py-2 border-b-2 border-yellow-200 mx-auto'>Chief Ladiga Silver Comet Sk8 Challenge</h1>
            <nav>
              <ul className='flex'>
                {tabs.map((item, idx, array) => (
                <Link to={`/Chief-Ladiga-Event/${item.path?.toLowerCase()}`} className={tabWidth}>
                  <li key={idx} className={`${idx === 0 ? 'rounded-tl' : idx === array.length - 1 ? 'rounded-tr' : ''} ${item.name.toLowerCase() === currentPage ? 'bg-grey-50 text-grey-900 shadow-topDown' : 'shadow-topDown bg-grey-900 text-green-500'} py-2 font-bold text-center`}>
                      {item.name.toUpperCase()}
                  </li>
                </Link>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </Link>
    </header>
  )
}