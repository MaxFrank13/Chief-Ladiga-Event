import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './pages/Root';
import EventDetails from './pages/EventDetails';
import Register from './pages/Register';
import History from './pages/History';
import Sponsors from './pages/Sponsors';

import {
  createHashRouter,
  RouterProvider
} from 'react-router-dom';

import './index.css';
import Footer from './components/Footer';

const router = createHashRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: '/details',
    element: <EventDetails />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/history',
    element: <History />,
  },
  {
    path: '/sponsors',
    element: <Sponsors />,
  },
  {
    path: '*',
    element: <Root />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Footer/>
  </React.StrictMode>
);
