import Image from "next/image";
import { softwareData } from "../data/toolbox";
import { BentoCard } from "./BentoCard";

// Keeps your animation delay logic clear and reusable
const getDelayClass = (index: number): string => {
  if (index === 2) return "delay-0";
  if (index === 1 || index === 3) return "delay-100";
  return "delay-200";
};

export function ToolboxBento({ linkTo }: { linkTo?: string }) {
  const items = softwareData.slice(0, 5).map((item, index) => (
    <div key={item.title} className="group inline-block text-center">
      <div
        className={`rounded-[20px] border border-border-primary p-2 transition-all duration-500 group-hover:-translate-y-3 group-hover:border-indigo-400 ${getDelayClass(
          index,
        )}`}
        style={{
          width: index === 2 ? 130 : 110,
          height: index === 2 ? 130 : 110,
        }}
      >
        <div
          className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0]"
          style={{ boxShadow: "0px 2px 1.5px 0px #A5AEB852 inset" }}
        >
          <div className="relative h-10 w-10">
            <Image
              src={item.imgSrc}
              alt={item.title}
              fill
              className="object-contain"
              sizes="40px"
            />
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <BentoCard
      linkTo={linkTo}
      height="md:h-[304px] lg:h-[300px]"
      className="relative"
    >
      <div className="group-hover:from-bg-white absolute inset-y-0 left-0 z-20 w-1/5 bg-gradient-to-r from-bg-primary to-transparent"></div>
      <div className="group-hover:from-bg-white absolute inset-y-0 right-0 z-20 w-1/5 bg-gradient-to-l from-bg-primary to-transparent"></div>
      <div className="z-20 text-center">
        <h2 className="text-base font-medium">Toolbox</h2>
        <p className="mt-1 text-text-secondary">
          Check out my favorite tools and spots around the web.
        </p>
      </div>
      <div className="mt-10 flex items-center justify-center gap-3 transition-all duration-500 ease-in-out md:mt-12">
        {items}
      </div>
    </BentoCard>
  );
}
