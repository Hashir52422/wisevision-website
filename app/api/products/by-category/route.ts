import { NextRequest, NextResponse } from 'next/server'
import { client } from '@/lib/sanity'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    
    if (!category) {
      return NextResponse.json(
        { error: 'Category parameter is required' },
        { status: 400 }
      )
    }
    
    // Decode URL-encoded category name
    const decodedCategory = decodeURIComponent(category)
    
    console.log('Fetching products for category:', decodedCategory)
    
    const products = await client.fetch(`
      *[_type == "product" && category == $category] | order(publishedAt desc)
    `, { category: decodedCategory })
    
    console.log('Found products:', products.length)
    
    return NextResponse.json({ products })
  } catch (error) {
    console.error('Error fetching products by category:', error)
    return NextResponse.json(
      { error: 'Failed to fetch products', details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    )
  }
}
