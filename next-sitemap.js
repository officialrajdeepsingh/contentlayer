/** @type {import('next-sitemap').IConfig} */

import SITE_URL from "./config";

module.exports = {
    siteUrl:SITE_URL,
    generateRobotsTxt: true, // (optional)
     // Default transformation function
  }