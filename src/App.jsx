import { ThemeProvider } from './Contexts/ThemeContext';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';

const App = () => {
  return (
    <ThemeProvider>
      <div className='flex min-h-screen flex-col bg-[var(--background-color)] text-[var(--text-color)]'>
        <Header />

        {/* 'flex-grow' ensures the main content occupies the remaining space and pushes the footer to the bottom */}
        <main className='mx-auto w-full max-w-7xl flex-grow'>
          <Outlet />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
};
export default App;
