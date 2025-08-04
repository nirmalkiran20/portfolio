// E:\my-digital-marketing-portfolio\app\components\StatsBento.tsx
"use client"; // Make sure this is a client component if it has interactive elements

import Link from "next/link"; // Import the Link component
import { BentoCard } from "./BentoCard";

export function StatsBento() {
  return (
    
    <Link href="/projects" passHref> {/* Wrapped the BentoCard in a Link */}
      <BentoCard height="h-[220px]" className="group cursor-pointer"> {/* Added cursor-pointer for visual feedback */}
        <h2 className="mb-2 font-medium text-left"> {/* Added text-center for better alignment */}
          Projects
        </h2>
        <div className="absolute inset-x-0 bottom-0 flex justify-center items-center h-full pt-20"> {/* Centered content */}
          <img
            src="/static/projects3.png" // Your project image path
            alt="My Project Showcase"
            width={240} // Adjust width as needed
            height={180} // Adjust height as needed, ensures aspect ratio if not 1:1
            className="rounded-lg shadow-md transition-transform duration-300 ease-in-out group-hover:scale-105" // Added hover effect
          />          
        </div>
        {/* Gradient overlay - keep this as it was */}
        <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-white via-transparent to-transparent"></div>
      </BentoCard>
    </Link>
  );
}
