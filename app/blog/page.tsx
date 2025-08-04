// app/blog/page.tsx
import {
  extractUniqueBlogCategories,
  fetchAndSortBlogPosts,
} from "app/lib/utils";
import { NewsletterSignUp } from "@/app/components/NewsletterSignUp";
import { BlogPostList } from "@/app/components/BlogPostList"; // We will modify this component to show cards
import { CategorySelect } from "@/app/components/CategorySelect";
// import { FeaturedBlogCard } from "@/app/components/FeaturedBlogCard"; // <-- We will likely not use this directly on the main blog page anymore
// import { GridWrapper } from "@/app/components/GridWrapper"; // <-- May not be needed if BlogPostList handles grid
// import clsx from "clsx"; // <-- Likely not needed after FeaturedBlogCard changes

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const allPublishedBlogPosts = fetchAndSortBlogPosts();
  // Ensure 'all' is always an option for categories
  const categories = [
    "all", // Add 'all' as the first option for filtering
    ...Array.from(extractUniqueBlogCategories(allPublishedBlogPosts)),
  ];

  const category = (await searchParams).category?.toLowerCase() || "all"; // Default to 'all'

  const displayedPosts =
    category === "all" // If category is 'all', show all posts
      ? allPublishedBlogPosts
      : allPublishedBlogPosts.filter((post) =>
          post.categories?.map((cat) => cat.toLowerCase()).includes(category),
        );

  // We are removing the explicit 'featuredPosts' section
  // All posts will now be displayed by BlogPostList in a card format, filtered by category.

  return (
    <div className="mt-14 space-y-16 md:mt-16">
      <title>Blog | Kiran Nirmal</title>
      {/* Keeping GridWrapper if it adds necessary padding/container to title */}
      {/* If it's just for title centering, you might move classes directly to h1 */}
      {/* You had GridWrapper around h1 before, I'm keeping it for consistency */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="mx-auto max-w-2xl text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-6xl md:leading-[64px]">
          {category && category !== "all"
            ? `Articles about ${category}`
            : "Insightful && helpful content curated for you."}
        </h1>
      </div>

      {/* Category Tabs (Mini Navigation) above the blog cards */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <CategorySelect categories={categories} currentCategory={category} />
      </div>

      {/* Blog Posts displayed as cards */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BlogPostList posts={displayedPosts} />
      </div>

      <NewsletterSignUp
        title={
          category && category !== "all"
            ? `Stay updated on ${category} articles`
            : "Stay updated"
        }
        description="Sign up to receive notifications about new blog posts, insights, and exclusive content directly in your inbox."
        buttonText="Get Notified"
      />
    </div>
  );
}