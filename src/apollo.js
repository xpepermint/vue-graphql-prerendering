import ApolloClient, {
  createNetworkInterface,
  addTypename
} from 'apollo-client'
import VueApollo from 'vue-apollo'

export {VueApollo}

export const apolloClient = new ApolloClient({
  networkInterface: createNetworkInterface('http://localhost:4444/graphql'),
  queryTransformer: addTypename
})
