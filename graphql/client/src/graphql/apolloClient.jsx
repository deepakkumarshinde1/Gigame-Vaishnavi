import { InMemoryCache, ApolloClient, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "http://localhost:5051/graphql",
  }),
  cache: new InMemoryCache(),
});

export default client;
