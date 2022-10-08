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
import Footer from './components/Footer';

const router = createBrowserRouter([
  {
    path: "/Chief-Ladiga-Event",
    element: <EventDetails />,
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
    path: "/",
    element: <Root />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);
