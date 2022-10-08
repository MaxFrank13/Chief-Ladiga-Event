import React, { useState } from 'react';
import Friday from './Friday';
import Saturday from './Saturday';
import Sunday from './Sunday';
import AddressList from './AddressList';
import { FRIDAY, SATURDAY, SUNDAY } from '../data/enum';

export default function Timeline() {
  const [selectedDay, setSelectedDay] = useState(FRIDAY);

  const renderSelectedDay = () => {
    switch(selectedDay){
      case FRIDAY:
        return <Friday />;
      case SATURDAY:
        return <Saturday />;
      case SUNDAY:
        return <Sunday />;
      default:
        return <p>no day selected</p>
    }
  };

  return (
    <section className='flex flex-col gap-4'>
      <div className='px-4'>
        <h3 className='text-xl sizetext-green-900 border-b-2 inline-block'>
          Weekend June 2nd - 4th
        </h3>
      </div>
      <section>
        <div className='flex gap-2'>
          {[FRIDAY, SATURDAY, SUNDAY].map((day, idx) => (
            <button
              key={idx}
              className={`px-4 py-1 text-xl rounded-t-md font-bold hover:bg-green-300 hover:text-grey-900 hover:shadow-lg transition-all ${selectedDay === day ? 'bg-green-300' : 'bg-green-700 text-grey-50'}`}
              onClick={() => setSelectedDay(day)}
            >
              {day}
            </button>
          ))}
        </div>
        {renderSelectedDay()}
      </section>
    </section>
  )
}