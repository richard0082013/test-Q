import React from "react";
import Layout from "./layout";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
const cache = new InMemoryCache();
const httpLink = new HttpLink({
  uri: "http://127.0.0.1:4000"
});
const client = new ApolloClient({
  link: httpLink,
  cache
});
function App() {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Layout />
      </ApolloProvider>
    </BrowserRouter>
  );
}

export default App;
