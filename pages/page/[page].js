import { NextSeo } from 'next-seo';
// import fs from 'fs'
import Post from '../../components/Post'
import Banner from "../../components/Banner";
import Sidebar from "../../components/Sidebar"
import { sortByDate, slugify, ImageUrl,pageCount } from '../../utils'

import { allPosts } from "contentlayer/generated";
import { pick } from "@contentlayer/client";
import Pagnation from '../../components/Pagnation';
import { show_per_page } from "../../config"

export default function Home({ posts,totalPostCount }) {

  return (
    <>
      <NextSeo
        title="paginations"
        description="pagnation for blog"
        openGraph={{
          url: 'http://officialrajdeepsingh.dev',
          title: 'paginations',
          description: 'pagnation for blog',
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
      <Pagnation pages={totalPostCount} />

    </>
  )
}

export async function getStaticPaths(props) {

 
  const posts = allPosts.map((post) => pick(post, ["title", "date", "slug", "description", "summary", "draft", "image", "images", "tags", "categories"]));

  let totalPostCount = pageCount(allPosts.length)

  let pageIntoArray = Array.from(Array(totalPostCount).keys())


  let paths=[]

  pageIntoArray.map(
    path =>   paths.push({ 
      params: { page: `${path + 1}` } 
    })
  )


  return {
    paths,
    fallback: false,
  }
  

}


// fetch all posts 
export async function getStaticProps({params}) {


  const posts = allPosts.map((post) => pick(post, ["title", "date", "slug", "description", "summary", "draft", "image", "images", "tags", "categories","id"]));




  // let postSortByDate = posts.sort(sortByDate)
  let postSortByDate = posts

 


  // filter publish posts
  const publish = postSortByDate

  // const publish = postSortByDate.filter(
  //   (post, i) => {
  //     return post.draft === false
  //   }
  // )


let totalPostCount = pageCount(allPosts.length)


let totalPosts;


if(Number(params.page) == 1 ){
  totalPosts = publish.slice(show_per_page, show_per_page)
} 
if(Number(params.page) == 2 ){
 
  totalPosts = publish.slice(show_per_page, show_per_page*params.page)
} 

if (Number(params.page) >  2) {
//                              
  totalPosts = publish.slice(show_per_page*params.page - show_per_page, show_per_page*params.page)
}


return {
    props: {
      posts: totalPosts,
      totalPostCount
    },
  }

}
