"use client";

import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, Sprout, Droplet, CheckCircle2, HeartHandshake } from "lucide-react";

const benefits = [
  {
    icon: <Droplet className="w-6 h-6 text-brand-green" />,
    title: "Nourishes Scalp",
    description: "Deeply penetrates the roots to provide essential nutrients and hydration."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-brand-green" />,
    title: "Strengthens Hair",
    description: "Fortifies hair follicles to prevent breakage and split ends naturally."
  },
  {
    icon: <Sprout className="w-6 h-6 text-brand-green" />,
    title: "Promotes Growth",
    description: "Stimulates dormant follicles to encourage thicker, healthier hair growth."
  },
  {
    icon: <Sparkles className="w-6 h-6 text-brand-green" />,
    title: "Reduces Hair Fall",
    description: "Effectively controls hair fall and fights off persistent dandruff."
  },
  {
    icon: <CheckCircle2 className="w-6 h-6 text-brand-green" />,
    title: "100% Natural",
    description: "Free from parabens, sulfates, and artificial fragrances or colors."
  },
  {
    icon: <HeartHandshake className="w-6 h-6 text-brand-green" />,
    title: "For All Hair Types",
    description: "Gentle yet effective formulation suitable for both men and women."
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-brand-beige/30 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-brand-maroon mb-4">
            Why Choose Bharathi Herbals?
          </h2>
          <p className="text-brand-foreground/70 text-lg">
            Experience the transformative power of ancient Ayurvedic wisdom combined with premium natural care.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group bg-white/60 backdrop-blur-md rounded-2xl p-8 shadow-sm border border-brand-gold/20 hover:border-brand-gold hover:shadow-lg transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/5 rounded-bl-full -z-10 group-hover:bg-brand-gold/10 transition-colors"></div>
              <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-serif text-brand-maroon mb-3">
                {benefit.title}
              </h3>
              <p className="text-brand-foreground/70">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
