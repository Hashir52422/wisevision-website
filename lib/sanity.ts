import { createClient } from '@sanity/client'

// Using the NEXT_PUBLIC prefix ensures these can be baked in during Docker build
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const token = process.env.SANITY_API_TOKEN

export const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-03-19',
  useCdn: false, 
  token,
  // perspective: 'published' tells Sanity this is a standard server-to-server request
  perspective: 'published',
  stega: { enabled: false }
})

export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion: '2024-03-19',
  useCdn: false,
  token,
})