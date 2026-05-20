"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800); // Under 2 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-cream"
        >
          <div className="relative overflow-hidden px-8 py-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-serif text-brand-maroon tracking-wider"
            >
              Bharathi <span className="text-brand-green">Herbals</span>
            </motion.h1>
            {/* Gold shimmer sweep */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent skew-x-12 pointer-events-none"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
