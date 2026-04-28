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

export default function SamsungPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products/by-category?category=samsung%20display');
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

  // Transform products to match the expected format
  const transformProduct = (product: Product) => ({
    image: product.image,
    title: product.title,
    subtitle: product.subtitle || '',
    href: product.href || '#',
    id: product._id,
    ...(product.name && { name: product.name }),
    ...(product.features && { features: product.features }),
    ...(product.sizes && { sizes: [product.sizes] }) // Convert string to array
  });

  const SamsungData = {
    bannerImage: "/images/SamsungBanner.png",
    bannerAlt: "Samsung Banner",
    title: "Samsung Visual Infrastructure",
    description: "Your trusted partner for Samsung commercial visual technology. Delivering industry-leading video walls, interactive collaborative screens, and corporate monitors for high-performance workspaces.",
    sectionHeading: "Video Walls",
    sectionHeadingP: "Digital Signage",
    sectionHeadingR: "Monitors",
    // Color control props
    bannerTextColor: "text-white",
    // Brand logo (empty as requested - user will add image)
    logo: '/images/SamsungLogo.png',
    // Navigation buttons
    navigationButtons: [
      { label: "All Products", targetId: "all" },
      { label: "Video Walls", targetId: "module" },
      { label: "Digital Signage", targetId: "premium" },
      { label: "Hospitality TV", targetId: "interactive-screen" },
      { label: "Touch Screen", targetId: "touch-screen" },
      { label: "Interactive Screen", targetId: "hospitality-tv" },
      { label: "Monitors", targetId: "rental" }
    ],
    products: products.filter(product => product.subcategory === 'Video walls').map(transformProduct),
    productsP: products.filter(product => product.subcategory === 'Digital Signage').map(transformProduct),
    productsS: products.filter(product => 
      ['Interactive screens', 'Touch screens', 'Hospitality screens'].includes(product.subcategory || '')
    ).map(transformProduct),
    productsR: products.filter(product => product.subcategory === 'Monitors').map(transformProduct)
  };

  return (
    <div className="min-h-screen">
      <Header />
      <Products {...SamsungData} />
      <Footer />
    </div>
  );
}