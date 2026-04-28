import { NextResponse, NextRequest } from 'next/server'
import { client } from '@/lib/sanity'

export async function GET(
  request: NextRequest, 
  { params }: { params: Promise<{ category: string }> }
) {
  try {
   
    
    const {category} = await params;
    
    // Decode URL-encoded category name
    const decodedCategory = decodeURIComponent(category)
    
    console.log('Original category:', category)
    console.log('Decoded category:', decodedCategory)
    
    // Test direct query first
    const directQuery = await client.fetch(`
      *[_type == "product" && category == "SMD Screens indoor"]
    `)
    
    console.log('Direct query result:', directQuery.length)
    
    const products = await client.fetch(`
      *[_type == "product" && category == $category] | order(publishedAt desc)
    `, { category: decodedCategory })
    
    console.log('Param query result:', products.length)
    
    return NextResponse.json({ 
      debug: {
        params,
        category,
        decodedCategory,
        directQueryCount: directQuery.length,
        paramQueryCount: products.length
      },
      products 
    })
  } catch (error) {
    console.error('Error fetching products by category:', error)
    return NextResponse.json(
      { error: 'Failed to fetch products', details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    )
  }
}
