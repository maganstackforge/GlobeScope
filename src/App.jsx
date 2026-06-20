import { ThemeProvider } from './Contexts/Theme/ThemeProvider';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import { ScrollRestoration } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <ThemeProvider>
      <ScrollRestoration />
      <ScrollToTop />
      <div className='flex min-h-screen flex-col bg-[var(--background-color)] text-[var(--text-color)]'>
        <Header />

        <main className='mx-auto w-full max-w-7xl flex-grow'>
          <Outlet />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
