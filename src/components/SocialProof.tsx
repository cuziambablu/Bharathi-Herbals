"use client";

import { motion } from "framer-motion";
import { MessageCircle, Play, Heart, MessageSquare } from "lucide-react";

const reels = [
  {
    image: "/about.png",
    creator: "@ayurveda_wellness",
    likes: "2.4k",
    comments: "142",
    title: "My traditional hair care routine with Bharathi Herbals 🌿✨"
  },
  {
    image: "/bhringraj.png",
    creator: "@organic_beauty_diaries",
    likes: "4.8k",
    comments: "289",
    title: "How I stopped hair fall in 4 weeks using active herbs! #ad"
  },
  {
    image: "/coconut.png",
    creator: "@hair_growth_journey",
    likes: "3.1k",
    comments: "98",
    title: "Ayurvedic secrets: why synthetic oils are ruining your hair roots."
  }
];

export default function SocialProof() {
  const whatsappUrl = "https://wa.me/917702450902?text=Hi%20Bharathi%20Herbals,%20I%20want%20to%20order%20your%20Herbal%20Hair%20Oil";

  return (
    <section id="social-proof" className="py-24 bg-brand-beige/20 relative">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-brand-green font-medium tracking-wider uppercase text-sm mb-3">Community & Ordering</span>
          <h2 className="text-3xl md:text-5xl font-serif text-brand-maroon leading-tight">
            Loved on Socials
          </h2>
          <p className="text-brand-foreground/70 text-lg max-w-xl mt-4">
            See how wellness creators are incorporating Bharathi Herbals into their daily routines and order instantly with one scan.
          </p>
          <div className="w-24 h-1 bg-brand-gold mt-6 rounded-full opacity-60"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Instagram Reel Previews (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h3 className="text-2xl font-serif text-brand-maroon flex items-center gap-2 mb-2">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-brand-gold">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              Instagram Spotlights
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {reels.map((reel, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative rounded-2xl overflow-hidden aspect-[9/16] shadow-lg border border-brand-gold/10 hover:shadow-2xl transition-all duration-500 cursor-pointer"
                >
                  {/* Image Background */}
                  <img 
                    src={reel.image} 
                    alt={reel.creator}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.8] group-hover:brightness-[0.6]"
                  />
                  
                  {/* Glassmorphic Play Overlay */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white scale-90 group-hover:scale-105 transition-all duration-500 shadow-lg">
                    <Play size={20} className="fill-white translate-x-0.5" />
                  </div>

                  {/* Creator & Metrics Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col gap-2">
                    <span className="text-xs font-semibold text-brand-gold font-sans">{reel.creator}</span>
                    <p className="text-white text-xs leading-relaxed font-medium line-clamp-2">
                      {reel.title}
                    </p>
                    
                    <div className="flex items-center gap-4 mt-1 text-white/90 text-[10px]">
                      <span className="flex items-center gap-1">
                        <Heart size={12} className="fill-brand-gold text-brand-gold" />
                        {reel.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageSquare size={12} />
                        {reel.comments}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Block: Scan to Order WhatsApp QR Panel (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="lg:col-span-5 bg-white/80 backdrop-blur-md border border-brand-gold/30 rounded-3xl p-8 shadow-[0_20px_50px_rgba(90,24,29,0.06)] flex flex-col items-center text-center cursor-default hover:border-brand-gold/60 transition-all duration-500 relative overflow-hidden"
          >
            {/* Soft backdrop accents */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="w-12 h-12 rounded-full bg-brand-green/10 border border-brand-green/20 flex items-center justify-center mb-6">
              <MessageCircle className="text-brand-green w-6 h-6" />
            </div>

            <h3 className="text-2xl font-serif text-brand-maroon mb-3">
              Scan to Order Instantly
            </h3>
            
            <p className="text-sm text-brand-foreground/75 leading-relaxed max-w-sm mb-6">
              Don't want to type? Scan the gold QR code below using your phone camera to instantly start your order chat on WhatsApp.
            </p>

            {/* Branded Luxury QR Code Box */}
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="block relative z-10 group cursor-pointer">
              <div className="bg-brand-cream border-4 border-brand-gold/30 group-hover:border-brand-gold p-6 rounded-2xl shadow-inner transition-colors duration-500">
                
                {/* Embedded custom branded QR Code via SVG */}
                <svg width="180" height="180" viewBox="0 0 100 100" fill="none" className="text-brand-maroon">
                  {/* Corner Position Detection Blocks */}
                  <rect x="2" y="2" width="22" height="22" rx="3" stroke="currentColor" strokeWidth="3" />
                  <rect x="7" y="7" width="12" height="12" rx="1.5" fill="currentColor" />
                  
                  <rect x="76" y="2" width="22" height="22" rx="3" stroke="currentColor" strokeWidth="3" />
                  <rect x="81" y="7" width="12" height="12" rx="1.5" fill="currentColor" />
                  
                  <rect x="2" y="76" width="22" height="22" rx="3" stroke="currentColor" strokeWidth="3" />
                  <rect x="7" y="81" width="12" height="12" rx="1.5" fill="currentColor" />
                  
                  {/* Small alignment tracker block */}
                  <rect x="76" y="76" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="2" />
                  <rect x="79" y="79" width="2" height="2" fill="currentColor" />

                  {/* Aesthetic botanical geometric lines representing the QR matrix */}
                  <path d="M32 4h4v4h-4zM32 12h4v8h-4zM40 8h8v4h-8zM44 16h4v8h-4zM52 4h12v4H52zM60 12h8v4h-8zM32 28h8v4h-8zM44 32h12v4H44zM32 40h4v8h-4zM40 44h8v8h-8zM52 40h12v4H52zM68 28h12v4H68zM72 36h4v8h-4zM80 40h12v4H80z" fill="currentColor" opacity="0.85" />
                  <path d="M4 32h8v4H4zM16 28h8v4H16zM8 44h12v4H8zM4 52h8v8H4zM16 56h4v8h-4zM24 48h4v8h-4zM28 60h4v8h-4z" fill="currentColor" opacity="0.85" />
                  <path d="M52 56h8v8h-8zM64 48h16v4H64zM68 60h12v4H68zM64 68h8v8h-8zM76 68h16v4H76zM80 76h8v8h-8z" fill="currentColor" opacity="0.85" />
                  <path d="M32 76h8v4h-8zM44 80h12v4H44zM32 88h4v8h-4zM40 92h8v4h-8zM52 88h12v4H52z" fill="currentColor" opacity="0.85" />

                  {/* Custom central brand leaf badge */}
                  <rect x="40" y="40" width="20" height="20" rx="4" fill="var(--color-brand-cream)" stroke="currentColor" strokeWidth="2" />
                  <path d="M50 44c-3.5 0-5 3-5 6 0 2.5 1.5 4 5 6 3.5-2 5-3.5 5-6 0-3-1.5-6-5-6zm0 10c-2-1.2-3-2.2-3-4 0-2 1-3.5 3-3.5s3 1.5 3 3.5c0 1.8-1 2.8-3 4z" fill="currentColor" />
                </svg>

                {/* Shimmer sweep animation over QR code frame */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-brand-gold/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none rounded-2xl"></div>
              </div>
              <div className="mt-3 text-xs text-brand-gold font-semibold tracking-wider uppercase group-hover:text-brand-maroon transition-colors flex items-center justify-center gap-1.5">
                <span>Click to Scan / Open Link</span>
                <Play size={10} className="fill-brand-gold text-brand-gold rotate-90" />
              </div>
            </a>

            <div className="w-full h-px bg-brand-gold/25 my-6"></div>

            <div className="flex items-center gap-4 text-left">
              <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green">
                <MessageCircle size={18} />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-brand-foreground/60 uppercase tracking-widest leading-none mb-1">
                  WhatsApp Support
                </h4>
                <a href="tel:+917702450902" className="text-sm font-bold text-brand-maroon hover:underline">
                  +91 77024 50902
                </a>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
