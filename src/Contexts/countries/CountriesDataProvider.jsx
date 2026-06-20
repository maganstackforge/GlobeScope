import { CountriesDataContext } from './CountriesDataContext';
import countriesData from '../../data/countries-v3.json';

export function CountriesDataProvider({ children }) {
  return (
    <CountriesDataContext.Provider value={{ countries: countriesData }}>
      {children}
    </CountriesDataContext.Provider>
  );
}
