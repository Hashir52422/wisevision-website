import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Product Title',
      type: 'string',
      validation: Rule => Rule.required().min(1),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'SMD Screens indoor', value: 'SMD Screens indoor' },
          { title: 'SMD Screens outdoor', value: 'SMD Screens outdoor' },
          { title: 'COB led display', value: 'COB led display' },
          { title: 'Digital standee', value: 'Digital standee' },
          { title: 'Digital podium', value: 'Digital podium' },
          { title: 'samsung display', value: 'samsung display' },
          { title: 'phillips display', value: 'phillips display' },
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'subcategory',
      title: 'Sub Category',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Product Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'sizes',
      title: 'Sizes',
      type: 'string',
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'specs',
      title: 'Specifications',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: Rule => Rule.required(),
            },
            {
              name: 'value',
              title: 'Value',
              type: 'string',
              validation: Rule => Rule.required(),
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'inches',
      title: 'Size/Inches',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'image',
    },
  },
})
