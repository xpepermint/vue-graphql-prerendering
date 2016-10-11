import graphqlHTTP from 'express-graphql';
import {Schema} from '../../graph';

export function middleware(gateway) {
  return graphqlHTTP({
    schema: Schema,
    graphiql: true,
    pretty: false
  });
}
