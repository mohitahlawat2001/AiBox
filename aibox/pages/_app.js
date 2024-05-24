import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className='w-40vw mx-auto p-20 shadow-md rounded-md'>
      <header className=' bg-pink-300 text-white p-10 flex justify-center rounded-md' >
        <h1>AiBox</h1>
      </header>
      <main className='p-10 '>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;