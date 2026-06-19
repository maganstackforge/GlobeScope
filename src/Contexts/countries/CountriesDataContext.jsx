import { createContext, useContext, useEffect, useState } from 'react';

const CountriesDataContext = createContext();

export function CountriesDataProvider({ children }) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    let isMounted = true;

    const load = async () => {
      try {
        const res = await fetch('/countries-v3.json');
        const data = await res.json();

        if (isMounted) {
          setCountries(data);
        }
      } catch (err) {
        console.error(err);
      }
    };

    load();

    return () => {
      isMounted = false;
    };
  }, []);

  return <CountriesDataContext.Provider value={{ countries }}>{children}</CountriesDataContext.Provider>;
}

export function useCountriesData() {
  return useContext(CountriesDataContext);
}
