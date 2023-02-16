import React from 'react';
import { sponsorData } from '../data/sponsorData';

export default function SponsorList() {
  return (
    <>
      <h3 className='text-2xl font-medium mx-auto'>Special thanks to the sponsors for 2023</h3> 
      {sponsorData.map((sponsor, idx) => (
        <div className={`p-4 bg-grey-50 shadow-pressed rounded`}>
          <div>
            <h3 className='text-2xl inline-block font-bold'>{sponsor.name}</h3>
          </div>
          <div className='flex items-center'>
            <a className='text-green-700 hover:text-green-500 font-bold w-full' href={sponsor.link} alt={sponsor.altLink}>
              <img className='max-w-half' src={sponsor.image} alt={sponsor.altImage} />
            </a>
          </div>
          <div>
            <p>{sponsor.description}</p>
          </div>
        </div>
      ))}
    </>
  )
}