'use client'
import Image from "next/image";

interface ProductCardProps {
  image: string;
  title: string;
  subtitle: string;
}

export default function ProductCard({ image, title, subtitle }: ProductCardProps) {
  return (
    <div className="flex items-center justify-center p-1">
      <div className="product-card">
        <div className="card-inner">
          {/* Glowing background effect */}
          <div className="glow-effect" />

          {/* Product image area */}
          <div className="image-container">
            <Image
              src={image}
              alt={title}
              fill
              className="product-image"
              priority
            />
          </div>

        </div>

        {/* Text content below card */}
        <div className="text-content">
          <span className="category-label">{subtitle}</span>
          <h2 className="product-title">{title}</h2>
        </div>
      </div>

      <style jsx>{`
        .product-card {
          width: 100%;
          max-width: 400px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 9px;
          background: #ffffff;
          border-radius: 28px;
          padding: 8px 8px 12px;
          box-shadow:
            0 4px 6px rgba(0, 0, 0, 0.05),
            0 10px 40px rgba(0, 0, 0, 0.08);
        }

        .card-inner {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          border-radius: 18px;
          overflow: hidden;
          background: #ffffff;
        }

        .glow-effect {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            ellipse at 50% 55%,
            rgba(30, 90, 200, 0.35) 0%,
            transparent 70%
          );
          z-index: 1;
        }

        .image-container {
          position: absolute;
          /* Adjust these values to position/size your image within the card */
          top: 5%;
          left: 5%;
          right: 5%;
          bottom: 5%;
          z-index: 2;
          border-radius: 4px;
          overflow: hidden;
        }

        .product-image {
          object-fit: contain;
          object-position: center;
        }

    

        .text-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
        }

        .category-label {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 14px;
          font-weight: 400;
          color: #9ca3af;
          letter-spacing: 0.02em;
        }

        .product-title {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 22px;
          font-weight: 700;
          color: #111827;
          letter-spacing: -0.02em;
          margin: 0;
        }
      `}</style>
    </div>
  );
}