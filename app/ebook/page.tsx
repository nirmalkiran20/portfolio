import { NewsletterSignUp } from "@/app/components/NewsletterSignUp";
import { GridWrapper } from "@/app/components/GridWrapper";
import { Metadata } from "next";
import Image from "next/image"; // Import Next.js Image component

export const metadata: Metadata = {
  title: "Ebook | Kiran Nirmal",
  description:
    "Download Kiran Nirmal's free SEO Ebook to elevate your digital presence.",
};

export default function EbookPage() {
  return (
    <div className="relative mt-14">
      <div className="relative space-y-10 md:space-y-16">
        <GridWrapper className="space-y-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-around lg:px-24">
            <div className="order-2 mx-auto max-w-lg lg:order-1 lg:m-0 lg:max-w-3xl lg:pr-12">
              <div className="text-center text-sm font-medium text-indigo-600 lg:text-left">
                <span>Ebook</span>
              </div>
              <h1 className="mx-auto max-w-2xl text-balance text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-5xl lg:text-left lg:text-6xl lg:leading-[64px]">
                The 2024 SEO Guide: Elevate Your Digital Presence
              </h1>
              <p className="mt-4 text-center text-lg leading-8 text-text-secondary lg:text-left">
                Unlock the secrets to dominating search engines and driving
                organic traffic with this comprehensive guide. Perfect for
                beginners and seasoned marketers alike.
              </p>
              <div className="mt-8 flex justify-center lg:justify-start">
                <a
                  href="/ebook/The_2024_SEO_Guide_Kiran_Nirmal.pdf" // Link to your PDF file in the public folder
                  download
                  className="inline-flex items-center rounded-full bg-indigo-600 px-6 py-3 text-lg font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-indigo-700"
                >
                  Download Ebook
                  <svg
                    className="ml-3 h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="order-1 my-12 flex-shrink-0 lg:order-2 lg:my-0">
              <div className="relative mx-auto w-full max-w-[400px]">
                <div className="relative">
                  {/* Replaced img with Image component */}
                  <Image
                    className="h-[400px] w-[270px] rounded-lg object-cover shadow-lg"
                    src="/seoebook.jpg" // Assuming this image is in public/static
                    alt="The 2024 SEO Guide Ebook Cover"
                    width={270}
                    height={400}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </GridWrapper>

        {/* What You'll Learn Section */}
        <section className="relative space-y-10 md:space-y-16">
          <div className="space-y-4">
            <GridWrapper>
              <div className="text-center text-sm font-medium text-indigo-600">
                <span>What&apos;s Inside</span> {/* Escaped apostrophe */}
              </div>
            </GridWrapper>
            <GridWrapper>
              <h2 className="mx-auto max-w-lg text-balance text-center text-3xl font-medium leading-10 tracking-tight text-text-primary md:text-4xl">
                Dive deep into essential SEO strategies
              </h2>
            </GridWrapper>
          </div>
          <GridWrapper>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Feature Cards - Example structure */}
              <div className="rounded-lg border border-border-primary p-6 shadow-md">
                <h3 className="mb-2 text-xl font-semibold text-text-primary">
                  Keyword Research
                </h3>
                <p className="text-text-secondary">
                  Master finding the right keywords to attract your target
                  audience.
                </p>
              </div>
              <div className="rounded-lg border border-border-primary p-6 shadow-md">
                <h3 className="mb-2 text-xl font-semibold text-text-primary">
                  On-Page SEO
                </h3>
                <p className="text-text-secondary">
                  Optimize your content and website structure for higher
                  rankings.
                </p>
              </div>
              <div className="rounded-lg border border-border-primary p-6 shadow-md">
                <h3 className="mb-2 text-xl font-semibold text-text-primary">
                  Link Building
                </h3>
                <p className="text-text-secondary">
                  Build high-quality backlinks to boost your domain authority.
                </p>
              </div>
              <div className="rounded-lg border border-border-primary p-6 shadow-md">
                <h3 className="mb-2 text-xl font-semibold text-text-primary">
                  Technical SEO
                </h3>
                <p className="text-text-secondary">
                  Ensure your site is crawlable and indexable by search engines.
                </p>
              </div>
              <div className="rounded-lg border border-border-primary p-6 shadow-md">
                <h3 className="mb-2 text-xl font-semibold text-text-primary">
                  Local SEO
                </h3>
                <p className="text-text-secondary">
                  Dominate local search results and attract nearby customers.
                </p>
              </div>
              <div className="rounded-lg border border-border-primary p-6 shadow-md">
                <h3 className="mb-2 text-xl font-semibold text-text-primary">
                  Analytics & Reporting
                </h3>
                <p className="text-text-secondary">
                  Track your performance and make data-driven decisions.
                </p>
              </div>
            </div>
          </GridWrapper>
        </section>

        {/* Newsletter Section */}
        <section>
          <NewsletterSignUp />
        </section>
      </div>
    </div>
  );
}
