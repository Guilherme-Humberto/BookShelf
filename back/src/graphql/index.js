import { GraphQLSchema } from "graphql";
import { Mutation, RootQuery } from './resolves/resolvers'

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});

export { schema } 
