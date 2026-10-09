"use client";

import Link from "next/link";
import { getAllProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { ArrowRight, Sparkles } from "lucide-react";

export default function NewArrivals() {
  const products = getAllProducts();

  return (
    <section id="products" className="py-24 bg-brand-cream/60 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-maroon/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-maroon/10 text-brand-maroon text-xs font-bold uppercase tracking-wider mb-2.5">
              <Sparkles size={13} className="text-brand-gold" />
              <span>Authentic Ayurvedic Essentials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-brand-maroon font-bold leading-tight">
              Featured Products & New Launches
            </h2>
            <p className="text-sm sm:text-base text-brand-foreground/75 mt-2 max-w-xl">
              Discover our latest chemical-free Burgundy Natural Herbal Hair Color alongside our signature Hair Oil.
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-maroon hover:text-brand-green transition-colors pb-1 border-b-2 border-brand-gold shrink-0 w-max"
          >
            <span>View Complete Collection</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
}
