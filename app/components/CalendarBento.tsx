import React from "react";
import { BentoCard } from "./BentoCard";

export function CalendarBento() {
  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString("default", { month: "long" });
  const currentYear = currentDate.getFullYear();

  const bookingLink = `/'${currentYear}-${(
    currentDate.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}`;

  return (
    <BentoCard height="h-[220px]" linkTo={bookingLink}>
      <div className="group grid h-full grid-cols-12 gap-5">
        {/* Left Text */}
        <div className="col-span-5 text-balance md:col-span-5">
          <h2 className="mb-4 text-base font-medium">SEO Ebook</h2>
          <p className="mb-2 text-text-secondary">
            I&apos;d love to chat even if there&apos;s no agenda!
          </p>
          <p className="mt-2 text-xs text-text-tertiary">
            {currentMonth}, {currentYear}
          </p>
        </div>

        {/* Right Image with same size and hover effect */}
        <div className="absolute left-[43%] top-7 transition-all duration-500 ease-out md:-right-14 md:left-auto md:group-hover:-right-12 md:group-hover:top-5">
          <div
            className="h-[720px] w-[550px] rounded-[20px] border border-border-primary p-3 transition-all duration-500 group-hover:border-indigo-400 group-hover:-translate-y-2"
          >
            <div
              className="h-full rounded-xl bg-white/10 backdrop-blur-xl p-3"
              style={{ boxShadow: "0px 2 px 1.5px 0px #A5AEB852 inset" }}
            >
              <img
                src="/seoebook.jpg" // ⬅ Replace with your image path
                alt="seo ebook"
                className="h-full w-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </BentoCard>
  );
}
