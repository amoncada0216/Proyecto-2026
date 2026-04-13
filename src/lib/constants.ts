export const siteConfig = {
  name: "Antiblaze",
  legacyName: "Duralfoil",
} as const;

export const navLinks = [
  { href: "#home", id: "home", label: "home" },
  { href: "#about", id: "about", label: "about" },
  { href: "#product", id: "product", label: "product" },
  { href: "#contact", id: "contact", label: "contact" },
] as const;

export type NavLink = (typeof navLinks)[number];
