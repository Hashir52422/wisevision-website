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

export default function PhillipsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products/by-category?category=phillips%20display');
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

  const phillipsData = {
    bannerImage: "/images/Philipsbanner.jpeg",
    bannerAlt: "Philips Banner",
    title: "Philips Visual Infrastructure",
    description: "Your trusted partner for Philips professional display technology. Delivering industry-leading interactive screens, specialized hospitality displays, and commercial digital signage for high-performance environments.",
    sectionHeading: "Interactive Touch Display",
    bannerTextColor: "text-white",
    logo: '/images/PhilipsLogo.png',
    navigationButtons: [
      { label: "All Products", targetId: "all" },
      { label: "Interactive Touch Display", targetId: "module" },
      { label: "Hospitality TV", targetId: "premium" },
    ],
    products: products.filter(product => product.subcategory !== 'Hospitality TV').map(transformProduct),
    productsS: products.filter(product => product.subcategory === 'Hospitality TV').map(transformProduct)
  };

  console.log('Phillips products subcategories:', products.map(product => product.subcategory));

  return (
    <div className="min-h-screen">
      <Header />
      <Products {...phillipsData} />
      <Footer />
    </div>
  );
}