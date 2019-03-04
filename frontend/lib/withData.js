import withApollo from "next-with-apollo";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { endpoint, prodEndpoint } from "../configs";

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
            }
        })
);
