import { QuoteOfTheDay } from "./components/QuoteOfTheDay";
import { ChangelogBento } from "./components/ChangelogBento";
import { CommunityWallBento } from "./components/CommunityWallBento";
import { ToolboxBento } from "./components/ToolboxBento";
import { ConnectWithMeBento } from "./components/ConnectWithMeBento"; // Import the new component
import { AnimatedText } from "./components/AnimatedText";
import { PhotoGallery } from "./components/PhotoGallery";
import { AboutMeBento } from "./components/AboutMeBento";
import { AnimatedMobilePhotos } from "./components/AnimatedMobilePhotos";
import { GridWrapper } from "./components/GridWrapper";
import { EbookBento } from "./components/EbookBento";

export default async function Home() {
  //const allPublishedBlogPosts = await fetchAndSortBlogPosts();
  //const allPublishedBlogPosts = await getAllPosts();
  //const featuredArticles = allPublishedBlogPosts.slice(0, 4);

  const PROFILE_DELAY = 0;
  const HEADING_DELAY = PROFILE_DELAY + 0.2;
  const PARAGRAPH_DELAY = HEADING_DELAY + 0.1;
  const PHOTOS_DELAY = PARAGRAPH_DELAY + 0.1;

  return (
    <section>
      {/*<AnimatedProfilePicture delay={PROFILE_DELAY} />*/}
      <div className="mt-6 space-y-10 md:mt-0 md:space-y-16">
        <section>
          <div className="relative text-balance">
            <GridWrapper>
              <AnimatedText
                as="h1"
                delay={HEADING_DELAY}
                className="mx-auto max-w-2xl text-center text-2xl font-medium leading-tight tracking-tighter text-text-primary md:text-3xl md:leading-[40px]"
              >
                Hey, I&apos;m Kiran! <br /> Welcome to my digital marketing lab!
              </AnimatedText>
            </GridWrapper>
            <GridWrapper>
              <div className="mt-4 text-center md:mt-8">
                <AnimatedText
                  as="p"
                  delay={PARAGRAPH_DELAY}
                  className="leading-8 text-text-secondary"
                >
                  I analyze behavior, report insights, and prioritize fixes that
                  remove friction,
                  <br /> improve flow, and grow a brands online presence.
                </AnimatedText>
              </div>
            </GridWrapper>
          </div>
          <div>
            {/* Desktop Photos */}
            <div className="relative hidden h-fit w-full items-center justify-center lg:flex">
              <PhotoGallery animationDelay={PHOTOS_DELAY} />
            </div>

            {/* Mobile Photos */}
            <AnimatedMobilePhotos delay={PHOTOS_DELAY} />
          </div>
        </section>

        {/* About Section */}
        <section className="relative space-y-10 md:space-y-16">
          {/* <AboutPattern /> */}
          <div className="space-y-4">
            <GridWrapper>
              <div className="text-center text-sm font-medium text-indigo-600">
                <span>About</span>
              </div>
            </GridWrapper>
            <GridWrapper>
              <h2 className="mx-auto max-w-lg text-balance text-center text-3xl font-medium leading-10 tracking-tight text-text-primary md:text-4xl">
                Here&apos;s what sets me apart and makes me unique
              </h2>
            </GridWrapper>
          </div>

          <GridWrapper>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-12 lg:grid-rows-[14]">
              <div className="col-span-1 md:col-span-5 lg:col-span-5 lg:row-span-6">
                <AboutMeBento linkTo="/about" />
              </div>

              {/* Replaced ConnectionsBento with ConnectWithMeBento */}
              <div className="md:col-span-12 lg:col-span-7 lg:row-span-8">
                <ConnectWithMeBento />
              </div>

              <div className="md:col-span-7 md:row-start-1 lg:col-span-5 lg:row-span-7">
                <ToolboxBento linkTo="/toolbox" />
              </div>

              <div className="md:col-span-12 lg:col-span-7 lg:row-span-5">
                <EbookBento />
              </div>
            </div>
          </GridWrapper>
        </section>

        {/* My Site Section */}
        <section className="relative space-y-10 md:space-y-16">
          {/* <MySitePattern /> */}
          <div className="space-y-4 text-balance">
            <GridWrapper>
              <div className="text-center text-sm font-medium text-indigo-600">
                <span>My Work</span>
              </div>
            </GridWrapper>
            <GridWrapper>
              <h2 className="text-center text-3xl font-medium leading-10 tracking-tighter text-text-primary md:mx-auto md:max-w-lg md:text-4xl">
                This is a collection of my recent and ongoing work.
              </h2>
            </GridWrapper>
          </div>

          <GridWrapper>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-2">
              <span className="col-span-1 h-[276px] sm:block md:hidden lg:block">
                <ChangelogBento />
              </span>
              {/*<SpeakingBento />*/}
              <CommunityWallBento />
            </div>
          </GridWrapper>
        </section>

        {/* Newsletter Section */}
        <section>
          <QuoteOfTheDay />
        </section>
      </div>
    </section>
  );
}
