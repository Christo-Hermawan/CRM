// pages/_app.js
import { useRouter } from 'next/router';
import '../app/globals.css';
import Layout from '@/src/Layout/layout';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // List of paths where you don't want to include the layout
  const noLayoutPages = ['/login'];

  return noLayoutPages.includes(router.pathname) ? (
    <Component {...pageProps} />
  ) : (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;