"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "./ui/button";

export default function Hero() {
  const whatsappUrl = "https://wa.me/917995800902?text=Hi%20Bharathi%20Herbals,%20I%20want%20to%20order%20your%20Herbal%20Hair%20Oil";
  
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 150]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-brand-cream to-brand-beige/50 pt-20">
      {/* Background organic shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <motion.div style={{ y: y1 }} className="absolute top-[-10%] right-[-5%] w-[50%] h-[50%] rounded-full bg-brand-gold/10 blur-3xl"></motion.div>
        <motion.div style={{ y: y2 }} className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-brand-green/5 blur-3xl"></motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6 text-center lg:text-left"
          >
            <div className="inline-block px-4 py-1.5 bg-brand-green/10 text-brand-green font-medium text-sm rounded-full w-max mx-auto lg:mx-0">
              100% Ayurvedic Formulation
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-maroon leading-tight">
              Pure Herbal Care for <br className="hidden md:block"/> 
              <span className="text-brand-green">Stronger, Healthier</span> Hair
            </h1>
            <p className="text-lg text-brand-foreground/80 max-w-xl mx-auto lg:mx-0">
              Crafted with powerful natural ingredients like Amla, Coconut Oil, Bhringraj & Fenugreek to nourish your scalp and promote vibrant hair growth.
            </p>

            {/* Price badge in Hero */}
            <div className="flex flex-col gap-1 items-center lg:items-start my-2">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-serif text-brand-maroon font-bold">₹199</span>
                <span className="text-brand-foreground/40 line-through text-lg">₹299</span>
                <span className="bg-brand-green/10 text-brand-green border border-brand-green/20 text-xs px-2 py-0.5 rounded font-medium">33% OFF</span>
              </div>
              <span className="text-xs text-brand-foreground/60">Net Content: 100ml Premium Bottle</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-4">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="w-full sm:w-auto text-base">
                  Order on WhatsApp
                </Button>
              </a>
              <a href="#ingredients">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-base">
                  Explore Ingredients
                </Button>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative flex justify-center group"
          >
            {/* Glowing spotlight effect behind bottle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 bg-brand-gold/20 rounded-full blur-3xl transition-transform duration-700 group-hover:scale-110"></div>
            
            {/* Floating Price Badge */}
            <motion.div 
              initial={{ scale: 0, rotate: -15 }}
              animate={{ scale: 1, rotate: -8 }}
              transition={{ type: "spring", delay: 0.8, stiffness: 200 }}
              className="absolute top-4 right-4 md:top-8 md:right-8 z-20 bg-brand-maroon text-brand-gold border-2 border-brand-gold/40 px-4 py-2 rounded-2xl shadow-xl flex flex-col items-center justify-center font-bold rotate-[-8deg] hover:scale-110 hover:rotate-0 transition-all duration-300 cursor-pointer"
            >
              <span className="text-[10px] tracking-wider uppercase opacity-80 leading-none mb-0.5">Special Price</span>
              <span className="text-xl font-serif">₹199</span>
            </motion.div>

            <motion.img 
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              src="/hero-bottle.png" 
              alt="Bharathi Herbals Hair Oil"
              className="relative z-10 w-full max-w-[400px] md:max-w-[500px] h-auto object-cover rounded-[2rem] shadow-2xl border-8 border-white/40 cursor-pointer"
            />

            {/* Floating leaf element 1 */}
            <motion.div 
              animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute hidden md:block md:top-10 md:left-10 z-20 bg-white rounded-full p-1.5 shadow-xl border border-brand-beige/50"
            >
              <img src="/curry.png" alt="Curry Leaves" className="w-16 h-16 rounded-full object-cover" />
            </motion.div>

            {/* Floating element 2 */}
            <motion.div 
              animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute hidden md:block md:bottom-20 md:-right-6 z-20 bg-white rounded-full p-1.5 shadow-xl border border-brand-beige/50"
            >
              <img src="/coconut.png" alt="Coconut" className="w-20 h-20 rounded-full object-cover" />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
