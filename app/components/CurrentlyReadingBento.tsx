"use client";
import Link from "next/link";
import Image from "next/image";
//import { Changelog } from "@/.velite";
//import { fetchAndSortChangelogEntrees } from "app/lib/utils";
import { BentoCard } from "./BentoCard";
//import { motion } from "framer-motion";

export function CurrentlyReadingBento() {
  const amazonLink =
    "https://www.amazon.in/2024-Guide-Elevate-Digital-Presence-ebook/dp/B0CQJZL8NX";
  return (
    <Link href={amazonLink} target="_blank" rel="noopener noreferrer" passHref>
      <BentoCard height="h-full" className="group">
        <h2 className="mb-2 font-medium">My Published Ebook</h2>
        <p className="text-left text-sm text-text-secondary">
          SEO guide to elevate your digital presence!
        </p>
        <div className="relative h-full">
          <div className="absolute left-3 top-6 h-full origin-bottom-left transition-transform duration-300 ease-in-out group-hover:-rotate-3">
            <BookCover />
          </div>
        </div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-white via-transparent to-transparent"></div>
      </BentoCard>
    </Link>
  );
}

function BookCover() {
  return (
    <div className="relative aspect-video h-full w-60 overflow-hidden rounded bg-red-500">
      <div className="absolute left-5 h-full w-2 bg-slate-900/20 blur-sm"></div>
      <div className="relative h-full w-full">
        <Image
          src="/seoebook.jpg"
          alt="ebook cover"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
