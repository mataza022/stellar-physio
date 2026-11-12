import type { MetadataRoute } from 'next';
import { getServices } from '@/lib/services';
import { getConditions } from '@/lib/conditions';
import { getPosts } from '@/lib/posts';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://stellarphysio.com';

  // 1. Define your static routes
  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/conditions',
    '/branches',
    '/blog',
    '/contact',
    '/insurance-and-sha',
    '/book-appointment',
    '/team',
    '/faqs',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  try {
    // 2. Fetch dynamic routes from Firebase
    const [services, conditions, posts] = await Promise.all([
      getServices(),
      getConditions(),
      getPosts(),
    ]);

    // Map Services
    const serviceRoutes = services.map((service) => ({
      url: `${baseUrl}/services/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9, // High priority as these are money pages
    }));

    // Map Conditions
    const conditionRoutes = conditions.map((condition) => ({
      url: `${baseUrl}/conditions/${condition.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9, // High priority
    }));

    // Map Blog Posts
    const postRoutes = posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      // If your post object has an updatedAt or date field, use that instead of new Date()
      lastModified: new Date(), 
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    }));

    // 3. Combine and return everything
    return [
      ...staticRoutes,
      ...serviceRoutes,
      ...conditionRoutes,
      ...postRoutes,
    ];
  } catch (error) {
    console.error("Error generating dynamic sitemap:", error);
    // If Firebase fails, at least return the static routes
    return [...staticRoutes];
  }
}
