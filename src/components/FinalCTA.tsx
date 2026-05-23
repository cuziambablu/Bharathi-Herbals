"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";

export default function FinalCTA() {
  const whatsappUrl = "https://wa.me/917702450902?text=Hi%20Bharathi%20Herbals,%20I%20want%20to%20order%20your%20Herbal%20Hair%20Oil";

  return (
    <section className="py-24 relative overflow-hidden bg-brand-maroon">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/30 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-green/30 rounded-full blur-[80px]"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-brand-cream mb-6 leading-tight">
            Start Your Herbal Hair Care Journey Today
          </h2>
          <p className="text-xl text-brand-beige/80 mb-10">
            Order directly through WhatsApp for just <span className="text-brand-gold font-bold">₹199</span> (33% OFF) and experience nature’s finest goodness delivered to your doorstep.
          </p>
          
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-block">
            <Button size="lg" className="h-16 px-10 text-xl bg-brand-gold text-brand-maroon hover:bg-brand-gold/90 border-none shadow-[0_0_30px_rgba(198,168,124,0.5)] hover:shadow-[0_0_40px_rgba(198,168,124,0.7)] transition-all">
              Order Now on WhatsApp
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
