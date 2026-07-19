import type { MetadataRoute } from 'next';

const siteUrl = 'https://wczheng.github.io';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/` },
    { url: `${siteUrl}/publications/` },
    { url: `${siteUrl}/awards/` },
    { url: `${siteUrl}/services/` },
  ];
}
