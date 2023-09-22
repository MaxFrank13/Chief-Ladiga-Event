import React from 'react';

export default function AddressList() {
  return (
    <section>
      <h4 className='text-3xl border-b-2 inline-block mb-4'>Hotel Information</h4>
      {/* <p className='flex text-lg font-bold bg-yellow-400 leading-8 rounded p-2 m-2 mb-4'>
        <FontAwesomeIcon icon={faExclamationCircle} className='p-2' color='#AB091E' />
        <span>
          All hotel information is subject to change and has NOT been finalized. The event director is currently working on securing the below options. Please bear this in mind as you navigate the site wherever you see information regarding hotel arrangements. We appreciate your patience and apologize for any inconvenience this may cause.
        </span>
      </p> */}
      <p className='text-lg mb-4'>
        After you register, you will receive an email with additional information on how to get the group rate for a set of hotels. You are also welcome to book your accommodations independently. For those who are interested, sharing rooms is common and encouraged. Feel free to reach out on the <a href='https://www.facebook.com/ChiefLadigaSilverCometSk8' alt='Chief Ladiga Silver Comet Sk8 Challenge Facebook page' target='_blank' rel='noreferrer' className='text-green-700 hover:text-green-500 font-bold'>Facebook page</a> or directly to the <a className='text-green-700 hover:text-green-500 font-bold' href='mailto:sk8188challenge@gmail.com'>
          the event organizer</a> if you need help finding others to room with.
      </p>
      {/* <div className='flex flex-col items-center justify-center sm:flex-row gap-4'>
        <div className='bg-green-100 px-4 py-2 shadow-both hover:shadow-pressed'>
          <a href='https://goo.gl/maps/4KornD73i63zVRif7' target="_blank" rel="noreferrer" >
            <h6 className='font-bold text-center'>Thursday/Sunday</h6>
            <p>
              LaQuinta Inn & Suites
            </p>
            <p>
              2415 Paces Ferry Rd SE
            </p>
            <p>
              Atlanta, GA
            </p>
            <p>
              30339
            </p>
          </a>
        </div>
        <div className='px-4 py-2 bg-green-100 shadow-both hover:shadow-pressed w-52'>
          <a href='https://goo.gl/maps/Y1sBtSGR1ui8q6iZ6' target="_blank" rel="noreferrer">
            <h6 className='font-bold text-center'>Friday</h6>
            <p>
              Western Inn
            </p>
            <p>
              105 GTM Pkwy
            </p>
            <p>
              Rockmart, GA
            </p>
            <p>
              30153
            </p>
          </a>
        </div>
        <div className='px-4 py-2 bg-green-100 shadow-both hover:shadow-pressed w-52'>
          <a href='https://goo.gl/maps/5dfT6UD73jiC2ZEb8' target="_blank" rel="noreferrer">
            <h6 className='font-bold text-center'>Saturday</h6>
            <p>
              Comfort Inn Suites
            </p>
            <p>
              125 Davis Loop
            </p>
            <p>
              Oxford, AL
            </p>
            <p>
              36203
            </p>
          </a>
        </div>
      </div> */}
    </section>
  )
}