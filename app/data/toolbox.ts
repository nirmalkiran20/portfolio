type HardwareDataItem = {
  title: string;
  description: string;
  link: string;
};

type SoftwareDataItem = {
  title: string;
  imgSrc: string;
  link: string;
};

const softwareData: SoftwareDataItem[] = [
  {
    title: "Canva",
    imgSrc: "/canva.png",
    link: "https://www.canva.com/",
  },
  {
    title: "Hotjar",
    imgSrc: "/hotjar.png",
    link: "https://www.hotjar.com/",
  },
  {
    title: "HootSuite",
    imgSrc: "/hoots.png",
    link: "https://www.hootsuite.com/",
  },
  {
    title: "Taboola",
    imgSrc: "/taboola.png",
    link: "https://www.taboola.com/",
  },
  {
    title: "SEO Monitor",
    imgSrc: "/seomonitor.png",
    link: "https://www.seomonitor.com/",
  },
  {
    title: "HubSpot CRM",
    imgSrc: "/hubspotcrm.png",
    link: "https://www.hubspot.com/products/crm",
  },
  {
    title: "WordPress",
    imgSrc: "/wp.png",
    link: "https://wordpress.com/",
  },
  {
    title: "Moz",
    imgSrc: "/moz.png",
    link: "https://moz.com/",
  },
  {
    title: "ChatGPT",
    imgSrc: "/gpt.png",
    link: "https://openai.com/",
  },
  {
    title: "Gemini",
    imgSrc: "/gemini.jpg",
    link: "https://gemini.google.com/",
  },
  {
    title: "Chipp AI",
    imgSrc: "/chippi.png",
    link: "https://chipp.ai/",
  },
  {
    title: "Google Analytics 4",
    imgSrc: "/ga4.png",
    link: "https://developers.google.com/analytics",
  },
  {
    title: "Google Ads",
    imgSrc: "/gads.png",
    link: "https://business.google.com/in/google-ads/",
  },
  {
    title: "GMB",
    imgSrc: "/gmb.png",
    link: "https://business.google.com/in/business-profile/",
  },
  {
    title: "Meta Ads",
    imgSrc: "meta.png",
    link: "https://business.meta.com/?locale=en_IN",
  },
  {
    title: "GTM",
    imgSrc: "/gtm.png",
    link: "https://tagmanager.google.com/",
  },
];

const hardwareData: HardwareDataItem[] = [
 /* {
    title: "MacBook Pro (16 inch), 2021",
    description:
      "10-core CPU, 16-core GPU, 16-core Neural Engine, 32GB unified memory, 2TB SSD storage",
    link: "https://www.apple.com/shop/buy-mac/macbook-pro/16-inch",
  },
  {
    title: "Zoom65 Mechanical Keyboard",
    description:
      "With a navy blue finish, this 65% custom mechanical keyboard has Oil King linear switches topped with GMK Hennessey keycaps",
    link: "https://zoom65.com/",
  },
  {
    title: "GIGABYTE M27Q-X 27 Monitor",
    description: "A 240Hz 1440P KVM monitor that I use for work and gaming.",
    link: "https://www.gigabyte.com/Monitor/M27Q-X-rev-10#kf",
  },
  {
    title: "Autonomous ErgoChair 2",
    description:
      "A fully adjustable, completely supportive, and super breathable desk chair in a black and white finish. Expensive, but an investment that has been worth it.",
    link: "https://www.autonomous.ai/office-chairs/ergonomic-chair?option_code=ErgonomicChair-ErgoChairPro_ChairColor.BlackWhite",
  },
  {
    title: "Autonomous SmartDesk DIY Standing Desk",
    description:
      "A standing desk frame in a white finish. Topped with the IKEA Karlby tabletop, the desk measures almost 9’ wide, providing lots of space.",
    link: "https://www.autonomous.ai/standing-desks/diy-smart-desk-kit?option_code=DiySmartDeskKit-FrameSmartDesk2_DeskFrame.White,Model.Proframe",
  },
  {
    title: "Wave DX Dynamic Microphone",
    description:
      "A dynamic mic that captures detail like a condenser without the noise, Wave DX is a remarkable feat of audio engineering.",
    link: "https://www.elgato.com/us/en/p/wave-dx-dynamic-microphone",
  },
  {
    title: "Stream Deck +",
    description:
      "Iconic Stream Deck tech with customizable LCD keys, dials, and touch strip.",
    link: "https://www.elgato.com/us/en/p/stream-deck-plus-black",
  },
  {
    title: "Key Light MK.2",
    description:
      "Ultra-bright and dimmable. Space-saving and built to last. App-controlled and destined to evolve with you.",
    link: "https://www.elgato.com/us/en/p/key-light",
  },
  {
    title: "HD60 X Capture Card",
    description:
      "HD60 X lets you capture PS5 or Xbox gameplay like a pro. Stream or record high resolution content for audiences on any platform.",
    link: "https://www.elgato.com/us/en/p/game-capture-hd60-x",
  },
*/];

export { hardwareData, softwareData };
