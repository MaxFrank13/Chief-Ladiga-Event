import React from 'react';
import AddressList from './partials/AddressList';
import Thursday from './partials/Thursday';
import Timeline from './partials/Timeline';

export default function EventDetails() {
  return (
    <>
      <h2 className='text-3xl text-center pt-4 mb-2 underline'>Event Information</h2>
      <section className='flex flex-col gap-4 max-w-3xl mx-auto sm:p-4 sm:pb-8'>
        <AddressList />
        <Thursday />
        <Timeline />
      </section>
    </>
  )
}