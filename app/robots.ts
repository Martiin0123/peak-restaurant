import { MetadataRoute } from 'next'

/**
 * Robots.txt Generator for PEAK Restaurant
 * 
 * This tells search engines and AI crawlers which pages they can access.
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://peak-restaurant.at'
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      {
        userAgent: 'GPTBot', // OpenAI's crawler
        allow: '/',
      },
      {
        userAgent: 'ChatGPT-User', // ChatGPT browser
        allow: '/',
      },
      {
        userAgent: 'anthropic-ai', // Claude's crawler
        allow: '/',
      },
      {
        userAgent: 'PerplexityBot', // Perplexity's crawler
        allow: '/',
      },
      {
        userAgent: 'Googlebot', // Google's crawler
        allow: '/',
      },
      {
        userAgent: 'Bingbot', // Bing's crawler
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
