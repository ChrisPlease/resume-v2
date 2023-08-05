import { defineCollection, z } from 'astro:content';

const resume = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    sortOrder: z.number(),
  })
});

const experience = defineCollection({
  type: 'data',
  schema: z.object({
    company: z.string(),
    title: z.string(),
    description: z.string().default(''),
    location: z.string(),
    responsibilities: z.array(z.string().or(z.record(z.string(), z.array(z.string())))),
    startDate: z.string(),
    endDate: z.string().default(''),
  }),
})

export const collections = {
  resume,
  experience,
}
