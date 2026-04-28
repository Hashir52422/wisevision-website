import { client, writeClient } from '@/lib/sanity'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    
    if (id) {
      // Fetch single product by ID
      const product = await client.fetch(`
        *[_type == "product" && _id == $id][0]
      `, { id })
      
      if (!product) {
        return NextResponse.json(
          { error: 'Product not found' },
          { status: 404 }
        )
      }
      
      return NextResponse.json({ product })
    } else {
      // Fetch all products
      const products = await client.fetch(`
        *[_type == "product"] | order(publishedAt desc)
      `)
      
      return NextResponse.json({ products })
    }
  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    console.log('Received product data:', body)
    
    // Validate required fields
    if (!body.category || !body.subcategory || !body.title || !body.image) {
      return NextResponse.json(
        { error: 'Category, subcategory, title, and image are required' },
        { status: 400 }
      )
    }
    
    const newProduct = await writeClient.create({
      _type: 'product',
      ...body,
      publishedAt: new Date().toISOString(),
    })
    
    console.log('Product created successfully:', newProduct)
    return NextResponse.json({ product: newProduct })
  } catch (error) {
    console.error('Error creating product:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json(
      { error: `Failed to create product: ${errorMessage}` },
      { status: 500 }
    )
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { _id, ...updateData } = body
    
    const updatedProduct = await writeClient
      .patch(body._id)
      .set({
        ...updateData,
        publishedAt: new Date().toISOString(),
      })
      .commit()
    
    return NextResponse.json({ product: updatedProduct })
  } catch (error) {
    console.error('Error updating product:', error)
    return NextResponse.json(
      { error: 'Failed to update product' },
      { status: 500 }
    )
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    
    if (!id) {
      return NextResponse.json(
        { error: 'Product ID is required' },
        { status: 400 }
      )
    }
    
    await writeClient.delete(id)
    
    return NextResponse.json({ message: 'Product deleted successfully' })
  } catch (error) {
    console.error('Error deleting product:', error)
    return NextResponse.json(
      { error: 'Failed to delete product' },
      { status: 500 }
    )
  }
}
