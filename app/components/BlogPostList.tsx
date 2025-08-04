// E:\my-digital-marketing-portfolio\app\components\BlogPostList.tsx

import Link from "next/link";
// No ViewCounter import needed here anymore

interface BlogPost {
  slug: string;
  publishedAt: string;
  title: string;
  summary: string;
  categories: string[];
  imageName?: string;
}

interface BlogPostListProps {
  posts: BlogPost[];
}

export function BlogPostList({ posts }: BlogPostListProps) {
  return (
    <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {posts.length > 0 ? (
        <>
          {posts.map((post) => (
            <li key={post.slug}>
              {/* The Link wrapper becomes the 'group' and 'relative' container */}
              <Link href={`/blog/${post.slug}`} className="block h-full group relative">
                {/* --- START: Background Shadow Layer --- */}
                <div
                  className="absolute inset-0 bg-gray-400 rounded-lg z-0
                             transform transition-all duration-400 ease-in-out
                             group-hover:translate-y-2 group-hover:translate-x-2
                             group-hover:opacity-80
                             group-hover:shadow-md
                             "
                ></div>
                {/* --- END: Background Shadow Layer --- */}

                {/* --- START: Main Blog Post Card --- */}
                <article
                  className="relative bg-white rounded-lg shadow-lg
                             z-10 transform transition-all duration-300 ease-in-out
                             group-hover:-translate-y-2 group-hover:scale-[1.03]
                             group-hover:shadow-xl overflow-hidden h-full flex flex-col"
                >
                  {/* Image Section */}
                  {post.imageName && (
                    <div className="relative w-full h-48 overflow-hidden">
                      <img
                        src={`/blog/${post.imageName}`}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  )}

                  {/* Content Section */}
                  <div className="p-6 flex-grow flex flex-col">
                    {/* Categories */}
                    {post.categories && post.categories.length > 0 && (
                      <div className="mb-2 flex flex-wrap gap-1">
                        {post.categories.map((cat, idx) => (
                          <span
                            key={idx}
                            className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Title */}
                    <h2 className="text-xl font-semibold text-gray-900 mb-2 leading-tight">
                      {post.title}
                    </h2>

                    {/* Summary */}
                    <p className="text-gray-600 text-base mb-4 flex-grow line-clamp-3">
                      {post.summary}
                    </p>

                    {/* Published Date */}
                    <p className="text-sm text-gray-500 mt-auto">
                      {new Date(post.publishedAt).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </article>
                {/* --- END: Main Blog Post Card --- */}
              </Link>
            </li>
          ))}
        </>
      ) : (
        <p className="col-span-full text-center text-gray-600">No blog posts found for this category.</p>
      )}
    </ul>
  );
}