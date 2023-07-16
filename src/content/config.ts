import { defineCollection, z } from 'astro:content';

const postSchema = z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string().refine((date) => {
        const regex = /^\d{2}\d{2}\d{4}$/;
        return regex.test(date);
    }),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
});

export type PostSchema = z.infer<typeof postSchema>;

const postCollection = defineCollection({ schema: postSchema });

export const collections = {
    post: postCollection,
};
