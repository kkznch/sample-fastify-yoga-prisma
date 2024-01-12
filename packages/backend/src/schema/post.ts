import { builder, prisma } from '../builder';
import { createPostSchema } from '@libs/validator';

builder.prismaObject('Post', {
  name: 'Post',
  fields: (t) => ({
    id: t.exposeID('id'),
    content: t.exposeString('content', { nullable: true }),
    author: t.relation('author'),
    favoritedBy: t.relation('favoritedBy'),
  }),
});

builder.mutationFields((t) => ({
  createPost: t.prismaFieldWithInput({
    type: 'Post',
    input: {
      content: t.input.string({ required: true }),
    },
    validate: {
      schema: createPostSchema,
    },
    resolve: async (_query, _parent, args) => {
      // This is just a demo, so we'll just grab the first user we find
      const user = await prisma.user.findFirst();
      if (!user) throw new Error('No user found');

      const post = await prisma.post.create({
        data: {
          authorId: user.id,
          content: args.input.content,
        },
      });
      return post;
    },
  }),
}));
