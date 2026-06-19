export function CountriesProvider({ children }) {
  return (
    <CountriesUIProvider>
      <CountriesDataProvider>{children}</CountriesDataProvider>
    </CountriesUIProvider>
  );
}
