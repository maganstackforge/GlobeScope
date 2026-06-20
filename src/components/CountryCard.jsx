import React from 'react';
import { Link } from 'react-router-dom';

const CountryCard = ({ name, flag, population, region, capital, data, index }) => {
  const isAboveFold = index < 6;
  return (
    <Link
      className='inline-block w-full overflow-hidden rounded-lg bg-[var(--elements-color)] pb-8 shadow-lg transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-[(--hover-color)] hover:outline hover:outline-[var(--border-color)]'
      to={`/${name}`}
      state={data}
    >
      <div className='h-40 w-full overflow-hidden'>
        <img
          className='h-full w-full rounded-md object-cover'
          width='300'
          height='180'
          alt={`${name} Flag`}
          src={flag}
          loading={isAboveFold ? 'eager' : 'lazy'}
          fetchPriority={isAboveFold ? 'high' : 'low'}
          decoding='async'
        />
      </div>
      <div className='p-4'>
        <h3 className='text-xl font-bold'>{name}</h3>
        <p>
          <b>Population: </b>
          {population.toLocaleString('en-IN')}
        </p>
        <p>
          <b>Region: </b>
          {region}
        </p>
        <p>
          <b>Capital: </b>
          {capital}
        </p>
      </div>
    </Link>
  );
};
export default React.memo(CountryCard);
