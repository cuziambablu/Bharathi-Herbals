import { getAllProducts, getProductBySlug, getRelatedProducts } from "@/data/products";
import ProductDetailClient from "@/components/ProductDetailClient";
import Navbar from "@/components/Navbar";
import { Footer, FloatingWhatsApp } from "@/components/Footer";
import MobileOrderBar from "@/components/MobileOrderBar";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  return {
    title: `${product.name} - ₹${product.price} | Bharathi Herbals`,
    description: product.description,
    openGraph: {
      title: `${product.name} - ₹${product.price}`,
      description: product.description,
      images: [
        {
          url: product.image,
          width: 800,
          height: 1000,
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product.slug);

  return (
    <main className="min-h-screen flex flex-col bg-brand-cream/30">
      <Navbar />
      <ProductDetailClient
        product={product}
        relatedProducts={relatedProducts}
      />
      <Footer />
      <FloatingWhatsApp />
      <MobileOrderBar />
    </main>
  );
}
