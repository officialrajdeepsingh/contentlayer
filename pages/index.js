import { NextSeo } from 'next-seo';
import fs from 'fs'
import Post from '../components/Post'
import Banner from "../components/Banner";
import Sidebar from "../components/Sidebar"
import { sortByDate, slugify, ImageUrl } from '../utils'

import { allPosts } from "contentlayer/generated";
import { pick } from "@contentlayer/client";

export default function Home({ posts }) {

  return (
    <div>
      <NextSeo
        title="Welcome to my blog home page"
        description="Build nextjs blog website with Markdown, sitemap, serachbar, category, tag and SEO support"
        openGraph={{
          url: 'http://officialrajdeepsingh.dev',
          title: 'Welcome to my blog home page',
          description: 'Build nextjs blog website with Markdown, sitemap, serachbar, category, tag and SEO support',
          images: [
            {
              url: `${ImageUrl('banner.png')}`,
              width: 1224,
              height: 724,
              alt: 'banner',
              type: 'image/jpeg',
            },
          ],
          site_name: 'Rajdeep Singh',
        }}
      />
      <Banner />
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            {posts.map(post => (
              <Post key={post.slug} post={post} />
            ))}
          </div>

          <Sidebar />

        </div>
      </div>
    </div>
  )
}

// fetch all posts 
export async function getStaticProps() {

  const posts = allPosts.map((post) => pick(post, ["title", "date", "slug", "description", "summary", "draft", "image", "images", "tags", "categories"]));

 // filter publish posts
  const publish= posts.filter(
    (post, i) =>{
      return post.draft===false
    }
  )
 
  /*
    // serach functionalty 
    // convert data into string
  */
  
    const jsonString = JSON.stringify(publish)

    //  create serach.json file in root level
    fs.writeFileSync('./search.json', jsonString, err => {
      
      if (err) {
          console.log('Error writing file', err)
      } else {
          console.log('Successfully wrote file')
      }
  })

  return {
    props: {
      posts: publish.sort(sortByDate),
    },
  }

}
