'use client'
import Header from '@/components/Landingpage/Header';
import Footer from '@/components/Landingpage/Footer';
import Products from '@/components/Products/productsView';
import { useState, useEffect } from 'react';

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

export default function OutdoorScreensPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products/by-category?category=SMD%20Screens%20outdoor');
        const data = await response.json();
        setProducts(data.products || []);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter products by subcategory
  const moduleSeriesProducts = products.filter(p => p.subcategory === 'Module Series');
  const premiumSeriesProducts = products.filter(p => p.subcategory === 'Premium Series');
  const rentalSeriesProducts = products.filter(p => p.subcategory === 'Rental Series');

  // Transform products to match the expected format
  const transformProduct = (product: Product) => ({
    image: product.image,
    title: product.title,
    subtitle: product.subtitle || '',
    href: product.href || '#',
    ...(product.name && { name: product.name }),
    ...(product.features && { features: product.features }),
    ...(product.sizes && { sizes: [product.sizes] }) // Convert string to array
  });

  const outdoorSMDData = {
    bannerImage: "/images/Productbanner.jpeg",
    bannerAlt: "Outdoor SMDs Banner",
    title: "Outdoor SMDs",
    description: "View our full range of rugged, high-performance outdoor displays, including digital billboards and all-weather pole streamer technology.",
    sectionHeading: "Module Series",
    sectionHeadingP: "Premium Series",
    sectionHeadingR: "Rental Series",
    products: moduleSeriesProducts.map(transformProduct),
    productsP: premiumSeriesProducts.map(transformProduct),
    productsR: rentalSeriesProducts.map(transformProduct),
  };

  return (
    <div className="min-h-screen">
      <Header />
      <Products {...outdoorSMDData}
        navigationButtons={[
        {label: "All Products", targetId: "all"},
        {label: "Module Series", targetId: "module"}, 
        {label: "Premium Series", targetId: "premium"},
        {label: "Rental Series", targetId: "rental"}
      ]} />
      <Footer />
    </div>
  );
}