import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './pages/Root';
import EventDetails from './pages/EventDetails';
import Register from './pages/Register';
import History from './pages/History';

import {
  createHashRouter,
  RouterProvider
} from 'react-router-dom';

import './index.css';

const router = createHashRouter([
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
  {
    path: "/history",
    element: <History />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
