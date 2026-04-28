import { defineType, defineField, defineArrayMember } from 'sanity'

export default defineType({
  name: 'productDetails',
  title: 'Product Details',
  type: 'document',
  fields: [
    defineField({
      name: 'productId',
      title: 'Product ID',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bannerTitle',
      title: 'Banner Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bannerDescription',
      title: 'Banner Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bannerImage',
      title: 'Banner Image',
      type: 'string',
    }),
    defineField({
      name: 'productImage',
      title: 'Product Image',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'productTitle',
      title: 'Product Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'productDescription',
      title: 'Product Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'productSpecification',
      title: 'Product Specification',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      initialValue: new Date().toISOString(),
    }),
    defineField({
      name: 'updatedAt',
      title: 'Updated At',
      type: 'datetime',
      initialValue: new Date().toISOString(),
    }),
  ],
preview: {
  select: {
    title: 'productTitle',
    subtitle: 'productId',
  },
},
})
