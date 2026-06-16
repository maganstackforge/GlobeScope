import { useEffect, useState } from 'react';
import CountriesListShimmer from './CountriesListShimmer';
import CountryCard from './CountryCard';
import { useSearchFilter } from '../hooks/useSearchFilter';
import countriesBackup from '../data/countries-v3.json';

export default function CountriesList({ searchQuery, region }) {
  const [countriesData, setCountriesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const filteredCountries = useSearchFilter(countriesData, searchQuery, region);

  // API version (temporarily disabled due to RestCountries API issues)
  // useEffect(() => {
  //   const fetchCountries = async () => {
  //     const cachedCountries = localStorage.getItem('countries_data');

  //     // Agar countries cache hai to turant dikha do
  //     if (cachedCountries) {
  //       setCountriesData(JSON.parse(cachedCountries));
  //       setLoading(false);
  //     }

  //     const apiStatus = JSON.parse(localStorage.getItem('countries_api_status'));

  //     const shouldSkipApi = apiStatus?.broken && Date.now() - apiStatus.timestamp < 24 * 60 * 60 * 1000;

  //     if (shouldSkipApi) return;

  //     try {
  //       const res = await fetch(
  //         'https://restcountries.com/v3.1/all?fields=name,capital,region,subregion,population,flags,currencies,languages,borders'
  //       );

  //       if (!res.ok) {
  //         throw new Error('API Failed');
  //       }

  //       const data = await res.json();

  //       setCountriesData(data);

  //       localStorage.setItem('countries_data', JSON.stringify(data));

  //       // API recover ho gayi
  //       localStorage.removeItem('countries_api_status');
  //     } catch (error) {
  //       console.log('API unavailable, using backup');

  //       localStorage.setItem(
  //         'countries_api_status',
  //         JSON.stringify({
  //           broken: true,
  //           timestamp: Date.now(),
  //         })
  //       );

  //       console.log('API unavailable, using backup');
  //       console.log(error);
  //       console.log(countriesBackup);
  //       console.log(countriesBackup.length);

  //       // Sirf tab backup use karo jab cache bhi na ho
  //       if (!cachedCountries) {
  //         setCountriesData(countriesBackup);

  //         localStorage.setItem('countries_data', JSON.stringify(countriesBackup));
  //       }
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchCountries();
  // }, []);

  useEffect(() => {
    setCountriesData(countriesBackup);
    setLoading(false);
  }, []);

  if (loading) {
    return <CountriesListShimmer />;
  }

  return (
    <>
      <div className='m-4 mx-auto grid w-full max-w-7xl [grid-template-columns:repeat(auto-fill,minmax(250px,1fr))] justify-items-center gap-8 p-4'>
        {filteredCountries.map((country, index) => {
          return (
            <CountryCard
              key={country.name?.common ?? 'Unknown'}
              name={country.name?.common ?? 'Unknown'}
              flag={country.flags?.svg ?? ''}
              population={country.population ?? 0}
              region={country.region ?? ''}
              capital={country.capital?.[0] ?? 'No Capital'}
              index={index}
              data={country}
            />
          );
        })}
      </div>
    </>
  );
}
