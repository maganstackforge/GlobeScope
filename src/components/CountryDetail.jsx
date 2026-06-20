import { useState, useEffect } from 'react';
import { IoArrowBackOutline } from 'react-icons/io5';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import CountryDetailShimmer from './CountryDetailShimmer';
import { useTheme } from '../Contexts/Theme/useTheme';
import { useCountriesData } from '../Contexts/countries/useCountriesData';

import { Helmet } from 'react-helmet-async';

export default function CountryDetail() {
  const { countries, loading } = useCountriesData();
  const { isDark } = useTheme();
  const navigate = useNavigate();
  const params = useParams();
  const { state } = useLocation();
  const countryName = params.country;
  const [countryData, setCountryData] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!countries.length) return;

    const buildCountryData = (data) => ({
      name: data.name.common || data.name,
      nativeName: Object.values(data.name.nativeName || {})[0]?.common,
      population: data.population,
      region: data.region,
      subRegion: data.subregion,
      capital: data.capital,
      tld: data.tld,
      flag: data.flags.svg,
      currencies: Object.values(data.currencies || {})
        .map((currency) => currency.name)
        .join(', '),
      language: Object.values(data.languages || {}).join(', '),
      borders: (data.borders || []).map((code) => {
        const country = countries.find((c) => c.cca3 === code);
        return country?.name?.common || code;
      }),
    });

    if (state) {
      setCountryData(buildCountryData(state));
      setNotFound(false);
      return;
    }

    const country = countries.find(
      (c) => c.name.common.toLowerCase() === decodeURIComponent(countryName).toLowerCase()
    );

    if (country) {
      setCountryData(buildCountryData(country));
      setNotFound(false);
    } else {
      setNotFound(true);
    }
  }, [countryName, state, countries]);

  if (loading) {
    return <CountryDetailShimmer />;
  }

  if (notFound) {
    return <div>Country not found</div>;
  }

  if (!countryData) {
    return <CountryDetailShimmer />;
  }

  return (
    <>
      {countryData && (
        <Helmet>
          <title>{countryData.name} | GlobeScope</title>

          <meta
            name='description'
            content={`Explore ${countryData.name}. View population, capital, region, currencies, languages and border countries.`}
          />
        </Helmet>
      )}
      <main className={`mx-auto w-full max-w-7xl ${isDark ? 'dark' : ''}`}>
        <div className='mx-auto max-w-7xl text-lg sm:p-10'>
          <button
            className='ml-[1.5%] flex cursor-pointer items-center justify-center rounded-lg bg-[var(--elements-color)] px-4 py-2 shadow-xl transition-transform duration-300 ease-in-out hover:scale-102 hover:shadow-md hover:outline hover:outline-gray-400'
            onClick={() => navigate(-1)}
            aria-label='Go back'
          >
            <IoArrowBackOutline />
            &nbsp;&nbsp;Back
          </button>

          <div className='mt-20 flex flex-col gap-8 lg:flex-row'>
            <img
              className='h-1/2 w-4/5 rounded-xl sm:w-3/5 lg:w-1/2'
              width='300'
              height='150'
              src={countryData.flag}
              alt={countryData.name}
              loading='eager'
              fetchPriority='high'
              decoding='async'
            />
            <div>
              <h1 className='mb-4 text-2xl font-semibold'>{countryData.name}</h1>
              <div className='flex flex-col gap-8 sm:flex-row lg:flex-row'>
                <div className='flex flex-col gap-4'>
                  <p>
                    <b>Native Name: </b>
                    <span className='native-name'>{countryData.nativeName || countryData.name}</span>
                  </p>

                  <p>
                    <b>Population: </b>
                    <span className='population'>{countryData.population.toLocaleString('en-IN')}</span>
                  </p>
                  <p>
                    <b>Region: </b>
                    <span className='region'>{countryData.region}</span>
                  </p>
                  <p>
                    <b>Sub Region: </b>
                    <span className='sub-region'>{countryData.subRegion}</span>
                  </p>
                  <p>
                    <b>Capital: </b>
                    <span className='capital'>{countryData.capital?.join(', ')}</span>
                  </p>
                </div>
                <div className='flex flex-col gap-4'>
                  <p>
                    <b>Top Level Domain: </b>
                    <span className='toplevel-domain'>{countryData.tld}</span>
                  </p>
                  <p>
                    <b>Currencies: </b>
                    <span className='currencies'>{countryData.currencies}</span>
                  </p>
                  <p>
                    <b>Languages: </b>
                    <span className='languages'>{countryData.language}</span>
                  </p>
                </div>
              </div>
              {countryData.borders.length !== 0 && (
                <div className='flex flex-col gap-4'>
                  <div className='mt-4 text-2xl'>
                    <b>Border Countries: </b>
                  </div>
                  <div className='flex flex-wrap gap-4'>
                    {countryData.borders.map((border) => {
                      // Agar kisi wajah se border naam khali hai, toh link render mat karo
                      if (!border) return null;
                      return (
                        <Link
                          key={border}
                          to={`/${encodeURIComponent(border)}`}
                          className='cursor-pointer rounded-sm px-3 py-1 align-middle shadow-xl transition-transform duration-200 ease-in-out hover:scale-102 hover:shadow-md hover:outline hover:outline-gray-400'
                        >
                          {border}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
