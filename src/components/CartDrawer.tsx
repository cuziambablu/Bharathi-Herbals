"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function CartDrawer() {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    totalPrice,
    totalCount,
    setIsCheckoutOpen
  } = useCart();

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const getWhatsAppCartUrl = () => {
    let text = "Hi Bharathi Herbals, I want to place an order from your website:\n\n";
    items.forEach((item, index) => {
      text += `${index + 1}. ${item.product.shortName} (${item.product.weightShort}) x ${item.quantity} = ₹${item.product.price * item.quantity}\n`;
    });
    text += `\n*Cart Total: ₹${totalPrice}*\n\nPlease confirm my order details!`;
    return `https://wa.me/917995800902?text=${encodeURIComponent(text)}`;
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
            className="relative w-full max-w-md bg-brand-cream h-full flex flex-col shadow-2xl z-10 border-l border-brand-gold/30"
          >
            {/* Header */}
            <div className="p-5 border-b border-brand-beige flex items-center justify-between bg-white/70">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-maroon/10 text-brand-maroon flex items-center justify-center font-bold">
                  <ShoppingBag size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-brand-maroon font-bold leading-none">
                    Your Shopping Bag
                  </h3>
                  <p className="text-xs text-brand-foreground/60 mt-0.5">
                    {totalCount} {totalCount === 1 ? "item" : "items"} selected
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsCartOpen(false)}
                className="w-9 h-9 rounded-full bg-brand-beige/50 text-brand-foreground/70 hover:text-brand-maroon hover:bg-brand-beige flex items-center justify-center transition-colors"
                aria-label="Close cart"
              >
                <X size={18} />
              </button>
            </div>

            {/* Items List */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-6 text-brand-foreground/60">
                  <div className="w-16 h-16 rounded-full bg-brand-beige/40 flex items-center justify-center text-brand-gold mb-4">
                    <ShoppingBag size={28} />
                  </div>
                  <h4 className="font-serif text-xl text-brand-maroon mb-2">
                    Your bag is empty
                  </h4>
                  <p className="text-sm max-w-xs mb-6 text-brand-foreground/70">
                    Discover our authentic herbal hair color & pure oils crafted with nature's finest ingredients.
                  </p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="px-6 py-2.5 rounded-xl bg-brand-maroon text-brand-gold font-medium text-sm hover:bg-brand-maroon/90 transition-colors shadow-md"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div
                    key={item.product.id}
                    className="bg-white p-3.5 rounded-2xl border border-brand-beige shadow-sm flex gap-3.5 items-center"
                  >
                    <div className="w-20 h-20 rounded-xl overflow-hidden bg-brand-beige/20 border border-brand-gold/20 shrink-0 p-1 flex items-center justify-center">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-1">
                        <Link
                          href={`/products/${item.product.slug}`}
                          onClick={() => setIsCartOpen(false)}
                          className="font-serif text-sm font-bold text-brand-maroon hover:text-brand-green transition-colors line-clamp-1"
                        >
                          {item.product.shortName}
                        </Link>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-stone-400 hover:text-red-600 transition-colors p-1"
                          aria-label="Remove item"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>

                      <div className="flex items-center gap-2 text-xs text-brand-foreground/60 mt-0.5">
                        <span>{item.product.weightShort}</span>
                        <span>•</span>
                        <span className="font-semibold text-brand-maroon">
                          ₹{item.product.price}
                        </span>
                      </div>

                      {/* Quantity selector */}
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-brand-gold/40 rounded-lg bg-brand-cream">
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity - 1)
                            }
                            className="w-7 h-7 flex items-center justify-center text-brand-maroon hover:bg-brand-beige transition-colors rounded-l-lg"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="w-8 text-center text-xs font-bold text-brand-maroon">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity + 1)
                            }
                            className="w-7 h-7 flex items-center justify-center text-brand-maroon hover:bg-brand-beige transition-colors rounded-r-lg"
                            aria-label="Increase quantity"
                          >
                            <Plus size={12} />
                          </button>
                        </div>

                        <span className="font-serif font-bold text-sm text-brand-maroon">
                          ₹{item.product.price * item.quantity}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-5 border-t border-brand-beige bg-white/80 space-y-3.5">
                <div className="space-y-1.5 text-sm">
                  <div className="flex justify-between text-brand-foreground/70">
                    <span>Subtotal</span>
                    <span className="font-semibold text-brand-foreground">
                      ₹{totalPrice}
                    </span>
                  </div>
                  <div className="flex justify-between text-brand-foreground/70 text-xs">
                    <span>Delivery</span>
                    <span className="text-brand-green font-medium">
                      FREE across India
                    </span>
                  </div>
                  <div className="h-px bg-brand-beige my-2" />
                  <div className="flex justify-between text-base font-serif font-bold text-brand-maroon">
                    <span>Total Amount</span>
                    <span className="text-xl">₹{totalPrice}</span>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <button
                    onClick={handleCheckout}
                    className="w-full py-3.5 rounded-xl bg-brand-maroon text-brand-gold font-bold text-base hover:bg-brand-maroon/95 transition-all shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <span>Proceed to Checkout</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>

                  <a
                    href={getWhatsAppCartUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl border-2 border-brand-gold text-brand-maroon font-bold text-sm hover:bg-brand-beige transition-colors flex items-center justify-center gap-2 block text-center"
                  >
                    <span>Order via WhatsApp (1-Click)</span>
                  </a>
                </div>

                <p className="text-[11px] text-center text-brand-foreground/50">
                  100% Genuine Ayurvedic Products • Safe & Verified Delivery
                </p>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
