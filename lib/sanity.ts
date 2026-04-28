import { createClient } from '@sanity/client'

// Create a read-only client for fetching data
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: false, // Disable CDN to avoid CORS issues
  apiVersion: '2024-03-19',
  token: process.env.SANITY_API_TOKEN, // Use token for all requests
})

// Create a client with token for write operations
export const writeClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: false, // Disable CDN for write operations
  apiVersion: '2024-03-19',
  token: process.env.SANITY_API_TOKEN,
})
