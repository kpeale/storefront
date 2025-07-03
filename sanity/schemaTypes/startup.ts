import { defineType, defineField } from 'sanity';

export const startup = defineType({
  name: 'startup',
  title: 'Startups',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'author',
      type: 'reference',
      to: { type: 'author' },
    }),
    defineField({
      name: 'email',
      type: 'string',
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
    defineField({
      name: 'category',
      type: 'string',
      validation: (Rule) =>
        Rule.required().min(3).max(50).error('please enter a category'),
    }),
    defineField({
      name: 'image',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pitch',
      type: 'markdown',
    }),
  ],
});
