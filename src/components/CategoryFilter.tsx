"use client";

import { categories } from "@/data/products";

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-md font-pirate-body text-sm transition-all ${
            selectedCategory === category
              ? "bg-red-800 text-amber-100 shadow-lg"
              : "bg-parchment text-amber-800 hover:bg-amber-100 border-2 border-amber-600"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
