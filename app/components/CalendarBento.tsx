"use client";

import React from "react";
import Image from "next/image";
import { BentoCard } from "./BentoCard";

export function EbookBento() {
  return (
    <BentoCard height="h-[250px]" linkTo="/ebook">
      <div className="group relative grid h-full grid-cols-12 gap-5">
        {/* Left Text */}
        <div className="col-span-5 text-balance md:col-span-3">
          <h2 className="mb-4 text-base font-medium">SEO Ebook</h2>
          <p className="mb-2 text-text-secondary">
            Unlock your digital presence practical insights you can apply right
            away.
          </p>
          <p className="mt-2 text-xs text-text-tertiary"></p>
        </div>

        {/* Right Image with same hover effect */}
        <div className="absolute left-[43%] top-7 transition-all duration-500 ease-out md:-right-14 md:left-auto md:group-hover:-right-12 md:group-hover:top-5">
          <div className="h-[720px] w-[510px] rounded-[20px] border border-border-primary p-3 transition-all duration-500 group-hover:-translate-y-2 group-hover:border-indigo-400">
            <div
              className="h-full rounded-xl bg-white/10 p-3 backdrop-blur-xl"
              style={{ boxShadow: "0px 2px 1.5px 0px #A5AEB852 inset" }}
            >
              <div className="relative h-full w-full">
                <Image
                  src="/seoebook.jpg"
                  alt="Cover of the SEO Ebook"
                  fill
                  className="rounded-lg object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </BentoCard>
  );
}
