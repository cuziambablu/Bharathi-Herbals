"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Particles() {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => setIsMounted(true), []);
  if (!isMounted) return null;

  const particles = Array.from({ length: 12 });

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-30">
      {particles.map((_, i) => {
        const randomX = Math.random() * 100;
        const randomDelay = Math.random() * 20;
        const randomDuration = Math.random() * 20 + 25;
        const size = Math.random() * 10 + 10;
        
        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-brand-green/20 blur-[1px]"
            style={{ width: size, height: size }}
            initial={{
              y: "110vh",
              x: `${randomX}vw`,
              rotate: 0,
            }}
            animate={{
              y: "-10vh",
              x: `${randomX + (Math.random() * 20 - 10)}vw`,
              rotate: 360,
            }}
            transition={{
              duration: randomDuration,
              repeat: Infinity,
              ease: "linear",
              delay: randomDelay,
            }}
          />
        );
      })}
    </div>
  );
}
