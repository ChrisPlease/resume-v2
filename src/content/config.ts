import { defineCollection } from 'astro:content';

const resumeCollection = defineCollection({
  type: 'content',
});

export const collectctions = {
  'resume': resumeCollection,
}
