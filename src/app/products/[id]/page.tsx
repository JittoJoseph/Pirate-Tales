"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProductById } from "@/data/products";
import { useCart } from "@/context/CartContext";
import {
  FaShoppingCart,
  FaArrowLeft,
  FaMinus,
  FaPlus,
  FaCheck,
} from "react-icons/fa";
import { GiPirateSkull, GiTreasureMap } from "react-icons/gi";

export default function ProductDetail() {
  const params = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const product = getProductById(params.id as string);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8 min-h-screen flex items-center justify-center">
        <div className="text-center bg-parchment p-8 rounded-lg shadow-lg">
          <GiPirateSkull className="text-6xl text-red-800 mx-auto mb-4" />
          <h1 className="font-pirate-title text-4xl text-red-900 mb-4">
            Treasure Not Found!
          </h1>
          <p className="font-pirate-body text-xl text-amber-800 mb-6">
            This treasure has sailed away to uncharted waters.
          </p>
          <Link
            href="/"
            className="bg-red-800 hover:bg-red-700 text-amber-100 px-6 py-3 rounded-md font-pirate-body text-lg transition-colors inline-flex items-center space-x-2"
          >
            <FaArrowLeft />
            <span>Return to Shop</span>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      {/* Back Button */}
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center space-x-2 text-amber-200 hover:text-amber-100 font-pirate-body text-lg transition-colors"
        >
          <FaArrowLeft />
          <span>Back to Treasures</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="relative">
          <div className="bg-parchment rounded-lg overflow-hidden shadow-lg">
            <div className="relative h-96 lg:h-[500px]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              {product.featured && (
                <div className="absolute top-4 left-4 bg-red-800 text-amber-100 px-3 py-2 rounded-md font-bold font-pirate-title">
                  Featured Treasure
                </div>
              )}
              {product.stock <= 5 && product.stock > 0 && (
                <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-2 rounded-md font-bold">
                  Only {product.stock} left!
                </div>
              )}
              {product.stock === 0 && (
                <div className="absolute top-4 right-4 bg-gray-600 text-white px-3 py-2 rounded-md font-bold">
                  Out of Stock
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div className="bg-parchment rounded-lg p-8 shadow-lg">
            <div className="flex items-center space-x-3 mb-4">
              <GiTreasureMap className="text-3xl text-amber-600" />
              <span className="bg-amber-800 text-amber-100 px-3 py-1 rounded-md font-pirate-body text-sm">
                {product.category}
              </span>
            </div>

            <h1 className="font-pirate-title text-4xl lg:text-5xl text-red-900 mb-4">
              {product.name}
            </h1>

            <p className="font-pirate-body text-lg text-amber-800 mb-6 leading-relaxed">
              {product.description}
            </p>

            <div className="flex items-center justify-between mb-6">
              <span className="font-pirate-title text-4xl text-red-800">
                ${product.price.toFixed(2)}
              </span>
              <div className="text-right">
                <p className="font-pirate-body text-amber-800">
                  Stock: {product.stock} pieces
                </p>
              </div>
            </div>

            {product.stock > 0 && (
              <div className="space-y-4">
                {/* Quantity Selector */}
                <div className="flex items-center space-x-4">
                  <span className="font-pirate-body text-lg text-amber-800">
                    Quantity:
                  </span>
                  <div className="flex items-center border-2 border-amber-600 rounded-md bg-white">
                    <button
                      onClick={decreaseQuantity}
                      disabled={quantity <= 1}
                      className="p-2 text-amber-800 hover:bg-amber-100 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <FaMinus />
                    </button>
                    <span className="px-4 py-2 font-pirate-body text-lg text-amber-800 min-w-[60px] text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={increaseQuantity}
                      disabled={quantity >= product.stock}
                      className="p-2 text-amber-800 hover:bg-amber-100 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={handleAddToCart}
                  className={`w-full py-4 px-6 rounded-md font-pirate-body text-lg font-bold transition-all transform hover:scale-105 flex items-center justify-center space-x-3 ${
                    addedToCart
                      ? "bg-green-600 text-white"
                      : "bg-red-800 hover:bg-red-700 text-amber-100"
                  }`}
                >
                  <FaShoppingCart />
                  <span>
                    {addedToCart ? "Added to Cart!" : `Add ${quantity} to Cart`}
                  </span>
                </button>

                <p className="text-center font-pirate-body text-amber-800">
                  Total: ${(product.price * quantity).toFixed(2)}
                </p>
              </div>
            )}

            {product.stock === 0 && (
              <div className="text-center py-6">
                <GiPirateSkull className="text-4xl text-gray-600 mx-auto mb-2" />
                <p className="font-pirate-body text-xl text-gray-600">
                  This treasure is currently out of stock
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
