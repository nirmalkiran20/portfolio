"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShadowBox } from "./ShadowBox";

interface AnimatedMobilePhotosProps {
  delay: number;
}

export function AnimatedMobilePhotos({ delay }: AnimatedMobilePhotosProps) {
  return (
    <div className="relative -mx-6 sm:-mx-12 lg:hidden">
      <div className="relative w-full overflow-hidden py-12">
        <div className="flex items-center justify-center space-x-6 sm:space-x-14">
          {[
            {
              src: "/sea1.jpg",
              alt: "sea c",
              delay: delay,
              rotate: "-5deg",
              top: "top-2",
            },
            {
              src: "/sea4.jpg",
              alt: "sea s",
              delay: delay + 0.1,
              rotate: "-8deg",
              top: "top-0",
            },
            {
              src: "/sea2.jpg",
              alt: "sea",
              delay: delay + 0.2,
              rotate: "10deg",
              top: "top-0",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="group relative aspect-[2/3] w-[40%] flex-shrink-0 sm:w-[150px] md:w-[163px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: item.delay }}
            >
              <ShadowBox width={163} height={245} />
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 40vw, 150px"
                className={`absolute left-0 ${item.top} ${item.rotate} rounded-lg object-cover shadow-lg shadow-black/20 transition-transform duration-500 ease-out group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-indigo-300/50`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
