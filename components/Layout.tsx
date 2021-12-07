import React, { PropsWithChildren } from 'react';
import Head from 'next/head';

import styles from '../styles/Home.module.css';
import exp from "constants";

type LayoutProps = {
  title: string;
  description?: string;
}

export const Layout = ({ children, title, description }: PropsWithChildren<LayoutProps>) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {children}
      </main>
    </div>
  )
}

