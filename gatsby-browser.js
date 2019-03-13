/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import { ApolloProvider } from 'react-apollo-hooks';
import ApolloClient from "apollo-boost"
import React from "react"

const client = new ApolloClient({
    uri: "https://demo.vendure.io/shop-api",
    credentials: 'include',
});

export const wrapRootElement = ({ element }) => {
    return (
        <ApolloProvider client={client}>
            {element}
        </ApolloProvider>
    )
}
