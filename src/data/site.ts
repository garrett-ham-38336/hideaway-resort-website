export const site = {
  name: "Hideaway Resort",
  tagline: "Lakefront on Table Rock Lake",
  description:
    "12 unique lakefront cabins on Table Rock Lake in Galena, Missouri. Private dock, swimming pool, and the peace of the Ozarks. Managed by Weekender Management.",
  url: "https://hideawayresort.com",
  phone: "+1 479-364-6756",
  phoneDisplay: "(479) 364-6756",
  email: "info@weekendermanagement.com",
  address: {
    street: "1715 Hideaway Road",
    city: "Galena",
    state: "MO",
    zip: "65656",
    full: "1715 Hideaway Road, Galena, MO 65656",
  },
  officeHours: "9 AM to 9 PM CST",
  management: "Weekender Management",
  social: {
    facebook: "https://facebook.com/weekendermanagement",
    twitter: "https://twitter.com/WeekenderMgmt",
    instagram: "https://instagram.com/weekendermanagement/",
    youtube:
      "https://youtube.com/channel/UCR1uYymKCvC_qTTfCADny4Q",
  },
  coordinates: {
    lat: 36.663382,
    lng: -93.499194,
  },
} as const;

export const navigation = [
  { label: "Cabins", href: "/cabins" },
  { label: "Amenities", href: "/amenities" },
  { label: "Location", href: "/location" },
  { label: "Gallery", href: "/gallery" },
  { label: "Policies", href: "/policies" },
  { label: "Contact", href: "/contact" },
] as const;
