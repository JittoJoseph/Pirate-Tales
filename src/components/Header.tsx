"use client";

import Link from "next/link";
import { useState } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import {
  GiPirateHat,
  GiTreasureMap,
  GiCompass,
  GiPirateCaptain,
  GiBarrel,
  GiAnchor,
} from "react-icons/gi";
import { useCart } from "@/context/CartContext";

const Header = () => {
  const { getItemCount } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const categories = [
    { name: "Weapons", icon: GiAnchor, href: "/?category=Weapons" },
    { name: "Treasure", icon: GiTreasureMap, href: "/?category=Treasure" },
    { name: "Navigation", icon: GiCompass, href: "/?category=Navigation" },
    { name: "Apparel", icon: GiPirateCaptain, href: "/?category=Apparel" },
    { name: "Provisions", icon: GiBarrel, href: "/?category=Provisions" },
  ];

  return (
    <header className="bg-amber-900 shadow-lg border-b-4 border-amber-600">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <GiPirateHat className="text-4xl text-amber-200 group-hover:text-amber-100 transition-colors" />
            <div>
              <h1 className="font-pirate-title text-2xl lg:text-3xl text-amber-100">
                The Captain's
              </h1>
              <p className="font-pirate-title text-xl lg:text-2xl text-amber-200 -mt-1">
                Treasure Shop
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link
              href="/?category=All"
              className="text-amber-100 hover:text-amber-200 font-pirate-body text-lg transition-colors"
            >
              All Treasures
            </Link>
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Link
                  key={category.name}
                  href={category.href}
                  className="flex items-center space-x-1 text-amber-100 hover:text-amber-200 font-pirate-body transition-colors"
                >
                  <IconComponent className="text-lg" />
                  <span className="text-sm">{category.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-amber-100 hover:text-amber-200 transition-colors"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Cart */}
          <Link
            href="/cart"
            className="relative flex items-center space-x-2 bg-red-800 hover:bg-red-700 text-amber-100 px-4 py-2 rounded-md transition-colors font-pirate-body"
          >
            <FaShoppingCart />
            <span className="hidden sm:inline">Cart</span>
            {getItemCount() > 0 && (
              <span className="absolute -top-2 -right-2 bg-amber-400 text-red-900 text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
                {getItemCount()}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-amber-600">
            <nav className="flex flex-col space-y-3 pt-4">
              <Link
                href="/?category=All"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-amber-100 hover:text-amber-200 font-pirate-body text-lg transition-colors"
              >
                All Treasures
              </Link>
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <Link
                    key={category.name}
                    href={category.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center space-x-2 text-amber-100 hover:text-amber-200 font-pirate-body transition-colors"
                  >
                    <IconComponent className="text-lg" />
                    <span>{category.name}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
