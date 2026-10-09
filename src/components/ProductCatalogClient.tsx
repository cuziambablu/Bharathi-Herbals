"use client";

import { useState, useMemo } from "react";
import { Product } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Search, Filter, Sparkles } from "lucide-react";

interface ProductCatalogClientProps {
  initialProducts: Product[];
}

export default function ProductCatalogClient({ initialProducts }: ProductCatalogClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Natural Hair Color", "Hair Growth & Care"];

  const filteredProducts = useMemo(() => {
    return initialProducts.filter((product) => {
      const matchesCategory =
        selectedCategory === "All" ||
        product.category.toLowerCase() === selectedCategory.toLowerCase();

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        product.name.toLowerCase().includes(q) ||
        product.shortName.toLowerCase().includes(q) ||
        product.category.toLowerCase().includes(q) ||
        product.description.toLowerCase().includes(q) ||
        product.highlights.some((h) => h.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [initialProducts, searchQuery, selectedCategory]);

  return (
    <div className="bg-brand-cream/30 min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/20 text-brand-maroon text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles size={14} className="text-brand-gold" />
            <span>Pure Botanical Formulas</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-brand-maroon font-bold leading-tight">
            Our Herbal Collection
          </h1>
          <p className="text-sm sm:text-base text-brand-foreground/75 mt-3">
            Crafted according to authentic Ayurvedic traditions. Explore our natural hair color and nourishing oils.
          </p>
          <div className="w-24 h-1 bg-brand-gold mt-6 mx-auto rounded-full opacity-60" />
        </div>

        {/* Search & Category Filter Toolbar */}
        <div className="bg-white p-4 sm:p-5 rounded-3xl border border-brand-gold/30 shadow-md max-w-4xl mx-auto mb-12 flex flex-col md:flex-row gap-4 items-center justify-between">
          
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Burgundy, hair color, oil..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-brand-beige bg-brand-cream/30 text-sm focus:outline-none focus:border-brand-maroon text-brand-foreground placeholder:text-stone-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-600"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto scrollbar-none pb-1 md:pb-0">
            <Filter size={16} className="text-brand-gold hidden sm:block shrink-0 mr-1" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-brand-maroon text-brand-gold shadow-md"
                    : "bg-brand-beige/40 text-brand-foreground/70 hover:bg-brand-beige"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-brand-beige max-w-xl mx-auto p-8 shadow-sm">
            <h3 className="font-serif text-2xl text-brand-maroon font-bold mb-2">
              No matching products found
            </h3>
            <p className="text-sm text-brand-foreground/70 mb-6">
              Try adjusting your search terms or category filter to find what you're looking for.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="px-6 py-2.5 rounded-xl bg-brand-maroon text-brand-gold font-bold text-sm shadow-md"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
