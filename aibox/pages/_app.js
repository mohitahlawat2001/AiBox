import { useState } from 'react';
import '../styles/globals.css';


function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`w-40vw  p-10 shadow-md rounded-md ${darkMode ? 'bg-pink-400' : 'bg-pink-300'}`}>
      <header className={`  ${darkMode ? 'bg-pink-400' : 'bg-pink-300'} text-white px-10 py-5 flex justify-between  rounded-md`}>
        <h1 className='m-2 font-bold text-4xl'>AiBox</h1>
        <button onClick={toggleDarkMode} className='w-10 h-10 rounded-full p-1 '>
          {darkMode ? <img src='/light.png' alt='Light mode' /> : <img src='/dark.png' alt='Dark mode' />}
        </button>
      </header>
      <main className='p-10 dark:bg-gray-900 dark:text-white '>
        <Component {...pageProps}  darkMode={darkMode} />
      </main>
    </div>
  );
}

export default MyApp;