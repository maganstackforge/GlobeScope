import { Helmet } from 'react-helmet-async';
import { useTheme } from '../Contexts/Theme/useTheme';

// Sirf is ek mix component ko import kijiye
import SearchFilterControls from './SearchFilterControls';

export default function Home() {
  const { isDark } = useTheme();

  return (
    <>
      <Helmet>
        <title>GlobeScope | Country Explorer</title>
        <meta name='description' content='Explore countries around the world with GlobeScope.' />

        {/* preload external images */}
        <link rel='preconnect' href='https://flagcdn.com' />
      </Helmet>
      <main className={`${isDark ? 'dark' : ''} mx-auto w-full max-w-7xl`}>
        {/* Ek akela component sab handle kar lega */}
        <SearchFilterControls />
      </main>
    </>
  );
}
