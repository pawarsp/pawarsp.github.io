import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // The new loader requirement

const blogCollection = defineCollection({
  // 1. Tell Astro to grab all markdown files in the blog directory
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blog" }),
  
  // 2. Keep your schema layout exactly the same
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(), // 'coerce' ensures string dates in markdown parse seamlessly
    description: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};