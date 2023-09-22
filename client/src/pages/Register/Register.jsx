import React from 'react';
import Header from '../../components/Header';
import datesPhoto from '../../assets/chief-weekend_2024.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

export default function Register() {
  return (
    <>
      <Header
        currentPage='register'
      />
      <section className='max-w-4xl mx-auto p-4 flex flex-col gap-4'>
        {/* <div>
          <h2 className='text-3xl border-b-2 inline-block'>Registration</h2>
        </div>
        <p className='flex text-lg font-bold bg-yellow-400 leading-8 rounded p-2 m-2 mb-4'>
          <FontAwesomeIcon icon={faExclamationCircle} className='p-2' color='#AB091E' />
          <span>
            Registration is closed for 2023. Thanks for the support! We'll see you all next year!
          </span>
        </p>
        <div className='py-8 px-4 hidden sm:block'>
          <img src={datesPhoto} alt='Information about time and dates for the event' className='mx-auto w-screen' />
        </div> */}
        <div>
          <h2 className='text-3xl border-b-2 inline-block'>Registration</h2>
        </div>
        <div className='flex flex-col gap-6 sm:text-lg'>
          <p>
            Rregistration is currently being handled through this <a className='text-green-700 hover:text-green-500 font-bold' href='https://docs.google.com/forms/d/1S1I07h8fHsKD-x72QtBx9kVoF4yhsG54z7vzOkpuanw/viewform' alt='Google form for event' target="_blank" rel="noreferrer">google form</a>.
          </p>
          <p>
            In addition to filling out that form, there are other steps you must complete before your registration is finalized.
          </p>
          <p>
            These steps are outlined in detail in the <a className='text-green-700 hover:text-green-500 font-bold' href='https://docs.google.com/forms/d/1S1I07h8fHsKD-x72QtBx9kVoF4yhsG54z7vzOkpuanw/viewform' alt='Google form for event' target='_blank' rel='noreferrer'>google form</a>. If you are having difficulties at any point in the process, don't hesitate to reach out to <a className='text-green-700 hover:text-green-500 font-bold' href='mailto:sk8188challenge@gmail.com'>sk8188challenge@gmail.com</a>.
          </p>
          <p>
            One of the things you'll be asked to do is fill out a
            <a className='text-green-700 hover:text-green-500 font-bold' href='https://drive.google.com/file/d/1_0ZJo8zjvUnXBN6V21nB9SF7wX-RzGJO/view' alt='Waiver for event' target='_blank' rel='noreferrer'>
              &nbsp;waiver&nbsp;
            </a>
            as well as sign the official
            <a className='text-green-700 hover:text-green-500 font-bold' href='https://drive.google.com/file/d/1raWYkD_ikohfuu6zGf9WV7JATuLudAm-/view' alt='Rules of Conduct' target='_blank' rel='noreferrer'>
              &nbsp;Rules of Conduct
            </a>. The aforementioned steps in the google form instruct you on how to submit these documents.
          </p>
          <p>
            In the event that you have completed all of the registration steps and there are no spots left, you will be immediately put on the waiting list. For additional questions, contact <a className='text-green-700 hover:text-green-500 font-bold' href='mailto:sk8188challenge@gmail.com'>sk8188challenge@gmail.com</a>.
          </p>
        </div>
        <div className='py-8 px-4 hidden sm:block'>
          <img src={datesPhoto} alt='Information about time and dates for the event' className='mx-auto w-screen' />
        </div>
      </section>
    </>
  )
};
