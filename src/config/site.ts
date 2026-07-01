export const siteConfig = {
  name: "Maricof",
  email: "contact@maricof.online",
  navItems: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of service", href: "/terms-of-service" },
    { label: "Contact", href: "/contact" },
  ],
  footerColumns: [
    {
      title: "Company",
      links: [
        { label: "Home", href: "/" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms of Service", href: "/terms-of-service" },
      ],
    },
  ],
  assets: {
    heroBackground:
      "https://res.cloudinary.com/destej60y/image/upload/v1773012589/background_14_n2edjr.png",
    scrollIndicator:
      "https://res.cloudinary.com/destej60y/image/upload/v1770937287/scroll_apbrab.png",
    contactBackground:
      "https://res.cloudinary.com/destej60y/image/upload/v1770941675/background_4_whua18.png",
  },
} as const;
