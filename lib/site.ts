export const contact = {
  phone: "(403) 555-0148",
  phoneHref: "tel:+14035550148",
  email: "hello@clearpeakwindows.ca",
  emailHref: "mailto:hello@clearpeakwindows.ca",
  hours: "Monday to Saturday, 8:00 AM to 6:00 PM",
  serviceArea: "Calgary and surrounding communities",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export type ServiceIcon = "home" | "building" | "layers" | "grid";

export type Service = {
  id: string;
  title: string;
  summary: string;
  description: string;
  includes: string[];
  idealFor: string;
  image: string;
  imageAlt: string;
  icon: ServiceIcon;
};

export const services: Service[] = [
  {
    id: "residential",
    title: "Residential Window Cleaning",
    summary:
      "Give your home a brighter, cleaner look with professional window cleaning designed around your property and schedule.",
    description:
      "Dust, rain spots and fingerprints build up faster than most people expect, and cleaning every window yourself can take up an entire weekend. We handle the ladders, the hard-to-reach panes and the detail work so you can enjoy more natural light and a home that looks cared for from the curb.",
    includes: [
      "Careful cleaning of each window pane for a streak-free finish",
      "Frames wiped down as part of the service",
      "Interior, exterior or complete service options",
      "Scheduling that works around your week",
    ],
    idealFor: "Houses, townhomes, duplexes and other residential properties.",
    image: "/images/residential-window-cleaning.jpg",
    imageAlt: "Window cleaner wiping the inside of a large residential window",
    icon: "home",
  },
  {
    id: "commercial",
    title: "Commercial Window Cleaning",
    summary:
      "Keep storefronts, offices and commercial properties looking professional with dependable glass cleaning.",
    description:
      "Clean glass is part of a good first impression. We help local businesses keep storefronts, entrances and office windows looking sharp, with scheduling that respects your hours and keeps disruption to a minimum.",
    includes: [
      "Storefront and entrance glass",
      "Ground-level and easily accessible office windows",
      "One-time or recurring service",
      "Visits planned around your business hours where possible",
    ],
    idealFor:
      "Retail storefronts, small offices, clinics, studios and other light commercial properties.",
    image: "/images/commercial-window-cleaning.jpg",
    imageAlt: "Window cleaner using a squeegee on tall office windows",
    icon: "building",
  },
  {
    id: "interior-exterior",
    title: "Interior & Exterior Glass",
    summary:
      "Choose interior cleaning, exterior cleaning or a complete service for a consistent finish throughout the property.",
    description:
      "Some properties only need the outside glass refreshed after a dusty season, while others benefit from a full clean inside and out. You choose the level of service that fits your property, and we deliver the same careful finish either way.",
    includes: [
      "Exterior-only cleaning for weather, dust and water spots",
      "Interior-only cleaning for fingerprints and everyday smudges",
      "Complete inside-and-out service for the clearest view",
      "Care taken around furniture, flooring and window coverings",
    ],
    idealFor:
      "Homeowners and businesses who want flexibility in how much glass is cleaned.",
    image: "/images/window-cleaner-worker.jpg",
    imageAlt: "Window cleaner washing exterior glass, seen from inside the home",
    icon: "layers",
  },
  {
    id: "screens-tracks-sills",
    title: "Screens, Tracks & Sills",
    summary:
      "Take the clean beyond the glass with detailed screen, track and sill cleaning.",
    description:
      "Clean glass looks its best when the details around it are clean too. Screens collect dust and pollen, while tracks and sills gather dirt, debris and grime that can make windows harder to open. Adding these details gives your windows a more complete, finished look.",
    includes: [
      "Screens cleaned to remove dust and pollen",
      "Tracks cleared of dirt and debris",
      "Sills wiped down for a tidy finish",
      "Available as an add-on to any window cleaning service",
    ],
    idealFor:
      "Anyone who wants a thorough clean, especially after winter or before the warmer months.",
    image: "/images/window-detail.jpg",
    imageAlt: "Close-up of a squeegee clearing soapy water from a window",
    icon: "grid",
  },
];

export const serviceTypeOptions = [
  ...services.map((service) => service.title),
  "Not sure yet",
];

export const propertyTypeOptions = [
  "House",
  "Townhome or duplex",
  "Condo or apartment",
  "Storefront or retail",
  "Office or commercial building",
  "Other",
];
