import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://movieql-gqqzitrtgm.now.sh"
});

export default client;
