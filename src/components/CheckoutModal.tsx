"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ShieldCheck, Truck, ArrowRight, MessageCircle } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CheckoutModal() {
  const { isCheckoutOpen, setIsCheckoutOpen, items, totalPrice, clearCart } = useCart();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    paymentMethod: "cod" // 'cod' or 'upi'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address || !formData.pincode) {
      alert("Please fill in all delivery details.");
      return;
    }

    let message = `*🌿 NEW BHARATHI HERBALS ORDER 🌿*\n\n`;
    message += `*Customer Details:*\n`;
    message += `👤 Name: ${formData.name}\n`;
    message += `📞 Phone: ${formData.phone}\n`;
    message += `📍 Address: ${formData.address}, ${formData.city} - ${formData.pincode}\n`;
    message += `💳 Payment: ${formData.paymentMethod === "cod" ? "Cash on Delivery (COD)" : "UPI / Online"}\n\n`;
    message += `*Ordered Items:*\n`;

    items.forEach((item, idx) => {
      message += `${idx + 1}. ${item.product.name} (${item.product.weightShort})\n   Qty: ${item.quantity} x ₹${item.product.price} = ₹${item.product.price * item.quantity}\n`;
    });

    message += `\n*Grand Total: ₹${totalPrice}* (Free Delivery across India)\n\n`;
    message += `Please confirm my order and share dispatch timeline. Thank you!`;

    const whatsappUrl = `https://wa.me/917995800902?text=${encodeURIComponent(message)}`;

    setIsSubmitted(true);
    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank");
    clearCart();
  };

  const handleClose = () => {
    setIsCheckoutOpen(false);
    setIsSubmitted(false);
  };

  return (
    <AnimatePresence>
      {isCheckoutOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-brand-cream rounded-3xl shadow-2xl border-2 border-brand-gold/30 overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto"
          >
            {/* Header */}
            <div className="bg-brand-maroon text-brand-cream p-5 sm:p-6 flex items-center justify-between">
              <div>
                <span className="text-brand-gold text-xs font-semibold tracking-wider uppercase">
                  Bharathi Herbals
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold">
                  {isSubmitted ? "Order Placed Successfully" : "Complete Your Order"}
                </h3>
              </div>
              <button
                onClick={handleClose}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-brand-cream flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Content Body */}
            <div className="p-5 sm:p-6 overflow-y-auto flex-1">
              {isSubmitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center mx-auto">
                    <CheckCircle2 size={36} />
                  </div>
                  <h4 className="font-serif text-2xl text-brand-maroon font-bold">
                    Thank You, {formData.name}!
                  </h4>
                  <p className="text-brand-foreground/75 text-sm max-w-md mx-auto">
                    Your order details have been forwarded to our WhatsApp support team at{" "}
                    <span className="font-semibold text-brand-maroon">+91 79958 00902</span>.
                    Our team will verify your address and send your dispatch tracking code shortly.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={handleClose}
                      className="px-8 py-3 rounded-xl bg-brand-maroon text-brand-gold font-bold text-sm hover:bg-brand-maroon/90 shadow-md"
                    >
                      Continue Shopping
                    </button>
                  </div>
                </div>
              ) : items.length === 0 ? (
                <div className="text-center py-8 text-brand-foreground/70">
                  <p className="mb-4">No items in your cart to checkout.</p>
                  <button
                    onClick={handleClose}
                    className="px-6 py-2.5 rounded-xl bg-brand-maroon text-brand-gold text-sm font-semibold"
                  >
                    View Products
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Order Summary Pill */}
                  <div className="bg-white p-4 rounded-2xl border border-brand-beige shadow-sm space-y-3">
                    <h4 className="font-serif text-sm font-bold text-brand-maroon flex items-center justify-between">
                      <span>Order Summary ({items.length} {items.length === 1 ? "Item" : "Items"})</span>
                      <span className="text-brand-green text-xs font-sans font-medium flex items-center gap-1">
                        <Truck size={14} /> FREE Shipping
                      </span>
                    </h4>

                    <div className="divide-y divide-brand-beige/50 max-h-36 overflow-y-auto pr-1">
                      {items.map((item) => (
                        <div key={item.product.id} className="py-2 flex items-center justify-between text-xs sm:text-sm">
                          <div className="flex items-center gap-2.5">
                            <span className="w-5 h-5 rounded-full bg-brand-gold/20 text-brand-maroon flex items-center justify-center font-bold text-[11px]">
                              {item.quantity}
                            </span>
                            <span className="font-medium text-brand-maroon line-clamp-1">
                              {item.product.shortName}
                            </span>
                          </div>
                          <span className="font-serif font-bold text-brand-maroon">
                            ₹{item.product.price * item.quantity}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 border-t border-brand-beige flex justify-between items-center text-sm font-serif font-bold text-brand-maroon">
                      <span>Grand Total:</span>
                      <span className="text-lg text-brand-maroon font-bold">₹{totalPrice}</span>
                    </div>
                  </div>

                  {/* Customer Information Form */}
                  <div className="space-y-3.5">
                    <h4 className="font-serif text-base font-bold text-brand-maroon">
                      Delivery Address
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-semibold text-brand-foreground/70 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Ananya Sharma"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-brand-gold/40 bg-white text-sm focus:outline-none focus:border-brand-maroon"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-brand-foreground/70 mb-1">
                          Phone / WhatsApp Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. 9876543210"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-brand-gold/40 bg-white text-sm focus:outline-none focus:border-brand-maroon"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-brand-foreground/70 mb-1">
                        Full Street Address *
                      </label>
                      <textarea
                        required
                        rows={2}
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        placeholder="House / Flat No., Landmark, Colony / Street Name"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-brand-gold/40 bg-white text-sm focus:outline-none focus:border-brand-maroon resize-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-semibold text-brand-foreground/70 mb-1">
                          City / Town *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          placeholder="e.g. Hyderabad"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-brand-gold/40 bg-white text-sm focus:outline-none focus:border-brand-maroon"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-brand-foreground/70 mb-1">
                          Pincode *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.pincode}
                          onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                          placeholder="e.g. 500001"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-brand-gold/40 bg-white text-sm focus:outline-none focus:border-brand-maroon"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold text-brand-foreground/70">
                      Payment Mode
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <label className={`p-3 rounded-xl border-2 flex items-center gap-2.5 cursor-pointer transition-all ${formData.paymentMethod === "cod" ? "border-brand-maroon bg-white" : "border-brand-beige bg-white/50"}`}>
                        <input
                          type="radio"
                          name="payment"
                          checked={formData.paymentMethod === "cod"}
                          onChange={() => setFormData({ ...formData, paymentMethod: "cod" })}
                          className="text-brand-maroon focus:ring-brand-maroon"
                        />
                        <span className="text-xs sm:text-sm font-semibold text-brand-maroon">
                          Cash on Delivery (COD)
                        </span>
                      </label>

                      <label className={`p-3 rounded-xl border-2 flex items-center gap-2.5 cursor-pointer transition-all ${formData.paymentMethod === "upi" ? "border-brand-maroon bg-white" : "border-brand-beige bg-white/50"}`}>
                        <input
                          type="radio"
                          name="payment"
                          checked={formData.paymentMethod === "upi"}
                          onChange={() => setFormData({ ...formData, paymentMethod: "upi" })}
                          className="text-brand-maroon focus:ring-brand-maroon"
                        />
                        <span className="text-xs sm:text-sm font-semibold text-brand-maroon">
                          Instant UPI / Online
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Submit CTA */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-brand-maroon text-brand-gold font-bold text-base hover:bg-brand-maroon/95 transition-all shadow-xl flex items-center justify-center gap-2 group cursor-pointer"
                    >
                      <MessageCircle size={20} className="text-brand-gold" />
                      <span>Place Order • ₹{totalPrice}</span>
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <div className="flex items-center justify-center gap-1.5 text-[11px] text-brand-foreground/60 mt-2.5">
                      <ShieldCheck size={14} className="text-brand-green" />
                      <span>Encrypted & verified Ayurvedic order fulfillment</span>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
