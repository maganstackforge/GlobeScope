import { ThemeProvider } from './Contexts/ThemeContext';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';

const App = () => {
  return (
    <ThemeProvider>
      <Header />
      <main className='mx-auto w-full max-w-7xl'>
        <Outlet />
      </main>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
