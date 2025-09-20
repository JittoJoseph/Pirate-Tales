"use client";

import { FaSearch } from "react-icons/fa";

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  onSearchChange,
  placeholder = "Search for treasures...",
}) => {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <FaSearch className="h-5 w-5 text-amber-600" />
      </div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full pl-10 pr-4 py-3 bg-parchment rounded-lg border-2 border-amber-600 focus:border-amber-800 focus:outline-none font-pirate-body text-lg placeholder-amber-700"
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchBar;
