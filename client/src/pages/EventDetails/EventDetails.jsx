import React from 'react';
import Thursday from './partials/Thursday';
import Timeline from './partials/Timeline';

export default function EventDetails() {
  return (
    <section className='flex flex-col gap-4 max-w-3xl mx-auto sm:p-4 sm:pb-8'>
      <Thursday />
      <Timeline />
    </section>
  )
}