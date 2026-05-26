"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ShoppingBag } from "lucide-react";

export default function MobileOrderBar() {
  const [isVisible, setIsVisible] = useState(false);
  const whatsappUrl = "https://wa.me/917995800902?text=Hi%20Bharathi%20Herbals,%20I%20want%20to%20order%20your%20Herbal%20Hair%20Oil";

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the first screen roughly
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-[60] md:hidden bg-gradient-to-r from-brand-maroon to-brand-maroon/95 shadow-[0_-10px_30px_rgba(0,0,0,0.2)] border-t border-brand-gold/30 backdrop-blur-md"
        >
          <div className="p-4 pb-6">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="block w-full">
              <button className="w-full relative overflow-hidden bg-brand-gold text-brand-maroon py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 group shadow-xl">
                <ShoppingBag size={20} />
                <span className="text-lg">Order on WhatsApp • ₹199</span>
                {/* CSS based Shimmer sweep for mobile button */}
                <motion.div 
                  initial={{ x: "-100%" }}
                  animate={{ x: "200%" }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12" 
                />
              </button>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
