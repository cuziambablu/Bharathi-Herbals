import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import CartDrawer from "@/components/CartDrawer";
import CheckoutModal from "@/components/CheckoutModal";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bharathiherbals.com"),
  title: "Bharathi Herbals | 100% Natural Ayurvedic Hair Care & Herbal Colors",
  description: "Authentic Indian Ayurvedic hair care and natural herbal hair colors. Discover our chemical-free Burgundy Natural Herbal Hair Color (₹149) and Pure Herbal Hair Oil (₹199).",
  keywords: [
    "Bharathi Herbals",
    "Burgundy Natural Herbal Hair Color",
    "Herbal Hair Color",
    "Ayurvedic Hair Oil",
    "Chemical Free Hair Color",
    "No Ammonia Hair Dye",
    "Natural Hair Care"
  ],
  openGraph: {
    title: "Bharathi Herbals | Authentic Ayurvedic Hair Care & Colors",
    description: "Pure herbal hair care. Burgundy Natural Herbal Hair Color at ₹149 & Herbal Hair Oil at ₹199.",
    images: ["/burgundy-hair-color.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans text-brand-foreground bg-brand-background">
        <CartProvider>
          {children}
          <CartDrawer />
          <CheckoutModal />
        </CartProvider>
      </body>
    </html>
  );
}
