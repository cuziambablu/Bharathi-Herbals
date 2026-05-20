"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { X, CheckCircle2 } from "lucide-react";

const locations = ["Hyderabad", "Bangalore", "Mumbai", "Chennai", "Delhi", "Pune", "Kochi", "Vijayawada", "Vizag"];

export default function OrderPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [location, setLocation] = useState("Hyderabad");

  useEffect(() => {
    // Show first popup after 12 seconds
    const initialTimer = setTimeout(() => {
      setLocation(locations[Math.floor(Math.random() * locations.length)]);
      setIsVisible(true);
      setTimeout(() => setIsVisible(false), 6000);
    }, 12000);

    // Then every 35 seconds
    const interval = setInterval(() => {
      setLocation(locations[Math.floor(Math.random() * locations.length)]);
      setIsVisible(true);
      setTimeout(() => setIsVisible(false), 6000);
    }, 35000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="fixed bottom-6 left-6 z-50 max-w-[320px] hidden md:flex items-center gap-4 bg-white/95 backdrop-blur-md border border-brand-beige p-4 rounded-2xl shadow-2xl"
        >
          <div className="bg-brand-green/10 text-brand-green p-2.5 rounded-full flex-shrink-0">
            <CheckCircle2 size={24} />
          </div>
          <div className="flex-1 text-sm">
            <p className="text-brand-foreground/60 text-xs mb-0.5">Verified Order</p>
            <p className="font-medium text-brand-maroon leading-tight">
              Someone from <span className="font-bold">{location}</span> recently ordered Bharathi Herbal Oil
            </p>
          </div>
          <button 
            onClick={() => setIsVisible(false)}
            className="text-brand-foreground/40 hover:text-brand-foreground transition-colors absolute top-2 right-2"
          >
            <X size={14} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
