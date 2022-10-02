// TODO: Create a table component that:
// 1. Takes in an array of objects (data)
// 2. Each object contains a Day field and a Timeline field
  // a. Day field is an object with day (1,2, or 3) and total mileage for that day
  // b. Timeline field is an array of objects - each object has a Time field and a Todo field
  // c. Time field will be an object - header (time of day) as a string and an array of subheaders (pitstops) as strings (which is usually empty)
  // d. Todo field with have an array of "tasks" as strings
// 3. Consider leaving room for a Details field to be added to the Todo section for specific details in that time window
  // a. Examples: nutrition info, trial conditions, elevation, maps

import React from 'react';

export default function TimelineTable({ data }) {
  return (
    <section className='bg-grey-100'>
      <header className='flex items-end'>
        <div className='flex flex-col items-center px-4'>
          <span>
            Day {data.thisDay.number}
          </span>
          <span>
          {data.thisDay.miles} miles
          </span>
        </div>
        <div className='px-4'>
          <span>What to do</span>
        </div>
      </header>
      {data.timeline.map((item, idx) => (
        <div key={idx}>
          <div className='flex'>
            <span className='px-4 min-w-[112px]'>
              {item.header}
            </span>
            <span>              
              {item.todo}
            </span>
          </div>
          {item.subheaders.length > 0 && (
            item.subheaders.map((item, idx) => (
              <div key={idx} className='flex'>
                <span className='px-4 min-w-[112px]'>
                  {item.text}
                </span>
                <span>
                  {item.task}
                </span>
              </div>
            ))
          )}
        </div>
      ))}
    </section>
  )
}