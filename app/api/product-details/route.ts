import { client, writeClient } from '@/lib/sanity'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const productId = searchParams.get('productId')
    
    console.log('GET request for productId:', productId)
    
    if (productId) {
      // Fetch product details by productId
      const productDetails = await client.fetch(`
        *[_type == "productDetails" && productId == $productId][0]
      `, { productId })
      
      console.log('Found product details:', productDetails)
      
      if (!productDetails) {
        console.log('No product details found for productId:', productId)
        return NextResponse.json({ error: 'Product details not found' }, { status: 404 })
      }
      
      return NextResponse.json({ 
        productDetails,
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache'
        }
      })
    } else {
      // Fetch all product details
      const allProductDetails = await client.fetch(`
        *[_type == "productDetails"] | order(createdAt desc)
      `)
      
      console.log('All product details:', allProductDetails)
      console.log('Number of product details found:', allProductDetails?.length || 0)
      
      return NextResponse.json({ 
        productDetails: allProductDetails,
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache'
        }
      })
    }
  } catch (error) {
    console.error('Error fetching product details:', error)
    return NextResponse.json(
      { error: 'Failed to fetch product details' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    if (!body.productId || !body.bannerTitle || !body.bannerDescription || !body.productDescription || !body.productSpecification) {
      return NextResponse.json(
        { error: 'ProductId, banner title, banner description, product description, and product specification are required' },
        { status: 400 }
      )
    }
    
    // Create product details document
    const productDetails = await writeClient.create({
      _type: 'productDetails',
      productId: body.productId,
      bannerTitle: body.bannerTitle,
      bannerDescription: body.bannerDescription,
      bannerImage: body.bannerImage || '',
      productImage: body.productImage,
      productTitle: body.productTitle,
      productDescription: body.productDescription,
      productSpecification: body.productSpecification,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    })
    
    return NextResponse.json({ productDetails })
  } catch (error) {
    console.error('Error creating product details:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred'
    return NextResponse.json(
      { error: `Failed to create product details: ${errorMessage}` },
      { status: 500 }
    )
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { _id, ...updateData } = body
    
    if (!_id) {
      return NextResponse.json(
        { error: 'Product details ID is required' },
        { status: 400 }
      )
    }
    
    // Update product details
    const updatedProductDetails = await writeClient
      .patch(_id)
      .set({
        ...updateData,
        updatedAt: new Date().toISOString()
      })
      .commit()
    
    return NextResponse.json({ productDetails: updatedProductDetails })
  } catch (error) {
    console.error('Error updating product details:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred'
    return NextResponse.json(
      { error: `Failed to update product details: ${errorMessage}` },
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
        { error: 'Product details ID is required' },
        { status: 400 }
      )
    }
    
    await writeClient.delete(id)
    
    return NextResponse.json({ 
      message: 'Product details deleted successfully',
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache'
      }
    })
  } catch (error) {
    console.error('Error deleting product details:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred'
    return NextResponse.json(
      { error: `Failed to delete product details: ${errorMessage}` },
      { status: 500 }
    )
  }
}
