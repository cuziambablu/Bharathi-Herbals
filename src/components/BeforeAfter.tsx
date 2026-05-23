"use client";

import { motion } from "framer-motion";
import { Star, CheckCircle } from "lucide-react";

const results = [
  {
    week: "Week 2",
    title: "Scalp Revitalization",
    metricLabel: "Dandruff Reduced",
    metricVal: "90%",
    description: "Deep nourishment begins at the scalp. Dryness and irritation are completely eliminated, leaving a healthy, hydrated foundation.",
    story: "My dry scalp was constantly itchy, and white flakes were visible on my dark clothes. After just 2 weeks of using Bharathi Herbals oil 3 times a week, the flakes are completely gone.",
    author: "Priya R., Hyderabad",
    stars: 5,
  },
  {
    week: "Week 4",
    title: "Root Fortification",
    metricLabel: "Hair Fall Stopped",
    metricVal: "85%",
    description: "Hair follicles are strengthened from within. The nutrient-dense oil repairs damaged roots and drastically halts daily shedding.",
    story: "I was losing handfuls of hair every time I brushed. By week 4, my hair fall has dramatically reduced to just a few strands. The roots feel deeply fortified and my hair has a gorgeous shine.",
    author: "Aditya K., Bangalore",
    stars: 5,
  },
  {
    week: "Week 8+",
    title: "Visible New Growth",
    metricLabel: "Ponytail Density",
    metricVal: "+40%",
    description: "Dormant follicles are fully re-energized. Visible baby hair sprouts begin to appear, restoring thick volume and luxuriant length.",
    story: "I had visible thinning along my parting line. After 2 months of consistent use, I can see baby hairs sprouting and my ponytail feels significantly thicker and heavier.",
    author: "Meera S., Chennai",
    stars: 5,
  }
];

export default function BeforeAfter() {
  return (
    <section id="results" className="py-24 bg-brand-cream relative overflow-hidden">
      {/* Soft natural background elements */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-gold/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-brand-green/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-brand-green font-medium tracking-wider uppercase text-sm mb-3">Proven Transformation</span>
          <h2 className="text-3xl md:text-5xl font-serif text-brand-maroon leading-tight">
            Before & After Results
          </h2>
          <p className="text-brand-foreground/70 text-lg max-w-xl mt-4">
            Real progress timelines from our community showing the power of dedicated Ayurvedic care.
          </p>
          <div className="w-24 h-1 bg-brand-gold mt-6 rounded-full opacity-60"></div>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Center Line for Desktop */}
          <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-brand-gold/20 via-brand-gold/50 to-brand-gold/20 hidden lg:block"></div>

          <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory lg:flex-col lg:space-y-20 lg:gap-0 lg:pb-0 scrollbar-none px-4 lg:px-0 -mx-4 lg:mx-0">
            {results.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center snap-center min-w-[85vw] lg:min-w-full flex-shrink-0">
                  
                  {/* Timeline Dot Indicator */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-brand-cream border-4 border-brand-gold hidden lg:flex items-center justify-center z-20 shadow-[0_0_10px_rgba(198,168,124,0.5)]">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-maroon"></div>
                  </div>

                  {/* Left Column (Timeline Details / Story card) */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className={`order-2 ${isEven ? "lg:order-1 lg:text-right" : "lg:order-2"}`}
                  >
                    <div className="bg-white/75 backdrop-blur-md border border-brand-gold/20 rounded-3xl p-8 shadow-[0_10px_35px_-10px_rgba(90,24,29,0.08)] relative hover:shadow-[0_15px_40px_rgba(198,168,124,0.15)] hover:border-brand-gold/40 transition-all duration-500 cursor-default">
                      <div className={`flex items-center gap-1.5 mb-3 ${isEven ? "lg:justify-end" : "justify-start"}`}>
                        {[...Array(item.stars)].map((_, i) => (
                          <Star key={i} size={16} className="fill-brand-gold text-brand-gold" />
                        ))}
                      </div>

                      <p className="text-brand-foreground/80 italic text-lg leading-relaxed mb-6">
                        "{item.story}"
                      </p>

                      <div className={`flex items-center gap-3 ${isEven ? "lg:justify-end" : "justify-start"}`}>
                        <div className="w-10 h-10 rounded-full bg-brand-gold/10 border border-brand-gold/25 flex items-center justify-center text-brand-maroon font-bold text-sm font-serif">
                          {item.author.charAt(0)}
                        </div>
                        <div className="text-left">
                          <h4 className="font-serif text-brand-maroon font-bold leading-none">{item.author.split(",")[0]}</h4>
                          <span className="text-xs text-brand-foreground/50">{item.author.split(",")[1]?.trim()}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Right Column (Timeline Metrics Cards) */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className={`order-1 ${isEven ? "lg:order-2" : "lg:order-1"}`}
                  >
                    <div className="flex flex-col gap-4">
                      {/* Gold Week Badge */}
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-maroon text-brand-gold border border-brand-gold/30 rounded-full w-max text-sm font-semibold tracking-wider uppercase">
                        <CheckCircle size={14} className="text-brand-gold" />
                        {item.week}
                      </div>

                      <h3 className="text-2xl md:text-3xl font-serif text-brand-maroon">
                        {item.title}
                      </h3>

                      <p className="text-brand-foreground/75 leading-relaxed max-w-md">
                        {item.description}
                      </p>

                      {/* Premium Metric display */}
                      <div className="flex items-center gap-6 mt-2">
                        <div className="flex flex-col">
                          <span className="text-5xl font-serif text-brand-green font-bold leading-none tracking-tight">
                            {item.metricVal}
                          </span>
                          <span className="text-xs text-brand-foreground/60 uppercase tracking-widest font-semibold mt-1">
                            {item.metricLabel}
                          </span>
                        </div>
                        
                        {/* Circular/Line Visual Indicator */}
                        <div className="flex-1 max-w-[200px] h-2.5 bg-brand-gold/25 rounded-full overflow-hidden relative">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: item.metricVal.includes("%") ? item.metricVal : "75%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                            className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-brand-gold to-brand-green rounded-full shadow-[0_0_10px_rgba(42,71,44,0.4)]"
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
