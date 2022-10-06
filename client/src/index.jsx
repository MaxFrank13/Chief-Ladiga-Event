import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Root from './pages/Root';
import EventDetails from './pages/EventDetails';
import Register from './pages/Register';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/details",
    element: <EventDetails />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
    <footer className='h-24 flex justify-center items-center bg-green-900'>
      FOOTER
    </footer>
  </React.StrictMode>
);
