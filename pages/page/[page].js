import { NextSeo } from 'next-seo';
import Post from '../../components/Post'
import Banner from "../../components/Banner";
import Sidebar from "../../components/Sidebar"
import { sortByDate, ImageUrl,pageCount } from '../../utils'

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
            {JSON.parse(posts).map(post => (
              <Post key={post.slug} post={post} />
            ))}
          </div>

          <Sidebar />

        </div>
      </div>
      <Pagnation totalPostCount={totalPostCount} />

    </>
  )
}

export async function getStaticPaths() {

 //  help of pick get require filter value
  // const posts = allPosts.map((post) => pick(post, ["title", "date", "slug", "description", "draft", "image", "tags", "categories"]));

 
  // count how many pages
  let totalPostCount = pageCount(allPosts.length)


// totalPostCount number convert into a array
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

//   help of pick get require filter value
  const posts = allPosts.map((post) => pick(post, ["title", "date", "slug", "description", "draft", "image", "tags", "categories","id"]));



// sort article base on  date
  let postSortByDate = posts.sort(sortByDate)


  // filter publish posts

  const publish = postSortByDate.filter(
    (post, i) => {
      return post.draft === false
    }
  )

// count how many pages
let totalPostCount = pageCount(allPosts.length)


// main Logic for dynamic pagination get post base on show_per_page in you app.

let totalPosts;


if(Number(params.page) == 1 ){
  totalPosts = publish.slice(show_per_page, show_per_page)
} 
if(Number(params.page) == 2 ){
 
  totalPosts = publish.slice(show_per_page, show_per_page*params.page)
} 

if (Number(params.page) >  2) {
                              
  totalPosts = publish.slice(show_per_page*params.page - show_per_page, show_per_page*params.page)
}


return {
    props: {
      posts: JSON.stringify(totalPosts) ,
      totalPostCount
    },
  }

}
