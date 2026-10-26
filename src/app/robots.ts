import type { MetadataRoute } from 'next';

// Keep this unreviewed prospect site out of search indexes under the real business name.
export default function robots(): MetadataRoute.Robots {
  return { rules: [{ userAgent: '*', disallow: '/' }] };
}
