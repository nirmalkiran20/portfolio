import { fetchAndSortBlogPosts } from "@/app/lib/utils";
import { BlogPostList } from "@/app/components/BlogPostList";
import { NewsletterSignUp } from "@/app/components/NewsletterSignUp";
import { Metadata } from "next";
import { GridWrapper } from "@/app/components/GridWrapper";

/**
 * The shape that must be supplied to every file that exports a page component
 * in the new app‑router (Next 15).  
 *   - `params`       – the dynamic segments of the route  
 *   - `searchParams` – optional, you can ignore it if you don’t need it
 */
export type CategoryPageParams = {
  category: string;
};

/**
 * Props that match `PageProps`
 */
export type CategoryPageProps = {
  params: CategoryPageParams;
  searchParams?: Record<string, string | string[]>;
};

/**
 * Metadata – same param shape, optional `searchParams`
 */
export async function generateMetadata({
  params,
}: {
  params: CategoryPageParams;
  searchParams?: Record<string, string | string[]>;
}): Promise<Metadata> {
  const categoryName = decodeURIComponent(params.category);
  return {
    title: `${categoryName} Blog Posts | Kiran Nirmal`,
    description: `Explore blog posts about ${categoryName} written by Kiran Nirmal, a Digital Marketing Specialist.`,
  };
}

/**
 * The page component – notice we don’t need to name it *CategoryPage* for anything,
 * just keep the right type.
 */
export default async function CategoryPage({
  params,
}: CategoryPageProps) {
  const category = decodeURIComponent(params.category);
  const allPosts = await fetchAndSortBlogPosts();
  const categoryPosts = allPosts.filter((post) =>
    post.categories?.includes(category)
  );

  return (
    <div className="relative mt-14">
      <GridWrapper className="space-y-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-around lg:px-24">
          <div className="order-2 mx-auto max-w-lg lg:order-1 lg:m-0 lg:max-w-3xl lg:pr-12">
            <div className="text-center text-sm font-medium text-indigo-600 lg:text-left">
              <span>Category: {category}</span>
            </div>
            <h1 className="mx-auto max-w-2xl text-balance text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-5xl lg:text-left lg:text-6xl lg:leading-[64px]">
              All Posts in {category}
            </h1>
            <p className="mt-4 text-center text-lg leading-8 text-text-secondary lg:text-left">
              Discover insights, tips, and strategies related to {category} in digital marketing.
            </p>
          </div>
        </div>
      </GridWrapper>

      <BlogPostList posts={categoryPosts} />

      <NewsletterSignUp />
    </div>
  );
}