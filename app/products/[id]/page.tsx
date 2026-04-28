'use client'
import { useState, useEffect, use } from 'react'
import ProductDetail from '@/components/Products/ProductDetail'
import Header from '@/components/Landingpage/Header'
import Footer from '@/components/Landingpage/Footer'
import { useRouter } from 'next/navigation'
import WhyChooseUs from '@/components/Landingpage/WhyChooseUs'

interface Product {
  _id: string
  category: string
  subcategory: string
  title: string
  subtitle: string
  image: string
  name?: string
  sizes?: string
  features?: string[]
  description?: string
  href?: string
  specs?: Array<{ label: string; value: string }>
  inches?: string
  featured: boolean
  publishedAt: string
}

interface ProductDetails {
  productId: string
  bannerTitle: string
  bannerDescription: string
  bannerImage: string
  productImage: string
  productTitle: string
  productDescription: string
  productSpecification: string
  createdAt: string
}

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter()
  const [product, setProduct] = useState<Product | null>(null)
  const [productDetails, setProductDetails] = useState<ProductDetails | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  
  // Unwrap the params Promise
  const { id } = use(params)

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        // Fetch product by ID
        const productResponse = await fetch(`/api/products?id=${id}`)
        if (!productResponse.ok) {
          throw new Error('Product not found')
        }
        const productData = await productResponse.json()
        setProduct(productData.product)

        // Fetch product details
        const detailsResponse = await fetch(`/api/product-details?productId=${id}`)
        const detailsData = await detailsResponse.json()
        setProductDetails(detailsData.productDetails)

      } catch (error) {
        console.error('Error fetching product:', error)
        setError('Product not found')
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchProductData()
    }
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#08425D] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading product details...</p>
        </div>
      </div>
    )
  }

  if (error || !product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600">The product you're looking for doesn't exist.</p>
        </div>
      </div>
    )
  }

  // If no product details exist, show "No details added" page
  if (!productDetails) {
    return (
      <div>
        <Header />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center bg-white rounded-lg shadow-lg p-8 max-w-md">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">No Product Details</h1>
            <p className="text-gray-600 mb-4">Enhanced product details haven't been added for this product yet.</p>
            <p className="text-sm text-gray-500">Product: {product.title}</p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  // Convert specs array to the format expected by ProductDetail component
  const specs = product.specs || []

  return (
    <div className="min-h-screen">
      <Header />
      <ProductDetail
        image={product.image}
        title={product.title}
        description={product.description || ''}
        specs={specs}
        inches={product.inches}
        // Pass product details if available
        bannerTitle={productDetails?.bannerTitle}
        bannerDescription={productDetails?.bannerDescription}
        bannerImage={productDetails?.bannerImage}
        productDescription={productDetails?.productDescription}
        productSpecification={productDetails?.productSpecification}
      />
      <WhyChooseUs />
      <Footer />
    </div>
  )
}
