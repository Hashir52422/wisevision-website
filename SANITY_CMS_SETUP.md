# Sanity CMS Setup for Wise Vision Website

## Overview
This document outlines the Sanity Headless CMS implementation for managing products while keeping the rest of the website static.

## Setup Instructions

### 1. Create Sanity Project
1. Go to [sanity.io](https://sanity.io)
2. Create a new project or use existing one
3. Note your `projectId` and `dataset` name
4. Generate an API token with write permissions

### 2. Configure Environment Variables
Update `.env.local` file with your Sanity credentials:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-03-19
SANITY_API_TOKEN=your-api-token-here
```

### 3. Install Dependencies
```bash
npm install @sanity/client @sanity/image-url next-sanity
```

### 4. Project Structure
```
/schemas/
├── productSchema.ts      # Product definition
├── index.ts           # Schema exports
└── product.ts          # Alternative schema (with validation)

/lib/
└── sanity.ts           # Sanity client configuration

/app/
├── api/products/route.ts    # CRUD API endpoints
├── admin/products/page.tsx     # Admin interface
└── projects/page.tsx     # Updated to fetch from Sanity
```

## Product Schema Features

### Fields:
- **name**: Product name (required)
- **slug**: URL-friendly identifier (auto-generated)
- **category**: Product category (dropdown)
- **description**: Product description
- **specifications**: Key-value specifications array
- **images**: Product images array
- **featured**: Featured product boolean
- **price**: Product price
- **availability**: Stock status (dropdown)
- **tags**: Product tags array
- **publishedAt**: Publication timestamp

### Categories:
- SMD Screens Indoor
- SMD Screens Outdoor  
- Module Series
- Premium Series
- Rental Series

## API Endpoints

### GET /api/products
Fetches all products ordered by publication date.

### POST /api/products
Creates a new product with the provided data.

### PUT /api/products
Updates an existing product by ID.

### DELETE /api/products?id={id}
Deletes a product by ID.

## Admin Interface

Access at `/admin/products` to:
- View all products
- Create new products
- Edit existing products
- Delete products
- Manage product status and availability

## Frontend Integration

The projects page (`/projects`) now fetches data dynamically from Sanity:
- Products are loaded via API calls
- Images are handled with proper Sanity asset URLs
- Modal forms use the same ContactForm component
- All existing styling and functionality preserved

## Usage Examples

### Fetching Products:
```typescript
import { client } from '@/lib/sanity'

const products = await client.fetch(`*[_type == "product"] | order(publishedAt desc)`)
```

### Creating Products:
```typescript
const newProduct = await client.create({
  _type: 'product',
  name: 'Product Name',
  category: 'smd-indoor',
  // ... other fields
})
```

## Next Steps

1. **Test the Setup**: Create, update, and delete products via admin interface
2. **Add Validations**: Implement proper form validation
3. **Image Upload**: Add image upload functionality to admin interface
4. **Deploy**: Configure production dataset and deploy changes
5. **Monitor**: Set up monitoring for API performance

## Notes

- The rest of the website remains static and unchanged
- Only product-related functionality uses Sanity CMS
- Existing components and styling are preserved
- Modal functionality works with dynamic product data
- All API routes include proper error handling
