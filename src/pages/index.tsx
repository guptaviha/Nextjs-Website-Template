import * as React from 'react';
import { App } from '../components/App';
import Head from 'next/head';
import * as DATA from '../../data/data';
import Layout from './layout';
export default function Index() {

  return (
    <>
      <Head>
        <title>{DATA.APP_TITLE}</title>
        <meta name="keywords" content={DATA.APP_TITLE}></meta>
        <meta httpEquiv='X-UA-Compatible' content='IE=edge'></meta>
        <meta property="og:title" content={DATA.APP_TITLE} />
        <meta property="og:description" content={DATA.APP_DESC} />
        <meta property="og:image" content={DATA.OG_IMAGE_SRC} />
        <meta name='viewport' content='width=device-width, initial-scale=1, user-scalable=0' />
      </Head>
      <App />
    </>
  );
};

Index.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
