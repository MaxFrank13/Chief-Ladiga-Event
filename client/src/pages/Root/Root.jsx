import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

import homePhoto from '../../assets/chief-crew-homepage.jpg';

export default function Root() {
  return (
    <>
      <Header
        currentPage=''
      />
      <h2 className='text-3xl text-center pt-6 mb-2 underline'>The new face of Blood Sweat and Stoke</h2>
      <section className='flex flex-col max-w-3xl mx-auto p-4 sm:pb-8'>
        <section>
          <div className='relative text-lg'>
            <p>
              Welcome to the Chief Ladiga Silver Comet 188 mile Sk8 Challenge! This is a 3 day event of distance skateboarding through the Taladega National rainforest. The ride spans 2 states, 2 timezones, 5 counties and about 188 miles. Starting in Smyrna, GA, the first day is a chill 38 miles under a canopy of trees before stopping in Rockmart, GA. Day 2 consists of 56 miles and spans the rest of the trail ending in Anniston, AL. Most of this section is open to the sun and passes through some of the most remote parts of the south-eastern United States. For the third day, riders will do the whole 94 miles back from Anniston, AL to Smyrna, GA. 
            </p>
            <div className='max-w-md sm:float-right p-4 flex flex-col items-center mx-auto'>
              <img src={homePhoto} alt='Participants at the end of Day 2' />
              <small className='italic text-grey-800'>participants at the end of Day 2</small>
            </div>
            <p className='my-2'>
              For those who are opting for a more mild experience, there is an option to ride just Day 1. We've had riders as young as 12 and as old as 56 participate in this event. If you're interested in joining in one of the most unique rides you can do on a skateboard, then you've come to the right place. This is truly something fun for all ages.  
            </p>
            <p className='my-2'>
              That being said, this ride is no joke. Make sure to prepare accordingly. Among other things that will be covered in the pre-ride meeting (see the <Link to='/details' className='text-green-700 hover:text-green-500 font-bold'>
                  event details page</Link>)
              , you should: have enough water/food/nutrition for each day, make sure you are capable of taking care of yourself on the trail, make sure you understand the risks involved, have a reliable plan for when things go wrong, and of course have the proper gear for this kind of ride.
            </p>
            <p>
              If you have any questions at all about preparation for the ride, please do not hesitate to reach out to the event director at <a className='text-green-700 hover:text-green-500 font-bold' href='mailto:sk8188challenge@gmail.com'>
                sk8188@challenge.com</a>. The <a className='text-green-700 hover:text-green-500 font-bold' href='https://www.facebook.com/ChiefLadigaSilverCometSk8' alt='Chief Ladiga Silver Comet Sk8 Challenge Facebook page' target='_blank' rel='noreferrer'>Facebook page</a> is also a great place to ask questions and keep up to date with any news regarding the event. 
            </p>
            <div className='flex flex-col items-center border-t-2 pt-4 mt-4'>
              <h5 className='bg-green-100 px-2 py-1 rounded font-medium mb-1'>Interested in helping to support or sponsor this year's event?</h5>
              <p>
                We are currently accepting volunteers and welcome any help to plan the 10th annual Sk8 Challenge (2023). Please email the event director at <a className='text-green-700 hover:text-green-500 font-bold' href='mailto:sk8188challenge@gmail.com'>
                sk8188@challenge.com</a> for any inquiries involving support or sponsorships.
              </p>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </>
  )
}