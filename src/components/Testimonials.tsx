"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Priya Sharma",
    text: "I've tried so many oils, but Bharathi Herbals is truly different. My hair fall reduced within 3 weeks, and the texture feels so much softer. Highly recommend!",
    role: "Regular Customer"
  },
  {
    name: "Rahul Verma",
    text: "The natural aroma itself tells you it's pure. It's not sticky, washes off easily, and my dandruff is completely gone. A premium product that actually works.",
    role: "Verified Buyer"
  },
  {
    name: "Anjali Desai",
    text: "Finally found an authentic Ayurvedic hair oil! It feels like a luxury spa treatment at home. My hair growth has visibly improved after 2 months of use.",
    role: "Verified Buyer"
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered]);

  return (
    <section className="py-24 bg-brand-cream relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-brand-maroon mb-4">
            Loved by Thousands
          </h2>
          <p className="text-brand-foreground/70 text-lg">
            Don't just take our word for it. Here is what our customers have to say about their hair transformation journey.
          </p>
        </motion.div>

        <div 
          className="relative max-w-3xl mx-auto h-[250px] sm:h-[200px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 bg-white p-8 rounded-2xl shadow-lg border-2 border-brand-beige flex flex-col justify-center items-center text-center cursor-default"
            >
              <div className="flex text-brand-gold mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <p className="text-brand-foreground/80 italic mb-6 leading-relaxed text-lg max-w-2xl">
                "{testimonials[index].text}"
              </p>
              <div>
                <h4 className="font-serif text-xl text-brand-maroon">{testimonials[index].name}</h4>
                <p className="text-sm text-brand-foreground/50">{testimonials[index].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${i === index ? "w-8 bg-brand-gold" : "w-2 bg-brand-beige"}`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
