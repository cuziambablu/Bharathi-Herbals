"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, CheckCircle2, ShoppingBag, ShieldCheck } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { getProductBySlug } from "@/data/products";

export default function NewArrivalsBanner() {
  const { addToCart } = useCart();

  const fairGlow = getProductBySlug("fair-and-glow-soap");
  const multaniMitti = getProductBySlug("multani-mitti-soap");

  const handleQuickAdd = (product: any, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (product) {
      addToCart(product, 1);
    }
  };

  return (
    <section id="new-arrivals" className="py-16 md:py-24 bg-gradient-to-b from-brand-beige/40 via-brand-cream to-brand-beige/30 relative overflow-hidden scroll-mt-24">
      {/* Decorative luxury glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-6xl h-96 bg-radial from-brand-gold/15 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Banner Card Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-maroon text-brand-gold text-xs sm:text-sm font-bold uppercase tracking-widest mb-4 shadow-sm border border-brand-gold/30">
            <Sparkles size={14} className="text-brand-gold animate-pulse" />
            <span>Grand Launch • New Arrivals</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-brand-maroon font-bold leading-tight">
            Introducing Pure Herbal Soaps
          </h2>

          <p className="text-base sm:text-lg text-brand-foreground/80 mt-3 font-sans">
            Handcrafted natural skincare for your daily routine. Experience the gentle power of traditional Indian herbs, pure extracts, and rich coconut-oil base for radiant, refreshed skin.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mt-5 text-xs sm:text-sm font-medium text-brand-foreground/85">
            <span className="flex items-center gap-1.5 text-brand-green font-semibold">
              <CheckCircle2 size={16} /> 100% Herbal Formula
            </span>
            <span className="flex items-center gap-1.5 text-brand-green font-semibold">
              <CheckCircle2 size={16} /> No Harsh Chemicals
            </span>
            <span className="flex items-center gap-1.5 text-brand-green font-semibold">
              <CheckCircle2 size={16} /> Grade-1 Cleansing
            </span>
            <span className="flex items-center gap-1.5 text-brand-green font-semibold">
              <ShieldCheck size={16} /> ₹150 Only
            </span>
          </div>
        </div>

        {/* Feature Spotlight: 2-Column Hero Post for the New Soaps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto">
          
          {/* POST 1: Fair & Glow Soap */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border-2 border-brand-gold/30 shadow-[0_12px_40px_rgba(107,31,43,0.08)] hover:shadow-[0_20px_50px_rgba(107,31,43,0.16)] transition-all flex flex-col justify-between overflow-hidden"
          >
            {/* Background accent */}
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-amber-100 rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none" />

            <div>
              {/* Badges & Tag */}
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="px-3.5 py-1 bg-amber-700 text-white text-[11px] font-bold uppercase tracking-wider rounded-full shadow-sm">
                  ✨ NEW LAUNCH
                </span>
                <span className="text-xs font-semibold text-brand-green bg-brand-green/10 px-3 py-1 rounded-full">
                  Everyday Radiant Glow
                </span>
              </div>

              {/* Packshot Image Container */}
              <Link href="/products/fair-and-glow-soap" className="block relative aspect-[4/3] rounded-2xl bg-gradient-to-b from-amber-50/70 to-orange-50/40 p-4 mb-6 border border-amber-200/50 overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
                <Image
                  src="/fair-and-glow-soap.png"
                  alt="Bharathi Herbals Fair & Glow Soap"
                  fill
                  className="object-contain drop-shadow-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </Link>

              {/* Title & Description */}
              <div className="space-y-2">
                <div className="text-xs uppercase tracking-widest text-brand-gold font-bold">Bharathi Herbals</div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-maroon group-hover:text-amber-800 transition-colors">
                  Fair & Glow Herbal Soap
                </h3>
                <p className="text-sm text-brand-foreground/75 leading-relaxed">
                  Infused with pure Turmeric, Sandalwood, and natural botanical extracts to rejuvenate dull skin, wash away impurities, and restore an authentic natural glow every morning.
                </p>
              </div>

              {/* Key Highlights */}
              <div className="grid grid-cols-2 gap-2 my-5 text-xs text-brand-foreground/80">
                <div className="p-2.5 rounded-xl bg-amber-50/80 border border-amber-200/40">
                  <span className="font-bold text-brand-maroon block">Turmeric & Sandal</span>
                  <span>Pure Herbal Cleansing</span>
                </div>
                <div className="p-2.5 rounded-xl bg-amber-50/80 border border-amber-200/40">
                  <span className="font-bold text-brand-maroon block">100g Bar Pack</span>
                  <span>Gentle on all skin types</span>
                </div>
              </div>
            </div>

            {/* Price & Action Row */}
            <div className="pt-4 border-t border-brand-beige/50 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-baseline gap-2 self-start sm:self-auto">
                <span className="font-serif text-3xl font-bold text-brand-maroon">₹150</span>
                <span className="text-xs text-brand-foreground/60">incl. of all taxes</span>
              </div>

              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                {fairGlow && (
                  <button
                    onClick={(e) => handleQuickAdd(fairGlow, e)}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-brand-cream border border-brand-maroon text-brand-maroon font-bold text-sm hover:bg-brand-maroon hover:text-brand-gold transition-colors shadow-sm cursor-pointer"
                  >
                    <ShoppingBag size={16} />
                    <span>Add to Bag</span>
                  </button>
                )}
                <Link
                  href="/products/fair-and-glow-soap"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full bg-brand-maroon text-brand-gold font-bold text-sm hover:bg-brand-maroon/90 shadow-md transition-all hover:translate-x-0.5"
                >
                  <span>View Details</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* POST 2: Multani Mitti Soap */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border-2 border-brand-gold/30 shadow-[0_12px_40px_rgba(107,31,43,0.08)] hover:shadow-[0_20px_50px_rgba(107,31,43,0.16)] transition-all flex flex-col justify-between overflow-hidden"
          >
            {/* Background accent */}
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-emerald-100 rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none" />

            <div>
              {/* Badges & Tag */}
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="px-3.5 py-1 bg-emerald-800 text-white text-[11px] font-bold uppercase tracking-wider rounded-full shadow-sm">
                  ✨ NEW LAUNCH
                </span>
                <span className="text-xs font-semibold text-brand-green bg-brand-green/10 px-3 py-1 rounded-full">
                  Deep Pore Cleansing
                </span>
              </div>

              {/* Packshot Image Container */}
              <Link href="/products/multani-mitti-soap" className="block relative aspect-[4/3] rounded-2xl bg-gradient-to-b from-stone-50/80 to-emerald-50/40 p-4 mb-6 border border-stone-200/50 overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
                <Image
                  src="/multani-mitti-soap.png"
                  alt="Bharathi Herbals Multani Mitti Soap"
                  fill
                  className="object-contain drop-shadow-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </Link>

              {/* Title & Description */}
              <div className="space-y-2">
                <div className="text-xs uppercase tracking-widest text-brand-gold font-bold">Bharathi Herbals</div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-maroon group-hover:text-emerald-900 transition-colors">
                  Multani Mitti Herbal Soap
                </h3>
                <p className="text-sm text-brand-foreground/75 leading-relaxed">
                  Harnessing authentic Fuller&apos;s Earth clay and cooling botanical oils to absorb excess sebum, unclog pores, soothe breakouts, and maintain clean, oil-balanced skin.
                </p>
              </div>

              {/* Key Highlights */}
              <div className="grid grid-cols-2 gap-2 my-5 text-xs text-brand-foreground/80">
                <div className="p-2.5 rounded-xl bg-stone-50/80 border border-stone-200/40">
                  <span className="font-bold text-brand-maroon block">Fuller&apos;s Earth Clay</span>
                  <span>Absorbs Dirt & Oil</span>
                </div>
                <div className="p-2.5 rounded-xl bg-stone-50/80 border border-stone-200/40">
                  <span className="font-bold text-brand-maroon block">100g Bar Pack</span>
                  <span>Cooling & Refreshing</span>
                </div>
              </div>
            </div>

            {/* Price & Action Row */}
            <div className="pt-4 border-t border-brand-beige/50 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-baseline gap-2 self-start sm:self-auto">
                <span className="font-serif text-3xl font-bold text-brand-maroon">₹150</span>
                <span className="text-xs text-brand-foreground/60">incl. of all taxes</span>
              </div>

              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                {multaniMitti && (
                  <button
                    onClick={(e) => handleQuickAdd(multaniMitti, e)}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-brand-cream border border-brand-maroon text-brand-maroon font-bold text-sm hover:bg-brand-maroon hover:text-brand-gold transition-colors shadow-sm cursor-pointer"
                  >
                    <ShoppingBag size={16} />
                    <span>Add to Bag</span>
                  </button>
                )}
                <Link
                  href="/products/multani-mitti-soap"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full bg-brand-maroon text-brand-gold font-bold text-sm hover:bg-brand-maroon/90 shadow-md transition-all hover:translate-x-0.5"
                >
                  <span>View Details</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom Banner Strip with Direct WhatsApp Consultation & Catalog link */}
        <div className="mt-12 p-6 rounded-2xl bg-brand-maroon text-brand-cream flex flex-col sm:flex-row items-center justify-between gap-4 border border-brand-gold/40 shadow-xl max-w-6xl mx-auto">
          <div className="text-center sm:text-left">
            <h4 className="font-serif text-lg font-bold text-brand-gold">
              Looking for our complete Ayurvedic Hair & Skincare collection?
            </h4>
            <p className="text-xs sm:text-sm text-brand-cream/80 mt-0.5">
              Hair Oil (₹199), Burgundy Hair Color (₹149), and New Herbal Soaps (₹150 each) — all crafted with pure natural ingredients.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/products"
              className="px-5 py-2.5 rounded-full bg-brand-gold text-brand-maroon font-bold text-xs sm:text-sm hover:bg-brand-gold/90 transition-colors shadow-md"
            >
              Browse All Products →
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
