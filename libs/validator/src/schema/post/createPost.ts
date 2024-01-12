import { z } from 'zod';

export const createPostSchema = z.object({
  input: z.object({
    content: z.string().min(1).max(255),
  }),
});

export type CreatePostInput = z.infer<typeof createPostSchema>;
