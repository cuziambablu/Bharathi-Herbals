"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "./ui/button";

export default function Hero() {
  const whatsappUrl = "https://wa.me/917702450902?text=Hi%20Bharathi%20Herbals,%20I%20want%20to%20order%20your%20Herbal%20Hair%20Oil";
  
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
              className="absolute -top-6 -left-6 md:top-10 md:left-10 z-20 bg-white rounded-full p-1.5 shadow-xl border border-brand-beige/50"
            >
              <img src="/curry.png" alt="Curry Leaves" className="w-16 h-16 rounded-full object-cover" />
            </motion.div>

            {/* Floating element 2 */}
            <motion.div 
              animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -right-6 md:bottom-20 md:-right-6 z-20 bg-white rounded-full p-1.5 shadow-xl border border-brand-beige/50"
            >
              <img src="/coconut.png" alt="Coconut" className="w-20 h-20 rounded-full object-cover" />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
