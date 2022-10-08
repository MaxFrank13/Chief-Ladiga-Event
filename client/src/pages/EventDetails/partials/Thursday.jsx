import React from 'react';
import AddressList from './AddressList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

export default function Thursday() {
  return (
    <section className='flex flex-col md:flex-row justify-around items-center'>
      <section className='p-4 flex flex-col gap-4'>
        <section className='flex flex-col gap-4'>          
          <div>
            <h3 className='text-xl sizetext-green-900 border-b-2 inline-block'>Thursday June 1st, 2023</h3>
          </div>
          <div className='flex flex-col gap-4'>
            <p>
              When you arrive in Atlanta, GA (either by flying into Hartsfield-Jackson airport or driving) it is your responsibility to get to your hotel accommodation on Thursday night.
            </p>
            <p>
              If you do fly into Atlanta, the train (MARTA) station can take you into the heart of the city but you will then need to take a Taxi/Uber/Lyft up I-75 to get to the hotel.
            </p>
            <p>
              We can book your hotel for you or you can book yourself (details in Registration). It is recommended that you stay at <a href='https://goo.gl/maps/4KornD73i63zVRif7' className='text-green-700 hover:text-green-500 font-bold' target='_blank'>
                LaQuinta Inn & Suites
              </a>
              .
            </p>
              <p>
                Shuttle to & from the event will be provided from the hotel. Grocery stores, restaurants & more are within walking/skating distance.
              </p>
          </div>
        </section>
        <section className='flex flex-col items-center gap-4 text-center'>
          <div className='max-w-lg shadow-inner rounded-tl rounded-tr'>
            <p className='bg-yellow-100 p-2 rounded-tl rounded-tr'>
              Mandatory for all riders.  If you're not arriving in Atlanta in time to attend  this meeting you must communicate to Carlos Montalvo BEFORE Thursday June 1st.
            </p>
            <p className='flex text-lg font-bold bg-red-200 rounded-bl rounded-br p-2'>
              <FontAwesomeIcon icon={faExclamationCircle} className='p-2' color='#AB091E'/>
              <span>
                7:30pm - Pre-ride meeting - LaQuinta Inn & Suites (address below)
              </span>
            </p>
          </div>
        </section>
      </section>
    </section>
  )
}