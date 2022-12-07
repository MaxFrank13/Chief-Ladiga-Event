import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

export default function AddressList() {
  return (
    <section>
      <h4 className='text-3xl border-b-2 inline-block mb-2'>Hotel Information</h4>
      <p className='flex text-lg font-bold bg-yellow-400 leading-8 rounded p-2 m-2 mb-4'>
        <FontAwesomeIcon icon={faExclamationCircle} className='p-2' color='#AB091E' />
        <span>
          All hotel information is subject to change and has NOT been finalized. The event director is currently working on securing the below options. Please bear this in mind as you navigate the site wherever you see information regarding hotel arrangements. We appreciate your patience and apologize for any inconvenience this may cause.
        </span>
      </p>
      <div className='flex flex-col sm:flex-row items-start gap-2'>
        <div className='px-4 py-2 bg-green-100 rounded shadow-both hover:shadow-pressed w-52'>
          <a href='https://goo.gl/maps/4KornD73i63zVRif7' target="_blank" rel="noreferrer" >
            <h5 className='font-bold text-center'>Thursday/Sunday</h5>
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
        <div className='px-4 py-2 bg-green-50 rounded shadow-both hover:shadow-pressed w-52'>
          <a href='https://goo.gl/maps/Y1sBtSGR1ui8q6iZ6' target="_blank" rel="noreferrer">
            <h5 className='font-bold text-center'>Friday</h5>
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
        <div className='px-4 py-2 bg-green-100 rounded shadow-both hover:shadow-pressed w-52'>
          <a href='https://goo.gl/maps/mxfU1omoSDJEEuvZA' target="_blank" rel="noreferrer">
            <h5 className='font-bold text-center'>Saturday</h5>
            <p>
              Econo Lodge
            </p>
            <p>
              25 Elm St
            </p>
            <p>
              Oxford, AL
            </p>
            <p>
              36203
            </p>
          </a>
        </div>
      </div>
    </section>
  )
}