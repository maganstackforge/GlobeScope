import { useTheme } from '../Contexts/ThemeContext';
// 1. React Router Router se Link ko import kiya
import { Link } from 'react-router-dom';

const Footer = () => {
  const { isDark } = useTheme();

  return (
    <footer
      className={`${isDark ? 'dark' : ''} mx-auto flex w-full max-w-7xl flex-col items-center pt-2 pb-6`}
    >
      <div className='black-logo my-4'>
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
      </div>
      <ul className='mx-auto flex items-center justify-center gap-6 pb-2'>
        <li>
          {/* 2. <a> ko <Link> banaya aur aria-label joda */}
          <Link
            to='https://www.linkedin.com/in/maganstackforge/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Visit Magan LinkedIn Profile'
          >
            <svg
              className={`${isDark ? 'text-[#999] hover:text-[#fff]' : 'text-[#0c112b]/90 hover:text-[#0c112b]'} w-7 transition-all duration-200 ease-in-out hover:scale-110`}
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 448 512'
              fill='currentColor'
            >
              <path d='M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z'></path>
            </svg>
          </Link>
        </li>
        <li>
          <Link
            to='https://twitter.com/maganstackforge'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Visit Magan Twitter Profile'
          >
            <svg
              className={`${isDark ? 'text-[#999] hover:text-[#fff]' : 'text-[#0c112b]/90 hover:text-[#0c112b]'} w-7 transition-colors duration-200 ease-in-out hover:scale-110`}
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'
            >
              <path
                fill='currentColor'
                d='M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z'
              ></path>
            </svg>
          </Link>
        </li>
        <li>
          <Link
            to='https://www.instagram.com/maganstackforge'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Visit Magan Instagram Profile'
          >
            <svg
              className={`${isDark ? 'text-[#999] hover:text-[#fff]' : 'text-[#0c112b]/90 hover:text-[#0c112b]'} w-7 transition-colors duration-200 ease-in-out hover:scale-110`}
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 448 512'
            >
              <path
                fill='currentColor'
                d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z'
              ></path>
            </svg>
          </Link>
        </li>
        <li>
          <Link to='mailto:magan.stackforge@gmail.com' aria-label='Send an Email to Magan'>
            <svg
              className={`${isDark ? 'text-[#999] hover:text-[#fff]' : 'text-[#0c112b]/90 hover:text-[#0c112b]'} w-7 transition-colors duration-200 ease-in-out hover:scale-110`}
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'
            >
              <path
                fill='currentColor'
                d='M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z'
              ></path>
            </svg>
          </Link>
        </li>
        <li>
          <Link
            to='https://github.com/Maganstackforge'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Visit Magan GitHub Profile'
          >
            <svg
              className={`${isDark ? 'text-[#999] hover:text-[#fff]' : 'text-[#0c112b]/90 hover:text-[#0c112b]'} w-7 transition-colors duration-200 ease-in-out hover:scale-110`}
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 496 512'
              fill='currentColor'
            >
              <path d='M248 8C111 8 0 119 0 256c0 109.8 71.2 202.9 170 235.8 12.4 2.3 17-5.4 17-12v-42.2c-69.2 15-83.8-33.4-83.8-33.4-11.3-28.7-27.6-36.4-27.6-36.4-22.5-15.4 1.7-15.1 1.7-15.1 24.9 1.8 38 25.6 38 25.6 22.2 38 58.2 27 72.4 20.7 2.2-16.1 8.7-27 15.8-33.2-55.2-6.3-113.3-27.6-113.3-122.8 0-27.1 9.7-49.2 25.5-66.5-2.6-6.3-11-31.5 2.4-65.7 0 0 20.8-6.7 68.2 25.4 19.8-5.5 41-8.2 62.1-8.3 21 .1 42.3 2.8 62.1 8.3 47.3-32.1 68.1-25.4 68.1-25.4 13.5 34.2 5.1 59.4 2.5 65.7 15.9 17.3 25.5 39.4 25.5 66.5 0 95.4-58.2 116.5-113.6 122.7 8.9 7.7 16.8 22.9 16.8 46.1v68.3c0 6.7 4.5 14.4 17.2 12C424.9 458.8 496 365.7 496 256 496 119 385 8 248 8z'></path>
            </svg>
          </Link>
        </li>
      </ul>
      <p className='text-sm'>Building modern and responsive web experiences.</p>
      <p className='py-2 text-xs'>© 2026 Magan Singh. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
