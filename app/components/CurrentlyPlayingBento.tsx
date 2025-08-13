// app/components/currentlyplayingbento.tsx
"use client"; // Essential for Framer Motion

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BentoCard } from "./BentoCard"; // Assuming BentoCard is in the same components folder

export function CurrentlyPlayingBento() {
  // IMPORTANT: Populate these titles with meaningful names for display below the carousel!
  const items = [
    { id: 1, title: "Semrush Analytics", src: "/semrush.png" }, // Added meaningful title
    { id: 2, title: "Google My Business", src: "/gmb.png" }, // Added meaningful title
    { id: 3, title: "Google Tag Manager", src: "/gtm.png" }, // Added meaningful title
    { id: 4, title: "Google AdSense", src: "/gadsense.png" }, // Added meaningful title
    { id: 5, title: "Google Keyword Planner", src: "/gkp.png" }, // Added meaningful title
    { id: 6, title: "Hootsuite Management", src: "/hoots.png" }, // Added meaningful title
    { id: 7, title: "Hotjar Heatmaps", src: "/hotjar.png" }, // Added meaningful title
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const totalItems = items.length;
  const displayRange = 2; // For example, 2 means center + 2 left + 2 right = 5 items visible if totalItems allows

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  // Variants for the items in the carousel, defining their appearance based on their position
  const getItemVariants = (itemIndex: number) => {
    // Calculate the 'normalized' difference, handling wrap-around for a continuous loop effect
    let diff = itemIndex - currentIndex;
    if (diff > totalItems / 2) diff -= totalItems;
    if (diff < -totalItems / 2) diff += totalItems;

    // Define properties based on the difference from the current (center) item
    if (diff === 0) {
      return {
        x: "0%",
        opacity: 1,
        scale: 1,
        rotateY: 0,
        zIndex: 10,
        filter: "blur(0px)",
      }; // Center item
    } else if (Math.abs(diff) <= displayRange) {
      // Items to the left/right of the center
      const offsetX = diff * (100 / (displayRange + 1)); // Adjust spacing between items
      const rotationY = diff * 15; // Angle of rotation (e.g., -15 for right, +15 for left)
      const scaleFactor = 1 - Math.abs(diff) * 0.15; // Scale down items further away
      const opacityFactor = 1 - Math.abs(diff) * 0.2; // Fade out items further away
      const blurFactor = Math.abs(diff) * 2; // Apply blur to side items

      return {
        x: `${offsetX}%`,
        opacity: Math.max(0.3, opacityFactor), // Ensure minimum opacity
        scale: Math.max(0.7, scaleFactor), // Ensure minimum scale
        rotateY: rotationY,
        zIndex: 5 - Math.abs(diff), // Items further back have lower z-index
        filter: `blur(${blurFactor}px)`, // Apply blur
      };
    } else {
      // Items that are completely out of visible range
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
    // Added p-4 to the BentoCard for overall internal padding, to make space for title below
    <BentoCard
      colSpan={3}
      rowSpan={4}
      height="h-[220px]"
      className="relative flex flex-col items-center justify-center overflow-hidden p-4"
    >
      {/* Card Title - Adjusted position and color */}
      <h2 className="text-medium text-gray absolute left-6 top-4 z-20 font-medium">
        Recent Work
      </h2>{" "}
      {/* Changed text-medium font-medium text-gray-90 to text-xl font-bold text-white */}
      {/* Main carousel area - adjusted height to leave space for the title below */}
      <div className="relative mt-10 flex h-[calc(100%-60px)] w-full items-center justify-center">
        <motion.div
          className="relative flex h-full w-full items-center justify-center"
          style={{ perspective: "1000px" }} // Essential for the 3D effect
        >
          <AnimatePresence initial={false}>
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                className={`absolute flex h-[100px] w-[120px] cursor-pointer flex-col items-center justify-center overflow-hidden rounded-lg p-2 text-white shadow-lg sm:h-[120px] sm:w-[150px] md:h-[140px] md:w-[180px]`}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  boxShadow:
                    "0 2px 10px rgba(0, 0, 0, 0.5), inset 0 0 0 1px rgba(255, 255, 255, 0.02)",
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
                    alt={item.title}
                    fill
                    className="rounded-lg object-cover"
                    priority={index === currentIndex}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Navigation Arrows */}
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
      {/* NEW: Display item title below the carousel for clarity */}
    </BentoCard>
  );
}
