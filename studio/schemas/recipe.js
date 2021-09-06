export default {
  name: 'recipe',
  title: 'Oppskrift',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Navn',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Kort beskrivelse',
      type: 'text',
    },
    {
      name: 'duration',
      title: 'Tidsbruk',
      description: 'Hvor lang tid tar det å lage denne retten i min?',
      type: 'number',
    },
    {
      name: 'vegan',
      title: 'Vegansk',
      type: 'boolean',
      initialValue: true,
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'name',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
  ],
};
