import { getAllProducts } from "@/data/products";
import ProductCatalogClient from "@/components/ProductCatalogClient";
import Navbar from "@/components/Navbar";
import { Footer, FloatingWhatsApp } from "@/components/Footer";
import MobileOrderBar from "@/components/MobileOrderBar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop Ayurvedic Hair Care & Natural Hair Color | Bharathi Herbals",
  description:
    "Explore Bharathi Herbals range of natural products including our Burgundy Natural Herbal Hair Color (₹149) and Pure Herbal Hair Oil (₹199). 100% natural and chemical free.",
};

export default function ProductsPage() {
  const products = getAllProducts();

  return (
    <main className="min-h-screen flex flex-col bg-brand-cream/30">
      <Navbar />
      <ProductCatalogClient initialProducts={products} />
      <Footer />
      <FloatingWhatsApp />
      <MobileOrderBar />
    </main>
  );
}
