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
    <section className='bg-green-400 rounded-tr-md sm:rounded-b-md'>
      <header className='flex items-end px-4 py-2 shadow-lg'>
        <div className='flex flex-col items-center font-bold w-[112px]'>
          <p>
            Day {data.thisDay.number}
          </p>
          <p>
            {data.thisDay.miles} miles
          </p>
        </div>
        <div>
          <p className='text-lg font-bold px-4'>What to do</p>
        </div>
      </header>
      {data.timeline.map((item, idx) => (
        <div 
          key={idx} 
          className={`${item.subheaders.length > 0 ? 'bg-yellow-50 font-bold' : 'bg-green-50'} shadow-inner p-4`}
          >
          <div className='flex py-2'>
            <p className='min-w-[112px] font-bold flex justify-center items-center'>
              {item.header}
            </p>
            <div className={`flex flex-col ${item.header === 'Lodging' ? 'gap-2' : 'gap-2'}`}>
              {item.todos.map((todo, idx) => (
                <p
                  key={idx}
                >
                  {todo}
                </p>
              ))}
              {item.alert && (
                <p className='w-3/4 mx-auto bg-red-50  rounded text-center px-4 font-bold'>
                  {item.alert}
                </p>
              )}
            </div>
          </div>
          {item.subheaders.length > 0 && (
            item.subheaders.map((subheader, idx) => (
              <div key={idx} className='flex items-start py-2'>
                <p className='min-w-[112px] flex justify-center items-center'>
                  {subheader.text}
                </p>
                <p className='flex flex-col'>
                  {subheader.task}
                  {subheader.note && (
                    <span className='w-3/4 mx-auto bg-red-50 p-2 flex justify-center items-center rounded'>
                      {subheader.note}
                    </span>
                  )}
                </p>
              </div>
            ))
          )}
        </div>
      ))}
      <div className='h-4 bg-green-600 sm:rounded-b-md'>
      </div>
    </section>
  )
}