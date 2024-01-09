import { FastifyReply, FastifyRequest } from 'fastify';
import { createSchema } from 'graphql-yoga';
import { Context } from './context';

const typeDefs = /* GraphQL */ `
  scalar DateTime

  type User {
    id: Int!
    email: String!
    name: String
    writtenPosts: [Post]!
    favoritedPosts: [Post]!
    createdAt: DateTime
    updatedAt: DateTime
  }

  type Post {
    id: Int!
    content: String
    author: User
    favoritedBy: [User]!
    createdAt: DateTime
    updatedAt: DateTime
  }

  type Query {
    users: [User]!
  }
`;

const resolvers = {
  Query: {
    users: (_parent: any, _args: any, context: Context) => {
      return context.prisma.user.findMany();
    },
  },
};

export const schema = createSchema<{
  req: FastifyRequest;
  reply: FastifyReply;
}>({
  typeDefs,
  resolvers,
});
