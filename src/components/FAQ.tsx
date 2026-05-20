"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How to use the hair oil?",
    answer: "Take a few drops of Bharathi Herbals hair oil, massage gently into your scalp using your fingertips for 5-10 minutes. Leave it on overnight or at least for 2 hours before washing with a mild shampoo."
  },
  {
    question: "Is it suitable for all hair types?",
    answer: "Yes, our herbal formulation is 100% natural and carefully balanced to suit all hair types, including straight, wavy, curly, and chemically treated hair."
  },
  {
    question: "How often should I apply?",
    answer: "For best results, we recommend applying the oil 2-3 times a week. Consistent usage over 2-3 months will yield visible improvements in hair texture and growth."
  },
  {
    question: "Is it chemical free?",
    answer: "Absolutely. We pride ourselves on being 100% free from parabens, sulfates, silicones, synthetic colors, and artificial fragrances. Only pure nature in every drop."
  },
  {
    question: "Do you deliver pan-India?",
    answer: "Yes, we offer delivery across India. Once you place an order via WhatsApp, our team will provide you with the exact shipping timelines based on your pincode."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-brand-beige/20 relative">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-brand-maroon mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full opacity-60"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl border border-brand-beige overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="font-serif text-lg text-brand-maroon pr-8">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`text-brand-gold transition-transform duration-300 min-w-5 ${openIndex === index ? "rotate-180" : ""}`} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="px-6 pb-5 text-brand-foreground/70">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
