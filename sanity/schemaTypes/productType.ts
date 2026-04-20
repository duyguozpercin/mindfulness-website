import {PackageIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const productType = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  icon: PackageIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'productType',
      title: 'Product Type',
      type: 'string',
      options: {
        list: [
          {title: 'Digital', value: 'digital'},
          {title: 'Physical', value: 'physical'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'audience',
      title: 'Audience Badge',
      type: 'string',
      description: 'Example: Teachers & Parents',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
      description: 'Example: $8',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'etsyUrl',
      title: 'Etsy URL',
      type: 'url',
      validation: (Rule) =>
        Rule.required().uri({
          scheme: ['http', 'https'],
        }),
    }),
    defineField({
      name: 'emoji',
      title: 'Emoji',
      type: 'string',
      description: 'Example: 🌸',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'color',
      title: 'Button Color',
      type: 'string',
      options: {
        list: [
          {title: 'Pink', value: 'pink'},
          {title: 'Blue', value: 'blue'},
          {title: 'Green', value: 'green'},
          {title: 'Yellow', value: 'yellow'},
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number',
      description: 'Lower numbers appear first',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'productType',
    },
  },
})