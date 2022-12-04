import React from 'react';
import { Link } from 'react-router-dom';
import { preparations } from '../data/preparationTasks';

export default function Preparation() {
  return (
    <section className='flex flex-col gap-4 border-t-2 pt-6 mt-4'>
      <div>
        <h3 className='text-2xl inline-block'>Preparation</h3>
      </div>
      <p>
        Make sure to prepare accordingly. Among other things that will be covered in the pre-ride meeting (see the <Link to='/details' className='text-green-700 hover:text-green-500 font-bold'>
          event details page</Link>)
        , you should:
      </p>
      <ul className='px-4 py-1 border-2 border-yellow-500 rounded shadow-inner w-fit flex flex-col gap-2'>
        {preparations.map(preparation => (
          <li>
            <h4 className='text-lg font-bold'>{preparation.header}</h4>
            <p className='pl-2'>{preparation.details}</p>
          </li>
        ))}
      </ul>
      <p>
        If you have any questions at all about preparation, please do not hesitate to reach out to the event director at <a className='text-green-700 hover:text-green-500 font-bold' href='mailto:sk8188challenge@gmail.com'>
          sk8188challenge@gmail.com</a>. The <a className='text-green-700 hover:text-green-500 font-bold' href='https://www.facebook.com/ChiefLadigaSilverCometSk8' alt='Chief Ladiga Silver Comet Sk8 Challenge Facebook page' target='_blank' rel='noreferrer'>Facebook page</a> is also a great place to ask questions and keep up to date with any news regarding the event.
      </p>
    </section>
  )
}