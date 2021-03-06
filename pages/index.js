import { NextSeo } from 'next-seo';
import Post from '../components/Post'
import Banner from "../components/Banner";
import Sidebar from "../components/Sidebar"
import { sortByDate, slugify, ImageUrl,pageCount } from '../utils'
import { allPosts } from "contentlayer/generated";
import { pick } from "@contentlayer/client";
import Pagnation from '../components/Pagnation';
import { show_per_page } from "../config"

export default function Home({ posts,totalPostCount }) {

  return (
    <>
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
      <Pagnation pages={totalPostCount}/>

    </>
  )
}

// fetch all posts 
export async function getStaticProps() {


  const posts = allPosts.map((post) => pick(post, ["title", "date", "slug", "description", "summary", "draft", "image", "images", "tags", "categories","id"]));



  let postSortByDate = posts.sort(sortByDate)


 


  // filter publish posts
  const publish = postSortByDate.filter(
    (post, i) => {
      return post.draft === false
    }
  )

  // count how many pages

  let totalPostCount = pageCount(allPosts.length)

//  get only  ten post
  let totalPosts = publish.slice(0, show_per_page)



  return {
    props: {
      posts: totalPosts,
      totalPostCount
    },
  }

}
