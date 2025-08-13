import { ResumeData } from "../lib/resume/types";
import { Timeline } from "./Timeline";

const resumeData: ResumeData = {
  experiences: [
    {
      company: "NEXA Digital Marketing",
      period: "Feb 2025 – Present",
      positions: [
        {
          title: "SEO Specialist",
          description: [
            "Handled 5 international projects as an individual contributor.",
            "Executed SEO strategies using GSC, GA4, SEMRush, and SEOmonitor.",
            "Delivered detailed reports and aligned digital efforts across marketing teams.",
            "Managed Google My Business accounts for global clients.",
          ],
        },
      ],
    },
    {
      company: "ARM Worldwide",
      period: "Oct 2024 – Jan 2025",
      positions: [
        {
          title: "Assistant Manager — SEO",
          description: [
            "Supervised a 5-person SEO team; managed ASO via Google Play Console.",
            "Performed A/B testing on app metadata and descriptions.",
            "Led competitive analysis and SEO planning across departments.",
          ],
        },
      ],
    },
    {
      company: "LPC Advisors",
      period: "Jan 2024 – Sep 2024",
      positions: [
        {
          title: "Assistant Manager — Digital Marketing",
          description: [
            "Led a 10-person digital marketing team across multiple campaigns.",
            "Created content strategies for blogs, social media, and ad creatives.",
            "Ran campaigns via Google Ads and Taboola to reach niche audiences.",
            "Used GA4, GTM, and SEMRush to monitor growth and optimize performance.",
          ],
        },
      ],
    },
    {
      company: "LPC Advisors",
      period: "Jan 2022 – Dec 2023",
      positions: [
        {
          title: "SEO Team Lead",
          description: [
            "Achieved 10% organic growth month-over-month.",
            "Ranked over 50 keywords in top SERPs using on-page and off-page SEO.",
            "Collaborated with devs and writers to fix technical SEO issues.",
          ],
        },
      ],
    },
    {
      company: "LPC Advisors",
      period: "Aug 2019 – Dec 2021",
      positions: [
        {
          title: "Digital Marketing Executive",
          description: [
            "Revamped website architecture and improved landing page UX.",
            "Managed 5+ SEO-aligned projects across industries.",
            "Boosted engagement via faster load times and clean design.",
          ],
        },
      ],
    },
    {
      company: "Vinitech Solution",
      period: "Jun 2018 – Dec 2018",
      positions: [
        {
          title: "SEO Executive",
          description: [
            "Optimized PHP-based websites and performed SEO audits.",
            "Led off-page strategy and improved site rankings through backlinks.",
          ],
        },
      ],
    },
    {
      company: "Aptus Solution",
      period: "Nov 2015 – Jun 2018",
      positions: [
        {
          title: "SEO Analyst",
          description: [
            "Led keyword research, link building, and sitemap optimization.",
            "Improved crawlability, page speed, and on-site content quality.",
          ],
        },
      ],
    },
  ],
  avatarUrl: "/me.jpg", // ← replace with your actual file name
};

export function Resume() {
  return (
    <div className="relative mx-auto max-w-6xl px-4">
      {/* Timeline stays aligned for full height */}
      <div className="absolute top-0 h-full w-8 md:left-[calc(28%_-_1rem)]">
        <Timeline avatarUrl={resumeData.avatarUrl} />
      </div>

      {/* Experience list */}
      <div className="divide-y divide-gray-100">
        {resumeData.experiences.map((experience, index) => (
          <div
            key={`${experience.company}-${experience.period}-${index}`}
            className="grid grid-cols-[1fr,5fr] gap-6 py-12 first:pt-0 last:pb-0 md:grid-cols-[2fr,4fr]"
          >
            {/* Company & Period */}
            <div className="hidden md:block">
              <h3 className="text-xl font-bold">{experience.company}</h3>
              <p className="text-sm text-gray-600">{experience.period}</p>
            </div>

            {/* Position Details */}
            <div className="space-y-6 md:pl-8">
              {experience.positions.map((position, i) => (
                <div key={`${experience.company}-${i}`} className="space-y-4">
                  <h4 className="text-lg font-semibold">{position.title}</h4>
                  <div className="space-y-3">
                    {position.description.map((desc, j) => (
                      <p key={j} className="break-words text-gray-600">
                        {desc}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
