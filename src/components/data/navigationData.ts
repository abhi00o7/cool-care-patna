export const NAVIGATION_DATA = {
  navigationItems: [{
    id: "home",
    label: "Home",
    href: "/#hero",  // ← Anchor on landing page
    ariaLabel: "Home"
  },
  {
    id: "services",
    label: "Services",
    href: "/#services",  // ← Full page route
    ariaLabel: "View services"
  },
  {
    id: "pricing",
    label: "Pricing",
    href: "/#pricing",  // ← Anchor on landing page
    ariaLabel: "View pricing"
  },
  {
    id: "faq",
    label: "FAQ",
    href: "/#faq",  // ← Full page route
    ariaLabel: "Frequently Asked Questions"
  },
  {
    id: "contact",
    label: "Contact",
    href: "/#contact",  // ← Full page route
    ariaLabel: "Contact us"
  }]
} as const
