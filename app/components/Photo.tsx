"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image"; // Import Next.js Image component

interface PhotoProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  direction: "left" | "right";
}

export function Photo({ src, alt, width, height, direction }: PhotoProps) {
  const photoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const photoElement = photoRef.current;
    if (!photoElement) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = photoElement.getBoundingClientRect();
      const x = e.clientX - (left + width / 2);
      const y = e.clientY - (top + height / 2);

      const rotateX = (y / height) * 20;
      const rotateY = (x / width) * 20;

      photoElement.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
    };

    const handleMouseLeave = () => {
      photoElement.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
    };

    photoElement.addEventListener("mousemove", handleMouseMove);
    photoElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      photoElement.removeEventListener("mousemove", handleMouseMove);
      photoElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [direction]);

  return (
    <div
      ref={photoRef}
      className={`relative rounded-lg shadow-lg transition-transform duration-300 ease-out ${
        direction === "left" ? "rotate-[-8deg]" : "rotate-[8deg]"
      }`}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="rounded-lg object-cover"
        priority
      />
    </div>
  );
}
