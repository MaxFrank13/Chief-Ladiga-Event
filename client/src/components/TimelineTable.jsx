import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faMapLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function TimelineTable({ data }) {
  const { thisDay, timeline } = data;
  const generateMapUrl = () => {
    switch(thisDay.number) {
      case 1:
        return 'https://www.google.com/maps/d/u/1/viewer?mid=1_CNgt3qOowkpriOVl5szU-6LnIoZAO44&ll=33.92523431309778%2C-84.78081689999998&z=10';
      case 2:
        return 'https://www.google.com/maps/d/u/0/viewer?mid=1hafvAIMT01EituEqvxdZpQ7IXoQZ7VFo&ll=33.80648507049445%2C-85.44379589999998&z=10';
      case 3:
        return 'https://www.google.com/maps/d/viewer?mid=16HWbYLjwQ2ahnKUoQ6vsWLOqHwo&ll=33.86906601428512%2C-85.144397&z=9';
      default:
        return '';
    }
  };

  return (
    <section className='bg-green-800 rounded-tr-md sm:rounded-b-md'>
      <header className='flex justify-between items-end px-4 py-2 shadow-lg text-grey-100 font-medium sm:text-xl'>
        <div className='w-[100px] sm:w-[120px]'>
          <p>
            Day {thisDay.number}
          </p>
          <p>
            {thisDay.miles} miles
          </p>
        </div>
        <div className='px-2 py-1'>
          <p>What to do</p>
        </div>
        <a href={generateMapUrl()} target='_blank' rel='noreferrer' alt='Map for the day' className='sm:w-[300px] bg-yellow-200 rounded text-grey-900 hover:bg-green-50 flex justify-center items-center p-3 sm:px-2 sm:py-0'>
          <FontAwesomeIcon icon={faMapLocationDot} />
          <div className='sm:flex flex-col sm:flex-row items-center gap-2 font-medium px-2 py-1 text-sm sm:text-lg hidden '>
            <span>
              {thisDay.cityInfo[0]}
            </span>
            <FontAwesomeIcon icon={faArrowRight} />
            <span>
              {thisDay.cityInfo[1]}
            </span>
          </div>
        </a>
      </header>
      {timeline.map((item, idx) => (
        <div 
          key={idx} 
          className={`${item.subheaders.length > 0 ? 'bg-yellow-100' : 'bg-green-50'} shadow-inner p-4`}
        >
          <div className='flex  py-2'>
            <p className='min-w-[100px] sm:min-w-[120px] font-medium'>
              {item.header}
            </p>
            <div className={`${item.subheaders.length > 0 ? 'w-3/4' : ''} flex flex-col gap-2`}>
              {item.todos.map((todo, idx) => (
                <p key={idx}>
                  {todo}
                </p>
              ))}
              {item.alert && (
                <p className='w-4/5 mx-auto bg-red-100 p-2 rounded shadow-inner text-center font-medium'>
                  {item.alert}
                </p>
              )}
            </div>
              {item.mileMarker && (
                <p className='flex flex-col gap-2 text-right w-32'>
                  <span className='font-medium'>
                    mile marker
                  </span>
                  <span>
                    {item.mileMarker}
                  </span>
                </p>
              )}
          </div>
          {item.subheaders.length > 0 && (
            item.subheaders.map((subheader, idx) => (
              <div key={idx} className='flex py-2'>
                <p className='min-w-[100px] sm:min-w-[120px] pl-4 font-medium'>
                  {subheader.text}
                </p>
                <p className='w-3/4'>
                  {subheader.task}
                  {subheader.note && (
                    <p className='w-4/5 mx-auto bg-red-100 p-2 rounded shadow-inner font-medium'>
                      {subheader.note}
                    </p>
                  )}
                </p>
                <p className='w-20 sm:w-24 text-right'>
                  {subheader.mileMarker}
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