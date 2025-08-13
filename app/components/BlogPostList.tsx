{
  /*// E:\my-digital-marketing-portfolio\app\components\BlogPostList.tsx

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
              {/* The Link wrapper becomes the 'group' and 'relative' container 
              <Link
                href={`/blog/${post.slug}`}
                className="group relative block h-full"
              >
                {/* --- START: Background Shadow Layer --- 
                <div className="duration-400 absolute inset-0 z-0 transform rounded-lg bg-gray-400 transition-all ease-in-out group-hover:translate-x-2 group-hover:translate-y-2 group-hover:opacity-80 group-hover:shadow-md"></div>
                {/* --- END: Background Shadow Layer --- 

                {/* --- START: Main Blog Post Card --- 
                <article className="relative z-10 flex h-full transform flex-col overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 ease-in-out group-hover:-translate-y-2 group-hover:scale-[1.03] group-hover:shadow-xl">
                  {/* Image Section 
                  {post.imageName && (
                    <div className="relative w-full h-48 overflow-hidden">
                      <img
                        src={`/blog/${post.imageName}`}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  )}*

                  {/* Content Section 
                  <div className="flex flex-grow flex-col p-6">
                    {/* Categories 
                    {post.categories && post.categories.length > 0 && (
                      <div className="mb-2 flex flex-wrap gap-1">
                        {post.categories.map((cat, idx) => (
                          <span
                            key={idx}
                            className="rounded-full bg-indigo-100 px-2 py-0.5 text-xs font-medium text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Title 
                    <h2 className="mb-2 text-xl font-semibold leading-tight text-gray-900">
                      {post.title}
                    </h2>

                    {/* Summary 
                    <p className="mb-4 line-clamp-3 flex-grow text-base text-gray-600">
                      {post.summary}
                    </p>

                    {/* Published Date 
                    <p className="mt-auto text-sm text-gray-500">
                      {new Date(post.publishedAt).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </article>
                {/* --- END: Main Blog Post Card --- 
              </Link>
            </li>
          ))}
        </>
      ) : (
        <p className="col-span-full text-center text-gray-600">
          No blog posts found for this category.
        </p>
      )}
    </ul>
  );
}
*/
}
