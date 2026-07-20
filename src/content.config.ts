import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    link: z.string().url().optional(),
    tags: z.array(z.string().regex(/^@/, '標籤必須以 @ 開頭')).default([]),
  }),
});

export const collections = { projects };
