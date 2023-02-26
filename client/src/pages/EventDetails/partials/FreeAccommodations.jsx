import React from 'react';

const FreeAccomations = () => {
  return (
    <section className='flex flex-col gap-2 text-lg'>
      <h5 className='text-2xl mb-2 underline'>Free Accommodations</h5>
      <p>
        There is an option to camp on both Friday and Saturday night.
      </p>
      <p>
        After skating to Rockmart on the first day, you can stay at the Rockmart Community Center for FREE. Make sure to bring proper camping gear.
      </p>
      <p>
        On Saturday, there is an option to camp at the Chief Ladiga Aquatic Center. The rate is 2 cars & 2 tents for $25/night. You'll need to reserve a site by reaching out to the Aquatic Center directly at (256)-847-7349. Although we don't expect it to be full so you can plan to reserve a site on the same day. The campsite is located right <a href='https://goo.gl/maps/K9FTLvbqM6zBLsV28' alt='Anniston Trailhead map link' target='_blank' rel='noreferrer' className='text-green-700 hover:text-green-500 font-bold'>at the end of the trail</a>.
      </p>
    </section>
  )
};

export default FreeAccomations;