import { Link } from 'react-router-dom';

export default function CountryCard({ name, flag, population, region, capital, data, index }) {
  return (
    <Link
      className='inline-block w-full overflow-hidden rounded-lg bg-[var(--elements-color)] pb-8 shadow-lg transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-[(--hover-color)] hover:outline hover:outline-[var(--border-color)]'
      to={`/${name}`}
      state={data}
    >
      <div className='h-40 w-full overflow-hidden'>
        <img
          className='h-full w-full rounded-md object-cover'
          width='400'
          height='250'
          alt={`${name} Flag`}
          decoding='async'
          src={flag}
          // Pehle 4-6 flags ko turant load karo (Eager), baaki ko Lazy load hone do
          loading={index < 4 ? 'eager' : 'lazy'}
          // Pehle 4 flags ko sabse unchi priority do
          fetchPriority={index < 4 ? 'high' : 'low'}
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
}
