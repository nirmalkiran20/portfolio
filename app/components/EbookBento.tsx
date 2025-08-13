import Link from "next/link";
import { BentoCard } from "./BentoCard";
import Image from "next/image";
import { ArrowRight, BookIcon } from "lucide-react";

export function EbookBento(): JSX.Element {
  const icon = <BookIcon className="h-4 w-4" />;
  const linkTo = "/ebook"; // This is the old path for projects, now for the Ebook
  const title = "My Published Ebook";
  const description =
    "Check out my guide to digital marketing strategies and tactics, available on Amazon.";

  return (
    <BentoCard className="group flex flex-col justify-between" linkTo={linkTo}>
      <div>
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="border-border-secondary bg-bg-secondary flex items-center justify-center rounded-full border p-1">
              {icon}
            </span>
            <span className="text-sm font-medium text-text-secondary">
              {title}
            </span>
          </div>
          <Link
            aria-label={`Link to ${title}`}
            href={linkTo}
            className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
          >
            <ArrowRight className="h-4 w-4 text-text-secondary" />
          </Link>
        </div>
        <div className="mt-4 flex h-full w-full items-center justify-center">
          <Image
            src="/seoebook.jpg"
            alt="the Ebook cover"
            width={150}
            height={200}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </BentoCard>
  );
}
