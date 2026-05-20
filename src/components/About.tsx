"use client";

import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-brand-cream relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16"
        >
          <Leaf className="text-brand-green w-8 h-8 mb-4 opacity-80" />
          <h2 className="text-3xl md:text-4xl font-serif text-brand-maroon text-center">
            Our Rooted Heritage
          </h2>
          <div className="w-24 h-1 bg-brand-gold mt-6 rounded-full opacity-60"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-tl-full rounded-tr-full overflow-hidden border-8 border-brand-beige shadow-xl">
              <img 
                src="/about.png" 
                alt="Ayurvedic herbs and mortar"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-green/10 rounded-full blur-2xl -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-2xl font-serif text-brand-maroon">
              Nature’s Secret for Perfect Hair
            </h3>
            <p className="text-lg text-brand-foreground/80 leading-relaxed">
              Bharathi Herbals is born out of a deep-rooted belief in the healing and nourishing power of nature. We bring you the finest, pure Ayurvedic hair care remedies passed down through generations in India.
            </p>
            <p className="text-lg text-brand-foreground/80 leading-relaxed">
              Our signature Herbal Hair Oil is meticulously crafted using traditional methods, blending potent natural ingredients that work in harmony to strengthen roots, reduce hair fall, and restore your hair's natural shine and vitality.
            </p>
            <div className="pt-4 flex items-center gap-4 border-t border-brand-beige mt-4">
              <div className="w-12 h-12 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-maroon font-serif font-bold text-xl">
                100
              </div>
              <p className="text-brand-foreground font-medium">100% Chemical Free & Authentic</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
