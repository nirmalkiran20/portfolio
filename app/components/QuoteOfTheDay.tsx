"use client";

import { GridWrapper } from "./GridWrapper";

export function QuoteOfTheDay() {
  const quotes = [
    {
      text: "Content is fire, social media is gasoline.",
      author: "Jay Baer",
    },
    {
      text: "Its much easier to double your business by doubling your conversion rate than by doubling your traffic.",
      author: "Jeff Eisenberg",
    },
    {
      text: "Stopping advertising to save money is like stopping your watch to save time.",
      author: "Henry Ford",
    },
    {
      text: "Marketing is no longer about the stuff you make, but about the stories you tell.",
      author: "Seth Godin",
    },
    {
      text: "Good marketing makes the company look smart. Great marketing makes the customer feel smart.",
      author: "Joe Chernov",
    },
  ];

  // Pick a new quote each day based on date
  const today = new Date();
  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) /
      (1000 * 60 * 60 * 24),
  );

  const quote = quotes[dayOfYear % quotes.length];

  return (
    <div className="relative pb-16">
      <GridWrapper>
        <div className="relative overflow-x-clip">
          <div className="absolute inset-0 -z-10 rounded-2xl blur-2xl" />

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/0 p-14 shadow-xl backdrop-blur-md md:p-[100px]">
            {/* Background Image */}
            <div
              className="absolute inset-0 -z-10 rounded-2xl bg-cover bg-center"
              style={{
                backgroundImage: "url('/quote.jpg')",
              }}
            />

            {/* Quote Content */}
            <div className="text-center">
              <h2 className="mb-2 text-2xl font-semibold text-white md:text-3xl">
                Quote of the Day
              </h2>
              <p className="mx-auto max-w-2xl text-xl italic text-white md:text-2xl">
                “{quote.text}”
              </p>
              <p className="mt-2 text-lg text-white/60">— {quote.author}</p>
            </div>
          </div>
        </div>
      </GridWrapper>
    </div>
  );
}
