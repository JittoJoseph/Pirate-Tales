"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Product } from "@/data/products";
import { FaShoppingCart, FaCheck } from "react-icons/fa";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
  showAddToCart?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  showAddToCart = true,
}) => {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setIsAdding(true);
    addToCart(product);

    // Reset the button state after a short delay
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };

  return (
    <div className="bg-parchment rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <Link href={`/products/${product.id}`}>
        <div className="relative h-64 w-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {product.featured && (
            <div className="absolute top-2 left-2 bg-red-800 text-amber-100 px-2 py-1 rounded-md text-xs font-bold font-pirate-title">
              Featured
            </div>
          )}
          {product.stock <= 5 && product.stock > 0 && (
            <div className="absolute top-2 right-2 bg-amber-600 text-white px-2 py-1 rounded-md text-xs font-bold">
              Low Stock
            </div>
          )}
          {product.stock === 0 && (
            <div className="absolute top-2 right-2 bg-gray-600 text-white px-2 py-1 rounded-md text-xs font-bold">
              Out of Stock
            </div>
          )}
        </div>

        <div className="p-4">
          <h3 className="font-pirate-title text-xl text-red-900 mb-2 line-clamp-1">
            {product.name}
          </h3>
          <p className="text-amber-800 font-pirate-body text-sm mb-3 line-clamp-2">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="font-pirate-title text-2xl text-red-800">
              ${product.price.toFixed(2)}
            </span>
            {showAddToCart && product.stock > 0 && (
              <button
                onClick={handleAddToCart}
                disabled={isAdding}
                className={`px-3 py-2 rounded-md flex items-center space-x-2 transition-all duration-300 font-pirate-body text-sm ${
                  isAdding
                    ? "bg-green-600 text-white"
                    : "bg-red-800 hover:bg-red-700 text-amber-100"
                } ${isAdding ? "scale-95" : "hover:scale-105"}`}
              >
                {isAdding ? (
                  <>
                    <FaCheck className="text-sm" />
                    <span>Added!</span>
                  </>
                ) : (
                  <>
                    <FaShoppingCart className="text-sm" />
                    <span>Add to Cart</span>
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
