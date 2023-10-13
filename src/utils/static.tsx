export const NAVIGATIONS = [
  { name: "home", to: "/" },
  {
    name: "about",
    to: "/about",
    sub: [{ name: "OSC 2022 impact report", to: "/" }],
  },
  {
    name: "services",
    to: "/services",
    sub: [
      { name: "garmet production", to: "/" },
      { name: "fashion business consulting", to: "/" },
    ],
  },
  { name: "shop", to: "shop" },
  { name: "contact us", to: "/contact-us" },
];
