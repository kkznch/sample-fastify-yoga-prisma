import { builder, prisma } from '../builder';

builder.prismaObject('User', {
  name: 'User',
  fields: (t) => ({
    id: t.exposeID('id'),
    email: t.exposeString('email'),
    name: t.exposeString('name', { nullable: true }),
    writtenPosts: t.relation('writtenPosts'),
    favoritedPosts: t.relation('favoritedPosts'),
  }),
});

builder.queryType({
  fields: (t) => ({
    users: t.prismaField({
      type: ['User'],
      resolve: (query, parent) => prisma.user.findMany(),
    }),
  }),
});
