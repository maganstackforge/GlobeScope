import React, { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';

import App from './App';

import Home from './components/Home';

const CountryDetail = lazy(() => import('./components/CountryDetail'));
const Error = lazy(() => import('./components/Error'));

const PageLoader = () => (
  <div role='status' aria-live='polite' style={{ padding: '1rem' }}>
    Loading...
  </div>
);

// 1. Ek loader function banayein jo data fetch karega
const countryLoader = async ({ params }) => {
  const res = await fetch(`https://restcountries.com/v3.1/name/${params.country}`);
  const data = await res.json();
  const flagUrl = data[0]?.flags?.svg;

  // 🌟 JADU YAHAN HAI: Browser ko HTML document chalte hi image fetch karne ka order de dein
  if (flagUrl) {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = flagUrl;
    link.imageSrcset = flagUrl; // LCP ke liye discoverable banata hai
    document.head.appendChild(link);
  }

  return data[0]; // Data component ko pass karein
};
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: (
      <Suspense fallback={<PageLoader />}>
        <Error />
      </Suspense>
    ),
    children: [
      {
        index: true,

        element: <Home />,
      },
      {
        path: ':country',
        element: (
          <Suspense fallback={<PageLoader />}>
            <CountryDetail />
          </Suspense>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
