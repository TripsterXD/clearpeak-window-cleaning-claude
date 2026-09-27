import type { MetadataRoute } from "next";
import { navLinks, siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return navLinks.map((link) => ({
    url: link.href === "/" ? siteUrl : `${siteUrl}${link.href}`,
  }));
}
