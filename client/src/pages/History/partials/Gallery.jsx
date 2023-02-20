import React, { useState } from 'react';
import galleryData from '../data/galleryData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const decrementIndex = () => {
    if (activeIndex !== 0) {
      setActiveIndex(activeIndex - 1);
      return;
    }
    setActiveIndex(galleryData.length - 1);
  };

  const incrementIndex = () => {
    if (activeIndex !== galleryData.length - 1) {
      setActiveIndex(activeIndex + 1);
      return;
    }
    setActiveIndex(0);
  }

  return (
    <div className='flex p-4 bg-grey-900 rounded'>
      <button onClick={decrementIndex} className='hover:text-grey-50 text-grey-300'>
        <FontAwesomeIcon icon={faArrowAltCircleLeft} size='2xl' />
      </button>
      <div className='w-full flex flex-col items-center justify-center p-4 gap-4'>
        <img src={galleryData[activeIndex].src} alt={galleryData[activeIndex].altText} className='max-h-gal-img' />
        <div className='bg-grey-700 p-1 rounded'>
          <p className='bg-green-50 p-2 rounded'>{galleryData[activeIndex].caption}</p>
        </div>
      </div>
      <button onClick={incrementIndex} className='hover:text-grey-50 text-grey-300'>
        <FontAwesomeIcon icon={faArrowAltCircleRight} size='2xl' />
      </button>
    </div>
  )
};

export default Gallery;