// app/speaking/page.tsx
// Keep only necessary imports for your Recent Work page
import { ShadowBox } from "@/app/components/ShadowBox";
import { Photo } from "@/app/components/Photo"; // Ensure this path is correct for your Photo component
import { GridWrapper } from "@/app/components/GridWrapper"; // Re-imported GridWrapper

// Define the structure for a single recent work item
interface RecentWorkItem {
  id: number;
  title: string;
  thumbnail: string; // Path to the image thumbnail
  url: string; // URL to the actual PPT, video, or detailed case study
  direction: 'left' | 'right'; // For the tilt effect: 'left' for right-tilt, 'right' for left-tilt
}

// Define the structure for each section of your recent work
interface WorkSection {
  heading: string;
  items: RecentWorkItem[];
}

// Your Recent Work Data, organized into sections
const sections: WorkSection[] = [
  {
    heading: "My Presentations (PPTs)",
    items: [
      { id: 1, title: "SEO Strategy: Foundations & Future", thumbnail: "/blogfolio-v3-released.png", url: "/documents/seo-strategy.pdf", direction: "right" }, // REPLACE
      { id: 2, title: "GTM Implementation Best Practices", thumbnail: "/blogfolio-v3-released.png", url: "/documents/gtm-implementation-guide.pdf", direction: "left" }, // REPLACE
      { id: 3, title: "Crafting Engaging Content Marketing", thumbnail: "/blogfolio-v3-released.png", url: "/documents/saas-content-plan.pdf", direction: "right" }, // REPLACE
      { id: 4, title: "Advanced Keyword Research Techniques", thumbnail: "/blogfolio-v3-released.png", url: "/documents/keyword-research.pdf", direction: "left" }, // REPLACE
      { id: 5, title: "On-Page SEO: Audit & Optimization", thumbnail: "/blogfolio-v3-released.png", url: "/documents/onpage-audit.pdf", direction: "right" }, // REPLACE
      { id: 6, title: "Effective Link Building Strategies", thumbnail: "/blogfolio-v3-released.png", url: "/documents/link-building.pdf", direction: "left" }, // REPLACE
    ],
  },
  {
    heading: "Video & Podcast Appearances",
    items: [
      { id: 7, title: "Growing a YouTube Channel Organically", thumbnail: "/blogfolio-v3-released.png", url: "https://www.youtube.com/your-channel-showcase", direction: "right" }, // REPLACE
      { id: 8, title: "Google Ads Optimization: Live Session", thumbnail: "/blogfolio-v3-released.png", url: "/case-studies/google-ads-optimization", direction: "left" }, // REPLACE
      { id: 9, title: "B2B Social Media Campaign Breakdown", thumbnail: "/blogfolio-v3-released.png", url: "/case-studies/b2b-social-media", direction: "right" }, // REPLACE
    ],
  },
  {
    heading: "Other Digital Marketing Projects",
    items: [
      { id: 10, title: "In-depth Competitor Analysis Report", thumbnail: "/blogfolio-v3-released.png", url: "/documents/competitor-analysis.pdf", direction: "left" }, // REPLACE
      { id: 11, title: "Email Marketing Funnel Case Study", thumbnail: "/blogfolio-v3-released.png", url: "/case-studies/email-campaign", direction: "right" }, // REPLACE
      { id: 12, title: "Technical SEO Site Audit Example", thumbnail: "/blogfolio-v3-released.png", url: "/documents/technical-seo.pdf", direction: "left" }, // REPLACE
    ],
  },
];

export default function RecentWorkPage() {
  return (
    <div className="relative">
      {/* Update the browser tab title for SEO */}
      <title>Recent Work | Kiran Nirmal</title>
      
      {/* Main page container with padding and original spacing */}
      {/* The background color will now be inherited from your global styles or layout.tsx */}
      <div className="relative space-y-16 py-16 px-4 md:px-10">
        <GridWrapper>
          {/* Main Heading for the page, using original styling */}
          <h1 className="max-w-3/5 mx-auto mt-16 text-balance text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-6xl md:leading-[64px]">
            My Recent Work & Portfolio
          </h1>
        </GridWrapper>

        {/* Render each section of work */}
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="max-w-6xl mx-auto mt-24"> {/* Added mt-24 for spacing between sections */}
            {/* Section Heading */}
            <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-text-primary">
              {section.heading}
            </h2>
            
            {/* Grid for items within the current section */}
            {/* Adjust grid-cols based on how many items you want per row for each section if needed */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 justify-items-center">
              {section.items.map((item) => (
                <div key={item.id} className="relative w-full max-w-[300px] h-[250px] mx-auto">
                  <a
                    href={item.url}
                    target="_blank" // Opens the link in a new tab
                    rel="noopener noreferrer" // Security best practice for target="_blank"
                    className="block w-full h-full rounded-lg overflow-hidden group" // 'group' class enables hover effects on child elements
                  >
                    {/* Shadow Box component for the layered effect */}
                    <ShadowBox width={300} height={250}></ShadowBox>

                    {/* Photo component, applying rotation and positioning based on 'direction' */}
                    <span className={`absolute top-1 ${item.direction === 'left' ? 'left-1 rotate-[8deg]' : 'left-1 rotate-[-8deg]'} transition-transform duration-300 group-hover:scale-105 group-hover:rotate-0`}>
                      <Photo
                        width={292} // Calculated to fit within the 300px ShadowBox with a small offset
                        height={242} // Calculated to fit within the 250px ShadowBox with a small offset
                        src={item.thumbnail}
                        alt={item.title}
                        direction={item.direction}
                      />
                    </span>

                      {/* Title Overlay with Liquid Glass Effect and Rounded Corners */}
                      <div className="absolute inset-x-2 bottom-2 p-3
                       bg-white/10
                        backdrop-blur-md
                        rounded-full
                        border border-white/20
                        text-white text-center text-sm font-medium
                        opacity-0 group-hover:opacity-100
                        transition-opacity duration-300 ease-in-out
                        z-10 shadow-md">
                    <span className="drop-shadow-sm">{item.title}</span>
                      </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}