import { defineConfig } from 'sanity'
import { schemaTypes } from './schemas'

export default defineConfig({
  projectId: process.env.SANITY_PROJECT_ID!,
  dataset: process.env.SANITY_DATASET!,
  useCdn: true,
  apiVersion: '2024-03-19',
  schema: {
    types: schemaTypes,
  },
})
