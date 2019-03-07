import withApollo from "next-with-apollo";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { endpoint, prodEndpoint } from "../configs";
import { LOCAL_STATE_QUERY } from "../components/Nav/Menu";

export default withApollo(
    ({ headers }) =>
        new ApolloClient({
            uri:
                process.env.NODE_ENV === "development"
                    ? endpoint
                    : prodEndpoint,
            request: operation => {
                operation.setContext({
                    fetchOptions: {
                        credentials: "include"
                    },
                    headers
                });
            },
            clientState: {
                resolvers: {
                    Mutation: {
                        toggleMenu(_, variables, { cache }) {
                            // read the cartOpen value from the cache
                            const { menuOpen } = cache.readQuery({
                                query: LOCAL_STATE_QUERY
                            });
                            const data = {
                                data: {
                                    menuOpen: !menuOpen
                                }
                            };
                            cache.writeData(data);
                            return data;
                        }
                    }
                },
                defaults: {
                    menuOpen: false
                }
            }
        })
);
