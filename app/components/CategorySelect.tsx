// E:\my-digital-marketing-portfolio\app\components\CategorySelect.tsx
{
  /*
import Link from "next/link";
import clsx from "clsx"; // Assuming clsx is already imported and used

interface CategorySelectProps {
  categories: string[];
  currentCategory?: string; // currentCategory can be undefined or "all" or specific category
}

export function CategorySelect({ categories, currentCategory }: CategorySelectProps) {
  // Ensure currentCategory is always a string and lowercased for comparison
  const activeCategory = (currentCategory || "all").toLowerCase();

  return (
    <div className="flex flex-wrap gap-2 mb-8 justify-center"> {/* Added justify-center for better alignment 
      {categories.map((category) => {
        const isAll = category.toLowerCase() === "all";
        const isActive = isAll ? (activeCategory === "all") : (activeCategory === category.toLowerCase());

        return (
          <Link
            key={category}
            href={isAll ? "/blog" : `/blog?category=${category.toLowerCase()}`}
            className={clsx(
              "px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200",
              {
                // Active state styling
                "bg-blue-600 text-white shadow-sm": isActive, // Example active style
                // Inactive state styling
                "bg-gray-200 text-gray-700 hover:bg-gray-300": !isActive, // Example inactive style
                // Adjust these colors/styles to match Braydon's existing design if different
                // For instance, you might have text-text-primary, bg-secondary, etc.
                // You will likely have something like below from Braydon's original code:
                // "text-text-secondary": !isActive,
                // "text-text-primary": isActive,
                // "border-b-2 border-transparent": !isActive,
                // "border-b-2 border-text-primary": isActive,
              }
            )}
            aria-current={isActive ? "page" : undefined} // Good for accessibility
          >
            {category === "all" ? "All Posts" : category} {/* Display "All Posts" for the "all" category 
          </Link>
        );
      })}
    </div>
  );
}*/
}
