import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const works = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/works' }),
  schema: z.object({
    title: z.string(),
    image: z.string(),
    order: z.number(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { works };
