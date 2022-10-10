import React from 'react';
import Footer from '../../components/Footer';
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
      <section className='flex flex-col gap-4 max-w-3xl mx-auto p-4 sm:py-8'>
        <AddressList />
        <Thursday />
        <Timeline />
      </section>
      <Footer />
    </>
  )
}