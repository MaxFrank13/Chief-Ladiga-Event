import React, { useState } from 'react';
import Friday from './Friday';
import Saturday from './Saturday';
import Sunday from './Sunday';
import { FRIDAY, SATURDAY, SUNDAY } from '../data/enum';

export default function Timeline() {
  const [selectedDay, setSelectedDay] = useState(FRIDAY);

  const renderSelectedDay = () => {
    if (selectedDay === FRIDAY) {
      return <Friday />
    }
    if (selectedDay === SATURDAY) {
      return <Saturday />
    }
    if (selectedDay === SUNDAY) {
      return <Sunday />
    }
  };

  return (
    <section>
      <div className='flex gap-2'>
        {[FRIDAY, SATURDAY, SUNDAY].map((day, idx) => (
          <button
            key={idx}
            className='px-4 py-1 bg-green-200 text-xl rounded-t-md font-bold hover:bg-green-700 hover:text-grey-50 hover:shadow-lg transition-all'
            onClick={() => setSelectedDay(day)}
          >
            {day}
          </button>
        ))}
      </div>
      {renderSelectedDay()}
    </section>
  )
}