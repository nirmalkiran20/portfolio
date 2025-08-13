// app/components/CommunityWallBento.tsx
"use client"; // Essential for Framer Motion

import Link from "next/link";
import { motion } from "framer-motion";
import { BentoCard } from "./BentoCard"; // Assuming BentoCard is in the same components folder
import { ComponentPropsWithoutRef } from "react"; // For props types

export function CommunityWallBento(props: ComponentPropsWithoutRef<"div">) {
  // Define the link for the entire card
  const recentWorkLink = "/project"; // Link to your recent work page (e.g., the ebook project)
  const videoPath = "/videos/background4.mp4"; // Make sure this video path is correct in your public/videos folder

  // Animation variants (reused from ConnectionsBento)
  const titleVariants = {
    initial: { opacity: 1, y: 0 },
    hover: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  const glassPanelVariants = {
    initial: { opacity: 0, scale: 0.8 },
    hover: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.1,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    hover: { opacity: 1, y: 0 },
  };

  return (
    <BentoCard
      colSpan={3} // Adjust as needed for your grid layout on the homepage
      rowSpan={4} // Adjust as needed
      height="h-[276px]" // Matching ChangelogBento's height for consistency if they are on the same row
      className="group relative overflow-hidden"
      {...props} // Pass through any additional props from the parent (like className)
    >
      {/* MP4 Video Background Layer */}
      <video
        className="absolute inset-0 z-0 w-full h-full object-cover"
        src={videoPath} // Your video path, e.g., /videos/background2.mp4
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        Your browser does not support the video tag.
      </video>

      {/* Semi-transparent Overlay for better readability over video */}
      <div className="absolute inset-0 z-10 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-opacity duration-300"></div>

      {/* Main interactive area, handles hover state for animations and is the clickable link */}
      <Link
        href={recentWorkLink}
        // Link handles the clickable area covering the entire card.
        // The motion.div inside will handle the visual layout and animations.
        className="absolute inset-0 z-20"
      >
        <motion.div
          className="flex flex-col justify-center items-center p-6 text-center w-full h-full"
          initial="initial"
          whileHover="hover"
        >
          {/* 'Coming Soon' title - visible initially, fades out on hover */}
          <motion.h2
            className="text-2xl font-extrabold mb-4 text-white absolute"
            style={{
              textShadow: '0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.6), 0 0 30px rgba(255,255,255,0.4)',
              zIndex: 30
            }}
            variants={titleVariants}
          >
            Coming Soon
          </motion.h2>

          {/* Liquid Glass Panel (appears on hover) */}
          <motion.div
            className="absolute flex flex-col justify-center items-center p-4 rounded-lg shadow-xl"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(255, 255, 255, 0.05)',
              zIndex: 25,
              top: '4rem',
              left: '4rem',
              right: '4rem',
              bottom: '4rem',
            }}
            variants={glassPanelVariants}
          >
            {/* Content inside the glass panel for "Coming Soon" */}
            <motion.div
              className="flex flex-col space-y-4"
            >
              <motion.p variants={itemVariants} className="text-white text-lg font-medium">
                Exciting new projects are in the pipeline!
              </motion.p>
              <motion.span variants={itemVariants} className="mt-2 inline-flex items-center text-sm font-medium text-indigo-200 hover:text-indigo-500 transition-colors">
                View My Existing Work
                <svg
                  className="relative ml-2.5 mt-px overflow-visible"
                  width="3"
                  height="6"
                  viewBox="0 0 3 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M0 0L3 3L0 6"></path>
                </svg>
              </motion.span>
            </motion.div>
          </motion.div>
        </motion.div>
      </Link>
    </BentoCard>
  );
}