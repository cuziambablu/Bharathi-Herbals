"use client";

import { motion } from "framer-motion";
import { Droplet, Hand, Moon, Sparkles } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: <Droplet className="w-6 h-6 text-brand-gold" />,
    title: "Step 1: Apply Gently",
    description: "Partition your hair and apply 5-10 drops of oil directly onto your scalp. Distribute evenly from roots to tips."
  },
  {
    num: "02",
    icon: <Hand className="w-6 h-6 text-brand-gold" />,
    title: "Step 2: Stimulating Massage",
    description: "Use your fingertips to massage gently in slow circular motions for 5-10 minutes. This enhances blood circulation."
  },
  {
    num: "03",
    icon: <Moon className="w-6 h-6 text-brand-gold" />,
    title: "Step 3: Deep Absorption",
    description: "Leave the oil overnight to nourish deep hair layers, or let it work its magic for at least 2 hours before washing."
  },
  {
    num: "04",
    icon: <Sparkles className="w-6 h-6 text-brand-gold" />,
    title: "Step 4: Gentle Wash",
    description: "Rinse off using a mild, natural or Ayurvedic shampoo. Repeat this routine 2-3 times a week for radiant growth."
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function HowToUse() {
  return (
    <section id="how-to-use" className="py-24 bg-brand-maroon relative overflow-hidden">
      {/* Background radial spotlights */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-brand-gold via-transparent to-transparent"></div>
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-green via-transparent to-transparent"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-brand-gold font-medium tracking-wider uppercase text-sm mb-3">Ayurvedic Ritual</span>
          <h2 className="text-3xl md:text-5xl font-serif text-brand-cream leading-tight">
            How to Use
          </h2>
          <p className="text-brand-beige/70 text-lg max-w-xl mt-4">
            Follow our traditional four-step massage and care guide to maximize therapeutic scalp absorption and trigger rapid hair health recovery.
          </p>
          <div className="w-24 h-1 bg-brand-gold mt-6 rounded-full opacity-60"></div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white/5 backdrop-blur-md border border-brand-gold/15 hover:border-brand-gold/50 rounded-2xl p-8 shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_40px_rgba(198,168,124,0.15)] hover:bg-white/10 transition-all duration-500 overflow-hidden cursor-default"
            >
              {/* Giant elegant background number */}
              <div className="absolute -bottom-6 -right-4 font-serif text-8xl text-brand-gold/10 font-bold select-none group-hover:text-brand-gold/20 group-hover:scale-105 transition-all duration-500">
                {step.num}
              </div>

              {/* Icon Container */}
              <div className="w-14 h-14 rounded-2xl bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center mb-8 group-hover:bg-brand-gold/20 group-hover:scale-110 transition-all duration-500 shadow-md">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-serif text-brand-cream mb-4 tracking-wide font-semibold">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-brand-beige/80 leading-relaxed text-sm relative z-10">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
