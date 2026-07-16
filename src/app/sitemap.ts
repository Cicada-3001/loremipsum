import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://kompasit.tech';

  // Core static pages
  const staticPages = [
    '',
    '/contact-us',
    '/join-us',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Industry Pages
  const industries = [
    'agriculture', 'automotive', 'aviation', 'banking', 'entertainment',
    'finance', 'startups', 'healthcare', 'insurance', 'martech', 'oil-gas',
    'real-estate', 'retail', 'supply-chain', 'transportation-logistics'
  ].map((industry) => ({
    url: `${baseUrl}/industries/${industry}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Solutions Pages (examples based on previous work)
  const solutions = [
    'business-intelligence', 'erp', 'crm', 'pos', 'supply-chain-management', 'human-resources'
  ].map((solution) => ({
    url: `${baseUrl}/solutions/${solution}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Technologies Pages (examples based on previous work)
  const technologies = [
    'ai', 'react', 'node-js', 'python', 'java', 'aws', 'azure', 'docker', 'kubernetes'
  ].map((tech) => ({
    url: `${baseUrl}/technologies/${tech}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...industries, ...solutions, ...technologies];
}
