import React from 'react';

export default function Thursday() {
  return (
    <section className='flex flex-col md:flex-row justify-around items-center'>
      <section className='max-w-lg p-4'>
        <div className='py-4'>
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
            We can book your hotel for you or you can book yourself (details in Registration). It is recommended that you stay at The La Quinta Inn & Suites Atlanta Paces Ferry. Shuttle to & from the event will be provided from the hotel. Grocery stores, restaurants & more are within walking/skating distance.
          </p>
        </div>
        <div className='p-4 font-bold text-center'>
          <p>
            ***Mandatory for all riders.  If you're not arriving in Atlanta in time to attend  this meeting you must communicate to Carlos Montalvo BEFORE Thursday. ***
          </p>
          <p className='text-lg'>
            7:30pm - Pre-ride meeting - Location TBD
          </p>
        </div>
      </section>
      <section className='p-4'>
        <section className='flex flex-col items-center'>
          <p className='bg-grey-400 w-64 h-64'>
            map here
          </p>
          <p className='p-2 max-w-xs bg-grey-900 text-grey-100 text-sm'>
            La Quinta Inn & Suites Atlanta Paces Ferry
            2415 Paces Ferry Rd Southeast
            Atlanta, GA 30339
            Phone: 1-770-801-9002
          </p>
        </section>
      </section>
    </section>
  )
}