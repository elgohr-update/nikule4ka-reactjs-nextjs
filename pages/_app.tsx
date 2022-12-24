import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({
  Component,
  pageProps,
  router
}: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>My app</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:url"
          content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath}
        />
        <meta property="og:locale" content="en-US" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
