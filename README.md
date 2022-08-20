Build static website with markdown, contentlayer,netlify cms and nextjs.
In nextjs we provide sitemap, SEO, pagination and Search support and deploy with netlify cms

In the New update, i fix search issue and add login functionalty in blog

## step
1. Download code `git clone https://github.com/officialrajdeepsingh/contentlayer.git`
2. Run the `npm install`
3. To start local develpoment server run ` npm run dev`

## Note 
change your ` localhost:3000 ` url in `./config.js` url and as well `show_per_page` post number on blog.


```javascript
// config.js

const SITE_URL= 'https://content-layer-netlifycms-vercel.vercel.app'

or

const SITE_URL= 'http://localhost:3000'

// const SITE_URL = process.env.SITE_URL  // it is not working properly

export const show_per_page = 10

```



### Aricle list for more learning
1. https://medium.com/nextjs/how-to-install-contentlayer-in-nextjs-4a08fb37c87d
2. https://medium.com/nextjs/how-to-build-the-static-blog-with-content-layer-markdown-and-nextjs-29f6ac93d06
3. https://medium.com/nextjs/how-to-create-pagination-with-a-contentlayer-in-next-js-d2d80bb0a3d5
4. https://medium.com/nextjs/how-to-set-up-netlify-cms-with-the-content-layer-and-nextjs-5da41c260933