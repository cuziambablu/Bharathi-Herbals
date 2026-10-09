"use client";

import React from "react";
import Link from "next/link";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, Star, ArrowRight } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart, buyNow } = useCart();

  return (
    <div className="group bg-white rounded-2xl border border-brand-gold/30 hover:border-brand-gold shadow-md hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden relative">
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-3 left-3 z-20">
          <span
            className={`px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase shadow-md ${
              product.badge === "NEW LAUNCH"
                ? "bg-brand-maroon text-brand-gold border border-brand-gold/40"
                : "bg-brand-green text-brand-cream border border-brand-green/30"
            }`}
          >
            {product.badge}
          </span>
        </div>
      )}

      {/* Product Image Link */}
      <Link
        href={`/products/${product.slug}`}
        className="relative block aspect-square p-5 bg-brand-cream/60 overflow-hidden cursor-pointer flex items-center justify-center border-b border-brand-beige"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-brand-maroon/0 group-hover:bg-brand-maroon/5 transition-colors duration-300" />
      </Link>

      {/* Card Info */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Brand */}
          <span className="block text-xs font-semibold text-brand-gold uppercase tracking-widest font-sans">
            {product.brand}
          </span>

          {/* Product Name */}
          <Link
            href={`/products/${product.slug}`}
            className="block mt-1 font-serif text-lg md:text-xl font-bold text-brand-maroon hover:text-brand-green transition-colors leading-snug line-clamp-2"
          >
            {product.shortName}
          </Link>

          {/* Weight & Rating */}
          <div className="flex items-center justify-between text-xs text-brand-foreground/60 mt-2">
            <span className="font-medium bg-brand-beige/50 px-2 py-0.5 rounded text-brand-maroon">
              {product.weightShort}
            </span>
            <div className="flex items-center gap-1 text-brand-gold">
              <Star size={13} fill="currentColor" />
              <span className="font-semibold text-brand-foreground/80">{product.rating}</span>
              <span className="text-stone-400">({product.reviewsCount})</span>
            </div>
          </div>
        </div>

        {/* Pricing & Actions */}
        <div className="pt-2 border-t border-brand-beige/60 space-y-3">
          <div className="flex items-baseline gap-2.5">
            <span className="font-serif text-2xl font-bold text-brand-maroon">
              ₹{product.price}
            </span>
            {product.originalPrice > product.price && (
              <>
                <span className="text-xs text-stone-400 line-through">
                  ₹{product.originalPrice}
                </span>
                <span className="text-[11px] font-semibold text-brand-green">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </span>
              </>
            )}
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1">
            <button
              onClick={() => addToCart(product, 1)}
              className="py-2.5 px-3 rounded-xl border-2 border-brand-gold/60 text-brand-maroon hover:bg-brand-gold hover:text-brand-maroon font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <ShoppingBag size={14} />
              <span>Add to Cart</span>
            </button>

            <button
              onClick={() => buyNow(product, 1)}
              className="py-2.5 px-3 rounded-xl bg-brand-maroon text-brand-gold hover:bg-brand-maroon/90 font-bold text-xs transition-all shadow-md flex items-center justify-center gap-1 cursor-pointer"
            >
              <span>Buy Now</span>
              <ArrowRight size={13} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
