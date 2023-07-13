import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { GIT_API_KEY } from "../Config/keys";

export const httpLink = createHttpLink({
  uri: "https://api.github.com/graphql",
  headers: {
    Authorization: `Bearer ${GIT_API_KEY}`,
  },
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
