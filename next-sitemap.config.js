/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://nature-village.example.com',
  generateRobotsTxt: true,
  exclude: ['/api/*'],
};


