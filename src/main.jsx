import React, { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { CountriesDataProvider } from './Contexts/countries/CountriesDataProvider';
import { HelmetProvider } from 'react-helmet-async';

import './index.css';

import App from './App';
import Home from './components/Home';
import PageLoader from './components/PageLoader';

const CountryDetail = lazy(() => import('./components/CountryDetail'));
const Error = lazy(() => import('./components/Error'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: ':country',
        element: <CountryDetail />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <CountriesDataProvider>
        <Suspense fallback={<PageLoader />}>
          <RouterProvider router={router} />
        </Suspense>
      </CountriesDataProvider>
    </HelmetProvider>
  </React.StrictMode>
);
