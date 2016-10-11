import {
  GraphQLSchema,
  GraphQLObjectType
} from 'graphql';

import {
  getMessagesField
} from './types/messages';

export const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    messages: getMessagesField()
  })
});

export const Schema = new GraphQLSchema({
  query: QueryType
});
