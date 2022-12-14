import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Fragment } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>React Playground</title>
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
