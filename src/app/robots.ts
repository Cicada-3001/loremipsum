import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/api/'], // Standard exclusions
    },
    sitemap: 'https://kompasit.tech/sitemap.xml',
  };
}
