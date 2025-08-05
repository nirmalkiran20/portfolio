"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BentoCard } from "./BentoCard";

export function ConnectionsBento() {
  const emailAddress = "nirmalkiran20@gmail.com";
  const linkedInUrl = "https://www.linkedin.com/in/kiran-nirmal/";

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
    <BentoCard colSpan={3} rowSpan={4} height="h-[270px]" className="group relative overflow-hidden">
      {/* MP4 Video Background Layer */}
      <video
        className="absolute inset-0 z-0 w-full h-full object-cover"
        src="/videos/background2.mp4" // Your video path
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

      {/* Main interactive area, handles hover state for animations */}
      <motion.div
        className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center z-20"
        initial="initial"
        whileHover="hover"
      >
        {/* 'Let's Connect' title - visible initially, fades out on hover */}
        <motion.h2
          className="text-2xl font-extrabold mb-4 text-white absolute"
          style={{
            textShadow: '0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.6), 0 0 30px rgba(255,255,255,0.4)',
            zIndex: 30
          }}
          variants={titleVariants}
        >
          Let&apos;s Connect
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
          {/* Content inside the glass panel (email/LinkedIn) */}
          <motion.div
            className="flex flex-col space-y-4"
          >
            <motion.div variants={itemVariants}>
              <Link
                href={`mailto:${emailAddress}`}
                className="flex items-center justify-center space-x-3 text-white hover:text-blue-300 transition-colors duration-200 p-2 rounded-md hover:bg-white/10" // Added p-2 for clickable area and hover background
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* NEW Gmail Icon SVG (common envelope with 'M' style) */}
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span className="text-lg font-semibold">{emailAddress}</span>
              </Link>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Link
                href={linkedInUrl}
                className="flex items-center justify-left space-x-3 text-white hover:text-blue-300 transition-colors duration-200 p-2 rounded-md hover:bg-white/10" // Added p-2 for clickable area and hover background
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.762-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                <span className="text-lg font-semibold">Connect on LinkedIn</span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </BentoCard>
  );
}
