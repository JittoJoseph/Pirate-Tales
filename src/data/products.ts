export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  featured: boolean;
  stock: number;
}

export const categories = [
  'All',
  'Weapons',
  'Treasure',
  'Navigation',
  'Apparel',
  'Provisions'
];

export const products: Product[] = [
  // Featured Products
  {
    id: '1',
    name: 'Captain\'s Cutlass',
    price: 299.99,
    description: 'A finely crafted cutlass with an ornate brass guard and weathered leather grip. Perfect for any self-respecting pirate captain.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
    category: 'Weapons',
    featured: true,
    stock: 5
  },
  {
    id: '2',
    name: 'Treasure Chest of Doubloons',
    price: 1299.99,
    description: 'An authentic wooden treasure chest filled with gleaming golden doubloons. The perfect centerpiece for any pirate\'s hoard.',
    image: 'https://images.unsplash.com/photo-1578068307019-d3e8c27d4e43?w=400&h=400&fit=crop',
    category: 'Treasure',
    featured: true,
    stock: 3
  },
  {
    id: '3',
    name: 'Navigator\'s Compass',
    price: 189.99,
    description: 'A precision brass compass that will guide you through the most treacherous waters. Trusted by captains across the seven seas.',
    image: 'https://images.unsplash.com/photo-1578068307027-c9653ad4b6c8?w=400&h=400&fit=crop',
    category: 'Navigation',
    featured: true,
    stock: 8
  },

  // Weapons
  {
    id: '4',
    name: 'Boarding Axe',
    price: 149.99,
    description: 'A versatile boarding axe for close-quarters combat. Features a razor-sharp blade and reinforced handle.',
    image: 'https://images.unsplash.com/photo-1578068307033-c9653ad4b6c8?w=400&h=400&fit=crop',
    category: 'Weapons',
    featured: false,
    stock: 12
  },
  {
    id: '5',
    name: 'Flintlock Pistol',
    price: 399.99,
    description: 'A reliable flintlock pistol with intricate engravings. One shot, make it count.',
    image: 'https://images.unsplash.com/photo-1578068307039-c9653ad4b6c8?w=400&h=400&fit=crop',
    category: 'Weapons',
    featured: false,
    stock: 6
  },

  // Treasure
  {
    id: '6',
    name: 'Pearl Necklace',
    price: 799.99,
    description: 'Lustrous pearls from the deepest ocean trenches, strung on the finest silk thread.',
    image: 'https://images.unsplash.com/photo-1578068307045-c9653ad4b6c8?w=400&h=400&fit=crop',
    category: 'Treasure',
    featured: false,
    stock: 4
  },
  {
    id: '7',
    name: 'Ruby Encrusted Goblet',
    price: 549.99,
    description: 'A magnificent golden goblet adorned with precious rubies. Fit for celebrating victory.',
    image: 'https://images.unsplash.com/photo-1578068307051-c9653ad4b6c8?w=400&h=400&fit=crop',
    category: 'Treasure',
    featured: false,
    stock: 7
  },

  // Navigation
  {
    id: '8',
    name: 'Spyglass',
    price: 229.99,
    description: 'Extend your vision across the horizon with this finely crafted brass spyglass.',
    image: 'https://images.unsplash.com/photo-1578068307057-c9653ad4b6c8?w=400&h=400&fit=crop',
    category: 'Navigation',
    featured: false,
    stock: 9
  },
  {
    id: '9',
    name: 'Ancient Map Collection',
    price: 159.99,
    description: 'A collection of weathered maps marking the locations of legendary treasures.',
    image: 'https://images.unsplash.com/photo-1578068307063-c9653ad4b6c8?w=400&h=400&fit=crop',
    category: 'Navigation',
    featured: false,
    stock: 15
  },

  // Apparel
  {
    id: '10',
    name: 'Captain\'s Tricorn Hat',
    price: 89.99,
    description: 'A classic tricorn hat with gold trim and feather plume. Command respect on deck.',
    image: 'https://images.unsplash.com/photo-1578068307069-c9653ad4b6c8?w=400&h=400&fit=crop',
    category: 'Apparel',
    featured: false,
    stock: 20
  },
  {
    id: '11',
    name: 'Leather Boots',
    price: 179.99,
    description: 'Sturdy leather boots designed for life at sea. Water-resistant and comfortable.',
    image: 'https://images.unsplash.com/photo-1578068307075-c9653ad4b6c8?w=400&h=400&fit=crop',
    category: 'Apparel',
    featured: false,
    stock: 25
  },

  // Provisions
  {
    id: '12',
    name: 'Rum Barrel',
    price: 99.99,
    description: 'Premium aged rum in an authentic oak barrel. Essential for any long voyage.',
    image: 'https://images.unsplash.com/photo-1578068307081-c9653ad4b6c8?w=400&h=400&fit=crop',
    category: 'Provisions',
    featured: false,
    stock: 30
  },
  {
    id: '13',
    name: 'Hardtack Biscuits',
    price: 19.99,
    description: 'Long-lasting ship\'s biscuits that won\'t spoil during extended sea voyages.',
    image: 'https://images.unsplash.com/photo-1578068307087-c9653ad4b6c8?w=400&h=400&fit=crop',
    category: 'Provisions',
    featured: false,
    stock: 50
  }
];

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'All') return products;
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.category.toLowerCase().includes(lowercaseQuery)
  );
};