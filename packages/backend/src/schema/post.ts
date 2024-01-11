import { builder } from '../builder';

builder.prismaObject('Post', {
  name: 'Post',
  fields: (t) => ({
    id: t.exposeID('id'),
    content: t.exposeString('content', { nullable: true }),
    author: t.relation('author'),
    favoritedBy: t.relation('favoritedBy'),
  }),
});
