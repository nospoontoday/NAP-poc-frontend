import { 
    ApolloClient, 
    InMemoryCache,
    HttpLink,
    from,
} from  "@apollo/client";

import { onError } from '@apollo/client/link/error';

const errorLink = onError(({graphqlErrors, networkError}) => {
    if(graphqlErrors) {
        graphqlErrors.forEach(({message, location, path}) => {
            console.log(`Graphql error ${message}`);
        });
    }

    if(networkError) console.log(`[Network error]: ${JSON.stringify(networkError, null, 2)}`);
});

const link = from([
    errorLink,
    new HttpLink({uri: "http://localhost:3500/graphql"})
]);
  
export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link,
    credentials: 'include',
});