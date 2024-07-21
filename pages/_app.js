// pages/_app.js

import '../app/globals.css';
import Layout from '@/src/Layout/layout';

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
