import { ApolloClient, InMemoryCache } from '@apollo/client';


export const client = new ApolloClient({
  uri: process.env.GRAPHQL_API,
  cache: new InMemoryCache(),
  headers: {
    // @ts-ignore
    'x-hasura-admin-secret': process.env.HASURA_GRAPHQL_ADMIN_SECRET,
  }
});
