import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList
} from 'graphql';

import {
  getMessages
} from '../resolvers/messages';

export const MessageType = new GraphQLObjectType({
  name: 'Message',
  fields: () => ({
    id: {
      type: GraphQLID,
      resolve: (d) => d._id
    },
    name: {
      type: GraphQLString,
      resolve: (d) => d.name
    }
  })
});

export const getMessagesField = () => ({
  type: new GraphQLList(MessageType),
  args: {},
  resolve: getMessages
});
