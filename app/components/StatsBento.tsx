// Ensure your image is at /public/images/projects/showcase.png
// Update the src path below if you use a different filename.

"use client";

import Link from "next/link";
import Image from "next/image";
import { BentoCard } from "./BentoCard";

export function StatsBento() {
  return (
    <Link href="/toolbox" passHref>
      <BentoCard
        height="h-[220px]"
        className="group relative cursor-pointer overflow-hidden"
      >
        <h2 className="mb-2 text-left font-medium">My ToolBox</h2>
        <div className="absolute inset-x-0 bottom-0 flex h-full items-center justify-center pt-20">
          <div className="relative h-[180px] w-[240px]">
            <Image
              src="/project2.png" // Update path to your actual image
              alt="My ToolBox"
              fill
              className="rounded-lg object-cover shadow-md transition-transform duration-300 ease-in-out group-hover:scale-105"
              // Optionally, uncomment below for a blur-up placeholder
              // placeholder="blur"
              // blurDataURL="data:image/png;base64,..."
              priority // If this is above the fold
            />
          </div>
        </div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-white via-transparent to-transparent" />
      </BentoCard>
    </Link>
  );
}
