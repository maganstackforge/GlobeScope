import { useContext } from 'react';
import { CountriesDataContext } from './CountriesDataContext';

export function useCountriesData() {
  const context = useContext(CountriesDataContext);

  if (!context) {
    throw new Error('useCountriesData must be used within CountriesDataProvider');
  }

  return context;
}
