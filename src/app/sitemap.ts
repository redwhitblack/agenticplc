import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/thesis", "/portfolio", "/floor", "/governance", "/capital"];
  return routes.map((path) => ({
    url: `https://agenticplc.com${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));
}
