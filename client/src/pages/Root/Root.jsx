import React from 'react';

import homePhoto from '../../assets/chief-crew-homepage.jpg';

export default function Root() {
  return (
    <>
      <h2 className='text-3xl text-center pt-4 mb-2 underline'>Welcome to the new face of Blood Sweat and Stoke</h2>
      <section className='flex flex-col max-w-3xl mx-auto p-4 sm:pb-8'>
        <section>
          <div className='relative'>
            <p>
              Welcome to the Chief Ladiga Silver Comet 188 mile Skate Challenge from Smyrna, GA to Anniston, AL and back!! This race is a 3 day race with the first day running at 38 miles from Smyrna to Rockmart, GA, Day 2 at 56 miles from Rockmart, GA to Anniston, AL and then finally 94 miles from Anniston, AL to Smyrna, GA. There is an option to just race Day 1 if you're just getting into long distance races. We've had racers as young as 12 participate and as old as 56 so if you're interested in participating in one of the most fun races on a skateboard read on to learn more about this race. This is truly fun for all ages.  
            </p>
            <div className='max-w-md sm:float-right p-4 flex flex-col items-center mx-auto'>
              <img src={homePhoto} alt='Participants at the end of Day 2' />
              <small className='italic text-grey-800'>participants at the end of Day 2</small>
            </div>
            <p className='my-2'>
              The first year this race was hosted was in 2011. The race ran with little to no issues for 9 years (2011-2019). Unfortunately COVID cancelled the 2020 and 2021 races. In the Fall of 2021 the race was transferred over to new management thus the 2022 race will not be held this year. 
            </p>
            <p>
              We are currently looking for volunteers and would welcome any help to plan the 10th annual Sk8 Challenge Race. Please email the race director sk8188@challenge.com if interested in participating or helping plan the 2023 race.
            </p>
          </div>
        </section>
      </section>
    </>
  )
}