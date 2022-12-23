import React from 'react';
import Header from '../../components/Header';
import Support from '../Root/partials/Support';
import SponsorList from './partials/SponsorList';


export default function Sponsors(){
  return (
    <>
      <Header
        currentPage='sponsors'
      />
      <section className='max-w-3xl flex flex-col mx-auto p-4 sm:pb-8 gap-2 text-lg'>
        <SponsorList />
        <Support />
      </section>
    </>
  )
}