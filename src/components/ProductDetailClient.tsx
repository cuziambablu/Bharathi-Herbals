"use client";

import { useState } from "react";
import Link from "next/link";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ProductCard";
import {
  Star,
  Check,
  Plus,
  Minus,
  ShoppingBag,
  Zap,
  Truck,
  ShieldCheck,
  RefreshCw,
  Leaf,
  ChevronRight,
  Share2,
  Heart
} from "lucide-react";

interface ProductDetailClientProps {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductDetailClient({
  product,
  relatedProducts
}: ProductDetailClientProps) {
  const { addToCart, buyNow } = useCart();
  const [selectedImage, setSelectedImage] = useState(product.gallery[0] || product.image);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"description" | "ingredients" | "benefits" | "howToUse" | "details" | "shipping">("description");
  const [copiedLink, setCopiedLink] = useState(false);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="bg-brand-cream/40 min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-brand-foreground/60 mb-8 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-brand-maroon transition-colors">
            Home
          </Link>
          <ChevronRight size={12} />
          <Link href="/products" className="hover:text-brand-maroon transition-colors">
            Products
          </Link>
          <ChevronRight size={12} />
          <span className="text-brand-gold font-medium">{product.category}</span>
          <ChevronRight size={12} />
          <span className="text-brand-maroon font-semibold truncate max-w-xs sm:max-w-md">
            {product.shortName}
          </span>
        </nav>

        {/* HERO SECTION: Large Image Left, Product Details Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-start mb-20">
          
          {/* LEFT: Premium Product Image Gallery (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col-reverse sm:flex-row gap-4 items-center sm:items-start">
            
            {/* Gallery Thumbnails */}
            {product.gallery.length > 1 && (
              <div className="flex sm:flex-col gap-3 w-full sm:w-20 shrink-0 overflow-x-auto sm:overflow-y-auto pb-2 sm:pb-0">
                {product.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 transition-all p-1 bg-white cursor-pointer ${
                      selectedImage === img
                        ? "border-brand-maroon shadow-md scale-95"
                        : "border-brand-gold/30 hover:border-brand-gold opacity-80 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} view ${idx + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Main Product Showcase Image Container */}
            <div className="flex-1 w-full bg-white rounded-3xl p-6 sm:p-10 border-2 border-brand-gold/30 shadow-xl relative overflow-hidden flex items-center justify-center">
              {product.badge && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-brand-maroon text-brand-gold border border-brand-gold/40 shadow-md">
                    {product.badge}
                  </span>
                </div>
              )}

              <button
                onClick={handleShare}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-brand-cream border border-brand-gold/30 text-brand-maroon hover:bg-brand-gold/20 flex items-center justify-center transition-colors shadow-sm"
                title="Share link"
              >
                <Share2 size={16} />
              </button>

              {copiedLink && (
                <div className="absolute top-14 right-4 z-20 bg-brand-maroon text-brand-gold text-[11px] px-2.5 py-1 rounded-md shadow-md">
                  Link copied!
                </div>
              )}

              <div className="relative w-full max-w-[420px] aspect-[4/5] flex items-center justify-center">
                <img
                  src={selectedImage}
                  alt={product.name}
                  className="w-full h-full object-contain drop-shadow-2xl transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* RIGHT: Product Information (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            {/* Brand, Name, Category */}
            <div>
              <span className="text-xs font-bold text-brand-gold uppercase tracking-widest font-sans">
                {product.brand}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-4xl font-serif text-brand-maroon font-bold mt-1.5 leading-tight">
                {product.name}
              </h1>
              
              {/* Star Rating */}
              <div className="flex items-center gap-2 mt-3">
                <div className="flex text-brand-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <span className="text-sm font-bold text-brand-maroon">{product.rating}</span>
                <span className="text-xs text-stone-400">({product.reviewsCount} customer reviews)</span>
                <span className="mx-2 text-stone-300">•</span>
                <span className="text-xs font-semibold text-brand-green bg-brand-green/10 px-2 py-0.5 rounded">
                  In Stock ({product.stock} units)
                </span>
              </div>
            </div>

            {/* Price & Weight Box */}
            <div className="bg-white p-5 rounded-2xl border border-brand-beige shadow-sm space-y-2">
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-serif font-bold text-brand-maroon">
                  ₹{product.price}
                </span>
                {product.originalPrice > product.price && (
                  <>
                    <span className="text-lg text-stone-400 line-through">
                      ₹{product.originalPrice}
                    </span>
                    <span className="bg-brand-green/15 text-brand-green border border-brand-green/30 text-xs px-2.5 py-0.5 rounded-full font-bold">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </span>
                  </>
                )}
              </div>
              <div className="flex items-center justify-between text-xs text-brand-foreground/70 pt-1">
                <span className="font-semibold text-brand-maroon">
                  Net Weight: {product.weight}
                </span>
                <span className="text-stone-400">Inclusive of all taxes</span>
              </div>
            </div>

            {/* Quantity Stepper & Action Buttons */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-maroon">
                  Quantity:
                </span>
                <div className="flex items-center border-2 border-brand-gold/40 rounded-xl bg-white shadow-sm">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-10 h-10 flex items-center justify-center text-brand-maroon hover:bg-brand-beige transition-colors rounded-l-xl cursor-pointer"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={15} />
                  </button>
                  <span className="w-12 text-center font-bold text-brand-maroon text-base">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-10 h-10 flex items-center justify-center text-brand-maroon hover:bg-brand-beige transition-colors rounded-r-xl cursor-pointer"
                    aria-label="Increase quantity"
                  >
                    <Plus size={15} />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                <button
                  onClick={() => addToCart(product, quantity)}
                  className="w-full py-4 rounded-xl border-2 border-brand-maroon text-brand-maroon hover:bg-brand-maroon hover:text-brand-gold font-bold text-sm sm:text-base transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
                >
                  <ShoppingBag size={18} />
                  <span>ADD TO CART</span>
                </button>

                <button
                  onClick={() => buyNow(product, quantity)}
                  className="w-full py-4 rounded-xl bg-brand-maroon text-brand-gold hover:bg-brand-maroon/95 font-bold text-sm sm:text-base transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
                >
                  <Zap size={18} className="fill-brand-gold" />
                  <span>BUY NOW</span>
                </button>
              </div>
            </div>

            {/* Checkpoints Checklist */}
            <div className="bg-brand-beige/30 p-4 rounded-2xl border border-brand-gold/20 space-y-2.5">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-brand-maroon">
                <div className="w-5 h-5 rounded-full bg-brand-green/20 text-brand-green flex items-center justify-center shrink-0">
                  <Check size={12} strokeWidth={3} />
                </div>
                <span>100% Natural & Herbal</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-brand-maroon">
                <div className="w-5 h-5 rounded-full bg-brand-green/20 text-brand-green flex items-center justify-center shrink-0">
                  <Check size={12} strokeWidth={3} />
                </div>
                <span>No Ammonia</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-brand-maroon">
                <div className="w-5 h-5 rounded-full bg-brand-green/20 text-brand-green flex items-center justify-center shrink-0">
                  <Check size={12} strokeWidth={3} />
                </div>
                <span>No Harmful Chemicals</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-brand-maroon">
                <div className="w-5 h-5 rounded-full bg-brand-green/20 text-brand-green flex items-center justify-center shrink-0">
                  <Check size={12} strokeWidth={3} />
                </div>
                <span>Natural Hair Care</span>
              </div>
            </div>

            {/* Trust Assurances */}
            <div className="grid grid-cols-3 gap-2 text-center text-[11px] text-brand-foreground/70 pt-2 border-t border-brand-beige/60">
              <div className="p-2 bg-white/60 rounded-xl">
                <Truck size={18} className="mx-auto text-brand-gold mb-1" />
                <span className="font-semibold block text-brand-maroon">Pan-India</span>
                <span>Express Delivery</span>
              </div>
              <div className="p-2 bg-white/60 rounded-xl">
                <ShieldCheck size={18} className="mx-auto text-brand-gold mb-1" />
                <span className="font-semibold block text-brand-maroon">Authentic</span>
                <span>Since 2005</span>
              </div>
              <div className="p-2 bg-white/60 rounded-xl">
                <Leaf size={18} className="mx-auto text-brand-gold mb-1" />
                <span className="font-semibold block text-brand-maroon">Chemical Free</span>
                <span>Gentle Botanicals</span>
              </div>
            </div>

          </div>
        </div>

        {/* DETAILED INFORMATION TABS */}
        <div className="mb-20">
          <div className="flex border-b border-brand-beige overflow-x-auto scrollbar-none gap-2 sm:gap-4 mb-8">
            {[
              { id: "description", label: "Description" },
              { id: "benefits", label: "Key Benefits" },
              { id: "ingredients", label: "Ingredients" },
              { id: "howToUse", label: "How to Apply" },
              { id: "details", label: "Product Details" },
              { id: "shipping", label: "Shipping Info" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-3.5 px-4 font-serif text-sm sm:text-base font-bold whitespace-nowrap border-b-2 transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? "border-brand-maroon text-brand-maroon bg-white/40 rounded-t-xl"
                    : "border-transparent text-brand-foreground/60 hover:text-brand-maroon"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-brand-beige shadow-sm">
            {/* Description Tab */}
            {activeTab === "description" && (
              <div className="space-y-6 max-w-4xl">
                <h3 className="font-serif text-2xl text-brand-maroon font-bold">
                  About {product.name}
                </h3>
                <p className="text-brand-foreground/80 leading-relaxed text-base sm:text-lg">
                  {product.description}
                </p>

                <div className="pt-4">
                  <h4 className="font-serif text-lg font-bold text-brand-maroon mb-3">
                    Key Product Highlights:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {product.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-sm text-brand-foreground/85">
                        <div className="w-4 h-4 rounded-full bg-brand-gold/30 text-brand-maroon flex items-center justify-center shrink-0">
                          <Check size={10} strokeWidth={3} />
                        </div>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Key Benefits Tab */}
            {activeTab === "benefits" && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl text-brand-maroon font-bold mb-2">
                    Key Benefits of Bharathi Herbals Burgundy
                  </h3>
                  <p className="text-sm text-brand-foreground/70">
                    Formulated according to time-honored Ayurvedic wisdom to protect, nourish, and color your hair naturally.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
                  {product.benefits.map((b, i) => (
                    <div
                      key={i}
                      className="p-5 rounded-2xl bg-brand-cream/60 border border-brand-gold/20 hover:border-brand-gold/50 transition-colors space-y-2"
                    >
                      <div className="w-9 h-9 rounded-xl bg-brand-maroon/10 text-brand-maroon flex items-center justify-center font-bold">
                        <Leaf size={18} />
                      </div>
                      <h4 className="font-serif text-base font-bold text-brand-maroon">
                        {b.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-brand-foreground/75 leading-relaxed">
                        {b.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Ingredients Tab */}
            {activeTab === "ingredients" && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl text-brand-maroon font-bold mb-2">
                    Pure Botanical Ingredients
                  </h3>
                  <p className="text-sm text-brand-foreground/70">
                    Zero ammonia, zero metallic salts, and no harsh oxidizers. Only the purest plant-derived botanicals.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
                  {product.ingredients.map((ing, i) => (
                    <div
                      key={i}
                      className="bg-brand-cream/50 rounded-2xl overflow-hidden border border-brand-gold/20 hover:shadow-md transition-all flex flex-col"
                    >
                      {ing.image && (
                        <div className="aspect-[4/3] bg-white overflow-hidden p-2 flex items-center justify-center border-b border-brand-beige">
                          <img
                            src={ing.image}
                            alt={ing.name}
                            className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      )}
                      <div className="p-4 space-y-1.5 flex-1">
                        <h4 className="font-serif text-base font-bold text-brand-maroon">
                          {ing.name}
                        </h4>
                        <p className="text-xs text-brand-foreground/70 leading-relaxed">
                          {ing.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* How to Apply Tab */}
            {activeTab === "howToUse" && (
              <div className="space-y-6 max-w-3xl">
                <div>
                  <h3 className="font-serif text-2xl text-brand-maroon font-bold mb-2">
                    Step-by-Step Application Ritual
                  </h3>
                  <p className="text-sm text-brand-foreground/70">
                    Follow these simple steps for radiant Burgundy color payoff and deep botanical conditioning.
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  {product.howToApply.map((step, i) => (
                    <div
                      key={i}
                      className="flex gap-4 p-4 rounded-2xl bg-brand-cream/50 border border-brand-gold/20 items-start"
                    >
                      <div className="w-8 h-8 rounded-full bg-brand-maroon text-brand-gold font-bold text-xs flex items-center justify-center shrink-0">
                        {i + 1}
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-serif text-base font-bold text-brand-maroon">
                          {step.step}
                        </h4>
                        <p className="text-xs sm:text-sm text-brand-foreground/80 leading-relaxed">
                          {step.instruction}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Product Details Tab */}
            {activeTab === "details" && (
              <div className="space-y-6 max-w-2xl">
                <h3 className="font-serif text-2xl text-brand-maroon font-bold">
                  Technical Specifications
                </h3>
                <div className="divide-y divide-brand-beige border border-brand-beige rounded-2xl overflow-hidden bg-white">
                  {product.details.map((d, i) => (
                    <div key={i} className="p-3.5 flex justify-between text-xs sm:text-sm">
                      <span className="font-medium text-brand-foreground/60">{d.label}</span>
                      <span className="font-bold text-brand-maroon text-right">{d.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Shipping Information Tab */}
            {activeTab === "shipping" && (
              <div className="space-y-6 max-w-3xl">
                <h3 className="font-serif text-2xl text-brand-maroon font-bold">
                  Pan-India Shipping & Order Fulfillment
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {product.shippingInfo.map((s, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-brand-cream/60 border border-brand-gold/20 space-y-1.5">
                      <h4 className="font-serif text-base font-bold text-brand-maroon">
                        {s.title}
                      </h4>
                      <p className="text-xs text-brand-foreground/75 leading-relaxed">
                        {s.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CUSTOMER REVIEWS SECTION */}
        <section className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold text-brand-gold uppercase tracking-widest">
                Real Customer Feedback
              </span>
              <h2 className="text-3xl font-serif text-brand-maroon font-bold mt-1">
                Customer Reviews
              </h2>
            </div>
            <div className="flex items-center gap-3 bg-white px-5 py-2.5 rounded-2xl border border-brand-beige shadow-sm">
              <span className="text-2xl font-serif font-bold text-brand-maroon">
                {product.rating}
              </span>
              <div className="flex text-brand-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <span className="text-xs text-stone-400">
                Based on {product.reviewsCount} reviews
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {product.reviews.map((rev) => (
              <div
                key={rev.id}
                className="bg-white p-6 rounded-3xl border border-brand-beige shadow-sm space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex text-brand-gold">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" />
                      ))}
                    </div>
                    <span className="text-[11px] text-stone-400">{rev.date}</span>
                  </div>

                  <h4 className="font-serif text-base font-bold text-brand-maroon leading-snug">
                    "{rev.title}"
                  </h4>

                  <p className="text-xs sm:text-sm text-brand-foreground/75 leading-relaxed">
                    {rev.comment}
                  </p>
                </div>

                <div className="pt-3 border-t border-brand-beige/60 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-brand-maroon block">{rev.author}</span>
                    <span className="text-stone-400 text-[11px]">{rev.location}</span>
                  </div>
                  {rev.verified && (
                    <span className="text-brand-green font-semibold text-[11px] flex items-center gap-1">
                      <Check size={12} /> Verified Buyer
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* RELATED BHARATHI HERBALS PRODUCTS */}
        {relatedProducts.length > 0 && (
          <section className="pt-8 border-t border-brand-beige">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-xs font-bold text-brand-gold uppercase tracking-widest">
                Complete Ayurvedic Hair Ritual
              </span>
              <h2 className="text-3xl font-serif text-brand-maroon font-bold mt-1">
                Related Bharathi Herbals Products
              </h2>
              <p className="text-sm text-brand-foreground/70 mt-2">
                Pair your natural hair color with our signature hair growth oil for maximum strength and shine.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {relatedProducts.map((relProduct) => (
                <ProductCard key={relProduct.id} product={relProduct} />
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  );
}
