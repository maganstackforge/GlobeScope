import { useEffect, useMemo, useState } from 'react';
const res = await import('../data/countries-v3.json');
const countries = res.default;

import CountryCard from './CountryCard';
import { IoSearch } from 'react-icons/io5';

const SearchFilterControls = () => {
  // 1. Initialize states for search query, local debounced input, and region filtering
  const [searchQuery, setSearchQuery] = useState('');
  const [localInput, setLocalInput] = useState('');
  const [region, setRegion] = useState('');

  // 2. Debounce effect: Delays updating the global searchQuery state until the user stops typing for 300ms
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchQuery(localInput.toLowerCase());
    }, 300);
    return () => clearTimeout(timer);
  }, [localInput]);
  // 3. Performance Optimization: Memoizes the filtering process to prevent redundant array loops on unrelated re-renders

  const filteredCountries = useMemo(() => {
    console.log('Filtering countries array based on search or region change...');

    return countries.filter((country) => {
      const matchesSearch = country.name?.common.toLowerCase().includes(searchQuery);

      const matchesRegion = region ? country.region === region : true;

      return matchesSearch && matchesRegion;
    });
  }, [searchQuery, region]); // Triggers calculation only when searchQuery or region changes
  return (
    <div className='mx-auto w-full max-w-7xl'>
      {/* --- Search and Filter Controls UI --- */}
      <div className='mx-auto mt-4 mb-12 flex flex-col items-center justify-between gap-4 p-4 sm:flex-row'>
        {/* Search Input Field */}
        <div className='relative h-12 w-full max-w-md overflow-hidden rounded-sm bg-[var(--elements-color)] shadow-lg'>
          <IoSearch className='absolute top-1/2 left-3 z-10 h-5 w-5 -translate-y-1/2 transform text-gray-400' />
          <input
            className='w-full rounded-sm border-none bg-[var(--elements-color)] py-3 pr-4 pl-10 text-[var(--text-color)] placeholder-[#999] outline-none'
            value={localInput}
            onChange={(e) => setLocalInput(e.target.value)}
            type='text'
            placeholder='Search for a country....'
          />
        </div>

        {/* Region Dropdown Filter */}
        <select
          aria-label='Filter countries by region'
          className='h-12 w-96 max-w-full cursor-pointer rounded-sm border-none bg-[var(--elements-color)] px-3 py-3 text-[var(--text-color)] shadow-lg outline-none'
          onChange={(e) => setRegion(e.target.value)}
        >
          <option value=''>All Countries</option>
          <option value='Africa'>Africa</option>
          <option value='Americas'>Americas</option>
          <option value='Asia'>Asia</option>
          <option value='Europe'>Europe</option>
          <option value='Oceania'>Oceania</option>
        </select>
      </div>

      {/* --- Responsive Responsive Grid Layout for Country Cards --- */}
      <div className='m-4 mx-auto grid w-full max-w-7xl [grid-template-columns:repeat(auto-fill,minmax(250px,1fr))] justify-items-center gap-8 p-4'>
        {filteredCountries.map((country, index) => (
          <CountryCard
            key={country.cca3 || country.name?.common || index}
            name={country.name?.common ?? 'Unknown'}
            flag={country.flags?.svg ?? ''}
            population={country.population ?? 0}
            region={country.region ?? ''}
            capital={typeof country.capital?.[0] === 'string' ? country.capital[0] : 'No Capital'}
            index={index}
            data={country}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchFilterControls;
