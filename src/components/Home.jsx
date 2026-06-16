import { lazy, Suspense, useState } from 'react';
import SearchBar from './SearchBar';
import FilterMenu from './FilterMenu';
const CountriesList = lazy(() => import('./CountriesList'));
import { Helmet } from 'react-helmet-async';

import { useTheme } from '../Contexts/ThemeContext';
export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [region, setRegion] = useState('');
  const { isDark } = useTheme();

  return (
    <>
      <Helmet>
        <title>GlobeScope | Country Explorer</title>
        <meta name='description' content='Explore countries around the world with GlobeScope.' />
      </Helmet>
      <main className={`${isDark ? 'dark' : ''} mx-auto w-full max-w-7xl`}>
        <div className='mx-auto mt-4 mb-12 flex max-w-7xl flex-col items-center justify-between gap-4 p-4 sm:flex-row'>
          <SearchBar setSearchQuery={setSearchQuery} />
          <FilterMenu setRegion={setRegion} />
        </div>
        <Suspense fallback={<p>Loading Countries List...</p>}>
          <CountriesList searchQuery={searchQuery} region={region} />
        </Suspense>
      </main>
    </>
  );
}
