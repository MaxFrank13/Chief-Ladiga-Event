import React from 'react';
import ReactDOM from 'react-dom/client';
import EventDetails from './pages/EventDetails';
import './index.css';
// TODO: import React router

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <section className='bg-grey-50 text-grey-900'>
      <EventDetails />
      <div className='h-24 flex justify-center items-center text-2xl bg-green-900'>
        FOOTER
      </div>
    </section>
  </React.StrictMode>
);
