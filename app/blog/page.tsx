import { fetchAndSortBlogPosts } from "@/app/lib/utils";
import { BlogPostList } from "@/app/components/BlogPostList";
import { NewsletterSignUp } from "@/app/components/NewsletterSignUp";
import { BlogFilter } from "@/app/components/BlogFilter";
import { GridWrapper } from "@/app/components/GridWrapper";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Kiran Nirmal',
  description: 'Read the latest insights and strategies in digital marketing from Kiran Nirmal, a Digital Marketing Specialist.',
};

export default async function BlogPage() {
  const allPosts = await fetchAndSortBlogPosts();
  return (
    <div className="relative mt-14">
      <GridWrapper className="space-y-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-around lg:px-24">
          <div className="order-2 mx-auto max-w-lg lg:order-1 lg:m-0 lg:max-w-3xl lg:pr-12">
            <h1 className="mx-auto max-w-2xl text-balance text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-5xl lg:text-left lg:text-6xl lg:leading-[64px]">
              The Blog of a Digital Marketer
            </h1>
            <p className="mt-4 text-center text-lg leading-8 text-text-secondary lg:text-left">
              Explore my thoughts and insights on SEO, content marketing, and other digital strategies.
            </p>
            <BlogFilter posts={allPosts} className="mt-6 flex justify-center lg:justify-start" />
          </div>
        </div>
      </GridWrapper>
      <BlogPostList posts={allPosts} />
      <NewsletterSignUp />
    </div>
  );
}
