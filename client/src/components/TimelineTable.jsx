import React from 'react';

export default function TimelineTable({ data }) {
  return (
    <section className='bg-green-800 rounded-tr-md sm:rounded-b-md'>
      <header className='flex items-end px-4 py-2 shadow-lg text-grey-100 font-medium text-xl'>
        <div className='w-[100px] sm:w-[120px]'>
          <p>
            Day {data.thisDay.number}
          </p>
          <p>
            {data.thisDay.miles} miles
          </p>
        </div>
        <div>
          <p>What to do</p>
        </div>
      </header>
      {data.timeline.map((item, idx) => (
        <div 
          key={idx} 
          className={`${item.subheaders.length > 0 ? 'bg-yellow-100' : 'bg-green-50'} shadow-inner p-4`}
        >
          <div className='flex py-2'>
            <p className='min-w-[100px] sm:min-w-[120px] font-medium'>
              {item.header}
            </p>
            <div className='flex flex-col gap-2'>
              {item.todos.map((todo, idx) => (
                <p key={idx}>
                  {todo}
                </p>
              ))}
              {item.alert && (
                <p className='w-3/4 mx-auto bg-red-50 p-2 rounded shadow-inner text-center font-bold'>
                  {item.alert}
                </p>
              )}
            </div>
          </div>
          {item.subheaders.length > 0 && (
            item.subheaders.map((subheader, idx) => (
              <div key={idx} className='flex items-start py-2'>
                <p className='min-w-[100px] sm:min-w-[120px] pl-4 font-medium'>
                  {subheader.text}
                </p>
                <p>
                  {subheader.task}
                  {subheader.note && (
                    <p className='max-w-sm mx-auto bg-red-50 p-2 rounded shadow-inner font-bold'>
                      {subheader.note}
                    </p>
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