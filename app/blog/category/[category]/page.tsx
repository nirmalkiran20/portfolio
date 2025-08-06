import { fetchAndSortBlogPosts } from "@/app/lib/utils";
import { BlogPostList } from "@/app/components/BlogPostList";
import { NewsletterSignUp } from "@/app/components/NewsletterSignUp";
import { Metadata } from 'next';
import { GridWrapper } from "@/app/components/GridWrapper";

// Define a type for the dynamic segment params
interface CategoryPageProps {
  params: {
    category: string;
  };
}

// Generate metadata dynamically based on the category
export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const categoryName = decodeURIComponent(params.category); // Decode URL-encoded category
  return {
    title: `${categoryName} Blog Posts | Kiran Nirmal`,
    description: `Explore blog posts about ${categoryName} written by Kiran Nirmal, a Digital Marketing Specialist.`,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const category = decodeURIComponent(params.category); // Decode URL-encoded category
  const allPosts = await fetchAndSortBlogPosts();
  const categoryPosts = allPosts.filter(
    (post) => post.categories && post.categories.includes(category)
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

      {/* NewsletterSignUp is now called without props, as it always shows the quote */}
      <NewsletterSignUp />
    </div>
  );
}
