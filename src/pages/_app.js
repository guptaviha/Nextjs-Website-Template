import '../styles/main.css'
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <>
      <Component {...pageProps} />
      <Script
        async
        src="https://analytics.vihagupta.com/script.js"
        data-website-id="daf0599d-b7ea-4697-bdf9-98dbb59ea77c"
      />
    </>
  );
}

export default MyApp;