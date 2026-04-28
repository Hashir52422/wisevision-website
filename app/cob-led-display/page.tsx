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

export default function CobLedDisplayPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products/by-category?category=COB%20led%20display');
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

  const cobledData = {
    bannerImage: "/images/COBBanner.jpeg",
    bannerAlt: "COB LED Banner",
    title: "COB LED Displays",
    description: "Explore our advanced Chip-on-Board (COB) displays, featuring micro-pitch technology, superior contrast ratios, and enhanced physical durability for elite corporate environments.",
    sectionHeading: "COB LED Displays",
    products: products.map(transformProduct),
  };

  return (
    <div className="min-h-screen">
      <Header />
      <Products {...cobledData} textColor='text-black' />
      <Footer />
    </div>
  );
}
