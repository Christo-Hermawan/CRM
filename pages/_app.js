import { useRouter } from 'next/router';
import '../app/globals.css';
import Layout from '@/src/Layout/layout';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // List of paths where you don't want to include the layout
  const noLayoutPages = ['/', '/login'];

  return noLayoutPages.includes(router.pathname) ? (
    <Component {...pageProps} />
  ) : (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;