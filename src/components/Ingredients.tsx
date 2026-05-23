"use client";

import { motion } from "framer-motion";

const ingredients = [
  {
    name: "Castor Oil",
    description: "Rich in ricinoleic acid and essential fatty acids, it strengthens hair roots and promotes thick hair growth.",
    image: "/castor.png",
  },
  {
    name: "Curry Leaves",
    description: "Loaded with beta-carotene and amino acids, it prevents hair thinning and revitalizes hair follicles.",
    image: "/curry.png",
  },
  {
    name: "Hibiscus",
    description: "Stimulates healthy growth from dormant follicles, prevents premature graying, and acts as a natural conditioner.",
    image: "/hibiscus.png",
  },
  {
    name: "Aloe Vera",
    description: "Soothes itchy scalp, deep cleanses oily hair strands, and repairs hair shafts with rich vitamins.",
    image: "/aloe.png",
  },
  {
    name: "Coconut Oil",
    description: "Deeply penetrates the hair shafts to lock in moisture, prevent protein loss, and add a premium shiny gloss.",
    image: "/coconut.png",
  },
  {
    name: "Bhringraj",
    description: "The legendary Ayurvedic 'King of Herbs' that cools the scalp, reduces stress-induced hair fall, and triggers growth.",
    image: "/bhringraj.png",
  }
];

export default function Ingredients() {
  return (
    <section id="ingredients" className="py-24 bg-brand-cream relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-brand-green font-medium tracking-wider uppercase text-sm mb-3">Pure Nature</span>
          <h2 className="text-3xl md:text-4xl font-serif text-brand-maroon">
            Our Hero Ingredients
          </h2>
          <div className="w-24 h-1 bg-brand-gold mt-6 rounded-full opacity-60"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ingredients.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 300 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl mb-4 shadow-md group-hover:shadow-[0_0_30px_rgba(198,168,124,0.4)] transition-shadow duration-500 border border-transparent group-hover:border-brand-gold/30">
                <div className="absolute inset-0 bg-brand-maroon/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>
              <h3 className="text-xl font-serif text-brand-maroon mb-2 group-hover:text-brand-green transition-colors">
                {item.name}
              </h3>
              <p className="text-brand-foreground/70">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
