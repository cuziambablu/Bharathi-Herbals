"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Benefits", href: "#benefits" },
  { name: "Ingredients", href: "#ingredients" },
  { name: "Shop", href: "#shop" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappUrl = "https://wa.me/917702450902?text=Hi%20Bharathi%20Herbals,%20I%20want%20to%20order%20your%20Herbal%20Hair%20Oil";

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-brand-cream/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="font-serif text-2xl font-bold text-brand-maroon tracking-wide">
              Bharathi Herbals
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-brand-foreground/80 hover:text-brand-maroon transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button>Order Now</Button>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-brand-maroon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-brand-cream shadow-lg py-4 px-4 flex flex-col gap-4 border-t border-brand-beige">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-brand-foreground py-2 border-b border-brand-beige"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-2">
              <Button className="w-full">Order on WhatsApp</Button>
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
