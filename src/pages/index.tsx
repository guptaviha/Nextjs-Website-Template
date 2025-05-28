import * as React from 'react';
import { App } from '../components/App';
import Head from 'next/head';
import Layout from './layout';

const appTitle = "Viha Gupta"
export default function Index() {

  return (
    <>
      <Head>
        <title>{appTitle}</title>
        <meta name="keywords" content={appTitle}></meta>
        <meta httpEquiv='X-UA-Compatible' content='IE=edge'></meta>
        <meta property="og:title" content={appTitle} />
        <meta property="og:description" content={"Welcome to my corner of the web!"} />
        <meta property="og:image" content={"https://i.ibb.co/s9vx1g5/og-image.png"} />
        <meta name='viewport' content='width=device-width, initial-scale=1, user-scalable=0' />
      </Head>
      <App />
    </>
  );
};

Index.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
