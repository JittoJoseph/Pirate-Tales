"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { FaArrowLeft, FaMinus, FaPlus, FaTrash, FaShip } from "react-icons/fa";
import { GiPirateSkull, GiTreasureMap, GiGoldBar } from "react-icons/gi";

export default function Cart() {
  const { state, updateQuantity, removeFromCart, clearCart } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    updateQuantity(productId, newQuantity);
  };

  const handleCheckout = () => {
    setOrderPlaced(true);
    clearCart();
    setTimeout(() => {
      setOrderPlaced(false);
    }, 3000);
  };

  if (orderPlaced) {
    return (
      <div className="container mx-auto px-4 py-8 min-h-screen flex items-center justify-center">
        <div className="text-center bg-parchment p-8 rounded-lg shadow-lg max-w-md">
          <FaShip className="text-6xl text-green-600 mx-auto mb-4 animate-bounce" />
          <h1 className="font-pirate-title text-4xl text-red-900 mb-4">
            Order Placed!
          </h1>
          <p className="font-pirate-body text-lg text-amber-800 mb-6">
            Your treasures are sailing your way, matey!
          </p>
          <Link
            href="/"
            className="bg-red-800 hover:bg-red-700 text-amber-100 px-6 py-3 rounded-md font-pirate-body text-lg transition-colors inline-flex items-center space-x-2"
          >
            <GiTreasureMap />
            <span>Continue Shopping</span>
          </Link>
        </div>
      </div>
    );
  }

  if (state.items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 min-h-screen">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-amber-200 hover:text-amber-100 font-pirate-body text-lg transition-colors"
          >
            <FaArrowLeft />
            <span>Back to Shop</span>
          </Link>
        </div>

        <div className="text-center bg-parchment p-12 rounded-lg shadow-lg">
          <GiPirateSkull className="text-6xl text-amber-600 mx-auto mb-4" />
          <h1 className="font-pirate-title text-4xl text-red-900 mb-4">
            Your Cart is Empty
          </h1>
          <p className="font-pirate-body text-xl text-amber-800 mb-8">
            No treasures in your hold yet, captain! Time to go plundering.
          </p>
          <Link
            href="/"
            className="bg-red-800 hover:bg-red-700 text-amber-100 px-6 py-3 rounded-md font-pirate-body text-lg transition-colors inline-flex items-center space-x-2"
          >
            <GiTreasureMap />
            <span>Start Shopping</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <Link
          href="/"
          className="inline-flex items-center space-x-2 text-amber-200 hover:text-amber-100 font-pirate-body text-lg transition-colors"
        >
          <FaArrowLeft />
          <span>Continue Shopping</span>
        </Link>

        <div className="text-center">
          <h1 className="font-pirate-title text-4xl lg:text-5xl text-amber-200 flex items-center space-x-3">
            <GiGoldBar />
            <span>Your Treasure Chest</span>
            <GiGoldBar />
          </h1>
        </div>

        <button
          onClick={clearCart}
          className="text-red-400 hover:text-red-300 font-pirate-body text-lg transition-colors"
        >
          Clear All
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {state.items.map((item) => (
            <div
              key={item.product.id}
              className="bg-parchment rounded-lg p-6 shadow-lg"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                {/* Product Image */}
                <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                  <Image
                    src={item.product.image}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>

                {/* Product Info */}
                <div className="flex-1 min-w-0">
                  <Link
                    href={`/products/${item.product.id}`}
                    className="font-pirate-title text-xl text-red-900 hover:text-red-700 transition-colors"
                  >
                    {item.product.name}
                  </Link>
                  <p className="font-pirate-body text-amber-800 text-sm mt-1">
                    {item.product.category}
                  </p>
                  <p className="font-pirate-title text-lg text-red-800 mt-2">
                    ${item.product.price.toFixed(2)} each
                  </p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center space-x-3">
                  <div className="flex items-center border-2 border-amber-600 rounded-md bg-white">
                    <button
                      onClick={() =>
                        handleQuantityChange(item.product.id, item.quantity - 1)
                      }
                      className="p-2 text-amber-800 hover:bg-amber-100"
                    >
                      <FaMinus className="text-sm" />
                    </button>
                    <span className="px-3 py-2 font-pirate-body text-amber-800 min-w-[50px] text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        handleQuantityChange(item.product.id, item.quantity + 1)
                      }
                      disabled={item.quantity >= item.product.stock}
                      className="p-2 text-amber-800 hover:bg-amber-100 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <FaPlus className="text-sm" />
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="text-red-600 hover:text-red-500 p-2"
                  >
                    <FaTrash />
                  </button>
                </div>

                {/* Subtotal */}
                <div className="text-right">
                  <p className="font-pirate-title text-xl text-red-800">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-parchment rounded-lg p-6 shadow-lg sticky top-4">
            <h2 className="font-pirate-title text-2xl text-red-900 mb-6 text-center">
              Order Summary
            </h2>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between font-pirate-body text-amber-800">
                <span>
                  Subtotal (
                  {state.items.reduce((sum, item) => sum + item.quantity, 0)}{" "}
                  items):
                </span>
                <span>${state.total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-pirate-body text-amber-800">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between font-pirate-body text-amber-800">
                <span>Tax:</span>
                <span>${(state.total * 0.1).toFixed(2)}</span>
              </div>
              <hr className="border-amber-600" />
              <div className="flex justify-between font-pirate-title text-xl text-red-800">
                <span>Total:</span>
                <span>${(state.total * 1.1).toFixed(2)}</span>
              </div>
            </div>

            {!showCheckout ? (
              <button
                onClick={() => setShowCheckout(true)}
                className="w-full bg-red-800 hover:bg-red-700 text-amber-100 py-4 px-6 rounded-md font-pirate-body text-lg font-bold transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <FaShip />
                <span>Proceed to Checkout</span>
              </button>
            ) : (
              <div className="space-y-4">
                <div className="bg-amber-100 p-4 rounded-md border-2 border-amber-600">
                  <p className="font-pirate-body text-amber-800 text-center">
                    🏴‍☠️ This is a demo store 🏴‍☠️
                  </p>
                  <p className="font-pirate-body text-amber-800 text-center text-sm mt-1">
                    No real payment will be processed
                  </p>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full bg-green-600 hover:bg-green-500 text-white py-4 px-6 rounded-md font-pirate-body text-lg font-bold transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <FaShip />
                  <span>Place Order</span>
                </button>
                <button
                  onClick={() => setShowCheckout(false)}
                  className="w-full bg-gray-600 hover:bg-gray-500 text-white py-2 px-4 rounded-md font-pirate-body transition-colors"
                >
                  Back to Cart
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
