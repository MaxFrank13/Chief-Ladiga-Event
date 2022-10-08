import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className='h-24 flex justify-center items-center bg-green-900'>
      <div>
        <a href='https://www.facebook.com/ChiefLadigaSilverCometSk8' alt='Chief Ladiga Silver Comet Sk8 Challenge Facebook page' target='_blank' rel='noreferrer'>
          <FontAwesomeIcon icon={faFacebook} size='2xl' color='#F0B429' />
        </a>
      </div>
    </footer>
  )
}