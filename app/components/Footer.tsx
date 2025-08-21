import Link from "next/link";
import { SocialPill } from "./SocialPill";
import { GridWrapper } from "./GridWrapper";
import { siteMetadata } from "app/data/siteMetadata";
import Image from "next/image"; // Import Next.js Image component

interface FooterLink {
  href: string;
  label: string;
  isExternal?: boolean;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: "General",
    links: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/ebook", label: "Ebook" },
    ],
  },
  {
    title: "My Work",
    links: [
      { href: "/recent-work", label: "Recent Work" },
      {
        href: siteMetadata.products || "#",
        label: "",
        isExternal: true,
      },
      { href: "/toolbox", label: "My Tools" },
    ],
  },
  {
    title: "Social",
    links: [
      { href: "https://www.linkedin.com/in/kiran-nirmal/", label: "LinkedIn" },
      { href: "https://github.com/nirmalkiran20", label: "GitHub" },
      { href: "https://medium.com/@KiranNirmal", label: "Medium" },
    ],
  },
];

export function Footer(): JSX.Element {
  const renderFooterLink = (link: FooterLink): JSX.Element => {
    if (link.isExternal) {
      return (
        <a href={link.href} target="_blank" rel="noopener noreferrer">
          {link.label}
        </a>
      );
    }
    return <Link href={link.href}>{link.label}</Link>;
  };

  return (
    <>
      <div className="relative max-w-7xl border-border-primary/50">
        <GridWrapper>
          <div className="max-w-6xl divide-y px-4 lg:mx-auto lg:flex lg:divide-x lg:px-4 xl:px-0">
            <div className="flex w-full py-6 text-sm">
              <div>
                <div className="flex-grow space-y-6">
                  <Link className="inline-block" href="/">
                    {/* Using Next.js Image component for logo.svg */}
                    <Image
                      className="h-11 w-11"
                      src="/logo.svg" // Assuming logo.svg is in your public folder
                      alt={`${siteMetadata.author}'s Logo`}
                      width={40}
                      height={40}
                      priority
                    />
                  </Link>
                  <p className="w-60 leading-5 text-gray-500">
                    {siteMetadata.description}
                  </p>
                </div>
                <p className="mt-6 text-gray-500">
                  © {new Date().getFullYear()} {siteMetadata.author}
                </p>
              </div>
              <div className="flex w-full items-end justify-end pr-16">
                <SocialPill />
              </div>
            </div>
            <div className="flex w-full flex-col items-end py-6 text-xs lg:pl-16">
              <div className="ld:space-x-0 flex w-full justify-between md:justify-start md:space-x-36 lg:justify-between">
                {footerSections.map((section) => (
                  <div key={section.title}>
                    <span className="mb-4 inline-block text-base font-medium text-text-primary">
                      {section.title}
                    </span>
                    <ul className="space-y-2 text-sm text-gray-500">
                      {section.links.map((link) => (
                        <li className="hover:text-text-primary" key={link.href}>
                          {renderFooterLink(link)}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </GridWrapper>
      </div>
      <div className="relative h-8 w-full [background-image:linear-gradient(45deg,theme(colors.border-primary)_12.50%,transparent_12.50%,transparent_50%,theme(colors.border-primary)_50%,theme(colors.border-primary)_62.50%,transparent_62.50%,transparent_100%)] [background-size:5px_5px]"></div>
    </>
  );
}
