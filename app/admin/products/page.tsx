'use client'

import { useState, useEffect } from 'react'
import { client } from '@/lib/sanity'

interface Product {
  _id: string
  name?: string
  title?: string
  subtitle?: string
  category: string
  subcategory: string
  image: string
  sizes?: string
  features?: string[]
  description?: string
  specs?: Array<{ label: string; value: string }>
  inches?: string
  publishedAt: string
}

const categorySubcategories = {
  'SMD Screens indoor': ['Module Series', 'Premium Series', 'Rental Series'],
  'SMD Screens outdoor': ['Module Series', 'Premium Series', 'Rental Series'],
  'COB led display': ['COB LED DISPLAY'],
  'Digital standee': ['Indoor SMD Digital Standee', 'Samsung Touch Digital Standee', 'Samsung Non-Touch Digital Standee'],
  'Digital podium': ['Digital podium'],
  'samsung display': ['Video walls', 'Digital Signage', 'Interactive screens', 'Touch screens', 'Hospitality screens', 'Monitors'],
  'phillips display': ['Interactive touch display', 'Hospitality TV']
}

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [formData, setFormData] = useState<Partial<Product>>({})
  const [editingId, setEditingId] = useState<string | null>(null)
  const [showForm, setShowForm] = useState(false)
  const [availableSubcategories, setAvailableSubcategories] = useState<string[]>([])
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [uploading, setUploading] = useState(false)
  const [productType, setProductType] = useState<'productCard' | 'productFeatures'>('productCard')
  const [showDetailsForm, setShowDetailsForm] = useState(false)
  const [detailsFormData, setDetailsFormData] = useState({
    bannerTitle: '',
    bannerDescription: '',
    bannerImage: '',
    productImage: '',
    productTitle: '',
    productDescription: '',
    productSpecification: ''
  })
  const [uploadedBannerImage, setUploadedBannerImage] = useState<string | null>(null)
  const [uploadingBanner, setUploadingBanner] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [existingProductDetails, setExistingProductDetails] = useState<any>(null)
  const [editingDetailsId, setEditingDetailsId] = useState<string | null>(null)

  // Update subcategories when category changes
  useEffect(() => {
    if (formData.category) {
      setAvailableSubcategories(categorySubcategories[formData.category as keyof typeof categorySubcategories] || [])
      // Reset subcategory when category changes
      setFormData(prev => ({ ...prev, subcategory: '' }))
    } else {
      setAvailableSubcategories([])
    }
  }, [formData.category])

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/products')
      if (!response.ok) {
        throw new Error('Failed to fetch products')
      }
      const data = await response.json()
      setProducts(data.products || [])
    } catch (error) {
      console.error('Error fetching products:', error)
      alert('Error fetching products. Please check your Sanity configuration.')
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Prevent double submission
    const submitButton = e.currentTarget.querySelector('button[type="submit"]')
    if (submitButton) {
      submitButton.setAttribute('disabled', 'true')
    }
    
    try {
      // Check if this should be a productsS item based on product type
      const isProductsS = productType === 'productFeatures';
      
      // Prepare the product data according to current product structure
      const productData = {
        _type: 'product',
        name: formData.name || formData.title,
        title: formData.title,
        subtitle: formData.subtitle,
        category: formData.category,
        subcategory: formData.subcategory,
        features: formData.features || [],
        sizes: formData.sizes || '',
        image: formData.image || '/images/placeholder.jpg',
        specs: formData.specs || [],
        inches: formData.inches || '',
      }

      let response
      if (editingId) {
        response = await fetch('/api/products', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ _id: editingId, ...productData })
        })
      } else {
        response = await fetch('/api/products', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(productData)
        })
      }

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to save product')
      }
      
      await fetchProducts()
      setFormData({})
      setEditingId(null)
      setShowForm(false)
      setProductType('productCard')
      setUploadedImage(null)
      alert(editingId ? 'Product updated successfully!' : 'Product created successfully!')
    } catch (error) {
      console.error('Error saving product:', error)
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred'
      alert(`Error: ${errorMessage}. Please check your Sanity configuration.`)
    } finally {
      // Re-enable submit button
      if (submitButton) {
        submitButton.removeAttribute('disabled')
      }
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this product?')) return
    
    try {
      const response = await fetch(`/api/products?id=${id}`, { method: 'DELETE' })
      
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to delete product')
      }
      
      await fetchProducts()
      alert('Product deleted successfully!')
    } catch (error) {
      console.error('Error deleting product:', error)
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred'
      alert(`Error: ${errorMessage}. Please check your Sanity configuration.`)
    }
  }

  const handleAddProductDetails = (product: Product) => {
    console.log('handleAddProductDetails called with product:', product)
    console.log('Product ID:', product._id)
    console.log('Product title:', product.title)
    setSelectedProduct(product)
    setDetailsFormData({
      bannerTitle: '',
      bannerDescription: '',
      bannerImage: '',
      productImage: product.image || '',
      productTitle: product.title || '',
      productDescription: '',
      productSpecification: ''
    })
    setUploadedBannerImage(null)
    setShowDetailsForm(true)
  }

  const handleDetailsSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!selectedProduct) return
    
    try {
      const submitButton = e.currentTarget.querySelector('button[type="submit"]')
      if (submitButton) {
        submitButton.setAttribute('disabled', 'true')
      }
      
      if (editingDetailsId) {
        // Update existing product details
        const response = await fetch(`/api/product-details`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            _id: editingDetailsId,
            ...detailsFormData,
          }),
        })
        
        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.error || 'Failed to update product details')
        }
        
        alert('Product details updated successfully!')
      } else {
        // Create new product details
        const productDetails = {
          productId: selectedProduct._id,
          ...detailsFormData,
        }
        
        const response = await fetch('/api/product-details', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(productDetails),
        })
        
        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.error || 'Failed to create product details')
        }
        
        alert('Product details saved successfully!')
      }
      
      // Close form and reset
      setShowDetailsForm(false)
      setSelectedProduct(null)
      setEditingDetailsId(null)
      setExistingProductDetails(null)
      setDetailsFormData({
        bannerTitle: '',
        bannerDescription: '',
        bannerImage: '',
        productImage: '',
        productTitle: '',
        productDescription: '',
        productSpecification: ''
      })
    } catch (error) {
      console.error('Error saving product details:', error)
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred'
      alert(`Error: ${errorMessage}`)
    } finally {
      // Re-enable submit button
      const submitButton = document.querySelector('button[type="submit"]') as HTMLButtonElement
      if (submitButton) {
        submitButton.removeAttribute('disabled')
      }
    }
  }

  const handleEditProductDetails = async (product: Product) => {
    try {
      console.log('Fetching product details for product:', product._id)
      
      const response = await fetch(`/api/product-details?productId=${product._id}`)
      const data = await response.json()
      
      if (response.ok && data.productDetails) {
        // Set form data with existing details
        setDetailsFormData({
          bannerTitle: data.productDetails.bannerTitle || '',
          bannerDescription: data.productDetails.bannerDescription || '',
          bannerImage: data.productDetails.bannerImage || '',
          productImage: data.productDetails.productImage || '',
          productTitle: data.productDetails.productTitle || '',
          productDescription: data.productDetails.productDescription || '',
          productSpecification: data.productDetails.productSpecification || ''
        })
        setEditingDetailsId(data.productDetails._id)
        setExistingProductDetails(data.productDetails)
        setSelectedProduct(product)
        
        // Set uploaded banner image if exists
        if (data.productDetails.bannerImage) {
          setUploadedBannerImage(data.productDetails.bannerImage)
        } else {
          setUploadedBannerImage(null)
        }
        
        setShowDetailsForm(true)
      } else {
        // No existing details, open as new
        handleAddProductDetails(product)
      }
    } catch (error) {
      console.error('Error fetching product details:', error)
      alert('Error fetching product details. Please try again.')
    }
  }

  const handleDeleteProductDetails = async (product: Product) => {
    try {
      console.log('Attempting to delete details for product:', product._id)
      
      // First check if product details exist
      const response = await fetch(`/api/product-details?productId=${product._id}`)
      const data = await response.json()
      
      console.log('API Response status:', response.status)
      console.log('API Response data:', data)
      
      if (response.ok && data.productDetails) {
        console.log('Found product details:', data.productDetails)
        
        // Confirm deletion
        if (!confirm('Are you sure you want to delete the product details?')) return
        
        // Delete product details
        const deleteResponse = await fetch(`/api/product-details?id=${data.productDetails._id}`, {
          method: 'DELETE'
        })
        
        if (!deleteResponse.ok) {
          const errorData = await deleteResponse.json()
          throw new Error(errorData.error || 'Failed to delete product details')
        }
        
        alert('Product details deleted successfully!')
      } else {
        console.log('No product details found. Response:', data)
        alert('No product details found to delete.')
      }
    } catch (error) {
      console.error('Error deleting product details:', error)
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred'
      alert(`Error: ${errorMessage}`)
    }
  }

  const handleDebugAllProductDetails = async () => {
    try {
      const response = await fetch('/api/product-details')
      const data = await response.json()
      console.log('All existing product details:', data)
      alert(`Found ${data.productDetails?.length || 0} product details. Check console for details.`)
    } catch (error) {
      console.error('Error fetching all product details:', error)
      alert('Error fetching product details. Check console.')
    }
  }

  const handleEdit = (product: Product) => {
    setFormData(product)
    setEditingId(product._id)
    
    // Determine product type based on existing data
    if (product.features && product.features.length > 0) {
      setProductType('productFeatures')
    } else {
      setProductType('productCard')
    }
    
    setShowForm(true)
  }

  const handleNew = () => {
    setFormData({})
    setEditingId(null)
    setShowForm(true)
  }

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Validate file type
    const allowedTypes = ['image/png', 'image/jpg', 'image/jpeg']
    if (!allowedTypes.includes(file.type)) {
      alert('Please upload a PNG, JPG, or JPEG image')
      return
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('File size must be less than 5MB')
      return
    }

    setUploading(true)

    try {
      // Create FormData for upload
      const formData = new FormData()
      formData.append('file', file)

      // Upload to Sanity
      const response = await fetch('/api/upload-sanity', {
        method: 'POST',
        body: formData,
      })

      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Upload failed')
      }

      // Store the Sanity asset URL
      const imageUrl = result.asset.url
      setUploadedImage(imageUrl)
      setFormData(prev => ({ ...prev, image: imageUrl }))
    } catch (error) {
      console.error('Error uploading image:', error)
      alert('Error uploading image: ' + (error as Error).message)
    } finally {
      setUploading(false)
    }
  }

  const handleBannerImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Check file size (5MB limit)
    if (file.size > 5 * 1024 * 1024) {
      alert('File size must be less than 5MB')
      return
    }

    setUploadingBanner(true)

    try {
      // Create FormData for upload
      const formData = new FormData()
      formData.append('file', file)

      // Upload to Sanity
      const response = await fetch('/api/upload-sanity', {
        method: 'POST',
        body: formData,
      })

      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Upload failed')
      }

      // Store the Sanity asset URL
      const imageUrl = result.asset.url
      setUploadedBannerImage(imageUrl)
      setDetailsFormData(prev => ({ ...prev, bannerImage: imageUrl }))
    } catch (error) {
      console.error('Error uploading banner image:', error)
      alert('Error uploading banner image: ' + (error as Error).message)
    } finally {
      setUploadingBanner(false)
    }
  }

  const closeModal = () => {
    setShowForm(false)
    setEditingId(null)
    setFormData({})
    setUploadedImage(null)
    setUploadedBannerImage(null)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-xl">Loading products...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-[#08425D]">Products Management</h1>
          <div className="flex gap-4">
            <button
              onClick={handleDebugAllProductDetails}
              className="bg-orange-500 text-white px-4 py-2 rounded-lg font-outfit font-medium hover:bg-orange-600 transition-colors text-sm"
            >
              Debug All Details
            </button>
            <button
              onClick={handleNew}
              className="bg-[#08425D] text-white px-6 py-2 rounded-lg font-outfit font-medium hover:bg-[#063247] transition-colors"
            >
              Add New Product
            </button>
          </div>
        </div>

        {/* Product Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-outfit font-bold text-[#08425D]">
                  {editingId ? 'Edit Product' : 'Add New Product'}
                </h2>
                <button
                  onClick={() => setShowForm(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Product Type Selector */}
                <div className="border-b pb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Product Type</label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        value="productCard"
                        checked={productType === 'productCard'}
                        onChange={(e) => setProductType(e.target.value as 'productCard' | 'productFeatures')}
                        className="mr-2"
                      />
                      <span className="text-sm">Product Card</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        value="productFeatures"
                        checked={productType === 'productFeatures'}
                        onChange={(e) => setProductType(e.target.value as 'productCard' | 'productFeatures')}
                        className="mr-2"
                      />
                      <span className="text-sm">Product Features</span>
                    </label>
                  </div>
                </div>

                {/* Category - First Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    value={formData.category || ''}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#14A4E9] text-black"
                    required
                  >
                    <option value="">Select Category</option>
                    <option value="SMD Screens indoor">SMD Screens indoor</option>
                    <option value="SMD Screens outdoor">SMD Screens outdoor</option>
                    <option value="COB led display">COB led display</option>
                    <option value="Digital standee">Digital standee</option>
                    <option value="Digital podium">Digital podium</option>
                    <option value="samsung display">samsung display</option>
                    <option value="phillips display">phillips display</option>
                  </select>
                </div>

                {/* Subcategory - Second Field */}
                {availableSubcategories.length > 0 && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Sub Category</label>
                    <select
                      value={formData.subcategory || ''}
                      onChange={(e) => setFormData({ ...formData, subcategory: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#14A4E9] text-black"
                      required
                    >
                      <option value="">Select Sub Category</option>
                      {availableSubcategories.map((subcat) => (
                        <option key={subcat} value={subcat}>
                          {subcat}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                
                {/* Image Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Product Image</label>
                  <div className="space-y-2">
                    <input
                      type="file"
                      accept=".png,.jpg,.jpeg"
                      onChange={handleImageUpload}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#14A4E9] text-black"
                      disabled={uploading}
                    />
                    <p className="text-xs text-gray-500">Allowed formats: PNG, JPG, JPEG (Max 5MB)</p>
                    {uploading && <p className="text-sm text-blue-600">Uploading...</p>}
                    {uploadedImage && (
                      <div className="mt-2">
                        <img 
                          src={uploadedImage} 
                          alt="Preview" 
                          className="w-32 h-32 object-cover rounded-lg border"
                        />
                        <p className="text-xs text-gray-600 mt-1">{uploadedImage}</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Product Features Fields */}
                {productType === 'productFeatures' && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                      <input
                        type="text"
                        value={formData.title || ''}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#14A4E9] text-black"
                        placeholder="Product title"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Size (optional)</label>
                      <input
                        type="text"
                        value={formData.sizes || ''}
                        onChange={(e) => setFormData({ ...formData, sizes: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#14A4E9] text-black"
                        placeholder="Product size (e.g., 55&quot; 65&quot; 75&quot;)"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Features</label>
                      <textarea
                        value={formData.features ? formData.features.join('\n') : ''}
                        onChange={(e) => setFormData({ ...formData, features: e.target.value.split('\n') })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#14A4E9] text-black"
                        rows={4}
                        placeholder="Enter features (one per line)"
                        required
                      />
                    </div>
                  </>
                )}

                {/* Product Card Fields */}
                {productType === 'productCard' && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                      <input
                        type="text"
                        value={formData.title || ''}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#14A4E9] text-black"
                        placeholder="Product title"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Subtitle</label>
                      <input
                        type="text"
                        value={formData.subtitle || ''}
                        onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#14A4E9] text-black"
                        placeholder="Product subtitle"
                      />
                    </div>
                  </>
                )}

                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="bg-[#08425D] text-white px-6 py-2 rounded-lg font-outfit font-medium hover:bg-[#063247] transition-colors"
                  >
                    {editingId ? 'Update Product' : 'Create Product'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg font-outfit font-medium hover:bg-gray-400 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Product Details Form */}
        {showDetailsForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <h2 className="text-2xl font-outfit font-bold text-[#08425D] mb-6">
                {editingDetailsId ? 'Edit Product Details' : 'Add Product Details'}
              </h2>
              
              <form onSubmit={handleDetailsSubmit} className="space-y-4">
                {/* Banner Title */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Banner Title</label>
                  <input
                    type="text"
                    value={detailsFormData.bannerTitle}
                    onChange={(e) => setDetailsFormData({ ...detailsFormData, bannerTitle: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#14A4E9] text-black"
                    placeholder="Banner title"
                    required
                  />
                </div>

                {/* Banner Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Banner Description</label>
                  <textarea
                    value={detailsFormData.bannerDescription}
                    onChange={(e) => setDetailsFormData({ ...detailsFormData, bannerDescription: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#14A4E9] text-black"
                    placeholder="Banner description"
                    rows={3}
                    required
                  />
                </div>

                {/* Banner Image */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Banner Image</label>
                  <div className="space-y-2">
                    <input
                      type="file"
                      accept=".png,.jpg,.jpeg"
                      onChange={handleBannerImageUpload}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#14A4E9] text-black"
                      disabled={uploadingBanner}
                    />
                    <p className="text-xs text-gray-500">Allowed formats: PNG, JPG, JPEG (Max 5MB)</p>
                    {uploadingBanner && <p className="text-sm text-blue-600">Uploading...</p>}
                    {uploadedBannerImage && (
                      <div className="mt-2">
                        <img 
                          src={uploadedBannerImage} 
                          alt="Banner Preview" 
                          className="w-full h-32 object-cover rounded-lg border"
                        />
                        <p className="text-xs text-gray-600 mt-1">Banner image uploaded: {uploadedBannerImage}</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Product Image (Auto-fetched, read-only) */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Product Image</label>
                  <input
                    type="text"
                    value={detailsFormData.productImage}
                    readOnly
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-600"
                    placeholder="Product image (auto-fetched)"
                  />
                </div>

                {/* Product Title (Auto-fetched, read-only) */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Product Title</label>
                  <input
                    type="text"
                    value={detailsFormData.productTitle}
                    readOnly
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-600"
                    placeholder="Product title (auto-fetched)"
                  />
                </div>

                {/* Product Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Product Description</label>
                  <textarea
                    value={detailsFormData.productDescription}
                    onChange={(e) => setDetailsFormData({ ...detailsFormData, productDescription: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#14A4E9] text-black"
                    placeholder="Product description"
                    rows={4}
                    required
                  />
                </div>

                {/* Product Specification */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Product Specification</label>
                  <textarea
                    value={detailsFormData.productSpecification}
                    onChange={(e) => setDetailsFormData({ ...detailsFormData, productSpecification: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#14A4E9] text-black"
                    placeholder="Product specification"
                    rows={4}
                    required
                  />
                </div>

                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="bg-[#08425D] text-white px-6 py-2 rounded-lg font-outfit font-medium hover:bg-[#063247] transition-colors"
                  >
                    {editingDetailsId ? 'Update Details' : 'Save Details'}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowDetailsForm(false)
                      setSelectedProduct(null)
                      setEditingDetailsId(null)
                      setExistingProductDetails(null)
                    }}
                    className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg font-outfit font-medium hover:bg-gray-400 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Products List */}
        <div className="space-y-8">
          {Object.entries(
            products.reduce((acc: Record<string, Product[]>, product) => {
              const category = product.category || 'Uncategorized';
              if (!acc[category]) {
                acc[category] = [];
              }
              acc[category].push(product);
              return acc;
            }, {} as Record<string, Product[]>)
          ).map(([category, categoryProducts]: [string, Product[]]) => (
            <div key={category} className="bg-white border border-gray-200 rounded-lg p-6">
              <h2 className="text-2xl font-outfit font-bold text-[#08425D] mb-6 capitalize">
                {category} ({categoryProducts.length})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryProducts.map((product: Product) => (
                  <div key={product._id} className="bg-gray-50 border border-gray-200 rounded-lg p-4 shadow-sm">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-outfit font-semibold text-[#08425D]">{product.title}</h3>
                      <div className="flex gap-2 flex-wrap">
                        <button
                          onClick={() => handleEdit(product)}
                          className="text-blue-600 hover:text-blue-800 text-sm"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(product._id)}
                          className="text-red-600 hover:text-red-800 text-sm"
                        >
                          Delete
                        </button>
                        <button
                          onClick={() => handleEditProductDetails(product)}
                          className="text-purple-600 hover:text-purple-800 text-sm"
                        >
                          Edit Details
                        </button>
                        <button
                          onClick={() => handleDeleteProductDetails(product)}
                          className="text-orange-600 hover:text-orange-800 text-sm"
                        >
                          Delete Details
                        </button>
                        <button
                          onClick={() => handleAddProductDetails(product)}
                          className="text-green-600 hover:text-green-800 text-sm"
                        >
                          Add Details
                        </button>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-2">{product.category} - {product.subcategory}</p>
                    <p className="text-sm text-gray-700 mb-2">{product.description}</p>
                    {product.inches && <p className="text-sm text-gray-500 mb-2">Size: {product.inches}</p>}
                    
                                      </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
