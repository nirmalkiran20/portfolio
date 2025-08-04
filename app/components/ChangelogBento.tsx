// app/components/ChangelogBento.tsx
"use client"; // Essential for Framer Motion

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BentoCard } from "./BentoCard"; // Assuming BentoCard is in the same components folder
import { ComponentPropsWithoutRef } from "react"; // For props types

export function ChangelogBento(props: ComponentPropsWithoutRef<"div">) {
  // IMPORTANT: Populate these titles with meaningful names for display below the carousel!
  // These are the images for your "Recent Work Highlights" carousel
  const items = [
    { id: 1, title: "", src: "/semrush.png" },
    { id: 2, title: "", src: "/gmb.png" },
    { id: 3, title: "", src: "/gtm.png" },
    { id: 4, title: "", src: "/gadsense.png" },
    { id: 5, title: "", src: "/gkp.png" },
    { id: 6, title: "", src: "/hoots.png" },
    { id: 7, title: "", src: "/hotjar.png" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const totalItems = items.length;
  const displayRange = 2; // How many items are prominently visible (center + 2 left + 2 right)

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  // Variants for the items in the carousel, defining their appearance based on their position
  const getItemVariants = (itemIndex: number) => {
    let diff = itemIndex - currentIndex;
    if (diff > totalItems / 2) diff -= totalItems;
    if (diff < -totalItems / 2) diff += totalItems;

    if (diff === 0) {
      return { x: "0%", opacity: 1, scale: 1, rotateY: 0, zIndex: 10, filter: "blur(0px)" };
    } else if (Math.abs(diff) <= displayRange) {
      const offsetX = diff * (100 / (displayRange + 1));
      const rotationY = diff * 15;
      const scaleFactor = 1 - (Math.abs(diff) * 0.15);
      const opacityFactor = 1 - (Math.abs(diff) * 0.2);
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
      return { x: "0%", opacity: 0, scale: 0, rotateY: 0, zIndex: 0, filter: "blur(5px)" };
    }
  };

  return (
    // The BentoCard wrapper for the carousel
    // Added p-4 for internal padding and flex-col for proper layout of title, carousel, and bottom text
    <BentoCard
      colSpan={3} // Ensure this matches the slot on your homepage
      rowSpan={4} // Ensure this matches the slot on your homepage
      height="h-[276px]" // Set height as per your ChangelogBento's original height
      className="relative overflow-hidden flex flex-col items-center justify-center p-4" // Added p-4 and flex-col
      {...props} // Pass through any additional props from the parent
    >
      {/* Card Title at the top */}
      <h2 className="absolute top-4 left-6 text-mrdium font-medium text-gray z-20">Recent Work Highlights</h2>

      {/* Main carousel area - adjusted height to leave space for the title below */}
      <div className="relative w-full h-[calc(100%-60px)] flex items-center justify-center mt-8">
        <motion.div
          className="relative flex justify-center items-center w-full h-full"
          style={{ perspective: "1000px" }} // Essential for the 3D effect
        >
          <AnimatePresence initial={false}>
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                // Tailwind classes for size and overall layout of the item box
                className="absolute w-[120px] h-[100px] sm:w-[150px] sm:h-[120px] md:w-[180px] md:h-[140px] rounded-lg flex flex-col items-center justify-center text-white cursor-pointer shadow-lg overflow-hidden"
                style={{
                  // Liquid Glass Styles
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.4), inset 0 0 0 1px rgba(255, 255, 255, 0.02)',
                  transformOrigin: "center center",
                  backfaceVisibility: "hidden",
                }}
                initial="initial"
                animate={getItemVariants(index)}
                exit="initial"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onClick={() => setCurrentIndex(index)} // Click to bring an item to the center
              >
                {/* Image now fills the entire item box (with overflow hidden and rounded corners) */}
                <img src={item.src} alt={item.title} className="w-full h-full object-cover rounded-lg" />
                {/* Removed the <span> for item.title from here */}
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

      {/* Display item title below the carousel for clarity */}
      <AnimatePresence mode="wait">
        <motion.p
          key={currentIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="mt-4 text-center text-lg font-semibold text-white z-20"
        >
          {items[currentIndex].title}
        </motion.p>
      </AnimatePresence>
    </BentoCard>
  );
}