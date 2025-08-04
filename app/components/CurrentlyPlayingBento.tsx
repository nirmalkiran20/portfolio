// app/components/currentlyplayingbento.tsx
"use client"; // Essential for Framer Motion

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BentoCard } from "./BentoCard"; // Assuming BentoCard is in the same components folder

export function CurrentlyPlayingBento() {
  // IMPORTANT: Populate these titles with meaningful names for display below the carousel!
  const items = [
    { id: 1, title: "Semrush Analytics", src: "/semrush.png" }, // Added meaningful title
    { id: 2, title: "Google My Business", src: "/gmb.png" },    // Added meaningful title
    { id: 3, title: "Google Tag Manager", src: "/gtm.png" },    // Added meaningful title
    { id: 4, title: "Google AdSense", src: "/gadsense.png" },    // Added meaningful title
    { id: 5, title: "Google Keyword Planner", src: "/gkp.png" }, // Added meaningful title
    { id: 6, title: "Hootsuite Management", src: "/hoots.png" }, // Added meaningful title
    { id: 7, title: "Hotjar Heatmaps", src: "/hotjar.png" },     // Added meaningful title
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
      return { x: "0%", opacity: 1, scale: 1, rotateY: 0, zIndex: 10, filter: "blur(0px)" }; // Center item
    } else if (Math.abs(diff) <= displayRange) {
      // Items to the left/right of the center
      const offsetX = diff * (100 / (displayRange + 1)); // Adjust spacing between items
      const rotationY = diff * 15; // Angle of rotation (e.g., -15 for right, +15 for left)
      const scaleFactor = 1 - (Math.abs(diff) * 0.15); // Scale down items further away
      const opacityFactor = 1 - (Math.abs(diff) * 0.2); // Fade out items further away
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
      return { x: "0%", opacity: 0, scale: 0, rotateY: 0, zIndex: 0, filter: "blur(5px)" };
    }
  };

  return (
    // Added p-4 to the BentoCard for overall internal padding, to make space for title below
    <BentoCard colSpan={3} rowSpan={4} height="h-[220px]" className="relative overflow-hidden flex flex-col items-center justify-center p-4">
      {/* Card Title - Adjusted position and color */}
      <h2 className="absolute top-4 left-6 text-medium font-medium text-gray z-20">Recent Work</h2> {/* Changed text-medium font-medium text-gray-90 to text-xl font-bold text-white */}

      {/* Main carousel area - adjusted height to leave space for the title below */}
      <div className="relative w-full h-[calc(100%-60px)] flex items-center justify-center mt-10">
        <motion.div
          className="relative flex justify-center items-center w-full h-full"
          style={{ perspective: "1000px" }} // Essential for the 3D effect
        >
          <AnimatePresence initial={false}>
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                // Tailwind classes for size and overall layout of the item box
                className="absolute w-[120px] h-[100px] sm:w-[150px] sm:h-[120px] md:w-[180px] md:h-[140px] rounded-lg flex flex-col items-center justify-center text-white p-2 cursor-pointer shadow-lg overflow-hidden" // Removed internal p-2
                style={{
                  // Liquid Glass Styles
                  backgroundColor: 'rgba(255, 255, 255, 0.05)', // Slightly transparent white
                  backdropFilter: 'blur(8px)', // Moderate blur effect
                  WebkitBackdropFilter: 'blur(8px)', // For Safari compatibility
                  border: '1px solid rgba(255, 255, 255, 0.1)', // Subtle white border
                  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.5), inset 0 0 0 1px rgba(255, 255, 255, 0.02)', // Consistent shadow (kept your 0.4 opacity)

                  transformOrigin: "center center",
                  backfaceVisibility: "hidden", // Prevents flickering on rotation in some browsers
                }}
                initial="initial"
                animate={getItemVariants(index)}
                exit="initial"
                // Reverted to a common "smooth" spring setting.
                // We can fine-tune this further if needed after layout changes.
                transition={{ type: "spring", stiffness: 300, damping: 30 }} // Reverted to 300/30 for smoother feel
                onClick={() => setCurrentIndex(index)} // Click to bring an item to the center
              >
                {/* Image now fills the entire item box (with overflow hidden and rounded corners) */}
                {/* Removed mb-1 as text is no longer here */}
                <img src={item.src} alt={item.title} className="w-full h-full object-cover rounded-lg" />
                {/* REMOVED THE <span> for item.title from here - THIS FIXES THE IMAGE OVERFLOW */}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-0 z-30 bg-black bg-opacity-20 p-1 rounded-full text-white hover:bg-opacity-75 transition-colors focus:outline-none"
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 z-30 bg-black bg-opacity-20 p-1 rounded-full text-white hover:bg-opacity-75 transition-colors focus:outline-none"
        >
          &gt;
        </button>
      </div>

      {/* NEW: Display item title below the carousel for clarity */}
      
    </BentoCard>
  );
}