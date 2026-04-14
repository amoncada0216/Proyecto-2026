export const siteConfig = {
  name: "Antiblaze",
  legacyName: "Duralfoil",
} as const;

export const navLinks = [
  { href: "#home", id: "home", label: "home" },
  { href: "#solution", id: "solution", label: "solution" },
  { href: "#applications", id: "applications", label: "applications" },
  { href: "#about", id: "about", label: "about" },
  { href: "#faq", id: "faq", label: "faq" },
  { href: "#contact", id: "contact", label: "contact" },
] as const;

export type NavLink = (typeof navLinks)[number];
