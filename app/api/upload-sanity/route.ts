import { NextRequest, NextResponse } from 'next/server'
import { writeClient } from '@/lib/sanity'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 })
    }

    // Check file size (5MB limit)
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json({ error: 'File size must be less than 5MB' }, { status: 400 })
    }

    // Check file type
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp']
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json({ error: 'Invalid file type. Only JPEG, PNG, GIF, and WebP are allowed' }, { status: 400 })
    }

    // Convert file to buffer
    const buffer = await file.arrayBuffer()
    const fileBuffer = Buffer.from(buffer)

    // Upload to Sanity assets
    const asset = await writeClient.assets.upload('image', fileBuffer, {
      filename: file.name,
    })

    // Return the asset reference
    return NextResponse.json({
      success: true,
      asset: {
        _id: asset._id,
        url: asset.url,
        _ref: asset._ref,
        _type: asset._type,
      }
    })

  } catch (error) {
    console.error('Error uploading to Sanity:', error)
    return NextResponse.json(
      { error: 'Failed to upload image to Sanity' },
      { status: 500 }
    )
  }
}
