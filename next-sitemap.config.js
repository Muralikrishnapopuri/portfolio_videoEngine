/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://krish-portfolio.vercel.app",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 5000,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};