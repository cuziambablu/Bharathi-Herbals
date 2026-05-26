"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Check } from "lucide-react";

export default function ProductShowcase() {
  const whatsappUrl = "https://wa.me/917995800902?text=Hi%20Bharathi%20Herbals,%20I%20want%20to%20order%20your%20Herbal%20Hair%20Oil";

  const details = [
    "100ml Premium Bottle",
    "Pure Herbal Formula",
    "No Harmful Chemicals",
    "Suitable for Men & Women",
    "Fast Results with Regular Use"
  ];

  return (
    <section id="shop" className="py-24 bg-brand-maroon relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-gold via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 relative flex justify-center"
          >
            {/* Spotlight */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-gold/20 rounded-full blur-[100px] pointer-events-none"></div>
            
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative z-10 bg-white rounded-3xl p-6 shadow-[0_0_50px_rgba(198,168,124,0.4)] border-4 border-brand-gold/20 overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-transparent to-brand-beige/20 pointer-events-none"></div>
              
              {/* Luxury Price Badge */}
              <div className="absolute top-4 right-4 z-20 bg-brand-maroon/95 border-2 border-brand-gold text-brand-gold px-4 py-2 rounded-full font-bold text-center shadow-lg transition-transform duration-300 hover:scale-105">
                <span className="block text-[9px] uppercase tracking-widest font-semibold leading-none opacity-80 mb-0.5">Special Price</span>
                <span className="font-serif text-lg leading-none">₹199</span>
              </div>

              <img 
                src="/product.png" 
                alt="Bharathi Herbals Hair Oil"
                className="relative z-10 h-[400px] md:h-[500px] object-contain mix-blend-multiply"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 flex flex-col gap-6"
          >
            <h2 className="text-3xl md:text-5xl font-serif text-brand-cream leading-tight">
              Transform Your Hair Care Routine
            </h2>
            <p className="text-lg text-brand-beige/80">
              Experience the luxury of authentic Ayurvedic care. Our Herbal Hair Oil is crafted for those who refuse to compromise on quality and natural purity.
            </p>

            {/* Price section */}
            <div className="flex flex-col gap-1 my-2">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl md:text-4xl font-serif text-brand-gold font-bold">₹199</span>
                <span className="text-brand-beige/50 line-through text-lg">₹299</span>
                <span className="bg-brand-green/35 text-brand-cream border border-brand-green/50 text-xs px-2.5 py-1 rounded font-medium tracking-wide">33% OFF</span>
              </div>
              <span className="text-sm text-brand-beige/65">Net Content: 100ml Premium Bottle</span>
            </div>
            
            <ul className="space-y-4 my-4">
              {details.map((detail, index) => (
                <li key={index} className="flex items-center gap-3 text-brand-cream">
                  <div className="bg-brand-gold/20 p-1 rounded-full text-brand-gold">
                    <Check size={18} />
                  </div>
                  <span className="text-lg">{detail}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="w-full sm:w-auto text-lg bg-brand-gold text-brand-maroon hover:bg-brand-gold/90 border-none shadow-[0_0_20px_rgba(198,168,124,0.4)] hover:shadow-[0_0_30px_rgba(198,168,124,0.6)]">
                  Order Now via WhatsApp
                </Button>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
