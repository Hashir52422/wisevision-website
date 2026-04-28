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

export default function DigitalStandeePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products/by-category?category=Digital%20standee');
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
  const digitalStandeeProducts = products.filter(p => p.category === 'Digital standee');

  console.log('Digital Standee products subcategories:', products.map(product => product.subcategory));

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

  const digitalStandee = {
    bannerImage: "/images/StandeeBanner.jpeg",
    bannerAlt: "Digital Standee Banner",
    title: "Premium Digital Standees",
    description: "Supply and integrate premium indoor digital standees, featuring authorized Samsung touch and non-touch technology for high-traffic environments.",
    bannerTextColor: "text-black",
    navigationButtons: [
      { label: "All Products", targetId: "all" },
      { label: "Samsung Non-Touch Standee", targetId: "samsung-non-touch-digital-standee" },
      { label: "Samsung Touch Digital Standee", targetId: "samsung-touch-digital-standee" },
      { label: "Indoor SMD Digital Standee", targetId: "indoor-smd-digital-standee" },
    ],
    products: [], // Combined all products for "All Products" section
    productsS: digitalStandeeProducts.map(transformProduct),
  };

  return (
    <div className="min-h-screen">
      <Header />
      <Products {...digitalStandee} />
      <Footer />
    </div>
  );
}