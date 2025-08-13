/** @type {import('next').NextConfig} */
const config = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "digital-marketing-lemon.vercel.app",
        port: "",
        pathname: "/**",
      },
    ],
    dangerouslyAllowSVG: true, // Keep this if you have local SVG images
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async redirects() {
    return [
      {
        source: "/archives/v1",
        destination: "https://wizardly-payne-b3707b.netlify.app/",
        permanent: true,
      },
      {
        source: "/archives/v2",
        destination: "https://braydoncoyer-2hvriu779-braydon-coyer.vercel.app/",
        permanent: true,
      },
      {
        source: "/archives/v3",
        destination:
          "https://braydoncoyer-dev-git-v3-braydon-coyer.vercel.app/",
        permanent: true,
      },
      {
        source: "/archives/v4",
        destination: "https://braydoncoyer.framer.website/",
        permanent: true,
      },
    ];
  },
};

export default config;
