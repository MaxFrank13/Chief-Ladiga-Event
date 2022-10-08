import React from 'react';

export default function Register() {
  return (
    <>
    
      <h2 className='text-3xl text-center pt-4 mb-2 underline'>Registration</h2>
      <section className='max-w-3xl mx-auto p-4'>
        <div className='flex flex-col gap-4'>
          <p>
            For the 2023 event, registration is currently being handled through this <a className='text-green-700 hover:text-green-500 font-bold' href='https://docs.google.com/forms/d/e/1FAIpQLSfraoZDR_Whfc82iZJIY38NGRl-gR3FfzlhsHB_bgrFLLj6SA/viewform' alt='Google form for event'>google form</a>.
          </p>
          <p>
            In addition to filling out that form, there are other steps you must complete before your registration is finalized.
          </p>
          <p>
            These steps are outlined in detail in the <a className='text-green-700 hover:text-green-500 font-bold' href='https://docs.google.com/forms/d/e/1FAIpQLSfraoZDR_Whfc82iZJIY38NGRl-gR3FfzlhsHB_bgrFLLj6SA/viewform' alt='Google form for event'>google form</a>. If you are having difficulties at any point in the process, don't hesitate to reach out to <a className='text-green-700 hover:text-green-500 font-bold' href='mailto:sk8188challenge@gmail.com'>sk8188challenge@gmail.com</a>.
          </p>
          <p>
            There is a cap on the event this year. In the instance that you have submitted all of the necessary items and there are no spots left, you will be immediately put on the waiting list or you may request a refund. We can also entertain the prospect of allowing people to "roll over" their registration into the next year.
          </p>
        </div>
      </section>
    </>
  )
};
