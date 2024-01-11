import { builder, prisma } from '../builder';

builder.prismaObject('Post', {
  name: 'Post',
  fields: (t) => ({
    id: t.exposeID('id'),
    content: t.exposeString('content', { nullable: true }),
    author: t.relation('author'),
    favoritedBy: t.relation('favoritedBy'),
  }),
});

const PostCreateInput = builder.inputType('PostCreateInput', {
  fields: (t) => ({
    content: t.string({ required: true }),
  }),
});

builder.mutationType({
  fields: (t) => ({
    createPost: t.prismaField({
      type: 'Post',
      args: { input: t.arg({ type: PostCreateInput, required: true }) },
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
  }),
});
