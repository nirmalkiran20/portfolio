import Link from "next/link";
import { BentoCard } from "./BentoCard";
import { ArrowRight, Briefcase } from "lucide-react";
import { siteMetadata } from "app/data/siteMetadata";

export function RecentWorkBento(): JSX.Element {
  const icon = <Briefcase className="h-4 w-4" />;
  const linkTo = "/speaking"; // This is the old path for speaking, now for Recent Work
  const title = "My Recent Work";
  const description =
    "A collection of my latest projects and case studies in digital marketing.";

  return (
    <BentoCard className="group flex flex-col justify-between" linkTo={linkTo}>
      <div>
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="flex items-center justify-center rounded-full border border-border-secondary bg-bg-secondary p-1">
              {icon}
            </span>
            <span className="text-sm font-medium text-text-secondary">
              {title}
            </span>
          </div>
          <Link
            aria-label={`Link to ${title}`}
            href={linkTo}
            className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
          >
            <ArrowRight className="h-4 w-4 text-text-secondary" />
          </Link>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-medium text-text-primary">{title}</h3>
          <p className="mt-2 text-text-secondary">{description}</p>
        </div>
      </div>
    </BentoCard>
  );
}
