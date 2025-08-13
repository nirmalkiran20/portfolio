"use client";

import { motion } from "framer-motion";
import { clsx } from "clsx";
import { useState } from "react";

interface MarqueeProps {
  items: React.ReactNode[];
  itemSize?: string;
  gap?: string;
  speed?: number;
}

export default function Marquee({
  items,
  gap = "1rem",
  speed = 20,
}: MarqueeProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full overflow-hidden">
      <motion.div
        className="flex select-none gap-4 whitespace-nowrap py-2"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        transition={{ type: "spring" }}
      >
        {items.map((item, index) => (
          <motion.div
            key={`${index}-${String(item)}`}
            className={clsx(
              "flex min-w-fit items-center justify-center overflow-hidden pr-4",
            )}
            animate={{
              x: isHovered ? "-50%" : "0%",
              transition: { duration: speed, repeat: Infinity, ease: "linear" },
            }}
          >
            {item}
          </motion.div>
        ))}

        {/* Double marquee items if you want, but not strictly needed with this approach */}
        {/* 
        {items.map((item, index) => (
          <motion.div
            key={`repeat-${index}-${String(item)}`}
            className={clsx(
              "flex min-w-fit items-center justify-center overflow-hidden pr-4"
            )}
            animate={{
              x: isHovered ? "-50%" : "0%",
              transition: { duration: speed, repeat: Infinity, ease: "linear" },
            }}
          >
            {item}
          </motion.div>
        ))}
        */}
      </motion.div>
    </div>
  );
}
