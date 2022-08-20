import '../styles/globals.css'
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import { SessionProvider } from "next-auth/react"
import ErrorBoundary from '../components/ErrorBoundary';

function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <ErrorBoundary >
    <SessionProvider session={session}>
      <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
      </Head>
      <DefaultSeo {...SEO} />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </SessionProvider>
    </ErrorBoundary>
  )
}


export default App
