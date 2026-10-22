import { MetadataRoute } from "next";
import { getPosts } from "@/lib/posts";
import { getServices } from "@/lib/services";
import { getConditions } from "@/lib/conditions";

const BASE_URL = "https://stellarphysio.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts();
  const services = await getServices();
  const conditions = await getConditions();

  const staticRoutes = [
    "", "/about", "/services", "/conditions", "/branches", "/faqs", "/contact", "/blog", "/packages", "/patient-journey", "/book-appointment", "/branches/kenital-plaza", "/branches/karen-country-club", "/branches/parklands-sports-club", "/services/physio-shop",
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const postRoutes = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
    images: [`${BASE_URL}${service.heroImage}`],
  }));

  const conditionRoutes = conditions.map((condition) => ({
    url: `${BASE_URL}/conditions/${condition.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
    images: [`${BASE_URL}${condition.heroImage}`],
  }));

  return [...staticRoutes, ...postRoutes, ...serviceRoutes, ...conditionRoutes];
}
