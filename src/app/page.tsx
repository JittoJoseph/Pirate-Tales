"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import SearchBar from "@/components/SearchBar";
import CategoryFilter from "@/components/CategoryFilter";
import ProductCard from "@/components/ProductCard";
import {
  products,
  getFeaturedProducts,
  getProductsByCategory,
  searchProducts,
} from "@/data/products";
import { GiTreasureMap, GiPirateSkull } from "react-icons/gi";

function HomeContent() {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Handle URL category parameter
  useEffect(() => {
    const categoryFromUrl = searchParams.get("category");
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
      setSearchQuery(""); // Clear search when navigating via category
    }
  }, [searchParams]);

  const featuredProducts = getFeaturedProducts();

  const filteredProducts = useMemo(() => {
    let filtered = products;

    if (searchQuery.trim()) {
      filtered = searchProducts(searchQuery);
    } else {
      filtered = getProductsByCategory(selectedCategory);
    }

    return filtered;
  }, [searchQuery, selectedCategory]);

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      {/* Hero Section */}
      <section className="text-center mb-12 bg-parchment rounded-lg p-8 shadow-lg">
        <div className="flex items-center justify-center mb-4">
          <GiPirateSkull className="text-6xl text-red-800 mr-4" />
          <div>
            <h1 className="font-pirate-title text-5xl lg:text-7xl text-red-900">
              Welcome Aboard!
            </h1>
            <p className="font-pirate-body text-xl lg:text-2xl text-amber-800 mt-2">
              Discover the finest treasures of the seven seas
            </p>
          </div>
          <GiTreasureMap className="text-6xl text-amber-600 ml-4" />
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="mb-8 space-y-6">
        <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
        {!searchQuery && (
          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        )}
      </section>

      {/* Featured Products Section */}
      {!searchQuery && selectedCategory === "All" && (
        <section className="mb-12">
          <h2 className="font-pirate-title text-4xl text-amber-200 text-center mb-8">
            Captain&apos;s Featured Treasures
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}

      {/* All Products Section */}
      <section>
        <h2 className="font-pirate-title text-4xl text-amber-200 text-center mb-8">
          {searchQuery
            ? `Search Results for "${searchQuery}"`
            : selectedCategory === "All"
            ? "All Treasures"
            : `${selectedCategory} Collection`}
        </h2>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <GiPirateSkull className="text-6xl text-amber-600 mx-auto mb-4" />
            <p className="font-pirate-body text-xl text-amber-300">
              No treasures found, matey! Try a different search or category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense
      fallback={
        <div className="container mx-auto px-4 py-8 min-h-screen">
          <div className="text-center">
            <GiPirateSkull className="text-6xl text-amber-600 mx-auto mb-4 animate-spin" />
            <p className="font-pirate-body text-xl text-amber-300">
              Loading treasures...
            </p>
          </div>
        </div>
      }
    >
      <HomeContent />
    </Suspense>
  );
}
