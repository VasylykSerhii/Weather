import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import css from './style.module.scss'

function Default({title, children}) {
  const router = useRouter();
  const url = router && router.pathname;

  return (
    <div className={css.defaultLayout}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:url" content={url} />
      </Head>
      <main>{children}</main>
    </div>
  );
}

export default Default
