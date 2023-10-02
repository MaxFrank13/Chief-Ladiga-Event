import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

export default function Thursday() {
  return (
    <section className='flex flex-col md:flex-row justify-around items-center'>
      <section className='py-4'>
        <section className='flex flex-col gap-4'>
          <div>
            <h3 className='text-3xl border-b-2 inline-block'>Thursday</h3>
          </div>
          <div className='flex flex-col gap-4 text-lg'>
            <p>
              When you arrive in Atlanta, GA (either by flying into Hartsfield-Jackson airport or driving) it is your responsibility to get to your hotel accommodation on Thursday night.
            </p>
            <p>
              If you do fly into Atlanta, the train (MARTA) station can take you into the heart of the city but you will then need to take a Taxi/Uber/Lyft up I-75 to get to the hotel for the pre-race meeting (see below).
            </p>
            <p>
              We can book your hotel for you or you can book yourself (details can be found in the <a className='text-green-700 hover:text-green-500 font-bold' href='https://docs.google.com/forms/d/e/1FAIpQLSfraoZDR_Whfc82iZJIY38NGRl-gR3FfzlhsHB_bgrFLLj6SA/viewform' alt='Google form for event'>registration form</a>). It is recommended that you stay at <a href='https://goo.gl/maps/4KornD73i63zVRif7' className='text-green-700 hover:text-green-500 font-bold' target='_blank' rel="noreferrer">
                LaQuinta Inn & Suites
              </a>
              .
            </p>
            <section className='flex flex-col items-center gap-4 text-center'>
              <div className='max-w-lg shadow-inner rounded-tl rounded-tr'>
                <p className='bg-yellow-100 p-2 rounded-tl rounded-tr'>
                  There is a check-in window from 3-9pm at the hotel. If you're not arriving in Atlanta in time for the check-in window, you must communicate this to <a className='text-green-700 hover:text-green-500 font-bold' href='mailto:sk8188challenge@gmail.com'>
          the event organizer</a> BEFORE Thursday.
                </p>
                <p className='flex text-lg font-bold bg-yellow-400 leading-8 rounded-bl rounded-br p-2'>
                  <FontAwesomeIcon icon={faExclamationCircle} className='p-2' color='#AB091E' />
                  <span>
                    3-9pm | Check-in window @ LaQuinta Inn & Suites
                  </span>
                </p>
              </div>
            </section>
            <p>
              Shuttle to the event will be provided by the hotel. Grocery stores, restaurants & more are within walking/skating distance.
            </p>
          </div>
        </section>
      </section>
    </section>
  )
}