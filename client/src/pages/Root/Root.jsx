import React from 'react';
import Header from '../../components/Header';
import Intro from './partials/Intro';
import Preparation from './partials/Preparation';
import SponsorList from '../Sponsors/partials/SponsorList';
import Support from './partials/Support';

export default function Root() {
  return (
    <>
      <Header
        currentPage='home'
      />
      <section className='max-w-3xl flex flex-col mx-auto p-4 sm:pb-8'>
        <div>
          <h2 className='text-3xl border-b-2 inline-block'>Welcome to the new face of Blood Sweat and Stoke</h2>
        </div>
        <section className='flex flex-col max-w-3xl mx-auto'>
          <section>
            <div className='relative text-lg'>
              <Intro />
              <Preparation />
              <div className='flex flex-col gap-4 border-t-2 pt-6 mt-4'>
                <SponsorList />
              </div>
              <Support />
            </div>
          </section>
        </section>
      </section>
    </>
  )
}