"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BentoCard } from "./BentoCard";
import { ComponentPropsWithoutRef } from "react";

export function ChangelogBento(props: ComponentPropsWithoutRef<"div">) {
  // Example image paths—make sure your actual files are in `/public/images/tools/`
  const items = [
    { id: 1, title: "Semrush Analytics", src: "/semrush.png" },
    { id: 2, title: "Google My Business", src: "/gmb.png" },
    { id: 3, title: "Google Tag Manager", src: "/gtm.png" },
    { id: 4, title: "Google AdSense", src: "/gadsense.png" },
    { id: 5, title: "Google Keyword Planner", src: "/gkp.png" },
    { id: 6, title: "Hootsuite Management", src: "/hoots.png" },
    { id: 7, title: "Hotjar Heatmaps", src: "/hotjar.png" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = items.length;
  const displayRange = 2; // How many items are prominently visible

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % totalItems);
  const handlePrev = () =>
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);

  const getItemVariants = (itemIndex: number) => {
    let diff = itemIndex - currentIndex;
    if (diff > totalItems / 2) diff -= totalItems;
    if (diff < -totalItems / 2) diff += totalItems;

    if (diff === 0) {
      return {
        x: "0%",
        opacity: 1,
        scale: 1,
        rotateY: 0,
        zIndex: 10,
        filter: "blur(0px)",
      };
    } else if (Math.abs(diff) <= displayRange) {
      const offsetX = diff * (100 / (displayRange + 1));
      const rotationY = diff * 15;
      const scaleFactor = 1 - Math.abs(diff) * 0.15;
      const opacityFactor = 1 - Math.abs(diff) * 0.2;
      const blurFactor = Math.abs(diff) * 2;
      return {
        x: `${offsetX}%`,
        opacity: Math.max(0.3, opacityFactor),
        scale: Math.max(0.7, scaleFactor),
        rotateY: rotationY,
        zIndex: 5 - Math.abs(diff),
        filter: `blur(${blurFactor}px)`,
      };
    } else {
      return {
        x: "0%",
        opacity: 0,
        scale: 0,
        rotateY: 0,
        zIndex: 0,
        filter: "blur(5px)",
      };
    }
  };

  return (
    <BentoCard
      colSpan={3}
      rowSpan={4}
      height="h-[276px]"
      className="relative flex flex-col items-center justify-center overflow-hidden p-4"
      {...props}
    >
      <h2 className="text-medium text-gray absolute left-6 top-4 z-20 font-medium">
        Recent Work Highlights
      </h2>

      <div className="relative mt-8 flex h-[calc(100%-60px)] w-full items-center justify-center">
        <motion.div
          className="relative flex h-full w-full items-center justify-center"
          style={{ perspective: "1000px" }}
        >
          <AnimatePresence initial={false}>
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                className="absolute flex h-[100px] w-[120px] cursor-pointer flex-col items-center justify-center overflow-hidden rounded-lg text-white shadow-lg sm:h-[120px] sm:w-[150px] md:h-[140px] md:w-[180px]"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  boxShadow:
                    "0 2px 10px rgba(0, 0, 0, 0.4), inset 0 0 0 1px rgba(255, 255, 255, 0.02)",
                  transformOrigin: "center center",
                  backfaceVisibility: "hidden",
                }}
                initial="initial"
                animate={getItemVariants(index)}
                exit="initial"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onClick={() => setCurrentIndex(index)}
              >
                <div className="relative h-full w-full">
                  <Image
                    src={item.src}
                    alt={item.title || "Recent Work Highlight"}
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <button
          onClick={handlePrev}
          className="absolute left-0 z-30 rounded-full bg-black bg-opacity-20 p-1 text-white transition-colors hover:bg-opacity-75 focus:outline-none"
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 z-30 rounded-full bg-black bg-opacity-20 p-1 text-white transition-colors hover:bg-opacity-75 focus:outline-none"
        >
          &gt;
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.p
          key={currentIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="z-20 mt-4 text-center text-lg font-semibold text-white"
        >
          {items[currentIndex].title}
        </motion.p>
      </AnimatePresence>
    </BentoCard>
  );
}
