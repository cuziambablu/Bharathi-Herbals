"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { name: "Burgundy Color (₹149)", href: "/products/burgundy-natural-herbal-hair-color", highlight: true },
  { name: "Products", href: "/products" },
  { name: "About", href: "/#about" },
  { name: "Benefits", href: "/#benefits" },
  { name: "Ingredients", href: "/#ingredients" },
  { name: "FAQ", href: "/#faq" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalCount, openCart } = useCart();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappUrl = "https://wa.me/917995800902?text=Hi%20Bharathi%20Herbals,%20I%20want%20to%20order%20Bharathi%20Herbals%20products";

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-brand-cream/95 backdrop-blur-md shadow-sm" : "bg-brand-cream/80 backdrop-blur-sm"
      }`}
    >
      {/* Top Launch Announcement Bar */}
      <div className="bg-brand-maroon text-brand-gold py-1.5 px-3 text-center text-xs font-medium tracking-wide flex items-center justify-center gap-2 border-b border-brand-gold/30">
        <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse inline-block" />
        <span>NEW LAUNCH: <strong>Burgundy Natural Herbal Hair Color (₹149)</strong> is now live!</span>
        <Link
          href="/products/burgundy-natural-herbal-hair-color"
          className="underline font-bold text-white hover:text-brand-gold transition-colors ml-1 hidden sm:inline"
        >
          View Product →
        </Link>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-serif text-2xl font-bold text-brand-maroon tracking-wide">
              Bharathi Herbals
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  link.highlight
                    ? "px-3 py-1 rounded-full bg-brand-maroon text-brand-gold font-bold hover:bg-brand-maroon/90 shadow-sm"
                    : "text-brand-foreground/80 hover:text-brand-maroon"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Right CTA & Cart */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={openCart}
              className="relative p-2.5 rounded-full hover:bg-brand-maroon/10 text-brand-maroon transition-colors flex items-center justify-center cursor-pointer"
              aria-label="View Cart"
            >
              <ShoppingBag size={22} />
              {totalCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-maroon text-brand-gold text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-pulse">
                  {totalCount}
                </span>
              )}
            </button>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button>Order on WhatsApp</Button>
            </a>
          </div>

          {/* Mobile Right Icons (Cart + Menu Toggle) */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={openCart}
              className="relative p-2 text-brand-maroon hover:bg-brand-maroon/10 rounded-full transition-colors cursor-pointer"
              aria-label="View Cart"
            >
              <ShoppingBag size={22} />
              {totalCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-maroon text-brand-gold text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
                  {totalCount}
                </span>
              )}
            </button>
            <button
              className="p-2 text-brand-maroon hover:bg-brand-maroon/10 rounded-full transition-colors cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden absolute top-full left-0 w-full bg-brand-cream/95 backdrop-blur-md shadow-lg py-4 px-6 flex flex-col gap-2 border-t border-brand-beige/50 overflow-hidden"
            >
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 + 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="block text-lg font-serif text-brand-maroon py-3 border-b border-brand-beige/20 hover:text-brand-green transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-4 flex flex-col gap-2.5"
              >
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openCart();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full border border-brand-maroon/30 text-brand-maroon font-bold text-sm hover:bg-brand-maroon/5 transition-colors cursor-pointer"
                >
                  <ShoppingBag size={18} />
                  <span>View Bag ({totalCount})</span>
                </button>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full text-base py-5 bg-brand-gold text-brand-maroon hover:bg-brand-gold/90 font-bold">
                    Order on WhatsApp
                  </Button>
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
