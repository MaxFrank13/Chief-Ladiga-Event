import React from 'react';
import { sponsorData } from '../data/sponsorData';

export default function SponsorList() {
  return (
    <>
      <h3 className='text-2xl font-medium'>Special thanks to the Tier 1 sponsors for 2023</h3> 
      {sponsorData.map((sponsor, idx) => (
        <div className={`p-4 bg-grey-50 shadow-pressed rounded`}>
          <div>
            <h3 className='text-2xl inline-block font-bold'>{sponsor.name}</h3>
          </div>
          <div className='flex items-center'>
            <img src={sponsor.image} alt={sponsor.altImage} />
            <a className='text-green-700 hover:text-green-500 font-bold' href={sponsor.link} alt={sponsor.altLink}>{sponsor.linkText}</a>
          </div>
          <div>
            <p>{sponsor.description}</p>
          </div>
        </div>
      ))}
    </>
  )
}