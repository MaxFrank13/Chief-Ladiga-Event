import React from 'react';

export default function TimelineTable({ data }) {
  return (
    <section className='bg-green-800 rounded-tr-md sm:rounded-b-md'>
      <header className='flex items-end px-4 py-2 shadow-lg text-grey-100'>
        <div className='flex flex-col items-end font-bold w-[112px]'>
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
            <p className='min-w-[112px] font-bold flex justify-center items-end'>
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