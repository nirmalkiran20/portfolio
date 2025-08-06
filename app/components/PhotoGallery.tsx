"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Photo } from "./Photo"; // Photo component is now updated to use actual images

type Direction = "left" | "right";

type PhotoType = {
  id: number;
  order: number;
  x: string;
  y: string;
  zIndex: number;
  direction: Direction;
  src: string;
};

export const PhotoGallery = ({
  animationDelay = 0.5,
}: {
  animationDelay?: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredPhotoId, setHoveredPhotoId] = useState<number | null>(null);

  useEffect(() => {
    const visibilityTimer = setTimeout(() => {
      setIsVisible(true);
    }, animationDelay * 1000);

    const animationTimer = setTimeout(() => {
      setIsLoaded(true);
    }, (animationDelay + 0.4) * 1000);

    return () => {
      clearTimeout(visibilityTimer);
      clearTimeout(animationTimer);
    };
  }, [animationDelay]);

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const photoVariants = {
    hidden: (custom: any) => ({
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
    }),
    visible: (custom: any) => ({
      x: custom.x,
      y: custom.y,
      rotate: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 12,
        mass: 1,
        delay: custom.order * 0.15,
      },
    }),
  };

  const photos: PhotoType[] = [
    {
      id: 1,
      order: 0,
      x: "-350px",
      y: "15px",
      zIndex: 50,
      direction: "left",
      src: "/semrush.png",
    },
    {
      id: 2,
      order: 1,
      x: "-180px",
      y: "32px",
      zIndex: 40,
      direction: "left",
      src: "/ga4.png",
    },
    {
      id: 3,
      order: 2,
      x: "0px",
      y: "8px",
      zIndex: 30,
      direction: "right",
      src: "/hotjar.png",
    },
    {
      id: 4,
      order: 3,
      x: "180px",
      y: "32px",
      zIndex: 20,
      direction: "right",
      src: "/ahrefs.png",
    },
    {
      id: 5,
      order: 4,
      x: "350px",
      y: "15px",
      zIndex: 10,
      direction: "left",
      src: "/sfrog.png",
    },
  ];

  return (
    <div className="relative mb-8 hidden h-[350px] w-full items-center justify-center lg:flex ">
      <motion.div
        className="relative mx-auto flex w-full max-w-6xl justify-center "
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <motion.div
          className="relative flex w-full justify-center"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          <div className="relative h-[220px] w-[220px]">
            {[...photos].reverse().map((photo) => {
              const isHovered = hoveredPhotoId === photo.id;

              const dynamicZIndex =
                hoveredPhotoId === null
                  ? photo.zIndex
                  : isHovered
                  ? 100
                  : photo.zIndex - 5;

              return (
                <motion.div
                  key={photo.id}
                  className="absolute left-0 top-0"
                  style={{ zIndex: dynamicZIndex }}
                  variants={photoVariants}
                  custom={{
                    x: photo.x,
                    y: photo.y,
                    order: photo.order,
                  }}
                  onMouseEnter={() => setHoveredPhotoId(photo.id)}
                  onMouseLeave={() => setHoveredPhotoId(null)}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200, damping: 5 }}
                  >
                    <Photo
                      width={220}
                      height={220}
                      src={photo.src}
                      alt={`Image ${photo.id}`}
                      direction={photo.direction}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
