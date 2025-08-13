"use client";

import { GridWrapper } from "./GridWrapper";
// Removed useState as it's no longer needed for newsletter form

// Removed NewsletterSignUpProps interface as no external props are expected
export function NewsletterSignUp() {
  const quote = {
    text: "Your time is limited, so don’t waste it living someone else’s life.",
    author: "Steve Jobs",
  };

  return (
    <div className="relative pb-16">
      <GridWrapper>
        <div className="relative overflow-x-clip">
          {/* Ambient glow or blur effect if needed */}
          <div className="absolute inset-0 -z-10 rounded-2xl blur-2xl" />

          {/* Card with background image and no white tint */}
          <div className="relative rounded-2xl p-14 md:p-[100px] backdrop-blur-md bg-white/0 border border-white/10 shadow-xl overflow-hidden">

            {/* Background Image */}
            <div
              className="absolute inset-0 -z-10 rounded-2xl bg-cover bg-center"
              style={{
                backgroundImage: "url('/quote.jpg')", // Ensure this image exists in your public folder
              }}
            />

            {/* Quote Content - Always rendered */}
            <div className="text-center">
              <h2 className="text-white text-2xl md:text-3xl font-semibold mb-2">Quote</h2>
              <p className="text-white italic text-xl md:text-2xl max-w-2xl mx-auto">“{quote.text}”</p>
              <p className="text-white/60 text-lg mt-2">— {quote.author}</p>
            </div>

          </div>
        </div>
      </GridWrapper>
    </div>
  );
}
