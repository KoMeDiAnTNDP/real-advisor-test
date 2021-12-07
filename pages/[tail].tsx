import React from 'react';
import Error from 'next/error';
import { NextPage, GetServerSideProps } from 'next';

import { client } from '../lib/apoll-client';
import { Layout } from '../components/Layout';
import { getTailByName } from '../lib/queries';
import { TailPageProps, getPageProps } from '../lib/helper';

const Tail: NextPage<TailPageProps> = (props) => {
  if (props.notFound) {
    return <Error statusCode={404} />
  }

  return (
    <Layout title={props.title}>
      <h3>Title: {props.title}</h3>
      <h3>Description: {props.description}</h3>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cache = client.readQuery({ query: getTailByName, variables: { name: context.query.tail } });

  if (!!cache) {
    return getPageProps(cache);
  }

  const { data, loading, error } = await client.query({
    query: getTailByName,
    variables: { name: context.query.tail }
  });

  if (!!error) return { props: { error: error.message } }

  return getPageProps(data);
}

export default Tail;
