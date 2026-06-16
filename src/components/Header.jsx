import { useTheme } from '../Contexts/ThemeContext';
export default function Header() {
  const { isDark, setIsDark } = useTheme();

  return (
    <header
      className={`w-max-7xl container mx-auto w-full ${isDark ? 'dark' : ''} sticky top-0 z-10 p-2 shadow-lg`}
    >
      <div className='mx-auto flex w-full justify-between'>
        <h2 className='text-xl font-bold sm:text-2xl'>
          <a href='/' className='flex items-center gap-2'>
            <img
              src='/GlobeScope.webp'
              height='48'
              width='48'
              alt='GlobScope logo'
              fetchPriority='high'
              loading='eager'
              decoding='async'
              className='h-12 w-12 rounded-full object-contain'
            />
            Globe Scope
          </a>
        </h2>

        <button onClick={() => setIsDark(!isDark)}>{isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}</button>
      </div>
    </header>
  );
}
