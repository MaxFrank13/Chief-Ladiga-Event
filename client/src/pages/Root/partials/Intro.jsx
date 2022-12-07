import React from 'react';
import homePhoto from '../../../assets/chief-crew-homepage.jpg';

export default function Intro() {
  return (
    <>
      <p className='my-2'>
        The Chief Ladiga Silver Comet 188 mile Sk8 Challenge is a 3 day event of distance skateboarding through the Taladega National rainforest. The ride spans 2 states, 2 timezones, 5 counties and about 188 miles.
      </p>
      <p className='my-2'>
        Starting in Smyrna, GA, the first day is a chill 38 miles under a canopy of trees before stopping in Rockmart, GA. Day 2 consists of 56 miles and spans the rest of the trail ending in Anniston, AL. Most of this section is open to the sun and passes through some of the most remote parts of the south-eastern United States. For the third day, riders will do the whole 94 miles back from Anniston, AL to Smyrna, GA.
      </p>
      <div className='max-w-md sm:float-right p-2 flex flex-col items-center mx-auto'>
        <img src={homePhoto} alt='Participants at the end of Day 2' />
        <small className='italic text-grey-800'>participants at the end of Day 2</small>
      </div>
      <p className='my-2'>
        For those who are opting for a more mild experience, there is an option to ride just Day 1. This first section is pretty mellow. There are no hills and riders will be mostly covered by the sun. This is also the most populated part of the trail, and therefore one of the safer parts to be riding.
      </p>
      <p className='my-2'>
        We've had riders as young as 12 and as old as 56 participate in this event. If you're interested in joining in one of the most unique rides you can do on a skateboard, then you've come to the right place.
      </p>
    </>
  )
}