import { QuoteOfTheDay } from "@/app/components/QuoteOfTheDay";
import { HorizontalLine } from "@/app/components/HorizontalLine";
import { getTimeOfDayGreeting } from "app/lib/utils";
import React from "react";
import { CurrentlyPlayingBento } from "@/app/components/CurrentlyPlayingBento";
// import { ConnectionsBento } from "@/app/components/ConnectionsBento"; // Removed ConnectionsBento
import { ConnectWithMeBento } from "@/app/components/ConnectWithMeBento"; // Import the new component
import { ScrapbookBento } from "@/app/components/ScrapbookBento";
import { ShadowBox } from "@/app/components/ShadowBox";
import { Resume } from "app/components/Resume";
import { StatsBento } from "@/app/components/StatsBento";
import { CurrentlyReadingBento } from "@/app/components/CurrentlyReadingBento";
import { GridWrapper } from "@/app/components/GridWrapper";
import { AboutTrackPattern } from "@/app/components/AboutTrackPattern";
import { Photo } from "@/app/components/Photo"; // This component should also be updated to use Next.js Image
import { Metadata } from "next";
import Image from "next/image"; // Import Next.js Image component

// This is the correct way to add metadata in the Next.js App Router
export const metadata: Metadata = {
  title: "About | Kiran Nirmal",
  description: "Learn more about Kiran Nirmal, a Digital Marketing Specialist.",
};

export default function AboutPage() {
  const timeOfDayGreeting = getTimeOfDayGreeting();

  return (
    <div className="relative mt-14">
      <div className="relative space-y-10 md:space-y-16">
        {/* Title */}
        <GridWrapper className="space-y-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-around lg:px-24">
            <div className="order-2 mx-auto max-w-lg lg:order-1 lg:m-0 lg:max-w-3xl lg:pr-12">
              <div className="text-center text-sm font-medium text-indigo-600 lg:text-left">
                <span>{timeOfDayGreeting}</span>
              </div>
              <h1 className="mx-auto max-w-2xl text-balance text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-5xl lg:text-left lg:text-6xl lg:leading-[64px]">
                I&apos;m Kiran, a digital marketing specialist.
              </h1>
            </div>
            <div className="order-1 my-12 flex-shrink-0 lg:order-2 lg:my-0">
              <div className="relative mx-auto w-full max-w-[400px]">
                <div className="relative grid grid-cols-3">
                  {/* Photo components are assumed to be updated to use Next.js Image */}
                  <div className="relative z-20 -translate-y-0">
                    <Photo
                      width={140}
                      height={140}
                      src="/myphoto.png"
                      alt="Digital Marketing Concepts"
                      direction="left"
                    />
                  </div>
                  <div className="relative z-30">
                    <Photo
                      width={140}
                      height={140}
                      src="/gpt.png"
                      alt="AI Tools for Marketing"
                      direction="right"
                    />
                  </div>
                  <div className="relative z-20 -translate-y-0">
                    <Photo
                      width={140}
                      height={140}
                      src="/semrush.png"
                      alt="Marketing Strategy Development"
                      direction="left"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </GridWrapper>

        <span className="absolute left-1/2 top-40 -translate-y-1/2 translate-x-1/2">
          <HorizontalLine />
        </span>

        {/* About */}
        <div className="relative space-y-8 text-center">
          <div className="space-y-4">
            <GridWrapper>
              <div className="text-center text-sm font-medium text-indigo-600">
                <span>About</span>
              </div>
            </GridWrapper>
            <GridWrapper>
              <h2 className="mx-auto max-w-xl text-balance text-3xl font-medium leading-[40px] tracking-tighter text-text-primary">
                Here&apos;s a quick intro about me and what I love to do
              </h2>
            </GridWrapper>
          </div>
          <div className="relative h-fit w-full overflow-hidden">
            <div className="absolute left-0 top-0 w-full md:left-4 lg:left-[355px] xl:left-[455px]">
              <AboutTrackPattern />
            </div>

            {/* Section 1 */}
            <div className="grid grid-cols-1 gap-8 py-12 pr-12 lg:grid-cols-2 lg:items-center lg:justify-between lg:py-32 lg:pb-20 xl:py-32">
              <div className="flex flex-col items-center text-left lg:order-2 lg:items-start">
                <div className="mb-8 lg:hidden">
                  <div className="relative mx-auto w-fit">
                    <ShadowBox width={188} height={278}></ShadowBox>
                    {/* Replaced <img> with Image component and a placeholder */}
                    <Image
                      className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[-8deg] rounded-lg object-cover shadow"
                      src="/photo5.jpg"
                      alt="Kiran Nirmal profile"
                      width={180}
                      height={270}
                    />
                  </div>
                </div>
                <h2 className="mb-6 w-full text-balance text-3xl font-medium leading-[40px] tracking-tighter text-text-primary">
                  My Digital Journey Begins
                </h2>
                <p className="mb-6 text-base leading-7 text-text-secondary">
                  With nearly a decade in the dynamic world of digital
                  marketing, I&apos;ve had the incredible opportunity to witness
                  and adapt to its rapid evolution. My journey began with a deep
                  fascination for how businesses connect with their audiences
                  online. I quickly immersed myself in the core principles of
                  SEO, SEM, social media marketing, and content strategy, always
                  driven by the desire to create impactful and measurable
                  results. Early on, I even managed to significantly boost
                  organic traffic for a niche e-commerce site by over 150% in
                  six months &ndash; a foundational success that still fuels my
                  passion.
                </p>
              </div>
              <div className="hidden lg:order-1 lg:block">
                <div className="relative mx-auto w-fit">
                  <ShadowBox width={188} height={278}></ShadowBox>
                  {/* Replaced <img> with Image component and a placeholder */}
                  <Image
                    className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[-8deg] rounded-lg object-cover shadow"
                    src="/photo5.jpg"
                    alt="Kiran Nirmal's digital journey"
                    width={180}
                    height={270}
                  />
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="grid grid-cols-1 gap-8 py-24 lg:grid-cols-2 lg:items-center lg:justify-between lg:pl-12">
              <div className="flex flex-col items-center text-left lg:items-start">
                <div className="mb-8 lg:hidden">
                  <div className="relative mx-auto w-fit">
                    <ShadowBox width={188} height={278}></ShadowBox>
                    {/* Replaced <img> with Image component and a placeholder */}
                    <Image
                      className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[8deg] rounded-lg object-cover shadow"
                      src="/photo2.jpg"
                      alt="Strategic impact"
                      width={180}
                      height={270}
                    />
                  </div>
                </div>
                <h2 className="mb-6 w-full text-balance text-3xl font-medium leading-[40px] tracking-tighter text-text-primary">
                  Finding My Way to Strategic Impact
                </h2>
                <p className="mb-6 text-base leading-8 text-text-secondary">
                  While I initially explored various facets of digital
                  marketing, my true calling emerged in crafting comprehensive
                  digital strategies that not only drive awareness but also
                  convert. I honed my skills in data analytics, conversion rate
                  optimization (CRO), and integrated campaign management,
                  realizing that the most effective marketing isn&apos;t just
                  about individual channels, but about seamless, data-driven
                  orchestration. The shift from executing tactics to defining
                  overarching strategies became my game-changer, leading me to
                  roles where I could shape and lead high-performing marketing
                  initiatives.
                </p>
              </div>
              <div className="hidden lg:block">
                <div className="relative mx-auto w-fit">
                  <ShadowBox width={188} height={278}></ShadowBox>
                  {/* Replaced <img> with Image component and a placeholder */}
                  <Image
                    className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[8deg] rounded-lg object-cover shadow"
                    src="/photo4.jpg"
                    alt="Data-driven marketing"
                    width={180}
                    height={270}
                  />
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="grid grid-cols-1 gap-8 pr-12 lg:grid-cols-2 lg:items-center lg:justify-between xl:py-24">
              <div className="flex flex-col items-center text-left lg:order-2 lg:items-start">
                <div className="mb-8 lg:hidden">
                  <div className="relative mx-auto w-fit">
                    <ShadowBox width={188} height={278}></ShadowBox>
                    {/* Replaced <img> with Image component and a placeholder */}
                    <Image
                      className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[-8deg] rounded-lg object-cover shadow"
                      src="/photo3.jpg"
                      alt="Work life balance"
                      width={180}
                      height={270}
                    />
                  </div>
                </div>
                <h2 className="mb-6 w-full text-balance text-3xl font-medium leading-[40px] tracking-tighter text-text-primary">
                  Life Beyond Campaigns
                </h2>
                <p className="mb-6 text-base leading-7 text-text-secondary">
                  When I&apos;m not in analytics or campaign strategy, my life
                  revolves around passions outside of work. Staying curious and
                  continuously learning is key, whether exploring new marketing
                  tech or diving into thought-provoking discussions. My personal
                  life, filled with quality time with family and friends,
                  exploring new places, and finding everyday inspiration,
                  provides the balance that brings fresh perspective and renewed
                  energy to my work.
                </p>
              </div>
              <div className="hidden lg:block">
                <div className="relative mx-auto w-fit">
                  <ShadowBox width={188} height={278}></ShadowBox>
                  {/* Replaced <img> with Image component and a placeholder */}
                  <Image
                    className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[-8deg] rounded-lg object-cover shadow"
                    src="/photo1.jpg"
                    alt="Personal growth and learning"
                    width={180}
                    height={270}
                  />
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center lg:justify-between lg:py-32 lg:pl-12 xl:py-24">
              <div className="flex flex-col items-center text-left lg:items-start">
                <div className="mb-8 lg:hidden">
                  <div className="relative mx-auto w-fit">
                    <ShadowBox width={188} height={278}></ShadowBox>
                    {/* Replaced <img> with Image component and a placeholder */}
                    <Image
                      className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[8deg] rounded-lg object-cover shadow"
                      src="/photo2.jpg"
                      alt="Current professional focus"
                      width={180}
                      height={270}
                    />
                  </div>
                </div>
                <h2 className="mb-6 w-full text-balance text-3xl font-medium leading-[40px] tracking-tighter text-text-primary">
                  These Days
                </h2>
                <p className="mb-6 text-base leading-7 text-text-secondary">
                  Currently, I am leveraging my expertise to lead digital
                  marketing initiatives at NEXA an digital marketing agency
                  where we&apos;re building impactful campaigns and pushing the
                  boundaries of digital engagement. I&apos;m also a regular
                  contributor to industry discussions, often sharing insights on
                  emerging digital trends and performance marketing strategies.
                </p>
                <p className="mb-6 text-base leading-7 text-text-secondary">
                  When I&apos;m not strategizing, you&apos;ll find me
                  experimenting with new AI tools for marketing, contributing to
                  digital marketing forums, enjoying a challenging board game
                  with friends, or&ndash;best of all&ndash;unwinding with my
                  loved ones, usually with a good cup of coffee and a keen eye
                  on the latest industry news.
                </p>
              </div>
              <div className="hidden lg:block">
                <div className="relative mx-auto w-fit">
                  <ShadowBox width={188} height={278}></ShadowBox>
                  {/* Replaced <img> with Image component and a placeholder */}
                  <Image
                    className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[8deg] rounded-lg object-cover shadow"
                    src="/photo4.jpg"
                    alt="NEXA Digital Marketing Agency"
                    width={180}
                    height={270}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="relative space-y-8 text-center">
          <div className="space-y-4">
            <GridWrapper>
              <div className="text-center text-sm font-medium text-indigo-600">
                <span>Experience</span>
              </div>
            </GridWrapper>
            <GridWrapper>
              <h2 className="mx-auto max-w-lg text-balance text-3xl font-medium leading-[40px] tracking-tighter text-text-primary">
                My work history and achievements timeline.
              </h2>
            </GridWrapper>
          </div>
        </div>
        <div className="space-y-16">
          <GridWrapper>
            <Resume />
          </GridWrapper>
        </div>

        {/* More Section */}
        <section className="relative space-y-16">
          <div className="space-y-4">
            <GridWrapper>
              <div className="text-center text-sm font-medium text-indigo-600">
                <span>More</span>
              </div>
            </GridWrapper>

            <GridWrapper>
              <h2 className="mx-auto max-w-lg text-balance text-center text-3xl font-medium leading-10 tracking-tight text-text-primary">
                Here&apos;s what sets me apart and makes me unique
              </h2>
            </GridWrapper>
          </div>

          {/* About Grid */}
          <GridWrapper>
            <div className="grid grid-cols-1 gap-2 lg:grid-cols-12">
              <div className="lg:col-span-3 lg:row-span-6">
                <CurrentlyPlayingBento />
              </div>
              <div className="hidden lg:col-span-7 lg:row-span-5 lg:block">
                <ScrapbookBento />
              </div>
              <div className="hidden lg:col-span-2 lg:col-start-11 lg:row-span-10 lg:block lg:min-h-[50px]">
                <CurrentlyReadingBento />
              </div>
              {/* Replaced ConnectionsBento with ConnectWithMeBento */}
              <div className="lg:col-span-7 lg:row-span-8">
                <ConnectWithMeBento />
              </div>
              <div className="lg:col-span-3 lg:row-span-4">
                <StatsBento />
              </div>
            </div>
          </GridWrapper>
        </section>

        {/* Newsletter */}
        <QuoteOfTheDay />
      </div>
    </div>
  );
}
