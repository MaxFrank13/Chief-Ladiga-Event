import React from 'react';
import Header from '../../components/Header';
import AddressList from './partials/AddressList';
import Thursday from './partials/Thursday';
import Timeline from './partials/Timeline';

export default function EventDetails() {
  return (
    <>
      <Header
        currentPage='details'
      />
      <section className='flex flex-col gap-4 max-w-4xl mx-auto p-4'>
        <AddressList />
        <Thursday />
        <Timeline />
      </section>
    </>
  )
}